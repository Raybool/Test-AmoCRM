import React from "react";
import { getStatusColor } from "./utils";
import { StatusProps } from "./types";
import styles from "./styles.module.css";

export const Status: React.FC<StatusProps> = ({ date }) => {
  if (date) {
    const color = getStatusColor(date);

    return (
      <span
        className={styles.indicator}
        style={{
          backgroundColor: color,
        }}
      />
    );
  }
  return null;
};
