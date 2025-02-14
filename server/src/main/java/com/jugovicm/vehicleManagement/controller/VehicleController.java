package com.jugovicm.vehicleManagement.controller;

import com.jugovicm.vehicleManagement.entity.Vehicle;
import com.jugovicm.vehicleManagement.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/vehicles")
@CrossOrigin(origins = "http://localhost:5173")
public class VehicleController {
    @Autowired
    private VehicleService vehicleService;

    // Create vehicle
    @PostMapping
    public ResponseEntity<?> createVehicle(@RequestBody Vehicle vehicle){
        try {
            return ResponseEntity.ok(vehicleService.createVehicle(vehicle));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    // Get all vehicles
    @GetMapping
    public ResponseEntity<List<Vehicle>> getAllVehicles(){
        return ResponseEntity.ok(vehicleService.getAllVehicles());
    }

    // Update vehicle
    @PutMapping("/{id}")
    public ResponseEntity<?> updateVehicle(@PathVariable Integer id, @RequestBody Vehicle vehicle) {
        try {
            return ResponseEntity.ok(vehicleService.updateVehicle(id, vehicle));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    // Delete vehicle by id
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteVehicle(@PathVariable Integer id){
        try {
            vehicleService.deleteVehicleById(id);
            return ResponseEntity.noContent().build();
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }
}
