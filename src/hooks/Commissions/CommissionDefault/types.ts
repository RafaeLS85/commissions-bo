export type CommissionDefaultState = {
  commissionDefault: string | undefined;
  defaultValue: number | undefined;
  rateError: {
      hasError: boolean;
      message: string;
  };
  isDirty: boolean;
  loading: boolean;
  reFetchData: boolean;
}

export type CommissionDefaultActions = {
  updateCommission: ({ commissionDefault, }: {
      commissionDefault: string | undefined;
  }) => Promise<void>;
  setErrorsOnRate: (value: string | number | undefined) => void;
  setCommissionDefault: React.Dispatch<React.SetStateAction<string | undefined>>;
  validateOnSubmit: (value: string | number | undefined) => void;
  setRefetch: React.Dispatch<React.SetStateAction<boolean>>;  
}
