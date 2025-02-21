"use client";

import { useState } from "react";
import InputForm from "../components/InputForm";
import ResultDisplay, { IResult } from "../components/ResultDisplay";

export default function Home() {
  const [result, setResult] = useState<IResult[]>([]);

  return (
    <div>
      <InputForm result={result} setResult={setResult} />
      <ResultDisplay result={result} />
    </div>
  );
}
