import { InputData } from "../utils/validation";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

export const sendCalculation = async (data: InputData) => {
  console.log("Data infor", {data})
  try {
    const response = await fetch(`${API_URL}/margin/calculate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};
