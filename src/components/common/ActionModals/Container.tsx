import React from "react";
import dynamic from "next/dynamic";

//lazy loading
const CancelModal = dynamic(() => import("./CancelModal"));
const ErrorModal = dynamic(() => import("./ErrorModal"));
const SuccessModal = dynamic(() => import("./SuccessModal"));
const ConfirmModal = dynamic(() => import("./ConfirmModal"));
const DeleteModal = dynamic(() => import("./DeleteModal"));

import { EditableTableActions, EditableTableState } from "../../Commissions/SpecialCommissions/CurrentCommissions/hooks/types";
import { UseFormGetValues, UseFormReset } from "react-hook-form";
import { CurrentCommissionForm } from "@/types/commissions";


interface Props {
  modalState: any;
  modalActions: any;
  actions: EditableTableActions;
  reset: UseFormReset<CurrentCommissionForm>;
  state: EditableTableState;
  getValues: UseFormGetValues<CurrentCommissionForm>;
  deleteId: string;
  setDeleteId: React.Dispatch<React.SetStateAction<string>>
}

export default function ModalContainer({
  modalState,
  modalActions,
  actions,
  reset,
  state,
  getValues,
  deleteId,
  setDeleteId
}: Props) {
  return (
    <>
      <CancelModal
        open={modalState.openCancel}
        closeModal={modalActions.closeCancelModal}
        setActive={actions.setActiveEdit}
        reset={reset}
        key="cancel-modal"
      />
      {state.errorMessage && (
        <ErrorModal
          closeModal={modalActions.closeErrorModal}
          errors={state.errorMessage}
          open={modalState.openError}
          key="error-modal"
        />
      )}
      <SuccessModal
        open={modalState.openSuccess}
        closeModal={modalActions.closeSuccessModal}
        setActive={actions.setActiveEdit}
        reset={reset}
        key="success-modal"
      />
      <ConfirmModal
        open={modalState.openConfirm}
        closeModal={modalActions.closeConfirmModal}
        setActive={actions.setActiveEdit}
        update={actions.update}
        getFormValues={getValues}
        key="confirm-modal"
      />
      <DeleteModal 
        open={modalState.openDelete}
        closeModal={modalActions.closeDeleteModal}
        handleDelete={actions.handleDelete}
        id={deleteId}
        setDeleteId={setDeleteId}
        sku={state.deleteSku || ""}
        key="delete-modal"
      />
    </>
  );
}
