import React, { useState } from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
  XAxis,
} from "recharts";
import CustomTooltip from "@/components/CustomTooltip/CustomTooltip";
import { format } from "date-fns";
import { TimeData } from "@/constants/mockData";

interface SimpleBarChartProps {
  data: TimeData[];
  minuteInterval: string;
}

interface PosObject {
  x: number;
  y: number;
  // eslint-disable-next-line
  [key: string]: any;
}

const SimpleBarChart = ({ data, minuteInterval }: SimpleBarChartProps) => {
  const [posData, setPosData] = useState<PosObject>({ x: 0, y: 0 });
  const [tooltipActive, setTooltipActive] = useState(false);

  const getFormatString = () => {
    if (minuteInterval === "1h") {
      return "hh:mm a";
    } else if (minuteInterval === "24h") {
      return "MMMM d hh:00 a";
    } else {
      return "MMMM d";
    }
  };

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
          dataKey={(data: TimeData) => format(data.date, getFormatString())}
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
