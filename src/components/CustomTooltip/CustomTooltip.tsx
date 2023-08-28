import React from "react";
import styles from "./CustomTooltip.module.css";
import { TooltipProps } from "recharts";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";

type CustomTooltipProps<
  MyValue extends ValueType,
  MyName extends NameType,
> = TooltipProps<MyValue, MyName> & {
  active: boolean;
};

const CustomTooltip = ({
  payload,
  label,
  active,
}: CustomTooltipProps<ValueType, NameType>) => {
  return (
    <div
      className={styles.tooltip}
      id="tooltip"
      style={!active ? { visibility: "hidden" } : undefined}
    >
      <p>
        <strong>{payload ? payload[0]?.value?.toLocaleString() : 0}</strong>{" "}
        signups
      </p>
      <p className={styles.date}>{label}</p>
    </div>
  );
};

export default CustomTooltip;
