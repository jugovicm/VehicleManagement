import React from 'react';
import { Vehicle } from '../types'; 

interface VehicleTableProps {
  vehicles: Vehicle[];
  onDelete: (id: number) => void;  // Delete object (id)
}

const VehicleTable: React.FC<VehicleTableProps> = ({ vehicles, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Model</th>
          <th>First Registration Year</th>
          <th>Cubic Capacity</th>
          <th>Fuel</th>
          <th>Mileage</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {vehicles.map((vehicle) => (
          <tr key={vehicle.id}>
            <td>{vehicle.model}</td>
            <td>{vehicle.firstRegistrationYear}</td>
            <td>{vehicle.cubicCapacity}</td>
            <td>{vehicle.fuel}</td>
            <td>{vehicle.mileage}</td>
            <td>
              <button onClick={() => onDelete(vehicle.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default VehicleTable;
