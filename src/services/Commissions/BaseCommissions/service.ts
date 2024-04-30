export const commissionBaseService = {
  get: async ({
    seller,
    page,
    pageSize,
    sortField,
  }: {
    seller: string;
    page: number;
    pageSize: number;
    sortField: { order: string; field: string };
  }) => {
    return fetch(
      `/api/commissions/base?seller=${seller}&page=${page}&pageSize=${pageSize}&sortField=${sortField.field}&sortOrder=${sortField.order}`
    )
      .then((response) => response.json())
      .then((data) => {        
        return data;
      })
      .catch((error) => {
        console.error(error);
        return error;
      });
  },
  getAllSellers: async () => {
    return fetch(`/api/commissions/base/sellers`)
      .then((response) => response.json())
      .then((data) => {
        const options = data.items.map((seller: any) => ({
          id: seller.id,
          label: seller.description,
        }));
        return options;
      })
      .catch((error) => {
        console.error(error);
        return error;
      });
  },
  create: async ({ seller, rate }: { seller: string; rate: number }) => {
    // sellerId, defaultCommission

    return fetch(`/api/commissions/base`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ seller, rate }),
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
  update: async ({ seller, rate }: { seller: string; rate: number }) => {
    return fetch(`/api/commissions/base`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ seller, rate }),
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
  _delete: async (id: string) => {
    const url = `/api/commissions/base?id=${id}`; 
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
};
