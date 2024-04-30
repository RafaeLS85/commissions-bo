import type { NextApiRequest, NextApiResponse } from "next";
import { getDefaultHeaders } from "@/lib/utils";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const API_URL = `${process.env.SELLER_COMMISSION_DEFAULT_SERVICE}`;

  if (req.method === "POST") {
    // /plan/commission/create
    const url = `${API_URL}/plan/commission`;
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

  if (req.method === "PUT") {
    const url = `${API_URL}/plan/current`;
    fetch(url, {
      body: JSON.stringify(req.body),
      method: "PUT",
      headers: getDefaultHeaders(req),
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send({ status: 500, error });
    });
  }

  if (req.method === "DELETE") {
    const { id } = req.query;
    const url = `${API_URL}/plan/commission/${id}`;
    fetch(url, {
      method: "DELETE",
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
