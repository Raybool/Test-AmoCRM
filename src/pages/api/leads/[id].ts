import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { AMOCRM_TOKEN } from "@/constants/env";
import { BASE_URL } from "@/utils/data";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  try {
    const response = await axios.get(`${BASE_URL}/api/v4/leads/${id}`, {
      headers: {
        Authorization: `Bearer ${AMOCRM_TOKEN}`,
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Error fetching data" });
  }
}
