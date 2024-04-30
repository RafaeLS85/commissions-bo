import { useEffect, useState } from "react";
import {
  CommercialDiscountForm,
  CommercialDiscountList,
  SubmitCreateDiscountProps,
  SubmitExpireDiscountProps,
  ExpireCommercialDiscountForm,
} from "../types";
import { COMMERCIAL_DISCOUNTS } from "@/components/Discounts/CommercialDiscounts/utils/constants";
import { currentDiscountsService } from "@/services/Discounts/CommercialDiscounts/Current";
import { showSuccess } from "@/lib/success";
import { showErrors } from "@/lib/errors";

const { create, deleteDiscount, expire, list, report } =
  currentDiscountsService;

const useCurrentDiscount = () => {
  const [discounts, setDiscounts] = useState<CommercialDiscountList>({
    items: [],
    count: 0,
  });
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>("");
  const [loading, setLoading] = useState(false);
  const [downloading, setDownloading] = useState(false);
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
  const [isCreate, setIsCreate] = useState(false);
  const [deleted, setDeleted] = useState(false); 

  const createDiscount = async (data: CommercialDiscountForm) => {
    const discount = await create(data);
    return discount;
  };

  const submitCreateDiscount = async ({
    reset,  
    getValues,
  }: SubmitCreateDiscountProps) => {
    const response = await createDiscount(getValues());     

    // renderErrors(response);
    showErrors({ title: "Error" });

    if (response._id) {      
      setIsCreate(!isCreate);
      reset();
      showSuccess({
        title: COMMERCIAL_DISCOUNTS.messages.success,
      })
    }
  };

  const expireDiscount = async (
    id: string,
    data: ExpireCommercialDiscountForm
  ) => {
    const discount = await expire(id, data);    
    return discount;
  };

  const submitExpireDiscount = async (
    id: string,
    { reset, getValues, closeModal }: SubmitExpireDiscountProps
  ) => {
    const response = await expireDiscount(id, getValues());

    // renderErrors(response); 
    showErrors({ title: "Error" });  

    if (response._id) {
      showSuccess({
        title: COMMERCIAL_DISCOUNTS.messages.expiredSuccess,
        // description: COMMERCIAL_DISCOUNTS.description.expiredSuccess,
      });
      setDeleted(!deleted);
      reset();
      closeModal();
    }
  };

  const deleteCurrentDiscount = async (id: string) => {
    const discount = await deleteDiscount(id);
    return discount;
  };

  const submitDelete = async ({
    id,    
    closeModal,
  }: {
    id: string;
    closeModal: () => void;
  }) => {
    const response = await deleteCurrentDiscount(id);

    // renderErrors(response);
    showErrors({ title: "Error" });

    if (response._id) {
      showSuccess({
        title: COMMERCIAL_DISCOUNTS.messages.deleteSuccess,
      });

      setDeleted(!deleted);
      closeModal();
    }
  };

  const getDiscounts = async () => {
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
  };

  const downloadReport = async () => {
    
    setDownloading(true)
    const response = await report(); 

    if(response.ok){
      setDownloading(false)
      showSuccess({
        title: COMMERCIAL_DISCOUNTS.messages.reportSuccess,
      })
    }else{
      setDownloading(false)
      // renderErrors(response)
      showErrors({ title: "Error" });
    }
  };

  const onCleanMessage = () => {
    setErrorMessage("");
  };

  useEffect(() => {
    setLoading(true);
    getDiscounts();
  }, [page, searchTerm, sortField, isCreate, deleted]);

  useEffect(() => {
    if (searchTerm !== "") {
      setLoading(true);
      getDiscounts();
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
      submitCreateDiscount,
      submitExpireDiscount,
      submitDelete,
      downloadReport,
    },
  };
};

export default useCurrentDiscount;
