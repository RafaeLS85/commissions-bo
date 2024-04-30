import type { NextApiRequest, NextApiResponse } from "next";
import { getDefaultHeaders } from "@/lib/utils";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const API_URL = process.env.COMMISSION_SERVICE;

  if (req.method === "POST") {
    const url = `${API_URL}/default/update`;

    fetch(url, {
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

  if (req.method === "GET") {
    // url:"http://localhost:9000/plan/default/current" // 404...
    const url = `${API_URL}/default/current`;

    fetch(url, {
      method: "GET",
      headers: getDefaultHeaders(req),
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
