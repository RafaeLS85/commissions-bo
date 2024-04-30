import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Modal from "@/components/common/custom-bumeran-lib/Modal";

import { ButtonsContainer, Row, ModalBody } from "@/components/common/custom-bumeran-lib/Modal.styles";
import { InputContainer } from "@/components/common/custom-bumeran-lib/InputContainer";
import { Input } from "@/components/common/custom-bumeran-lib/Input.styles";
import { NewCommisionForm } from "@/types/commissions";
import { CurrentCommissionActions, UpdateCommissionResponse } from "@/hooks/Commissions/CurrentCommission/types";
import { ModalHeader } from "@/components/common/custom-bumeran-lib/ModalHeader";
import formatedDate, { checkDecimals, compareDates, isBeforeToday } from "@/lib/utils";
import { VALIDATIONS } from "@/constants/validations";
import { NEW_COMMISSION_FORM } from "@/constants/commissions";
import ExitModalWithParent from "@/components/common/ActionModals/ExitModalWithParent";
import { Button } from "@chakra-ui/react";

export const FormContainer = styled.form`
  display: flex;
  width: 100%;
  max-width: 516px;
  flex-direction: column;
  gap: 1rem;
`;

const ModalPageForm = ({
  open,
  closeModal,
  actions,
}: {
  open: boolean;
  closeModal: () => void;
  actions: CurrentCommissionActions;
}) => {
    const [creating, setIsCreating] = useState(false);
    const {labels, helpTexts, title} = NEW_COMMISSION_FORM;
    const [openCancelModal, setOpenCancelModal] = React.useState(false);

    const { register, handleSubmit, formState, reset, getValues } =
    useForm<NewCommisionForm>({
      mode: "onBlur",
    });
  const { errors, isDirty } = formState;

  const handleClose = () => {    

    if (isDirty) {
      setOpenCancelModal(true);
    }

    if (!isDirty) {
      closeModal();
      reset();
    }
  };

  const onSubmit = async () => {
    setIsCreating(true)
    const response: UpdateCommissionResponse = await actions.createCommission(
      getValues()
    );

    setIsCreating(false)
    if (response.id) {     
      reset();
    }
  };   

  return (
    <>
      <Modal
        open={open}
        onClose={closeModal}
        data-id="newCommissionModal"
        underlayClickExits={false}
        escapeExits={false}
      >

        <ModalHeader
          onClose={handleClose}
          title={title}
        />

        <ModalBody width="510px">
          <FormContainer data-id="newCommissionForm">
            <Row>
              <InputContainer
                errorMessage={errors.sku?.message}
                label={labels.sku}
                required
                id="sku"
              >
                <Input
                    id="sku"
                    type="text"                   
                    {...register("sku", {
                      required: {
                        value: true,
                        message: VALIDATIONS.required,
                      },
                    })}
                    hasError={Boolean(errors.sku?.message)}
                  />
              </InputContainer>

              <InputContainer
                errorMessage={errors.rate?.message}
                label={labels.rate}
                required
                id="rate"
                helpText={helpTexts.rate}
              >
                <Input
                  type="number"
                  id="rate"
                  data-id="percentInput"
                  min="0"
                  max="100"
                  step="0.01"                  
                  hasError={Boolean(errors.rate?.message)}
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
              </InputContainer>
            </Row>
            <Row>
              <InputContainer
                label={labels.validFrom}
                required
                errorMessage={errors.validFrom?.message}
                id="validFrom"
              >
               <Input
                id="validFrom"
                type="date"
                placeholder="dd-mm-yyyy"
                min={formatedDate(new Date())}
                hasError={Boolean(errors.validFrom?.message)}
                {...register("validFrom", {
                  required: {
                    value: true,
                    message: VALIDATIONS.required,
                  },
                  validate: {
                    beforeToday: (value) =>
                      isBeforeToday(value) || VALIDATIONS.isBeforeToday,
                  },
                })}
              />
              </InputContainer>

              <InputContainer
                label={labels.validTo}
                required
                errorMessage={errors.validTo?.message}
                id="validTo"
              >
                <Input
                id="validTo"
                type="date"
                placeholder="dd-mm-yyyy"
                min={formatedDate(new Date())}
                hasError={Boolean(errors.validTo?.message)}
                {...register("validTo", {
                  required: {
                    value: true,
                    message: VALIDATIONS.required,
                  },
                  validate: {
                    beforeDateFrom: (value) => {
                      if (getValues().validFrom === "") {
                        return true;
                      }
                      return (
                        compareDates(value, getValues().validFrom) ||
                        VALIDATIONS.isDateValid
                      );
                    },
                    beforeToday: (value) =>
                      isBeforeToday(value) || VALIDATIONS.isBeforeToday,
                  },
                })}
              />
              </InputContainer>
            </Row>
            <ButtonsContainer>              
              <Button                
                variant="primary"
                size="s"
                data-id="submitBtn"
                onClick={handleSubmit(() =>{ !creating ? onSubmit() : false })}
                isLoading={creating}
              >Crear</Button>
            </ButtonsContainer>
          </FormContainer>

        </ModalBody>
      </Modal>
      <ExitModalWithParent
        id="newCommissionExitModal"
        closeParentModal={closeModal}
        open={openCancelModal}
        closeModal={() => setOpenCancelModal(false)}
        reset={reset}
      />
    </>
  );
};

export default ModalPageForm;

















