import React, { useState } from "react";
import styles from "./ToggleButtons.module.css";

interface ToggleButtonsProps {
  afterClick: (arg0: string) => void;
  options: string[];
}

const ToggleButtons = ({ afterClick, options }: ToggleButtonsProps) => {
  const [selectId, setSelectId] = useState(2);

  const onClick = (id: number, time: string) => {
    setSelectId(id);
    afterClick(time);
  }

  return (
    <div className={styles.container}>
      {options.map((time, i) => (
        <button
          name={time}
          className={selectId === i ? styles.active : styles.default}
          onClick={()=>onClick(i, time)}
        >
          {time}
        </button>
      ))}
    </div>
  );
};

export default ToggleButtons;
