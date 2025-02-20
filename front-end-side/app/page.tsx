"use client";

import { useState } from "react";
import InputForm from "../components/InputForm";
import ResultDisplay from "../components/ResultDisplay";

export default function Home() {
  const [result, setResult] = useState(null);

  return (
    <div>
      <InputForm setResult={setResult} />
      {result && <ResultDisplay result={result} />}
    </div>
  );
}
