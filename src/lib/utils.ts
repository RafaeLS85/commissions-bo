import { NextApiRequest } from "next";
import Cookie from "js-cookie";
import { COMMERCIAL_DISCOUNTS } from "@/components/Discounts/CommercialDiscounts/utils/constants";

export const getToken = () => {  
  return Cookie.get("X-TOKEN-CORS") || "";
};

export const getDate = () => {
  const date = new Date();
  const formatForDate = new Intl.DateTimeFormat("es", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const dateFormatted = formatForDate.format(date);

  return dateFormatted.replace(/\//g, "-");
};

export function setCookie(cname: string, cvalue: string, exdays: number) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  return document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export const getHeader = (req: NextApiRequest) => {
  const jwt = req.cookies["X-TOKEN-CORS"];
  const headers = {
    headers: {
      "x-token-cors": jwt,
      authorization: jwt,
    },
  };
  return headers;
};

export const getCommissionsHeader = (req: NextApiRequest) => {
  const { headers } = getHeader(req);
  return {
    ...headers,
    authorization: `Bearer ${headers.authorization}`,
  };
};

export const headersConfig = (token: string) => ({
  headers: {
    authorization: "Bearer " + token,
  },
});

export const getDefaultHeaders = (req: NextApiRequest) => {
  return {  
      "Content-Type": "application/json",   
      authorization: "Bearer " + req.cookies["X-TOKEN-CORS"] || "",    
  }
};

export const getFileDate = () => {
  const date = new Date();
  return (
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
  );
};

export const calculateTotalPages = ({
  count,
  pageSize,
}: {
  count: number;
  pageSize: number;
}) => {
  return Math.ceil(count / pageSize);
};

export function checkDecimals(x: number | undefined) {
  if (x === undefined) return true;

  const getDecimalVal = x.toString().indexOf(".");
  const decimalPart = x.toString().substring(getDecimalVal + 1);

  if (getDecimalVal === -1) return true; // 100
  return decimalPart.length <= 2;
}

export const disabledText = (input: string) => {
  const overflowText = input.substring(
    COMMERCIAL_DISCOUNTS.reason_max_length,
    input.length
  );
  return overflowText.length > 0;
};

export const splitText = (inputText: string, maxLength: number) => {
  const text = inputText.slice(0, maxLength);
  const overFlowText = inputText.slice(maxLength);
  return { text, overFlowText };
};

export function monthsDiff(date1: Date, date2: Date) {
  if (date1 === undefined || date1 === null) return false;

  const d1 = new Date(date1);
  const d2 = new Date(date2);

  let months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  // console.log(months)

  if (months === 0) return true;

  return months < 6;
}

export default function formatedDate(value: Date) {
  // if (value === '') return ''; error
  const date = new Intl.DateTimeFormat("es-AR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(value));
  const splitDate = date.split("/");
  return splitDate[2] + "-" + splitDate[1] + "-" + splitDate[0]; // -> yyyy-mm-dd
}

export const isBeforeToday = (date: string | Date) => {
  const today = new Date();
  if (date === undefined || date === "") return true;
  return formatedDate(today) <= date;
};

export const compareDates = (to: Date | string, from: Date | string) => {
  if (from === undefined) return true;
  return formatedDate(new Date(to)) >= formatedDate(new Date(from));
};

export const compareDatesUTCString = (date: any, compareTo: Date) => {
  // compareTo "yyyy-mm-ddT00:00:00.0000Z"
  // date "yyyy-mm-dd"
  return formatedDate(compareTo) <= date; // "yyyy-mm-dd" <= "yyyy-mm-dd"
};

export const setUtcDateTo = (date: string | Date) => {
  if (typeof date === "string") {
    if (date.length <= 10) {
      // yyyy-mm-dd format
      const d = new Date(date + "T23:59:59Z");
      return new Date(d.setHours(23, 59, 59));
    }
  }

  const d = new Date(date);
  return new Date(d.setHours(23, 59, 59));
};

export const setUtcDateFrom = (date: string | Date) => {
  const d = new Date();
  const hours = d.getUTCHours();
  const minutes = d.getUTCMinutes();
  const seconds = d.getUTCSeconds();
  const utc = new Date(date).setUTCHours(hours, minutes, seconds);
  return new Date(utc).toISOString();
};

export const isFuture = (validFrom: string | Date) => {
  const vf = new Date(validFrom);
  return vf > new Date();
};

export const setUtcForFutureCommission = (date: string | Date) => {
  if (typeof date === "string") {
    if (date.length <= 10) {
      // yyyy-mm-dd format
      const d = new Date(date + "T00:00:00Z");
      return new Date(d.setHours(0, 0, 0));
    }
  }

  const d = new Date(date);
  return new Date(d.setHours(0, 0, 0));
};
