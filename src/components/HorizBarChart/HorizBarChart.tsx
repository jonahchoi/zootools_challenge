import React from "react";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from "recharts";
import CustomLabel from "../CustomLabel/CustomLabel";

interface HorizBarChartProps {
  // eslint-disable-next-line
  data: { [key: string]: any }[];
  barKey: string;
  axisKey: string;
}

const HorizBarChart = ({ data, barKey, axisKey }: HorizBarChartProps) => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart
        width={200}
        height={100}
        data={data}
        margin={{ top: 10, right: 0, left: 0, bottom: 5 }}
        layout="vertical"
      >
        <Bar
          dataKey={barKey}
          fill="#fff5c2"
          radius={8}
          label={<CustomLabel />}
        />
        <XAxis dataKey={barKey} type="number" ticks={[70000]} hide />
        <YAxis
          dataKey={axisKey}
          type="category"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "black", width: 200 }}
          mirror={true}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default HorizBarChart;
