package com.jugovicm.vehicleManagement.entity;

import jakarta.persistence.*;

@Entity
public class Vehicle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String model;
    private String firstRegistrationYear; // format:YYYY
    private Integer cubicCapacity;
    @Enumerated(EnumType.STRING)
    private Fuel fuel;
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
