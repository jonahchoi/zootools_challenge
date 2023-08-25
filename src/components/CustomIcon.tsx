import React from "react";
import { HiOutlineLightBulb } from "react-icons/hi";
import { BsFillCaretUpFill, BsCaretDownFill } from "react-icons/bs";
import styles from "./CustomIcon.module.css";

interface CustomIconProps {
  type: "positive" | "negative" | "neutral";
}

const CustomIcon = ({ type }: CustomIconProps) => {
  if (type === "positive") {
    return (
      <div className={styles.positive}>
        <BsFillCaretUpFill />
      </div>
    );
  } else if (type === "negative") {
    return (
      <div className={styles.negative}>
        <BsCaretDownFill />{" "}
      </div>
    );
  } else if (type === "neutral") {
    return (
      <div className={styles.neutral}>
        <HiOutlineLightBulb />
      </div>
    );
  }
};

export default CustomIcon;
