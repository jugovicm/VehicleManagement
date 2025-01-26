export type Vehicle = {
    id: number;  // ID, genereted on backend
    model: string; 
    firstRegistrationYear: string;  // Max length 4
    cubicCapacity: number;  // Max length 4
    fuel: '' | 'DIESEL' | 'PETROL' | 'HYBRID';  // (enum)
    mileage: number;  // Max length 7
  };
  