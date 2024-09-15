"use client";
import React, { useState } from "react";
import { TableType } from "./types";

import styles from "./styles.module.css";
import { TableRow } from "../TableRow";

export const Table: React.FC<TableType> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>Название</th>
            <th>Бюджет</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <TableRow
              isActive={activeIndex === index}
              key={index}
              index={index}
              data={item}
              setActiveIndex={setActiveIndex}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
