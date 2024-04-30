import { category_API_test } from "./utils/mock_data";

export const categoriesService = {
    get: async ({
      category,
      page,
      pageSize,
      sortField,
    }: {
      category: string;
      page: number;
      pageSize: number;
      sortField: { order: string; field: string };
    }) => {
      return fetch(
        `/api/categories`
      )
        .then((response) => response.json())
        .then((data) => {  
          console.log(data)  
          //mapping the data..    
          return category_API_test;
        })
        .catch((error) => {
          console.error(error);
          return error;
        });
    },   
  };
  