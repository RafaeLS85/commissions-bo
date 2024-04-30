import React from "react";
import { useForm } from "react-hook-form";
import { TextArea } from "@/components/common/custom-bumeran-lib/TextArea.styles";
import { InputContainer } from "@/components/common/custom-bumeran-lib/InputContainer";
import { COMMERCIAL_DISCOUNTS } from "../../../utils/constants";
import Modal from "@/components/common/custom-bumeran-lib/Modal";
import {
  ButtonsContainer,
  FormContainer,
  Header,
  ModalBody,
  Row,
  Subtitle,
} from "@/components/common/custom-bumeran-lib/Modal.styles";
import { CommercialDiscountActions, ExpireCommercialDiscountForm } from "@/hooks/Discounts/CommercialDiscounts/types";
import { useAlerts } from "@/hooks/Alerts/useAlerts";
import { Button, IconButton } from "@chakra-ui/react";
import { MdClose } from "react-icons/md";

const ExpireDiscountModal = ({
  open,
  closeModal,
  actions,
  id,
}: {
  open: boolean;
  closeModal: () => void;
  actions: CommercialDiscountActions;
  id: string;
}) => {
  const { state: stateAlerts, actions: actionsAlerts } = useAlerts();

  const { register, handleSubmit, formState, reset, getValues } =
    useForm<ExpireCommercialDiscountForm>({
      mode: "all",
    });

  const { errors, isDirty } = formState;

  const handleClose = () => {
    if (isDirty) {
      reset();
      closeModal();
    } else {
      closeModal();
      reset();
    }
  };

  return (
    <>
      <Modal
        open={open}
        onClose={closeModal}
        data-id="expireDiscountModal"
        underlayClickExits={false}
        escapeExits={false}
        width="408px"
      >
        <Header>
          <div>
            <div>{COMMERCIAL_DISCOUNTS.titles.expireDiscount}</div>
            <Subtitle fontSize="10px" fontWeight="400">
              <div style={{ maxWidth: "300px" }}>
                {COMMERCIAL_DISCOUNTS.subtitle_expired}
              </div>
            </Subtitle>
          </div>
          <div>
          {/* <IconButton 
            icon={<MdClose />}
            id="closeButton-confirmModal"
            size="s"            
            onClick={handleClose}
          /> */}
          <IconButton
              variant='outline'
              colorScheme='teal'
              aria-label='Call Sage'
              fontSize='20px'
              onClick={handleClose}
              icon={<MdClose />}
            />
          </div>
        </Header>

        <ModalBody>
          <FormContainer data-id="ExpireDiscountForm">
            <Row>
              <InputContainer
                label={COMMERCIAL_DISCOUNTS.labels.expireMotive}
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
            <ButtonsContainer>
              <Button               
                variant="primary"
                size="s"
                data-id="submitBtn"
                onClick={handleSubmit(() =>
                  actions.submitExpireDiscount(id, {
                    actionsAlerts,
                    getValues,
                    closeModal,
                    reset,
                  }))}
              >{COMMERCIAL_DISCOUNTS.expireBtn}</Button>
            </ButtonsContainer>
          </FormContainer>
        </ModalBody>
      </Modal>     
    </>
  );
};

export default ExpireDiscountModal;
