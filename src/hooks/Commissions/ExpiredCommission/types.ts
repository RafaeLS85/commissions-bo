import { Commissions } from "../CurrentCommission/types";
import React from "react";

export type ExpiredCommissionState = {
    expiredCommissions: {
      items: Commissions[];
      count: number;
    };
    error: boolean;
    errorMessage: string | undefined;
    loading: boolean;
    page: number;
    sortField: {
        order: string; // -1 | 1 | 'asc' | 'ascending' | 'desc' | 'descending'
        field: string;
      };
    searchTerm: string;
    pageSize: number;
    selected: any;
  }
  
  export type ExpiredCommissionActions = {
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    setSortfield: React.Dispatch<React.SetStateAction<any>>;
    setSelected: React.Dispatch<React.SetStateAction<any>>;
  }
   