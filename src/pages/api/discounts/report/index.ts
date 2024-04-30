import type { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosError, AxiosResponse } from "axios";
import { getCommissionsHeader } from "@/lib/utils";
import { MAX_TIMEOUT } from "@/constants";

export default function handler(req: NextApiRequest, res: NextApiResponse) {

  axios.defaults.timeout = MAX_TIMEOUT;
  const API_URL = process.env.SELLER_COMMISSION_DEFAULT_SERVICE;

  if (req.method === "GET") {
    res.setHeader("Content-Type", "application/vnd.openxmlformats");
    const axios = require("axios");
    axios
      .request({
        responseType: "arraybuffer",
        url: `${API_URL}/discount/report/current`,
        method: "GET",
        headers: getCommissionsHeader(req),
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
