import { BASE_COMMISSIONS } from "@/constants/commissions";
import { BaseCommissionActions } from "@/hooks/Commissions/BaseCommissions/types";
import { showSnackbar } from "@/lib/notify";
import { useState } from "react";
import { UseFormReset } from "react-hook-form";

export const useEditableTable = ({
  reset,
  isDirty,
  actions,
  setOpenCancelModal
}: {
  reset: UseFormReset<{
    rate: number;
  }>,
  isDirty: boolean,
  actions: BaseCommissionActions,
  setOpenCancelModal: (arg: boolean) => void
}) => {
  const [activeEdit, setActiveEdit] = useState<string>("");

  const handleEdit = ({
    _id,
    rate,   
  }: {
    _id: string;
    rate: number;
   
  }) => {
    reset({ rate });
    setActiveEdit(_id);
  };

  const handleCancelBtn = () => {
    if (isDirty) {
      setOpenCancelModal(true);
      return null;
    }
    setActiveEdit("");
    return null;
  }; 

  const onSubmit = async ({rate, sellerId}: {rate: number, sellerId: string}) => {
    if (!isDirty) {
      setActiveEdit("");
      return;
    }   

    const res: any = actions.updateBaseCommission({
        seller: sellerId,
        rate,
      });
  
      if (res) {
        actions.setError({ hasError: false, message: "" });
        showSnackbar(BASE_COMMISSIONS.update);
        setActiveEdit("");
      }   
   
  };  

  return {
    state: {
      activeEdit,
    },
    actions: {
      handleEdit,
      handleCancelBtn,
      onSubmit,   
      setActiveEdit,            
    },
  };
};
