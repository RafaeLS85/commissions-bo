import fileDownload from "js-file-download";
import { UpdateCommission } from "@/hooks/Commissions/CurrentCommission/types";
import { getFileDate } from "@/lib/utils";

export const currentCommissionService = {
  get: async ({
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
    const url = `/api/commissions/current/get`;
    let fixedSeller;

    if (selected.id === "seller") {
      fixedSeller = searchTerm.toString().trim();
    }
    const body = {
      page: page - 1,
      pageSize,
      skus: selected.id === "sku" ? searchTerm : "",
      seller: selected.id === "seller" ? fixedSeller : "",
      sortField,
    };

    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.error(error);
        return error;
      });
  },
  update: async (body: UpdateCommission) => {
    const url = `/api/commissions/current`;
    return fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.error("Error:", error);
        return error;
      });
  },
  create: async (data: any) => {
    const url = `/api/commissions/current`;
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.error("Error:", error);
        return error;
      });
  },
  validate: async (data: any) => {
    const url = `/api/commissions/current/validate`;
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.error("Error:", error);
        return error;
      });
  },
  _delete: async (id: string) => {
    const url = `/api/commissions/current?id=${id}`;
    return fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.error("Error:", error);
        return error;
      });
  },
  report: async (): Promise<any> => {
    const url = `/api/commissions/report/current`;

    return fetch(url, {
      method: "GET",
    })
      .then((response) => response.blob())
      .then((data) => {
         fileDownload(
          data,
          `${getFileDate()}-Reporte de comisiones especiales.xlsx`
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
