import { useState } from "react";
import React from "react";
import { TableRowActiveData, TableRowTypes } from "./types";
import { Loader } from "../Loader";
import { getStatusColor, onClick } from "./utils";

import styles from "./styles.module.css";
import { Status } from "./Elements";
import dayjs from "dayjs";

export const TableRow: React.FC<TableRowTypes> = ({
  index,
  data,
  isActive,
  setActiveIndex,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const [fullData, setFullData] = useState<TableRowActiveData>(null);

  const date = fullData?.closest_task_at
    ? dayjs(fullData?.closest_task_at * 1000).format("DD.MM.YYYY")
    : null;

  if (isLoading) {
    return (
      <tr>
        <Loader />
      </tr>
    );
  }

  if (isActive) {
    return (
      <tr
        className={styles.detailsRow}
        onClick={() =>
          onClick(
            data.id,
            index,
            isActive,
            setActiveIndex,
            setIsLoading,
            setFullData
          )
        }
      >
        <td colSpan={4}>
          <strong>Name:</strong> {fullData?.name}
          <br />
          <strong>ID:</strong> {fullData?.id}
          <br />
          <strong>Date:</strong> {date}
          <br />
          <strong>Status:</strong> <Status date={fullData?.closest_task_at} />
        </td>
      </tr>
    );
  }

  return (
    <tr
      key={index}
      onClick={() =>
        onClick(
          data.id,
          index,
          isActive,
          setActiveIndex,
          setIsLoading,
          setFullData
        )
      }
      className={styles.tableRow}
    >
      <th>{index + 1}</th>
      <td>{data.name}</td>
      <td>{data.price}</td>
      <td>{data.id}</td>
    </tr>
  );
};
