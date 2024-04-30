import React from "react";
import { Input } from "@/components/common/Table/Table.styles";
import { UseFormGetValues, UseFormRegister } from "react-hook-form";
import { type CurrentCommissionForm } from "@/types/commissions";
import { VALIDATIONS } from "@/constants/validations";
import formatedDate, { compareDates, compareDatesUTCString, isBeforeToday } from "@/lib/utils";

export const ValidToInput = ({
  _id,
  register,
  validFrom, // "yyyy-mm-ddT00:00:00.0000Z "
  getValues, // getValues().validFrom "yyyy-mm-dd"
  isFutureCommission,
}: {
  register: UseFormRegister<CurrentCommissionForm>;
  _id: string;
  validFrom: Date;
  getValues: UseFormGetValues<CurrentCommissionForm>;
  isFutureCommission: boolean;
}) => {  

    return (
      <Input
        id={_id}
        data-id="validToInput"
        type="date"
        placeholder="dd-mm-yyyy"
        min={formatedDate(new Date())}
        dateEditable
        {...register("validTo", {
          // valueAsDate: true,
          required: {
            value: true,
            message: VALIDATIONS.required,
          },
          validate: {
            beforeDateFrom: (value) => {

              const vf = getValues().validFrom;

              if(!isFutureCommission){
                return compareDatesUTCString(value, validFrom) || VALIDATIONS.isDateValid;
              }              

              if(vf){
                return compareDates(value, vf) || VALIDATIONS.isDateValid;
              }

            },
            beforeToday: (value) =>
              isBeforeToday(value) || VALIDATIONS.isBeforeToday,
          },
        })}
      />
    );
  }

export const ValidFromInput = ({
  _id,
  register,
}: {
  register: UseFormRegister<CurrentCommissionForm>;
  _id: string;
}) => {
  return (
    <Input
      id={_id}
      data-id="validFromInput"
      type="date"
      placeholder="dd-mm-yyyy"
      min={formatedDate(new Date())}
      dateEditable
      {...register("validFrom", {
        // valueAsDate: true,
        required: {
          value: true,
          message: VALIDATIONS.required,
        },
        validate: {
          beforeToday: (value) => {
            if(value){
              return isBeforeToday(value) || VALIDATIONS.isBeforeToday;                  
            }
          }
        },
      })}
    />
  );
};
