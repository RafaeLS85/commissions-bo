import {
  CommercialDiscountForm,
  ExpireCommercialDiscountForm,
} from "@/hooks/Discounts/CommercialDiscounts/types";
import { getFileDate } from "@/lib/utils";
import fileDownload from "js-file-download";

// api/discounts
export const currentDiscountsService = {
  create: async (data: CommercialDiscountForm) => {
    const url = `/api/discounts`;

    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => error);
  },
  expire: async (_id: string, data: ExpireCommercialDiscountForm) => {
    const url = `/api/discounts/expired?id=${_id}`;

    return fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => error);
  },
  deleteDiscount: async (_id: string) => {
    const url = `/api/discounts?id=${_id}`;

    return fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => error);
  },
  list: async ({
    page,
    pageSize,
    searchTerm,
    sortField,
    selected,
  }: {
    page: number;
    pageSize: number;
    searchTerm: string;
    sortField: {
      order: string; // "asc" | "desc"
      field: string;
    };
    selected: {
      id: string;
      label: string;
    };
  }) => {
    const skus = selected.id === "sku" ? searchTerm : "";
    const seller = selected.id === "seller" ? searchTerm : "";
    const url = `/api/discounts?page=${page}&pageSize=${pageSize}&skus=${skus}&seller=${seller}`;

    return fetch(url)
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => error);
  },
  report: async (): Promise<any> => {
    // /api/discount/report/current
    const url = `/api/discounts/report`;

    return fetch(url, {
      method: "GET",
    })
      .then((response) => response.blob())
      .then((data) => {
        fileDownload(
          data,
          `${getFileDate()}-Reporte de descuentos comerciales.xlsx`
        );
        return {
          ok: true,
        };
      })
      .catch((error) => {
        console.error("Error: No se ha podido descargar el archivo", error);
        return error;
      });
  },
};
