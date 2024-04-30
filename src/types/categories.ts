export type Category = {
    id: string;
    label: string;
    parentId: string | null;
    isChecked: boolean;
    commission: number | null;
    subcategory: Category[]; 
    count?: number | null;
  };  
  
  export type CategoryApi = {
    id: string;
    name: string;
  }