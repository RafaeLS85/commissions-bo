import { useEffect, useState } from "react";
import { EditableTableProps } from "./types";
import { UpdateCommission } from "@/hooks/Commissions/CurrentCommission/types";
import { CurrentCommissionForm } from "@/types/commissions";
import formatedDate from "@/lib/utils";
import { showSnackbar } from "@/lib/notify";
import { BASE_COMMISSIONS } from "@/constants/commissions";
import { showErrors } from "@/lib/errors";

export const useEditableTable = ({
  isDirty,
  modalActions,
  reset,
  currentCommissionState,
  currentCommissionActions,
}: EditableTableProps) => {
  const { page, sortField } = currentCommissionState;
  const {
    updateCurrentCommissions,
    validateUpdate,
    deleteCommission,
    setSortfield,
  } = currentCommissionActions;

  const [activeEdit, setActiveEdit] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [deleteSku, setDeleteSku] = useState<string | undefined>();

  useEffect(() => {
    if (activeEdit) {
      setActiveEdit("");
    }
  }, [page]);

  const update = async (data: UpdateCommission) => {

    const { error, _id } = await updateCurrentCommissions({
      _id: activeEdit,
      rate: data.rate,
      validTo: data.validTo,
      validFrom:
        data.validFrom
          ? data.validFrom
          : undefined,
      overwrite: data.overwrite,
    });

    if (error) {
      setErrorMessage(error.message?.message);
      modalActions.openErrorModal();
      return;
    }
    if (_id) {      
      showSnackbar(BASE_COMMISSIONS.update);
      setErrorMessage(undefined);
      setActiveEdit("");
    }
  };

  const onSubmit = async (data: CurrentCommissionForm) => {
    if (!isDirty) {
      setActiveEdit("");
      return;
    }

    const validate = await validateUpdate(activeEdit, data);

    if (validate.count > 0) {
      modalActions.openConfirmModal();
    }

    if(validate.count === 0){
      update(data);
    }
    //TODO handle errors on validate..
  };

  const handleDelete = async (id: string): Promise<void> => {    

    const response = await deleteCommission(id);

    // renderErrors(response);
    showErrors({ title: "Error al eliminar la comisión" });

    if (response.id) {      
      showSnackbar(BASE_COMMISSIONS.delete);
    }

    return response;
  };

  const handleCancelBtn = () => {
    if (isDirty) {
      modalActions.openCancelModal();
      return null;
    }
    setActiveEdit("");
    return null;
  };

  const handleEdit = ({
    _id,
    rate,
    validTo,
    validFrom,
    isFutureCommission,
  }: {
    _id: string;
    rate: number;
    validTo: Date;
    validFrom: Date;
    isFutureCommission: boolean;
  }) => {
    if (isFutureCommission) {
      reset({
        rate,
        validTo: formatedDate(validTo),
        validFrom: formatedDate(validFrom),
      });
    } else {
      reset({ rate, validTo: formatedDate(validTo) });
    }
    setActiveEdit(_id);
  };

  const handleOrder = (field: string) => {
    setSortfield({ field, order: sortField.order === "asc" ? "desc" : "asc" });
  };

  return {
    state: { errorMessage, activeEdit, deleteSku },
    actions: {
      handleEdit,
      handleCancelBtn,
      onSubmit,
      setActiveEdit,
      handleOrder,
      update,
      handleDelete,
      setDeleteSku
    },
  };
};