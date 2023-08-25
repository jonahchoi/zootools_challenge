import React, { useState } from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
  XAxis,
} from "recharts";
import CustomTooltip from "./CustomTooltip";
import { format } from "date-fns";

interface SimpleBarChartProps {
  data: any[];
}

const SimpleBarChart = ({ data }: SimpleBarChartProps) => {
  const [posData, setPosData] = useState({ x: 0, y: 0 });

  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart
        width={200}
        height={100}
        data={data}
        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
      >
        <CartesianGrid vertical={false} strokeDasharray="1 1" />
        <XAxis dataKey={(data) => format(data.date, "MMMM d")} hide />
        <Tooltip
          content={<CustomTooltip />}
          position={{ x: posData.x, y: posData.y - 40 }}
          isAnimationActive={false}
        />
        <Bar
          dataKey={"signups"}
          fill="#fed500"
          onMouseOver={(data) => {
            setPosData(data);
          }}
          name="huh"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SimpleBarChart;
