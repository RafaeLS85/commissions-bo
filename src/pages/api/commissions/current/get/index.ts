import type { NextApiRequest, NextApiResponse } from "next";
import { getDefaultHeaders } from "@/lib/utils";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const API_URL = `${process.env.COMMISSION_SERVICE}`;
  
  if (req.method === "POST") {

    fetch(`${API_URL}/plan/current`, {
      method: "POST",
      headers: getDefaultHeaders(req),
      body: JSON.stringify(req.body),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        res.send(data);
      })
      .catch((error) => {
        const message = error.message || error.code;
        res.send({ status: 500, message, error });
      });
  }
}
