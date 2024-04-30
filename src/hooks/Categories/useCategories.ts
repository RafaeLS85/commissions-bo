import { useEffect, useState } from "react";
import { categoriesService } from "@/services/Categories";
import { Category } from "@/types/categories";

export const useCategories = () => {
  const [categories, setCategories] = useState<{
    items: Category[];
    count: number;
  }>({ items: [], count: 0 });
  const [page, setPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const getCategories = async () => {
    setLoading(true);
    const categories = await categoriesService.get({
      category: "",
      page: 1,
      pageSize: 10,
      sortField: { order: "desc", field: "name" },
    });

    setCategories({ items: categories, count: 0 });
    setLoading(false);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return {
    state: { categories, page, searchTerm, loading },
    actions: { setPage, setSearchTerm, getCategories },
  };
};
