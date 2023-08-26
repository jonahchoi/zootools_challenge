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
import { MonthData } from "@/constants/mockData";

interface SimpleBarChartProps {
  data: MonthData[];
}

interface PosObject {
  x: number;
  y: number;
  // eslint-disable-next-line
  [key: string]: any;
}

const SimpleBarChart = ({ data }: SimpleBarChartProps) => {
  const [posData, setPosData] = useState<PosObject>({ x: 0, y: 0 });
  const [tooltipActive, setTooltipActive] = useState(false);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        width={200}
        height={100}
        data={data}
        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        barSize={20}
      >
        <CartesianGrid vertical={false} strokeDasharray="1 1" />
        <XAxis
          dataKey={(data: MonthData) => format(data.date, "MMMM d")}
          scale="point"
          padding={{ left: 10, right: 10 }}
          hide
        />
        <Tooltip
          content={(props) => (
            <CustomTooltip data={props} active={tooltipActive} />
          )}
          position={{ x: posData.x - 57, y: posData.y - 85 }}
          isAnimationActive={false}
          allowEscapeViewBox={{ x: true }}
        />
        <Bar
          dataKey={"signups"}
          fill="#fed500"
          radius={8}
          onMouseOver={(data) => {
            setPosData(data as PosObject);
            setTooltipActive(true);
          }}
          onMouseLeave={() => {
            setTooltipActive(false);
          }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SimpleBarChart;
