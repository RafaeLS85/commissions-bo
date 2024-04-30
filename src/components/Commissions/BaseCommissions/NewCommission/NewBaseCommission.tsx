import React, { useEffect, useRef, useState } from "react";
import { Button, ButtonGroup, Grid, GridItem, Select, useToast } from '@chakra-ui/react'
import styled from "styled-components";
import Modal from "@/components/common/custom-bumeran-lib/Modal";
import {
  ButtonsContainer,
  ModalBody,
} from "@/components/common/custom-bumeran-lib/Modal.styles";
import { ModalHeader } from "@/components/common/custom-bumeran-lib/ModalHeader";
import { InputContainer } from "@/components/common/custom-bumeran-lib/InputContainer";
import { Input } from "@/components/common/custom-bumeran-lib/Input.styles";
import { commissionBaseService } from "@/services/Commissions/BaseCommissions/service";

import {
  BaseCommissionActions,
  BaseCommissionState,
} from "@/hooks/Commissions/BaseCommissions/types";
import { COMMISSION_HELP_TEXT } from "@/constants";
import { useErrors } from "../hooks/useErrors";
import { CREATE_MODAL } from "@/constants/commissions/modals";
import ExitModalWithParent from "@/components/common/ActionModals/ExitModalWithParent";

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 516px;
  flex-direction: column;
  gap: 1rem;
`;

const NewBaseCommissionModal = ({
  open,
  closeModal,
  state,
  actions,
}: {
  open: boolean;
  closeModal: () => void;
  state: BaseCommissionState;
  actions: BaseCommissionActions;
}) => {
  // TODO: UNIFICAR LOS HOOKS - REFACTORIZAR
  const [openCancelModal, setOpenCancelModal] = React.useState(false);
  const { commission, createBtn, seller, title } = CREATE_MODAL;
  const rateRef = useRef<HTMLInputElement>(null);
  const [selectedValue, setSelectedValue] = useState<any>({
    id: "",
    label: "",
  });  
  const [rateInput, setRateInput] = useState<string>();  
  const [isDirty, setIsDirty] = useState(false);
  const [creating, setIsCreating] = useState(false);
  const toast = useToast()
  const statuses = ['success', 'error', 'warning', 'info']

  const {
    rateError,
    selectedValueError,
    setErrorsOnRate,
    setErrorOnSeller,
    setRateError,
    setSelectedValueError,
    validateOnSubmit
  } = useErrors(open);

  const handleClose = () => {
    if (isDirty) {
      setOpenCancelModal(true);
    }

    if (!isDirty) {
      closeModal();
      reset();
    }
  };

  const createBaseCommission = async ({
    seller,
    rate,
  }: {
    seller: string;
    rate: number;
  }) => {
    const data = await commissionBaseService.create({ seller, rate });

    // renderErrors(data);

    if (data._id) {
      // showSuccess({
      //   title: CREATE_MODAL.successMsg,
      // });
      toast({
        title: `${status} toast`,
        status: 'success',
        isClosable: true,
      })
      reset();
      actions.setRefetch(!state.refetch); // re-fetch commissions
      actions.setRefetchSellers(!state.refetchSellers);  //re-fetch sellers      
      closeModal();
    }
  };

  const submit = async () => {
    setIsCreating(true)

    setErrorOnSeller(selectedValue?.label);
    setErrorsOnRate(rateInput);
    validateOnSubmit(rateInput);

    if (selectedValue?.id && Number(rateInput) > 0 && !rateError.hasError ) {
      await createBaseCommission({
        seller: selectedValue.id,
        rate: Number(rateInput),
      });
    }
    setIsCreating(false)
  };  

  const reset = () => {
    setIsDirty(false);

    setSelectedValueError({
      hasError: false,
      message: "",
    });

    setRateError({
      hasError: false,
      message: "",
    });

    if (rateRef.current && rateRef.current.value) {
      rateRef.current.value = "";
      setRateInput(undefined);
    }

    setSelectedValue({ id: "", label: "" });
  };

  const verifyDirty = () => {
    if (selectedValue?.id !== undefined) {
      setIsDirty(true);
    }
    if (rateInput !== undefined) {
      setIsDirty(true);
    }
  };  

  useEffect(() => {
    if (!open) return;
    verifyDirty();
    setErrorOnSeller(selectedValue?.label);
  }, [selectedValue]);

  useEffect(() => {
    if (!open) return;
    verifyDirty();
    setErrorsOnRate(rateInput);
  }, [rateInput]);

  const handleChange = (option: any) => {    
    setSelectedValue(option)
  }

  return (
    <>
      <Modal
        open={open}
        onClose={closeModal}
        data-id="newBaseCommissionModal"
        underlayClickExits={false}
        escapeExits={false}        
      >
        <ModalHeader onClose={handleClose} title={title} />

        <ModalBody width="510px">
          {/* {JSON.stringify(state.isDirty)}           */}
          <Container data-id="commercialDiscountsForm">
            <Grid>
              <GridItem>
                {/* no se puede acceder al evento onChange, no se habilita el scroll del select. */}
                {/* <Select
                  id="new-base-commission-select"                  
                  options={state.sellers}
                  value={selectedValue?.id}
                  onChange={handleChange}
                  label={seller.label}
                  searchable                  
                  error={selectedValueError.hasError}
                  errorMessage={selectedValueError.message}
                  required
                /> */}

                <Select placeholder='Select option'>
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                  <option value='option3'>Option 3</option>
                </Select>



              </GridItem>
              <GridItem>                
                <InputContainer
                  errorMessage={rateError.message}
                  label={commission.label}
                  required
                  id="base-seller-commission-container"
                  helpText={COMMISSION_HELP_TEXT}
                >
                  <Input
                    ref={rateRef}
                    type="number"
                    id="base-seller-commission-input"
                    data-id="percentInput"
                    min="0"
                    max="100"
                    step="0.01"
                    value={rateInput}
                    onChange={(e) => setRateInput(e.target.value)}
                    onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
                    hasError={rateError.hasError}
                  />
                </InputContainer>
              </GridItem>
            </Grid>

            <ButtonsContainer>
              <Button               
                variant="primary"
                size="s"
                id="submit-button"
                onClick={() => { !creating ? submit() : false } }
                isLoading={creating}
              >{createBtn}</Button>
            </ButtonsContainer>
          </Container>
        </ModalBody>
      </Modal>
      <ExitModalWithParent
        id="expireDiscountExitModal"
        closeParentModal={closeModal}
        open={openCancelModal}
        closeModal={() => setOpenCancelModal(false)}
        reset={reset}
      />
    </>
  );
};

export default NewBaseCommissionModal;
