"use client";

import { TfiArrowDown, TfiArrowUp } from "react-icons/tfi";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";
import "./chart.css";

interface ChartData {
  progress: string;
  stage: number;
}

const chartData: ChartData[] = [
  { progress: "Not Started", stage: 186 },
  { progress: "At Risk", stage: 305 },
  { progress: "In Trouble", stage: 237 },
  { progress: "On Track", stage: 73 },
  { progress: "Pending", stage: 209 },
  { progress: "Completed", stage: 214 },
];

interface ChartConfigType {
  [key: string]: {
    label: string;
    color: string;
  };
}

const chartConfig: ChartConfigType = {
  stage: {
    label: "stage",
    color: "hsl(var(--chart-1))",
  },
};

const ProgressChart = () => {
  return (
    <Card id="overall-okr-progress">
      <CardHeader className="card-header">
        <CardTitle className="card-title">
          <h2>Overall OKR Progress</h2>
          <p className="completion-level">
            <span className="level">15</span>{" "}
            <span className="text">Completed</span>
          </p>
          <p>
            <span className="negative-progress">
              <TfiArrowDown className="inline-block fill-[#F54721]" />
            </span>{" "}
            <span className="positive-progress">
              <TfiArrowUp className="inline-block fill-[#48BB78]" /> (+45%) more
            </span>{" "}
            <span className="last-check">Last 3 months</span>
          </p>
        </CardTitle>
        <CardDescription className="desc">
          <span className="percent">81%</span> &nbsp;
          <span className="text">Average Completion Rate</span>
        </CardDescription>
      </CardHeader>

      <CardContent className="card-content">
        <ChartContainer config={chartConfig}>
          <LineChart
            data={chartData}
            margin={{
              top: 20,
              left: 12,
              right: 12,
              bottom: 20,
            }}
          >
            <CartesianGrid
              vertical={true}
              horizontal={false}
              strokeDasharray="3 3"
              stroke="rgba(0, 0, 0, 0.1)"
            />
            <XAxis
              dataKey="progress"
              tickLine={false}
              axisLine={{ strokeWidth: 0 }}
              tickMargin={10}
              padding={{ left: 50 }}
            />
            <YAxis
              tickLine={false}
              axisLine={{ strokeWidth: 0 }}
              tickMargin={10}
              tickFormatter={(value: number) => `${value}`}
              domain={[50, 300]}
              ticks={[50, 100, 150, 200, 250, 300]}
            />
            <defs>
              <linearGradient
                id="lineGradientColor"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#F54721" />
                <stop offset="100%" stopColor="#047358" />
              </linearGradient>
            </defs>
            <Line
              dataKey="stage"
              type="linear"
              stroke="url(#lineGradientColor)"
              strokeWidth={1}
              dot={{
                r: 4,
                fill: "#000",
                stroke: "#000",
                strokeWidth: 0,
              }}
              activeDot={{
                r: 5,
                fill: "#000",
                strokeWidth: 0,
                stroke: "#000",
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default ProgressChart;
