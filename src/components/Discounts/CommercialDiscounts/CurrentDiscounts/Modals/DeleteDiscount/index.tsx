import React from "react";
import { CommercialDiscountActions } from "@/hooks/Discounts/CommercialDiscounts/types";
import { useAlerts } from "@/hooks/Alerts/useAlerts";
import Modal from "@/components/common/custom-bumeran-lib/Modal";
import { AlertMessage, ButtonsContainer, ModalBody } from "@/components/common/custom-bumeran-lib/Modal.styles";
import { COMMERCIAL_DISCOUNTS } from "../../../utils/constants";
import { TertiaryButton } from "@/components/common/custom-bumeran-lib/TertiaryBtn.styles";
import { ModalHeader } from "@/components/common/custom-bumeran-lib/ModalHeader";
import { Button } from "@chakra-ui/react";

const DeleteDiscountModal = ({
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
        <ModalHeader 
          onClose={closeModal} 
          title={COMMERCIAL_DISCOUNTS.titles.deleteDiscount} 
        />
        <ModalBody style={{ paddingTop: "2rem",  gap: "2rem"}} >
          <AlertMessage>
            {COMMERCIAL_DISCOUNTS.deleteDiscountBody}
          </AlertMessage>
          <ButtonsContainer>
            <TertiaryButton onClick={closeModal}>
              {COMMERCIAL_DISCOUNTS.cancelBtn}
            </TertiaryButton>
            <Button             
              variant="primary"
              size="s"
              data-id="submitBtn"
              onClick={() =>
                actions.submitDelete({
                  id,
                  actionsAlerts,
                  closeModal,
                })
              }
            >{COMMERCIAL_DISCOUNTS.deleteBtn}</Button>
          </ButtonsContainer>
        </ModalBody>
      </Modal>     
    </>
  );
};

export default DeleteDiscountModal;
