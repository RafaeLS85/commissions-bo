import type { NextApiRequest, NextApiResponse } from "next";
import { getDefaultHeaders } from "@/lib/utils";

export default function handler(req: NextApiRequest, res: NextApiResponse) {

  const API_URL = `${process.env.SELLER_COMMISSION_DEFAULT_SERVICE}/base`;

  const API_POST = `${process.env.FAKE_POST_SERVICE}`


  // https://api.mercadolibre.com/sites/MLA/search?q=celulares

  if (req.method === "GET") {
    const { seller, page, pageSize, sortField, sortOrder } = req.query;
    const fixedPage = Number(page);
    const fixedSeller = seller?.toString().trim();

    const url = `${API_URL}/?seller=${fixedSeller}&page=${
      fixedPage - 1
    }&pageSize=${pageSize}&sortOrder=${sortOrder}&sortField=${sortField}`; 

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

  if (req.method === "POST") {
    const { seller, rate } = req.body;

    const body = {
      sellerId: seller,
      defaultCommission: rate,
    };

    fetch(API_POST, {
      method: "POST",
      headers: getDefaultHeaders(req),
      body: JSON.stringify(body),
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
    const { seller, rate } = req.body;
    const url = `${API_POST}/${seller}`;

    const body = {
      defaultCommission: rate,
    };   

    fetch(url, {
      method: "PUT",
      headers: getDefaultHeaders(req),
      body: JSON.stringify(body),
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
    })
  }

  if (req.method === "DELETE") {   
    const { id } = req.query;
    const url = `${API_POST}/${id}`;     

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
    })
  }
}
