import React from "react";
import { UseFormGetValues, UseFormReset } from "react-hook-form";


export type CommercialDiscountForm = {
    sku: string;
    discount: number;
    validFrom: Date;
    validTo: Date;
    motive: string;
    _id: string;
    sellerId?: string;
    seller?: string;
    inactiveReason?: string;
}

export type ExpireCommercialDiscountForm = {
  motive: string;
}

export type CommercialDiscountList = {
  count: number;
  items: CommercialDiscountForm[];
}


export type ErrorState = {
    sku: {
        message: string;
        hasError: boolean;
    },
    discount: {
        message: string;
        hasError: boolean;
    },
    dateFrom: {
        message: string;
        hasError: boolean;
    },
    dateTo: {
        message: string;
        hasError: boolean;
    },
    reason: {
        message: string;
        hasError: boolean;
    }
};

export type Response = {
    data: {
      error: {
        message: string
      }
    },
    statusText?: string
  }

  export type Error = {
    message: {
      message:string,
      status:string,
      type:string
    },
  }

  export type CommercialDiscountState = {
    discounts: CommercialDiscountList;
    error: boolean;
    errorMessage: string | undefined;
    loading: boolean;
    page: number;
    // sortField: string;
    sortField: {
      order: string; // "asc" | "desc"
      field: string;
    };
    searchTerm: string;
    pageSize: number;
    selected: any;
    downloading: boolean;
  }

  export type SubmitCreateDiscountProps = {
    reset: UseFormReset<CommercialDiscountForm>;    
    getValues:UseFormGetValues<CommercialDiscountForm>;
    closeModal?: () => void;
  }

  export type DiscountReportProps = {
    actionsAlerts: {
      setMessage: React.Dispatch<React.SetStateAction<string>>;
      setDescription: React.Dispatch<React.SetStateAction<string>>;
      onCleanMessage: () => void;
      setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
      onClose: () => void;
    };
  }

  export type SubmitExpireDiscountProps = {
    reset: UseFormReset<ExpireCommercialDiscountForm>;
    actionsAlerts?: {
      setMessage: React.Dispatch<React.SetStateAction<string>>;
      setDescription: React.Dispatch<React.SetStateAction<string>>;
      onCleanMessage: () => void;
      setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
      onClose: () => void;
    };
    getValues:UseFormGetValues<ExpireCommercialDiscountForm>;
    closeModal: () => void;
  }

  export type CommercialDiscountActions = {
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    // setSortfield: React.Dispatch<React.SetStateAction<string>>;
    setSortfield: React.Dispatch<React.SetStateAction<any>>;
    setSelected: React.Dispatch<React.SetStateAction<any>>;
    onCleanMessage: () => void;
    // onClearForm: (e: React.SyntheticEvent<Element, Event>, reset: UseFormReset<CommercialDiscountForm>) => void;
    submitCreateDiscount: (arg: SubmitCreateDiscountProps) => Promise<void>;
    submitExpireDiscount: (id: string, arg: SubmitExpireDiscountProps) => Promise<void>;
    submitDelete: (arg: {
      id: string,
      actionsAlerts: {
          setMessage: React.Dispatch<React.SetStateAction<string>>;
          setDescription: React.Dispatch<React.SetStateAction<string>>;
          onCleanMessage: () => void;
          setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
          onClose: () => void;
         },
      closeModal: () => void
    }) => Promise<void>;
    downloadReport: () => Promise<void>;
  }


  export type ExpiredDiscountActions = {
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    setSortfield: React.Dispatch<React.SetStateAction<any>>;
    setSelected: React.Dispatch<React.SetStateAction<any>>;
    onCleanMessage?: () => void;
  }

