"use client";

import styles from "./page.module.css";
import { Table } from "@/components/Table";
import {
  MutableRefObject,
  use,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { TransactionInf } from "@/types";

import { getData } from "@/utils/data";

export default function Home() {
  const indexRef = useRef(1);
  const isUpdateData = useRef(true);

  const [data, setData] = useState<TransactionInf[]>([]);

  const setDataToState = useCallback(
    (newData: TransactionInf[]) => setData((pref) => [...pref, ...newData]),
    []
  );

  const setState = (newData: TransactionInf[], isUpdateDataNew: boolean) => {
    setDataToState(newData);
    isUpdateData.current = !isUpdateDataNew;
    indexRef.current++;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isUpdateData.current) {
        getData(setState, "/api/leads", { page: indexRef.current });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Сделки</h1>

        <Table data={data} />
      </main>
    </div>
  );
}
