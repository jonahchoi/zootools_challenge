import { LabelProps } from "recharts";

const CustomLabel = (props: LabelProps) => {
  const { y, value } = props;
  const valueWithCommas = value?.toLocaleString();

  if (!y) {
    return null;
  }
  return (
    <text x="99%" y={typeof y === "number" ? y + 20 : y} textAnchor="end">
      {valueWithCommas}
    </text>
  );
};

export default CustomLabel;
