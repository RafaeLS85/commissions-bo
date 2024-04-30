import type { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosError, AxiosResponse } from "axios";
import { getCommissionsHeader } from "@/lib/utils";
import { MAX_TIMEOUT } from "@/constants";

export default function handler(req: NextApiRequest, res: NextApiResponse) {

  const API_URL = `${process.env.COMMISSION_SERVICE}`;
  axios.defaults.timeout = MAX_TIMEOUT;

  if (req.method === "POST") {
    const url = `${API_URL}/plan/commission/validateintersection`;

    axios
      .request({
        url,
        method: "POST",
        headers: getCommissionsHeader(req),
        data: req.body,
      })
      .then((response: AxiosResponse) => {
        res.send(response.data);
      })
      .catch((error: AxiosError) => {
        const message = error.message || error.code
        res.send({ status: 500, message, error });        
      });
  }
}
