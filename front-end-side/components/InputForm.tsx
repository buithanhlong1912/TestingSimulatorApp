"use client";

import { useState, FC } from "react";
import { sendCalculation } from "../services/api";
import { InputData } from "../utils/validation";

interface InputFormProps {
  setResult: (result: any) => void;
}

const InputForm: FC<InputFormProps> = ({ setResult }) => {
  const [formData, setFormData] = useState<InputData>({
    monthly_salary: "",
    indirect_costs: "",
    work_insurance: "",
    health_insurance: "",
    gym_allowance: "",
    meal_allowance: "",
    licenses_software: "",
    customer_cost: "",
    current_rate: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await sendCalculation(formData);
    setResult(result);
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      {Object.keys(formData).map((key) => (
        <div key={key}>
          <label className="block font-medium">
            {key.replace(/([A-Z])/g, " $1")}
          </label>
          <input
            type="number"
            name={key}
            value={formData[key as keyof InputData]}
            onChange={handleChange}
            className="input"
          />
        </div>
      ))}
      <button type="submit" className="button">
        Calculate
      </button>
    </form>
  );
};

export default InputForm;
