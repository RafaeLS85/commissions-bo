import React from 'react';

  export interface Commissions {
    id: string;
    lastUpdateDate: Date;
    motiveId: string;
    rate: number;
    seller: string;
    sellerId: string;
    sku: string;
    user: string;
    validFrom: Date;
    validTo: Date;
    _id: string;
  }

  export interface UpdateCommission {
    _id?: string;
    rate: number;
    validTo: Date | string;
    validFrom?: Date | string;
    overwrite?: boolean;
  }

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

  export type UpdateCommissionResponse = {
    error?: Error,
    id?: string,
    lastUpdateDate?:Date,
    motiveId?: string,
    rate?: number,
    sellerId?:string,
    sku?:string,
    validFrom?:Date,
    validTo?:Date,
    _id?:string,
  };

  export type CreateCommission = {
    rate: number;
    sku: string;
    validTo: Date | string;
    validFrom: Date | string;
  }

  export type CurrentCommissionState = {
    currentCommissions: {
      items: Commissions[];
      count: number;
    };
    error: boolean;
    errorMessage: string | undefined;
    loading: boolean;
    page: number;
    sortField: {
      order: string; // "asc" | "desc"
      field: string;
    };
    searchTerm: string;
    pageSize: number;
    selected: any;
    updating: boolean;
    downloading: boolean;
  };


  export type ValidateCommission = {
    id: string;
    rate: number;
    sku: string;
    validTo: Date | string;
    validFrom?: Date | string;
  }

  export type CommissionReportProps = {
    actionsAlerts: {
      setMessage: React.Dispatch<React.SetStateAction<string>>;
      setDescription: React.Dispatch<React.SetStateAction<string>>;
      onCleanMessage: () => void;
      setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
      onClose: () => void;
    };
  }

  export type CurrentCommissionActions = {
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    setSortfield: React.Dispatch<React.SetStateAction<any>>;
    setSelected: React.Dispatch<React.SetStateAction<any>>;
    updateCurrentCommissions: (
      commision: UpdateCommission
    ) => Promise<UpdateCommissionResponse>;
    setUpdating: React.Dispatch<React.SetStateAction<boolean>>;
    validateUpdate: (id: string, formData: UpdateCommission) => Promise<any>;
    deleteCommission: (id: string) => Promise<any>;
    createCommission: (commission: CreateCommission) => Promise<any>;
    downloadReport: () => Promise<void>;
    // submitCreateCommission: (arg: any) => Promise<void>;
  };


