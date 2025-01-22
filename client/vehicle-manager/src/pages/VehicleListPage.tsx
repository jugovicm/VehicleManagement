import React, { useState, useEffect } from 'react';
import { Vehicle } from '../types';
import VehicleTable from '../components/VehicleTable';
import { getVehicles, deleteVehicle } from '../services/vehicleService';
import { Link } from 'react-router-dom';

const VehicleListPage: React.FC = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const fetchedVehicles = await getVehicles();
        setVehicles(fetchedVehicles);
      } catch (error) {
        console.error('Error fetching vehicles:', error);
        setErrors(['Failed to load vehicles. Please try again later.']);
      }
    };

    fetchVehicles();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await deleteVehicle(id);
      setVehicles(vehicles.filter(vehicle => vehicle.id !== id));
    } catch (error) {
      console.error('Error deleting vehicle:', error);
      setErrors(['Failed to delete vehicle. Please try again later.']);
    }
  };

  return (
    <div className="vehicle-list-page">
      {/* Heading and button "+NEW" */}
      <div className="page-header">
        <h2>Vehicle Data</h2>
        <Link to="/add-vehicle">
          <button className="btn-new-vehicle">+ New</button>
        </Link>
      </div>

      {/* Error Messages */}
      {errors.length > 0 && (
        <div className="error-messages">
          {errors.map((error, index) => (
            <div key={index} className="error">{error}</div>
          ))}
        </div>
      )}

      {/* Vehicle Table */}
      <div className="vehicle-table-container">
        <VehicleTable vehicles={vehicles} onDelete={handleDelete} />
      </div>

      {/* Footer */}
      <footer className="page-footer">
        <p>© 2025 Vehicle Management</p>
      </footer>
    </div>
  );
};

export default VehicleListPage;
