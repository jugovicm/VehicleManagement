
# Vehicle Management System

This project is a simple vehicle management system that allows users to create, view, and delete vehicles via the user interface and REST API.

## Technologies Used

- **Frontend:** React, Vite, Axios, TypeScript
- **Backend:** Spring Boot, Java
- **Database:** In-memory H2 Database

## Running the Application

### Backend

1. Clone the repository:
    ```bash
    git clone https://github.com/jugovicm/VehicleManagement
    ```
2. Navigate to the project directory:
    ```bash
    cd VehicleManagement
    ```
3. Go to the backend folder:
    ```bash
    cd server
    ```
4. Run the application:
    ```bash
    ./mvnw spring-boot:run
    ```
The backend will be available at: http://localhost:8080

### Frontend
#### 1. Go to the frontend folder:
    cd client/vehicle-manager
#### 2. Install all dependencies:
    npm install
#### 3. Start the application:
    npm run dev
The frontend will be available at: http://localhost:5173

### API Endpoints

Base URL: http://localhost:8080/vehicles

#### 1. Create a New Vehicle

Endpoint: POST /vehicles
Description: Creates a new vehicle record in the system.
Request Body (JSON):
```json
    {
    "model": "Audi",
    "firstRegistrationYear": "2015",
    "cubicCapacity": 2000,
    "fuel": "DIESEL",
    "mileage": 120000
    }
```
#### 2. Get All Vehicles

Endpoint: GET /vehicles
Description: Returns a list of all vehicles in the system.
Example Response (200 OK):

```json
  {
    "id": 1,
    "model": "Audi",
    "firstRegistrationYear": "2015",
    "cubicCapacity": 2000,
    "fuel": "DIESEL",
    "mileage": 120000
  },
  {
    "id": 2,
    "model": "BMW",
    "firstRegistrationYear": "2018",
    "cubicCapacity": 3000,
    "fuel": "PETROL",
    "mileage": 90000
  }
```

#### 3. Delete a Vehicle
Endpoint: DELETE /vehicles/{id}

Description: Deletes the vehicle with the specified ID from the system.

Path Parameter:
id (Integer): The ID of the vehicle to be deleted.


## Support

For further information, please contact us at: jugmic@yahoo.com.