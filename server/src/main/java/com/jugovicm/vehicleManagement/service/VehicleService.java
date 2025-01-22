package com.jugovicm.vehicleManagement.service;

import com.jugovicm.vehicleManagement.entity.Vehicle;
import com.jugovicm.vehicleManagement.repository.VehicleRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VehicleService {
    private final VehicleRepository vehicleRepository;

    public VehicleService(VehicleRepository vehicleRepository){
        this.vehicleRepository = vehicleRepository;
    }

    public Vehicle createVehicle(Vehicle vehicle){
        // check if id is null, if it is different from null, set it to NULL
        if (vehicle.getId() != null) {
            vehicle.setId(null);
        }

        return vehicleRepository.save(vehicle);
    }

    public List<Vehicle> getAllVehicles(){
        return vehicleRepository.findAll();
    }

    public void deleteVehicleById(Integer id){
        vehicleRepository.deleteById(id);
    }
}

