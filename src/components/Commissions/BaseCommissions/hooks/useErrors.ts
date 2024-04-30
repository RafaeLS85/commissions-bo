import { VALIDATIONS } from "@/constants/validations";
import { useErrorsOnPercent } from "@/hooks/useErrorsOnPercent";
import { useState } from "react";

export const useErrors = (open: boolean) => {
  const [selectedValueError, setSelectedValueError] = useState({
    hasError: false,
    message: "",
  }); 

  const {rateError, setRateError, setErrorsOnRate, validateOnSubmit} = useErrorsOnPercent(open);

  const setErrorOnSeller = (value: string | undefined) => {
    if (!open) return;

    if (value === "" || value === undefined) {
      setSelectedValueError({
        hasError: true,
        message: VALIDATIONS.required,
      });
    } else {
      setSelectedValueError({
        hasError: false,
        message: "",
      });
    }
  };

  return {
    selectedValueError,
    rateError,
    setErrorOnSeller,
    setErrorsOnRate,
    setSelectedValueError,
    setRateError,
    validateOnSubmit,
  };
};
