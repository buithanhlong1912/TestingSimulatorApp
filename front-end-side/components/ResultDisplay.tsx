import { FC } from "react";

interface ResultProps {
  result: {
    total_cost: number;
    margin: number;
    day_rate: number;
    delta: number;
    effective_margin: number;
  };
}

const ResultDisplay: FC<ResultProps> = ({ result }) => {
  console.log(result);
  return (
    <div className="result">
      <h2 className="font-semibold text-lg">Calculation Results</h2>
      <p>Total Cost: ${result.total_cost.toFixed(2)}</p>
      <p>Margin: ${result.margin.toFixed(2)}</p>
      <p>Day Rate: ${result.day_rate.toFixed(2)}</p>
      <p>Delta: ${result.delta.toFixed(2)}</p>
      <p>Effective Margin: {result.effective_margin.toFixed(2)}%</p>
    </div>
  );
};

export default ResultDisplay;
