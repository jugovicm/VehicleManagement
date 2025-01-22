import axios from 'axios';
import { Vehicle } from '../types';

const BASE_URL = 'http://localhost:8080/vehicles';

//add vehicle
export const addVehicle = async (vehicle: Vehicle): Promise<Vehicle> => {
  try {
    const response = await axios.post(BASE_URL, vehicle);
    return response.data; // Return vehicle with generated ID
  } catch (error) {
    console.error('Error adding vehicle:', error);
    throw error;
  }
};
// get list of vehicles
export const getVehicles = async (): Promise<Vehicle[]> => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data; // return list of vehicles
  } catch (error) {
    console.error('Error fetching vehicles:', error);
    throw error;
  }
};
// delete vehicle
export const deleteVehicle = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
  } catch (error) {
    console.error('Error deleting vehicle:', error);
    throw error;
  }
};
