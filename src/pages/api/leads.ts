import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { AMOCRM_TOKEN } from "@/constants/env";
import { BASE_URL } from "@/utils/data";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { params } = req.body;

  try {
    const response = await axios.get(`${BASE_URL}/api/v4/leads`, {
      headers: {
        Authorization: `Bearer ${AMOCRM_TOKEN}`,
      },
      params: {
        limit: 3,
        ...params,
      },
    });
    res.status(200).json({
      array: response.data._embedded.leads,
      isLastPage: !response.data._links.next,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Error fetching data" });
  }
}
