import React from 'react';
import { Vehicle } from '../types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VehicleForm from '../components/VehicleForm';

const AddVehiclePage: React.FC<{ onAddVehicle: (vehicle: Vehicle) => void }> = ({ onAddVehicle }) => {
  return (
    <div className="container">
      <Header />
      <div className="title">
        <h2>New Vehicle</h2>
      </div>
      <VehicleForm onAddVehicle={onAddVehicle} />
      <Footer />
    </div>
  );
};

export default AddVehiclePage;
