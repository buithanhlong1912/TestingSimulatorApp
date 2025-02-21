import { FC } from "react";
import { formatNumber } from "../utils/validation";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";

export interface IResult {
  total_cost: number;
  margin: number;
  day_rate: number;
  delta: number;
  effective_margin: number;
  monthly_salary: number;
  indirect_costs: number;
  work_insurance: number;
  health_insurance: number;
  gym_allowance: number;
  meal_allowance: number;
  licenses_software: number;
  customer_cost: number;
  current_rate: number;
}

interface ResultProps {
  result: IResult[]; // Ensure results is a direct array of IResult
}

const ResultDisplay: FC<ResultProps> = ({ result }) => {
  const columns: ColumnsType<IResult> = [
    {
      title: "#",
      dataIndex: "key",
      key: "key",
      render: (_: unknown, __: IResult, index: number) => index + 1,
    },
    {
      title: "Margin",
      dataIndex: "margin",
      key: "margin",
      render: (value: number) =>
        value !== null ? `$ ${formatNumber(value)}` : "-",
    },
    {
      title: "Customer Cost",
      dataIndex: "customer_cost",
      key: "customer_cost",
      render: (value: number) =>
        value !== null ? `$ ${formatNumber(value)}` : "-",
    },
    {
      title: "Day Rate",
      dataIndex: "day_rate",
      key: "day_rate",
      render: (value: number) =>
        value !== null ? `$ ${formatNumber(value)}` : "-",
    },
    {
      title: "Current Rate",
      dataIndex: "current_rate",
      key: "current_rate",
      render: (value: number) =>
        value !== null ? `$ ${formatNumber(value)}` : "-",
    },
    {
      title: "Delta",
      dataIndex: "delta",
      key: "delta",
      render: (value: number) =>
        value !== null ? `$ ${formatNumber(value)}` : "-",
    },
    {
      title: "Effective Margin",
      dataIndex: "effective_margin",
      key: "effective_margin",
      render: (value: number) =>
        value !== null ? `${formatNumber(value)}%` : "-",
    },
    {
      title: "Total Cost",
      dataIndex: "total_cost",
      key: "total_cost",
      align: "right",
      render: (value: number) => (
        <strong>{value !== null ? `$ ${formatNumber(value)}` : "-"}</strong>
      ),
    },
  ];

  return (
    <div className="mt-10">
      <Table dataSource={result} columns={columns} pagination={false} />
    </div>
  );
};

export default ResultDisplay;
