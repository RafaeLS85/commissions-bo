import { useEffect, useState } from "react";
import { Commissions } from "../CurrentCommission/types";
import { expiredCommissionService } from "@/services/Commissions/ExpiredCommission/service";
import { showErrors } from "@/lib/errors";

const { get } = expiredCommissionService;

const useExpiredCommission = () => {
  const [expiredCommissions, setExpiredCommission] = useState<{
    items: Commissions[];
    count: number;
  }>({ items: [], count: 0 });
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>("");
  const [loading, setLoading] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<any>({
    id: "sku",
    label: "SKU",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortfield] = useState({
    order: "desc",
    field: "validTo",
  });
    
  const getExpiredCommissions = async () => {
    const expiredCommissions = await get({
      page,
      pageSize,
      searchTerm,
      sortField,
      selected,
    });
    setLoading(false);    
    // renderErrors(expiredCommissions);
    showErrors({ title: "Error" });
    setExpiredCommission(expiredCommissions); // {count:number, items: Commissions[]}
  };

  useEffect(() => {
    setLoading(true);
    getExpiredCommissions();
  }, [page, searchTerm]);

  useEffect(() => {
    if (searchTerm !== "") {
      setLoading(true);
      getExpiredCommissions();
    }
  }, [selected]);

  return {
    state: {
      expiredCommissions,
      error,
      errorMessage,
      loading,
      page,
      sortField,
      searchTerm,
      pageSize,
      selected,
    },
    actions: {
      setSearchTerm,
      setPage,
      setSortfield,
      setSelected,
    },
  };
};

export default useExpiredCommission;
