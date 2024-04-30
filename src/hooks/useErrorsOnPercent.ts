import { VALIDATIONS } from "@/constants/validations";
import { checkDecimals } from "@/lib/utils";
import { useState } from "react";

export const useErrorsOnPercent = (open: boolean) => {
  const [rateError, setRateError] = useState({ hasError: false, message: "" });

  const validateOnSubmit = (value: number | undefined | string) => {

    if (value === undefined || value === null || value === "") {
      setRateError({
        hasError: true,
        message: VALIDATIONS.required,
      });
      return;
    }

    const f_value = Number(value);
    
    if (f_value === 0) {
      setRateError({
        hasError: true,
        message: VALIDATIONS.outOfRange,
      });
    }

    if (isNaN(f_value)) {
      setRateError({
        hasError: true,
        message: VALIDATIONS.required,
      });
    }
  };

  const setErrorsOnRate = (value: number | undefined | string) => {
    
    if (!open) return;

    if (value === undefined || value === null || value === "") {
      setRateError({
        hasError: false,
        message: "",
      });
      return;
    }

    const f_value = Number(value);

    if (!checkDecimals(f_value)) {
      setRateError({
        hasError: true,
        message: VALIDATIONS.checkDecimals,
      });
      return;
    }

    if (f_value < 0) {
      setRateError({
        hasError: true,
        message: VALIDATIONS.outOfRange,
      });
    }
    
    if (f_value > 100) {
      setRateError({
        hasError: true,
        message: VALIDATIONS.outOfRange,
      });
    }
    
    if (f_value > 0 && f_value <= 100) {
      setRateError({
        hasError: false,
        message: "",
      });
    }
  };

  return {
    rateError,
    setErrorsOnRate,
    setRateError,
    validateOnSubmit,
  };
};
