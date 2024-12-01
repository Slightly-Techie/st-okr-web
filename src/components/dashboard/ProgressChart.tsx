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
    <Card
      id="overall-okr-progress"
      className="w-[700px] shadow-none border-[#0000001A]"
    >
      <CardHeader className="justify-between flex-row space-y-0 items-start">
        <CardTitle className="font-normal text-sm text-[#00000099]">
          <h2>Overall OKR Progress</h2>
          <p className="mb-3 mt-1">
            <span className="text-[28px] font-bold leading-none text-[#047358]">
              15
            </span>{" "}
            <span className="text-[#00000090] font-normal">Completed</span>
          </p>
          <p>
            <TfiArrowUp className="inline-block fill-[#48BB78]" />{" "}
            <TfiArrowDown className="inline-block fill-[#F54721]" />{" "}
            <span className="text-[#48BB78]">(+45%) more</span> Last 3 months
          </p>
        </CardTitle>
        <CardDescription className="p-2 bg-[#fafafa] border border-[#0000001a] rounded-full flex items-center text-xs text-[#00000080] font-normal">
          <span className="text-[#047358]">81%</span> &nbsp;Average Completion
          Rate
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0 pr-6 pb-6">
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
