package com.jugovicm.vehicleManagement.controller;

import com.jugovicm.vehicleManagement.entity.Vehicle;
import com.jugovicm.vehicleManagement.service.VehicleService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/vehicles")
@CrossOrigin(origins = "http://localhost:5173")
public class VehicleController {
    private final VehicleService vehicleService;

    public VehicleController(VehicleService vehicleService){
        this.vehicleService = vehicleService;
    }

    //create vehicle
    @PostMapping
    public ResponseEntity<Vehicle> createVehicle(@RequestBody Vehicle vehicle){
        return ResponseEntity.ok(vehicleService.createVehicle(vehicle));
    }

    // get all vehicle
    @GetMapping
    public ResponseEntity<List<Vehicle>> getAllVehicles(){
        return ResponseEntity.ok(vehicleService.getAllVehicles());
    }

    // delete vehicle by id
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteVehicle(@PathVariable Integer id){
        vehicleService.deleteVehicleById(id);
        return ResponseEntity.noContent().build();
    }

}
