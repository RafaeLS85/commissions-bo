import React from "react";
import { Input } from "@/components/common/Table/Table.styles";
import { UseFormRegister } from "react-hook-form";
import { CurrentCommissionForm } from "@/types/commissions";
import { checkDecimals } from "@/lib/utils";
import { VALIDATIONS } from "@/constants/validations";

export const PercentInput = ({
  register,
  _id,
}: {
  register: UseFormRegister<CurrentCommissionForm>;
  _id: string;
}) => {
  return (
    <Input
      style={{ width: "70px" }}
      type="number"
      id={_id}
      data-id="percentInput"
      min="0"
      max="100"
      step="0.01"      
      dateEditable={false}     
      {...register("rate", {
        valueAsNumber: true,
        required: {
          value: true,
          message: VALIDATIONS.required,
        },
        max: {
          value: 100,
          message: VALIDATIONS.outOfRange,
        },
        min: {
          value: 0.01,
          message: VALIDATIONS.outOfRange,
        },
        validate: (value) =>
            checkDecimals(value) || VALIDATIONS.checkDecimals,
      })}
    />
  );
};
