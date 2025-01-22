import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VehicleListPage from './pages/VehicleListPage';
import AddVehiclePage from './pages/AddVehiclePage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VehicleListPage />} />
        <Route
          path="/add-vehicle"
          element={<AddVehiclePage onAddVehicle={() => {}} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
