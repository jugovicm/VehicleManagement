import React, { useState, useEffect } from 'react';
import { Vehicle } from './types';
import VehicleTable from './components/VehicleTable';
import AddVehicleForm from './components/AddVehicleForm';
import { getVehicles, addVehicle, deleteVehicle } from './services/vehicleService';

const App: React.FC = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const vehiclesData = await getVehicles();
        setVehicles(vehiclesData);
      } catch (error) {
        console.error('Error fetching vehicles:', error);
      }
    };

    fetchVehicles();
  }, []);

  const handleAddVehicle = async (vehicle: Vehicle) => {
    try {
      const addedVehicle = await addVehicle(vehicle);
      setVehicles([...vehicles, addedVehicle]);
    } catch (error) {
      console.error('Error adding vehicle:', error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteVehicle(id);
      setVehicles(vehicles.filter((vehicle) => vehicle.id !== id));
    } catch (error) {
      console.error('Error deleting vehicle:', error);
    }
  };

  return (
    <div>
      <h1>Vehicle Management</h1>
      <AddVehicleForm onAddVehicle={handleAddVehicle} />
      <VehicleTable vehicles={vehicles} onDelete={handleDelete} />
    </div>
  );
};

export default App;
