import { useEffect, useState } from "react";
import {
  CommercialDiscountList,
  Error,
  Response,
} from "../types";
import { expiredDiscountsService } from "@/services/Discounts/CommercialDiscounts/Expired";
import { showErrors } from "@/lib/errors";

const { list } = expiredDiscountsService;

const useExpiredDiscount = () => {
  const [discounts, setDiscounts] = useState<CommercialDiscountList>({
    items: [],
    count: 0,
  });
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>("");
  const [loading, setLoading] = useState(false);
  const [downloading] = useState(false);
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

  const getExpiredDiscounts = async () => {
    const discounts = await list({
      page,
      pageSize,
      sortField,
      searchTerm,
      selected,
    });
    setLoading(false);
    // renderErrors(discounts);
    showErrors({ title: "Error" });
    setDiscounts(discounts);
  }

  const onCleanMessage = () => {
    setErrorMessage("");
  }; 

  useEffect(() => {
    setLoading(true);
    getExpiredDiscounts();
  }, [page, searchTerm, sortField]);

  useEffect(() => {
    if (searchTerm !== "") {
      setLoading(true);
      getExpiredDiscounts();
    }
  }, [selected]);

  return {
    state: {
      discounts,
      error,
      errorMessage,
      loading,
      page,
      sortField,
      searchTerm,
      pageSize,
      selected,
      downloading,
    },
    actions: {
      setSearchTerm,
      setPage,
      setSortfield,
      setSelected,
      onCleanMessage,
    },
  };
};

export default useExpiredDiscount;
