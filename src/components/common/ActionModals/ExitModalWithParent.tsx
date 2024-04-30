import React from "react";
import Modal from "@/components/common/custom-bumeran-lib/Modal";
import {
  AlertMessage,
  ButtonsContainer,
  ModalBody,
} from "@/components/common/custom-bumeran-lib/Modal.styles";
import { TertiaryButton } from "@/components/common/custom-bumeran-lib/TertiaryBtn.styles";
import { ModalHeader } from "@/components/common/custom-bumeran-lib/ModalHeader";
import { EXIT_MODAL } from "@/constants/commissions/modals";
import { Button } from "@chakra-ui/react";


const ExitModalWithParent = ({
  open,
  closeModal,
  reset,
  closeParentModal,
  id
}: {
  open: boolean;
  closeModal: () => void;
  reset: () => void;
  closeParentModal: () => void;
  id: string;
}) => {
  const cancelModal = () => {
    closeModal();
    reset();
    closeParentModal();
  };

  const { cancelBtn, header, message, submitBtn } = EXIT_MODAL;

  return (
    <>
      <Modal
        open={open}
        onClose={closeModal}
        data-id={id}
        underlayClickExits={false}
        escapeExits={false}
        width="408px"
      >
        <ModalHeader onClose={closeModal} title={header} />

        <ModalBody>
          <AlertMessage style={{ marginBottom: "18px" }}>
            {message}
          </AlertMessage>
          <ButtonsContainer>
            <TertiaryButton
              onClick={closeModal}
              data-id="cancelBtn"
              id="cancel"
            >
              {cancelBtn}
            </TertiaryButton>
            <Button
              id="submit-btn"              
              variant="primary"
              size="s"
              data-id="submitBtn"
              onClick={cancelModal}
            >{submitBtn}</Button>
          </ButtonsContainer>
        </ModalBody>
      </Modal>
    </>
  );
};

export default ExitModalWithParent;
