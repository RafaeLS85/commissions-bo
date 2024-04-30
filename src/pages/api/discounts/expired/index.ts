import type { NextApiRequest, NextApiResponse } from "next";
import { getDefaultHeaders } from "@/lib/utils";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const API_URL = process.env.SELLER_COMMISSION_DEFAULT_SERVICE;

  if (req.method === "GET") {
    const base = `${API_URL}/discount`;
    const { skus, page, pageSize, seller } = req.query;
    const fixedPage = Number(page);
    const url = `${base}/?onlyExpired=true&skus=${skus}&seller=${seller}&page=${
      fixedPage - 1
    }&pageSize=${pageSize}`;

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

  if (req.method === "PUT") {
    const { id } = req.query;
    const url = `${API_URL}/discount/${id}`;

    fetch(url, {
      method: "PUT",
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
