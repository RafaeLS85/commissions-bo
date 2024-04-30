import React, { SetStateAction } from "react";
import {
  CurrentCommissionActions,
  CurrentCommissionState,
  UpdateCommission,
} from "@/hooks/Commissions/CurrentCommission/types";
import { CurrentCommissionForm } from "@/types/commissions";

export interface EditableTableProps {
  isDirty: boolean;
  modalActions: any;
  reset: (arg: CurrentCommissionForm) => void;
  currentCommissionState: CurrentCommissionState;
  currentCommissionActions: CurrentCommissionActions;
}

export type EditableTableState = {
  errorMessage: string | undefined;
  activeEdit: string;
  deleteSku: string | undefined
};

export type EditableTableActions = {
  handleEdit: (data: {
    _id: string;
    rate: number;
    validTo: Date;
    validFrom: Date;
    isFutureCommission: boolean;
  }) => void;
  handleCancelBtn: () => void;
  onSubmit: (data: CurrentCommissionForm) => void;
  setActiveEdit: React.Dispatch<React.SetStateAction<string>>;
  handleOrder: (field: string) => void;
  update: (data: UpdateCommission) => Promise<void>;
  handleDelete: (id: string) => Promise<void>;
  setDeleteSku: React.Dispatch<SetStateAction<string | undefined>>
};
