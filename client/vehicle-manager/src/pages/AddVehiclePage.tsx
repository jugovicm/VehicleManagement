import React, { useState } from 'react';
import { Vehicle } from '../types';
import { addVehicle } from '../services/vehicleService';
import { useNavigate } from 'react-router-dom'; 

const AddVehiclePage: React.FC<{ onAddVehicle: (vehicle: Vehicle) => void }> = ({ onAddVehicle }) => {
  const [model, setModel] = useState('');
  const [firstRegistrationYear, setFirstRegistrationYear] = useState('');
  const [cubicCapacity, setCubicCapacity] = useState('');
  const [fuel, setFuel] = useState<'' | 'DIESEL' | 'PETROL' | 'HYBRID'>('');
  const [mileage, setMileage] = useState('');
  const [errors, setErrors] = useState({
    model: '',
    firstRegistrationYear: '',
    cubicCapacity: '',
    mileage: '',
    fuel: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let valid = true;
    const newErrors = { model: '', firstRegistrationYear: '', cubicCapacity: '', mileage: '', fuel: '' };

    if (!model) {
      newErrors.model = 'Model is required';
      valid = false;
    } else if (model.length > 40) {
      newErrors.model = 'Model cannot exceed 40 characters';
      valid = false;
    }

    if (firstRegistrationYear.length !== 4 || isNaN(Number(firstRegistrationYear))) {
      newErrors.firstRegistrationYear = 'First Registration Year must be a 4-digit number';
      valid = false;
    }

    if (cubicCapacity.length !== 4 || isNaN(Number(cubicCapacity))) {
      newErrors.cubicCapacity = 'Cubic Capacity must be a number and up to 4 digits';
      valid = false;
    }

    if (mileage.length > 7 || isNaN(Number(mileage))) {
      newErrors.mileage = 'Mileage must be a number and up to 7 digits';
      valid = false;
    }

    if (!fuel) {
      newErrors.fuel = 'Fuel type is required';
      valid = false;
    }

    if (!valid) {
      setErrors(newErrors);
      return;
    }

    const vehicle: Vehicle = {
      id: 0, //backend ID generation
      model,
      firstRegistrationYear,
      cubicCapacity: Number(cubicCapacity),
      fuel,
      mileage: Number(mileage),
    };

    try {
      const newVehicle = await addVehicle(vehicle);
      onAddVehicle(newVehicle);
      setModel('');
      setFirstRegistrationYear('');
      setCubicCapacity('');
      setFuel('DIESEL');
      setMileage('');
      setErrors({ model: '', firstRegistrationYear: '', cubicCapacity: '', mileage: '', fuel: '' });
      navigate(-1);
    } catch (err) {
      setError('Error adding vehicle. Please try again.');
    }
  };

  return (
    <div className="container">
      {/* Header */}
      <div className="page-header">
        <p>Header</p>
      </div>

      {/* Title and button */}
      <div className="title">
        <h2>New Vehicle</h2>
        <button className="submit-button" type="submit" onClick={handleSubmit}>Save</button>
      </div>

      {/* Error Messages */}
      {error && <div className="error-message">{error}</div>} {/* Global error */}
      
      <form onSubmit={handleSubmit} className="vehicle-form">
        {/* Model */}
        <div className="form-group">
          <input
            type="text"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            placeholder="Model"
            required
          />
          {errors.model && <div className="error">{errors.model}</div>} {/* Model error */}
        </div>
        {/* First Registration Year */}
        <div className="form-group">
          <input
            type="text"
            value={firstRegistrationYear}
            onChange={(e) => setFirstRegistrationYear(e.target.value.replace(/\D/g, ''))} // Prevent non-numeric characters
            placeholder="First Registration Year"
            maxLength={4}
            required
          />
          {errors.firstRegistrationYear && <div className="error">{errors.firstRegistrationYear}</div>} 
        </div>

        {/* Cubic Capacity */}
        <div className="form-group">
          <input
            type="text"
            value={cubicCapacity}
            onChange={(e) => setCubicCapacity(e.target.value.replace(/\D/g, ''))} // Prevent non-numeric characters
            placeholder="Cubic Capacity"
            maxLength={4}
            required
          />
          {errors.cubicCapacity && <div className="error">{errors.cubicCapacity}</div>}
        </div>

        {/* Fuel */}
        <div className="form-group">
          {/* Using input with list attribute for fuel type */}
          <input
            type="text"
            value={fuel}
            onChange={(e) => setFuel(e.target.value as '' | 'DIESEL' | 'PETROL' | 'HYBRID')}
            list="fuel-options"
            placeholder="Fuel"
            required
          />
          <datalist id="fuel-options">
            <option value="" disabled>Select Fuel Type</option> {/* Prazna opcija koja se ne može selektovati */}
            <option value="DIESEL" />
            <option value="PETROL" />
            <option value="HYBRID" />
          </datalist>
          {errors.fuel && <div className="error">{errors.fuel}</div>} {/* Fuel type error */}
        </div>

        {/* Mileage */}
        <div className="form-group">
          <input
            type="text"
            value={mileage}
            onChange={(e) => setMileage(e.target.value.replace(/\D/g, ''))} // Prevent non-numeric characters
            placeholder="Mileage"
            maxLength={7}
            required
          />
          {errors.mileage && <div className="error">{errors.mileage}</div>} 
        </div>
      </form>

      {/* Footer */}
      <footer className="page-footer">
        <p>Footer</p>
      </footer>
    </div>
  );
};

export default AddVehiclePage;
