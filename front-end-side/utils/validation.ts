export interface InputData {
    current_rate: string,
    customer_cost: string,
    gym_allowance: string,
    health_insurance: string,
    indirect_costs: string,
    licenses_software: string,
    meal_allowance: string,
    monthly_salary: string,
    work_insurance: string,
  }
  
  export const validateInputs = (data: InputData): boolean => {
    return Object.values(data).every((value) => value !== "" && !isNaN(Number(value)));
  };
  