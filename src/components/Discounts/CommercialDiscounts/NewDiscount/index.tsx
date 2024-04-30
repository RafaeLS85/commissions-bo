import React, { useState } from "react";
import { FormContainer } from "./styles";
import { useForm } from "react-hook-form";
import { COMMERCIAL_DISCOUNTS } from "../utils/constants";
import { InputContainer } from "@/components/common/custom-bumeran-lib/InputContainer";
import { Input } from "@/components/common/custom-bumeran-lib/Input.styles";
import { TextArea } from "@/components/common/custom-bumeran-lib/TextArea.styles";
import {
  ButtonsContainer,
  ModalBody,
  Row,
} from "../../../common/custom-bumeran-lib/Modal.styles";
import {
  CommercialDiscountActions,
  CommercialDiscountForm,
} from "@/hooks/Discounts/CommercialDiscounts/types";
import { useAlerts } from "@/hooks/Alerts/useAlerts";
import Modal from "@/components/common/custom-bumeran-lib/Modal";
import { ModalHeader } from "@/components/common/custom-bumeran-lib/ModalHeader";
import { TertiaryButton } from "@/components/common/custom-bumeran-lib/TertiaryBtn.styles";
import { checkDecimals, compareDates, isBeforeToday, monthsDiff } from "@/lib/utils";
import { Button } from "@chakra-ui/react";

const NewDiscountPageForm = ({
  open,
  closeModal,
  actions,
}: {
  open: boolean;
  closeModal: () => void;
  actions: CommercialDiscountActions;
}) => {
  const { state: stateAlerts, actions: actionsAlerts } = useAlerts();
  const [creating, setIsCreating] = useState(false);

  const { register, handleSubmit, formState, reset, getValues } =
    useForm<CommercialDiscountForm>({
      mode: "all",
    });
  const { errors, isDirty } = formState;

  const onSubmit = async () => {
    setIsCreating(true)
    await actions.submitCreateDiscount({
      getValues,
      closeModal,
      reset,
    });
    setIsCreating(false)
  };

  const handleClose = () => {
    closeModal();
      reset();
  };

  const onClearForm = (e: React.SyntheticEvent) => {
    e.preventDefault();
    reset();
  };

  return (
    <>
      <Modal
        open={open}
        onClose={closeModal}
        data-id="NewDiscountModal"
        underlayClickExits={false}
        escapeExits={false}
      >
        <ModalHeader
          onClose={handleClose}
          title={COMMERCIAL_DISCOUNTS.createBtn}
        />

        <ModalBody width="510px">
          <FormContainer data-id="commercialDiscountsForm">
            <Row>
              <InputContainer
                errorMessage={errors.sku?.message}
                label={COMMERCIAL_DISCOUNTS.labels.sku}
                required
                id="sku"
              >
                <Input
                  type="number"
                  id="sku"
                  data-id="inputSku"
                  {...register("sku", {
                    required: {
                      value: true,
                      message: COMMERCIAL_DISCOUNTS.validations.required,
                    },
                  })}
                  hasError={Boolean(errors.sku?.message)}
                />
              </InputContainer>

              <InputContainer
                helpText={COMMERCIAL_DISCOUNTS.helpText.discount}
                errorMessage={errors.discount?.message}
                label={COMMERCIAL_DISCOUNTS.labels.discount}
                required
                id="discount"
              >
                <Input
                  type="number"
                  id="discount"
                  data-id="inputDiscount"
                  {...register("discount", {
                    valueAsNumber: false,
                    required: {
                      value: true,
                      message: COMMERCIAL_DISCOUNTS.validations.required,
                    },
                    min: {
                      value: 0.01,
                      message: COMMERCIAL_DISCOUNTS.validations.discount.min,
                    },
                    validate: (value) =>
                      checkDecimals(value) ||
                      COMMERCIAL_DISCOUNTS.validations.discount.decimal,
                  })}
                  hasError={Boolean(errors.discount?.message)}
                />
              </InputContainer>
            </Row>
            <Row>
              <InputContainer
                label={COMMERCIAL_DISCOUNTS.labels.validFrom}
                required
                errorMessage={errors.validFrom?.message}
                id="dateFrom"
              >
                <Input
                  type="date"
                  id="dateFrom"
                  data-id="inputDateFrom"
                  {...register("validFrom", {
                    required: {
                      value: true,
                      message: COMMERCIAL_DISCOUNTS.validations.required,
                    },
                    validate: {
                      beforeToday: (value) =>
                        isBeforeToday(value) ||
                        COMMERCIAL_DISCOUNTS.validations.validFrom
                          .isBeforeToday,
                    },
                  })}
                  hasError={Boolean(errors.validFrom?.message)}
                />
              </InputContainer>

              <InputContainer
                label={COMMERCIAL_DISCOUNTS.labels.validTo}
                required
                errorMessage={errors.validTo?.message}
                id="dateTo"
              >
                <Input
                  type="date"
                  id="dateTo"
                  data-id="inputDateTo"
                  placeholder="dd/mm/aaaa"
                  {...register("validTo", {
                    required: {
                      value: true,
                      message: COMMERCIAL_DISCOUNTS.validations.required,
                    },
                    validate: {
                      maxPeriod: (value) => {
                        const dateFrom = new Date(getValues("validFrom"));
                        const dateTo = new Date(value);
                        return (
                          monthsDiff(dateFrom, dateTo) ||
                          COMMERCIAL_DISCOUNTS.validations.validTo.maxPeriod
                        );
                      },
                      beforeDateFrom: (value) => {
                        if (getValues("validFrom") === undefined) {
                          return true;
                        }
                        return (
                          compareDates(value, getValues("validFrom")) ||
                          COMMERCIAL_DISCOUNTS.validations.validTo.isBeforeFrom
                        );
                      },
                    },
                  })}
                  hasError={Boolean(errors.validTo?.message)}
                />
              </InputContainer>
            </Row>
            <Row>
              <InputContainer
                label={COMMERCIAL_DISCOUNTS.labels.motive}
                required
                helpText={COMMERCIAL_DISCOUNTS.helpText.motive}
                errorMessage={errors.motive?.message}
                id="reason"
              >
                <TextArea
                  id="reason"
                  data-id="textareaReason"
                  {...register("motive", {
                    required: {
                      value: true,
                      message: COMMERCIAL_DISCOUNTS.validations.required,
                    },
                    maxLength: {
                      value: 100,
                      message:
                        COMMERCIAL_DISCOUNTS.validations.motive.maxLength,
                    },
                  })}
                  hasError={Boolean(errors.motive?.message)}
                />
              </InputContainer>
            </Row>
          </FormContainer>
        </ModalBody>

        <ButtonsContainer>
          <TertiaryButton onClick={onClearForm} data-id="clearBtn">
            Borrar
          </TertiaryButton>
          <Button
            variant="primary"
            size="s"
            id="submitBtn"
            data-id="submitBtn"
            onClick={handleSubmit(() => !creating ? onSubmit() : false )}
            isLoading={creating}
          >Crear</Button>
        </ButtonsContainer>
      </Modal>
    </>
  );
};

export default NewDiscountPageForm;
