import React from "react";

const CustomTooltip = (data: any) => {
  // console.log(data);
  const { active, payload, label } = data;

  if (active) {
    return (
      <div>
        <p>
          <strong>{payload[0].value}</strong> signups
        </p>
        <p>{label}</p>
      </div>
    );
  }
  return null;
};

export default CustomTooltip;
