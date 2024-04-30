import { useEffect, useState } from "react";
import {
  UpdateCommission,
  UpdateCommissionResponse,
  Commissions,
  CreateCommission,
} from "./types";
import { COMMISSION_EXCEPTIONS } from "@/components/Commissions/SpecialCommissions/utils/constants";
import { currentCommissionService } from "@/services/Commissions/CurrentCommission/service";
import { showSuccess } from "@/lib/success";
import { isFuture, setUtcDateFrom, setUtcDateTo, setUtcForFutureCommission } from "@/lib/utils";
import { COMMISSION_CREATE_SUCCESS } from "@/constants/alerts";
import { showErrors } from "@/lib/errors";

const {
  create,
  _delete,
  get,
  report,
  update,
  validate,
} = currentCommissionService;


const useCurrentCommission = () => {
  const [currentCommissions, setCurrentCommission] = useState<{
    items: Commissions[];
    count: number;
  }>({ items: [], count: 0 });
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
    field: "lastUpdateDate",
  });
  const [updating, setUpdating] = useState(false);
  const [refetch, setRefetch] = useState(false);
  const [deleted, setDeleted] = useState(false);

  const getCurrentCommissions = async () => {
    const currentCommission = await get({
      page,
      pageSize,
      searchTerm,
      sortField,
      selected,
    });
    setLoading(false);
    // renderErrors(currentCommission);
    showErrors({ title: "Error" });
    setCurrentCommission(currentCommission); // {count:number, items: Commissions[]}
  };

  const updateCurrentCommissions = async (
    commision: UpdateCommission
  ): Promise<UpdateCommissionResponse> => {
    const updateCommission = await update( commision );
    // renderErrors(updateCommission);
    showErrors({ title: "Error" });
    setLoading(true);
    getCurrentCommissions();
    return updateCommission;
  };

  const createCommission = async (commission: CreateCommission) => {
    const commision = await create(commission);

    // renderErrors(commision);
    showErrors({ title: "Error" });

    if(commision._id){
      showSuccess({
        title: COMMISSION_CREATE_SUCCESS.title,
      })
      setRefetch(!refetch);      
    }

    return commision;
  };

  const validateUpdate = async (id: string, formData: UpdateCommission) => {
    const row = currentCommissions?.items.filter(
      (com: Commissions) => id === com._id
    );

    const data = {
      ...formData,
      validFrom: formData.validFrom
        ? formData.validFrom
        : undefined,
      id,
      sku: row[0].sku,
    };

    const response = await validate(data);
    return response;
  };

  const deleteCommission = async (id: any) => {
    // console.log({id})
    const response = await _delete(id);

    if (response?.error) {
      console.error(response?.error);
    } else {
      setDeleted(!deleted);
    }

    return response;
  };

  const downloadReport = async () => {
    setDownloading(true)
    const response = await report();

    if(response.ok){
      setDownloading(false)
      showSuccess({
        title: COMMISSION_EXCEPTIONS.messages.reportSuccess,
      })
    }else{
      setDownloading(false)
      // renderErrors(response)
      showErrors({ title: "Error" });
    }

  };

  useEffect(() => {
    if (searchTerm !== "") {
      setLoading(true);
      getCurrentCommissions();
    }
  }, [selected]);

  useEffect(() => {
    setLoading(true);
    getCurrentCommissions();
  }, [page, searchTerm, sortField, refetch, deleted]);

  return {
    state: {
      currentCommissions,
      error,
      errorMessage,
      loading,
      page,
      sortField,
      searchTerm,
      pageSize,
      selected,
      updating,
      downloading
    },
    actions: {
      setSearchTerm,
      setPage,
      setSortfield,
      setSelected,
      updateCurrentCommissions,
      setUpdating,
      validateUpdate,
      deleteCommission,
      createCommission,
      downloadReport,
    },
  };
};

export default useCurrentCommission;
