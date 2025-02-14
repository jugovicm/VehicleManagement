package com.jugovicm.vehicleManagement.service;

import com.jugovicm.vehicleManagement.entity.Vehicle;

import java.util.List;

public interface VehicleService {
    Vehicle createVehicle(Vehicle vehicle);
    List<Vehicle> getAllVehicles();
    Vehicle updateVehicle(Integer id, Vehicle vehicle);
    void deleteVehicleById(Integer id);
}
