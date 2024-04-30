import type { NextApiRequest, NextApiResponse } from "next";
import { getDefaultHeaders } from "@/lib/utils";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   const API_URL = `${process.env.SELLER_COMMISSION_DEFAULT_SERVICE}`;
  const API_URL = "https://api.mercadolibre.com/sites/MLA";

  if (req.method === "GET") {
    const { category, page, pageSize, sortField, sortOrder } = req.query;   

    const url = `${API_URL}/categories`; 

    fetch(url, {
      method: "GET",
      //headers: getDefaultHeaders(req),
      headers: {
        "Content-Type": "application/json",
      }
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
