package com.jugovicm.vehicleManagement.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

@Entity
public class Vehicle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotBlank(message = "Model cannot be empty")
    private String model;

    @Pattern(regexp = "\\d{4}", message = "First registration year must be in the format YYYY")
    private String firstRegistrationYear;

    @NotNull(message = "Cubic capacity is required")
    @Min(value = 1, message = "Cubic capacity must be greater than 0")
    @Max(value = 9999, message = "Cubic capacity cannot exceed 9999")
    private Integer cubicCapacity;

    @NotNull(message = "Fuel type is required")
    @Enumerated(EnumType.STRING)
    private Fuel fuel;

    @NotNull(message = "Mileage is required")
    @Min(value = 0, message = "Mileage cannot be negative")
    @Max(value = 9999999, message = "Mileage cannot exceed 7 digits")
    private Integer mileage;

    public Vehicle() {
    }

    public Vehicle(String model, String firstRegistrationYear, Integer cubicCapacity, Fuel fuel, Integer mileage) {
        this.model = model;
        this.firstRegistrationYear = firstRegistrationYear;
        this.cubicCapacity = cubicCapacity;
        this.fuel = fuel;
        this.mileage = mileage;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getFirstRegistrationYear() {
        return firstRegistrationYear;
    }

    public void setFirstRegistrationYear(String firstRegistrationYear) {
        this.firstRegistrationYear = firstRegistrationYear;
    }

    public Integer getCubicCapacity() {
        return cubicCapacity;
    }

    public void setCubicCapacity(Integer cubicCapacity) {
        this.cubicCapacity = cubicCapacity;
    }

    public Fuel getFuel() {
        return fuel;
    }

    public void setFuel(Fuel fuel) {
        this.fuel = fuel;
    }

    public Integer getMileage() {
        return mileage;
    }

    public void setMileage(Integer mileage) {
        this.mileage = mileage;
    }
}
