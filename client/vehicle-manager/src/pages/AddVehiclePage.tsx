import React, { useState } from 'react';
import { Vehicle } from '../types';
import { addVehicle } from '../services/vehicleService';

const AddVehiclePage: React.FC<{ onAddVehicle: (vehicle: Vehicle) => void }> = ({ onAddVehicle }) => {
  const [model, setModel] = useState('');
  const [firstRegistrationYear, setFirstRegistrationYear] = useState('');
  const [cubicCapacity, setCubicCapacity] = useState(0);
  const [fuel, setFuel] = useState<'DIESEL' | 'PETROL' | 'HYBRID'>('DIESEL');
  const [mileage, setMileage] = useState(0);
  const [errors, setErrors] = useState({
    model: '',
    firstRegistrationYear: '',
    cubicCapacity: '',
    mileage: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let valid = true;
    const newErrors = { model: '', firstRegistrationYear: '', cubicCapacity: '', mileage: '' };

    if (!model) {
        newErrors.model = 'Model is required';
        valid = false;
      } else if (model.length > 40) {
        newErrors.model = 'Model cannot exceed 40 characters';
        valid = false;
      }

    if (Number(firstRegistrationYear) < 1000 || Number(firstRegistrationYear) > 9999) { //better solution is firstRegistrationYear.length != 4, but I think we can set smaller radius (ex. 1970 - 2040)
      newErrors.firstRegistrationYear = 'First Registration Year must be number between 1000 and 9999';
      valid = false;
    }

    if (cubicCapacity < 1000 || cubicCapacity > 9999) {
      newErrors.cubicCapacity = 'Cubic Capacity must be number between 1000 and 9999';
      valid = false;
    }

    if (mileage > 9999999) {
      newErrors.mileage = 'Mileage cannot exceed 9999999';
      valid = false;
    }

    if (!valid) {
      setErrors(newErrors);
      return;
    }

    const vehicle: Vehicle = {
      id: 0, // backend will generate id
      model,
      firstRegistrationYear,
      cubicCapacity,
      fuel,
      mileage,
    };

    try {
      const newVehicle = await addVehicle(vehicle);
      onAddVehicle(newVehicle);
      setModel('');
      setFirstRegistrationYear('');
      setCubicCapacity(0);
      setFuel('DIESEL');
      setMileage(0);
      setErrors({ model: '', firstRegistrationYear: '', cubicCapacity: '', mileage: '' });
    } catch (err) {
      setError('Error adding vehicle. Please try again.');
    }
  };

  return (
    <div className="container">
      <h2>Add New Vehicle</h2>
      {error && <div className="error-message">{error}</div>} {/* Global error */}
      <form onSubmit={handleSubmit} className="vehicle-form">
        <div className="form-group">
          <label>Model</label>
          <input
            type="text"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            //maxLength={40}
            required
          />
          {errors.model && <div className="error">{errors.model}</div>} {/* Model error */}
        </div>

        <div className="form-group">
          <label>First Registration Year</label>
          <input
            type="number"
            value={firstRegistrationYear}
            onChange={(e) => setFirstRegistrationYear(e.target.value)}
            //min={1000}
            //max={9999}
            required
          />
          {errors.firstRegistrationYear && <div className="error">{errors.firstRegistrationYear}</div>} 
        </div>

        <div className="form-group">
          <label>Cubic Capacity</label>
          <input
            type="number"
            value={cubicCapacity}
            onChange={(e) => setCubicCapacity(Number(e.target.value))}
            //min={1}
            //max={9999}
            required
          />
          {errors.cubicCapacity && <div className="error">{errors.cubicCapacity}</div>}
        </div>

        <div className="form-group">
          <label>Fuel Type</label>
          <select value={fuel} onChange={(e) => setFuel(e.target.value as 'DIESEL' | 'PETROL' | 'HYBRID')} required>
            <option value="DIESEL">DIESEL</option>
            <option value="PETROL">PETROL</option>
            <option value="HYBRID">HYBRID</option>
          </select>
        </div>

        <div className="form-group">
          <label>Mileage</label>
          <input
            type="number"
            value={mileage}
            onChange={(e) => setMileage(Number(e.target.value))}
            //max={9999999}
            required
          />
          {errors.mileage && <div className="error">{errors.mileage}</div>} 
        </div>

        <button type="submit" className="btn-submit">Add Vehicle</button>
      </form>

      <button className="btn-back" onClick={() => window.history.back()}>Back to Vehicle List</button>
    </div>
  );
};

export default AddVehiclePage;
