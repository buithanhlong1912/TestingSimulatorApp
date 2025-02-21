"use client";

import { useState, FC, Dispatch, SetStateAction } from "react";
import { sendCalculation } from "../services/api";
import { InputData } from "../utils/validation";
import { IResult } from "./ResultDisplay";

interface InputFormProps {
  result: IResult[];
  setResult: Dispatch<SetStateAction<IResult[]>>;
}

const InputForm: FC<InputFormProps> = ({ result, setResult }) => {
  const initialFormData: InputData = {
    monthly_salary: "",
    indirect_costs: "",
    work_insurance: "",
    health_insurance: "",
    gym_allowance: "",
    meal_allowance: "",
    licenses_software: "",
    customer_cost: "",
    current_rate: "",
  };

  const [formData, setFormData] = useState<InputData>(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const rawValue = value.replace(/\D/g, "");
    setFormData({ ...formData, [name]: rawValue });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      const data = await sendCalculation(formData);

      if (!data) {
        return;
      }

      setResult([
        ...result,
        {
          ...data,
          key: result.length + 1,
        },
      ]);
      setFormData(initialFormData);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full mx-auto p-6 bg-white rounded-lg shadow-lg"
    >
      <div className="grid grid-cols-3 gap-4">
        {Object.keys(formData).map((key) => (
          <div key={key} className="mb-4">
            <label className="block font-medium">
              {key
                .replace(/_/g, " ")
                .replace(/\b\w/g, (char) => char.toUpperCase())}
            </label>
            <input
              type="text"
              name={key}
              value={Number(formData[key as keyof InputData]).toLocaleString(
                "en-US"
              )}
              onChange={handleChange}
              className="input"
              onKeyDown={(e) => {
                if (
                  !/^\d$/.test(e.key) &&
                  e.key !== "Backspace" &&
                  e.key !== "Delete"
                ) {
                  e.preventDefault();
                }
              }}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button type="submit" className="button">
          Calculate
        </button>
      </div>
    </form>
  );
};

export default InputForm;
