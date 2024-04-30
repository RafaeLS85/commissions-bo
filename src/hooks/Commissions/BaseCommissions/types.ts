import { BaseCommissionData } from "@/types/commissions"

export type BaseCommissionState = {
    commissions: BaseCommissionData,
    page: number,
    pageSize: number,
    seller: string,
    loading: boolean,
    searchTerm: string,
    sortField: {
        order: string; // "asc" | "desc"
        field: string;
    };   
    error: {
        hasError: boolean,
        message: string
    },  
    selectedValue: any | undefined,
    rateInput: number, 
    refetch: boolean,
    sellers: string[],
    refetchSellers: boolean   
}
export type BaseCommissionActions = {
    setPage: (page: number) => void,
    setSearchTerm: (searchTerm: string) => void,
    createBaseCommission: ({ seller, rate }: { seller: string, rate: number }) => Promise<void>,
    setError: ({ hasError, message }: { hasError: boolean, message: string }) => void,
    updateBaseCommission: ({ seller, rate }: { seller: string, rate: number }) => Promise<void>,
    setSelectedValue: (value: any) => void,
    setRateInput: (value: number) => void,
    setRefetch: (value: boolean) => void,
    deleteCommission: (id: string) => Promise<any>,
    setRefetchSellers: (value: boolean) => void
}