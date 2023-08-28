import React from "react";
import styles from "./CustomTooltip.module.css";
import { TooltipProps } from "recharts";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";

interface CustomTooltipProps {
  data: TooltipProps<ValueType, NameType>;
  active: boolean;
}

const CustomTooltip = ({ data, active }: CustomTooltipProps) => {
  // eslint-disable-next-line
  const { payload, label } = data;

  if (active && payload && payload[0]) {
    return (
      <div className={styles.tooltip}>
        <p>
          <strong>{payload[0].value?.toLocaleString()}</strong> signups
        </p>
        <p className={styles.date}>{label}</p>
      </div>
    );
  }
  return null;
};

export default CustomTooltip;
