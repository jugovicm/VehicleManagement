package com.jugovicm.vehicleManagement.service.impl;

import com.jugovicm.vehicleManagement.entity.Vehicle;
import com.jugovicm.vehicleManagement.repository.VehicleRepository;
import com.jugovicm.vehicleManagement.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VehicleServiceImpl implements VehicleService {
    @Autowired
    private VehicleRepository vehicleRepository;

    @Override
    public Vehicle createVehicle(Vehicle vehicle){
        if (vehicle.getId() != null && vehicleRepository.existsById(vehicle.getId())) {
            throw new IllegalArgumentException("A vehicle with ID " + vehicle.getId() + " already exists.");
        }

        vehicle.setId(null); // Obezbeđujemo da je novi entitet
        return vehicleRepository.save(vehicle);
    }

    @Override
    public List<Vehicle> getAllVehicles(){
        return vehicleRepository.findAll();
    }

    @Override
    public Vehicle updateVehicle(Integer id, Vehicle vehicle){
        if (!vehicleRepository.existsById(id)) {
            throw new IllegalArgumentException("A vehicle with ID " + id + " does not exist.");
        }

        vehicle.setId(id); // Obezbeđujemo da ažuriramo postojeće vozilo
        return vehicleRepository.save(vehicle);
    }

    @Override
    public void deleteVehicleById(Integer id){
        if (!vehicleRepository.existsById(id)) {
            throw new IllegalArgumentException("A vehicle with ID " + id + " does not exist.");
        }

        vehicleRepository.deleteById(id);
    }
}
