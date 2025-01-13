"use client";

import { TfiArrowDown, TfiArrowUp } from "react-icons/tfi";
import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";

interface ChartData {
  group: string;
  stage: number;
}

const chartData: ChartData[] = [
  { group: "ST - School", stage: 186 },
  { group: "ST - CRM", stage: 305 },
  { group: "ST - Ecommerce", stage: 237 },
  { group: "ST - Trust Circle", stage: 73 },
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

const yAxisTitleMap: Record<number, string> = {
  50: "Poor",
  100: "Below Average",
  150: "Average",
  200: "Above Average",
  250: "Excellent",
  300: "Distinction",
};

const PerformanceChart = () => {
  const maxValue = Math.max(...chartData.map((data) => data.stage));

  return (
    <Card
      id="group-performance-chart"
      className="w-[700px] shadow-none border-[#0000001A]"
    >
      <CardHeader className="justify-between flex-row space-y-0 items-start">
        <CardTitle className="font-[400] text-sm">
          <h2 className="font-[400] text-base text-[#00000099]">
            Department/Group Performance Chart
          </h2>
          <p className="mb-3 mt-1">
            <span className="tracking-[3px] text-[28px] font-bold leading-none text-[#047358]">
              15
            </span>{" "}
            <span className="ml-[2px] text-[#00000090] font-[400] text-sm">
              Completed
            </span>
          </p>
          <p>
            <TfiArrowDown className="inline-block fill-[#F54721]" />{" "}
            <span>
              <TfiArrowUp className="inline-block fill-[#48BB78]" />{" "}
              <span className="text-[#48BB78]">(+45%) more</span>
            </span>{" "}
            <span className="text-[#00000099] font-[400]">Last 3 months</span>
          </p>
        </CardTitle>
      </CardHeader>

      <CardContent className="p-6 pt-0">
        <ChartContainer config={chartConfig}>
          <BarChart
            data={chartData}
            margin={{
              top: 20,
              left: 12,
              right: 12,
              bottom: 20,
            }}
          >
            <CartesianGrid
              vertical={false}
              horizontal={true}
              strokeDasharray="7 7"
              stroke="rgba(0, 0, 0, 0.1)"
            />
            <XAxis
              dataKey="group"
              tickLine={false}
              axisLine={{ strokeWidth: 0 }}
              tickMargin={10}
            />
            <YAxis
              tickLine={false}
              axisLine={{ strokeWidth: 0 }}
              tickMargin={10}
              tickFormatter={(value: number) => `${yAxisTitleMap[value]}`}
              ticks={[50, 100, 150, 200, 250, 300]}
              domain={[50, 300]}
              width={100}
              tick={{
                textAnchor: "start",
                dx: -95,
                style: { whiteSpace: "nowrap" },
              }}
            />
            <Bar dataKey="stage" barSize={40} radius={[4, 4, 4, 4]}>
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.stage === maxValue ? "#047358" : "#F4F4F4"}
                />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default PerformanceChart;
