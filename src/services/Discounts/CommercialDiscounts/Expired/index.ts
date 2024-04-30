import Cookie from 'js-cookie';
import axios from 'axios';

const config = (token:string) => ({
  headers: {
    authorization: 'Bearer ' + token,
  },
});


export const expiredDiscountsService = {
  list: async ({ page, pageSize, searchTerm, sortField, selected }: {
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
    const token = Cookie.get('X-TOKEN-CORS') || '';
    const skus = selected.id === 'sku' ? searchTerm : '';
    const seller = selected.id === 'seller' ? searchTerm : ''
    const url = `/api/discounts/expired?page=${page}&pageSize=${pageSize}&skus=${skus}&seller=${seller}`
  
    try {
      const response = await axios.get(
        url,
        config(token)
      );
      return response.data;
    } catch (err) {
      return err;
    }
  }
}
