import React, { useState } from 'react';
import { Vehicle } from '../types';
import { addVehicle } from '../services/vehicleService';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from './ErrorMessage';
import '../styles.css';

const VehicleForm: React.FC<{ onAddVehicle: (vehicle: Vehicle) => void }> = ({ onAddVehicle }) => {
  const [model, setModel] = useState('');
  const [firstRegistrationYear, setFirstRegistrationYear] = useState('');
  const [cubicCapacity, setCubicCapacity] = useState('');
  const [fuel, setFuel] = useState<'' | 'DIESEL' | 'PETROL' | 'HYBRID'>('');
  const [mileage, setMileage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!model || !firstRegistrationYear || !cubicCapacity || !fuel || !mileage) {
      setError('All fields are required.');
      return;
    }

    const vehicle: Vehicle = {
      id: 0, 
      model,
      firstRegistrationYear,
      cubicCapacity: Number(cubicCapacity),
      fuel,
      mileage: Number(mileage),
    };

    try {
      const newVehicle = await addVehicle(vehicle);
      onAddVehicle(newVehicle);
      navigate(-1);
    } catch {
      setError('Error adding vehicle. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="vehicle-form">
      <ErrorMessage message={error} />

      <div className="form-group">
        <input type="text" value={model} onChange={(e) => setModel(e.target.value)} placeholder="Model" required />
      </div>

      <div className="form-group">
        <input type="text" value={firstRegistrationYear} onChange={(e) => setFirstRegistrationYear(e.target.value.replace(/\D/g, ''))} placeholder="First Registration Year" maxLength={4} required />
      </div>

      <div className="form-group">
        <input type="text" value={cubicCapacity} onChange={(e) => setCubicCapacity(e.target.value.replace(/\D/g, ''))} placeholder="Cubic Capacity" maxLength={4} required />
      </div>

      <div className="form-group">
        <select value={fuel} onChange={(e) => setFuel(e.target.value as 'DIESEL' | 'PETROL' | 'HYBRID')} required>
          <option value="" disabled>Select Fuel Type</option>
          <option value="DIESEL">Diesel</option>
          <option value="PETROL">Petrol</option>
          <option value="HYBRID">Hybrid</option>
        </select>
      </div>

      <div className="form-group">
        <input type="text" value={mileage} onChange={(e) => setMileage(e.target.value.replace(/\D/g, ''))} placeholder="Mileage" maxLength={7} required />
      </div>

      <button className="submit-button" type="submit">Save</button>
    </form>
  );
};

export default VehicleForm;
