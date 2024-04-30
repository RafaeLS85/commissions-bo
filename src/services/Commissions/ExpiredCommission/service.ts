type SortField = {
  order: string;
  field: string;
};
interface IOverdueCommission {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortField: SortField;
  selected: any;
}

export const expiredCommissionService = {
  get: async ({
    page,
    pageSize,
    searchTerm,
    sortField,
    selected,
  }: IOverdueCommission) => {
    const url = `/api/commissions/expired/get`;

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
      onlyExpired: true,
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
};
