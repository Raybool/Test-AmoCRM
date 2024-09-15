import axios from "axios";
import { TableRowActiveData } from "./types";

export const onClick = async (
  id: number,
  index: number,
  isActive: boolean,
  setActiveIndex: (index: number | null) => void,
  setIsLoading: (isLoading: boolean) => void,
  setFullData: (fullData: TableRowActiveData) => void
) => {
  setIsLoading(true);
  setActiveIndex(isActive ? null : index);

  try {
    const data = await axios.get(`/api/leads/${id}`);
    setFullData(data.data);
    setIsLoading(false);
  } catch (error) {
    console.log(error);
  }
};

export const getStatusColor = (taskDate: number | undefined) => {
  if (!taskDate) {
    return "red";
  }

  const today = new Date();
  const taskDateObj = new Date(taskDate * 1000);
  const diffDays = Math.floor(
    (taskDateObj.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );

  if (diffDays < 0) {
    return "red";
  } else if (diffDays === 0) {
    return "green";
  } else {
    return "yellow";
  }
};
