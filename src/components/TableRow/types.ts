import { TransactionInf } from "@/types";

export type TableRowTypes = {
  index: number;
  data: TransactionInf;
  isActive: boolean;
  setActiveIndex: (index: number | null) => void;
};

export type TableRowActiveData = {
  id: number;
  name: string;
  price: number;
  closest_task_at: number;
} | null;

export type StatusProps = {
  date: number | undefined;
};
