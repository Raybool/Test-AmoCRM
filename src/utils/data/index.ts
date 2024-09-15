import axios from "axios";

export const BASE_URL = "https://vavilovs02.amocrm.ru";

export const getData = async (
  setData: (data: any, isLastPage: boolean) => void,
  url: string,
  params?: object
) =>
  await axios
    .post(url, {
      params,
    })
    .then((res) => setData(res.data.array, res.data.isLastPage));
