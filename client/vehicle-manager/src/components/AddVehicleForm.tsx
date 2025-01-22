import React, { useState } from 'react';
import { Vehicle } from '../types';

interface AddVehicleFormProps {
  onAddVehicle: (vehicle: Vehicle) => void;
}

const AddVehicleForm: React.FC<AddVehicleFormProps> = ({ onAddVehicle }) => {
  const [model, setModel] = useState('');
  const [firstRegistrationYear, setFirstRegistrationYear] = useState<string>(''); 
  const [cubicCapacity, setCubicCapacity] = useState<number>(0);  
  const [fuel, setFuel] = useState<'DIESEL' | 'PETROL' | 'HYBRID'>('DIESEL'); 
  const [mileage, setMileage] = useState<number>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Validate that cubic capacity

    // Create object without id, sending to backend
    const newVehicle: Vehicle = {
      id: 0,  // id will be generated on backend, set it to 0
      model,
      firstRegistrationYear,  
      cubicCapacity,  
      fuel,  
      mileage,
    };

    // Add vehicle fun
    onAddVehicle(newVehicle);

    // Clean form after saving vehicle
    setModel('');
    setFirstRegistrationYear('');
    setCubicCapacity(0);
    setFuel('DIESEL');
    setMileage(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Model:</label>
        <input
          type="text"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          maxLength={40}
          required
        />
      </div>
      <div>
        <label>First Registration Year:</label>
        <input
          type="text"
          value={firstRegistrationYear}
          onChange={(e) => setFirstRegistrationYear(e.target.value)}
          maxLength={4}  // Max length 4 characters (request from specification)
          required
        />
      </div>
      <div>
        <label>Cubic Capacity:</label>
        <input
          type="number"
          value={cubicCapacity}
          onChange={(e) => setCubicCapacity(Number(e.target.value))}
          min={1} // Min length = 1, because cubic capacity != 0 (not requested in specification)
          max={9999}  // Max length 4 characters (request from specification)
          required
        />
      </div>
      <div>
        <label>Fuel Type:</label>
        <select
          value={fuel}
          onChange={(e) => setFuel(e.target.value as 'DIESEL' | 'PETROL' | 'HYBRID')}
          required
        >
          <option value="DIESEL">DIESEL</option>
          <option value="PETROL">PETROL</option>
          <option value="HYBRID">HYBRID</option>
        </select>
      </div>
      <div>
        <label>Mileage:</label>
        <input
          type="number"
          value={mileage}
          onChange={(e) => setMileage(Number(e.target.value))}
          max={9999999}  // Max length 7 characters (request from specification)
          required
        />
      </div>
      <button type="submit">Add Vehicle</button>
    </form>
  );
};

export default AddVehicleForm;

