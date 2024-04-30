import React from "react";
import { ModalBody, ModalActions } from "../../../common/ActionModals/Modal.styles";
import { FiAlertCircle } from "react-icons/fi";
import { CANCEL_MODAL } from "../utils/constants";
import Modal from "@/components/common/custom-bumeran-lib/Modal";
import { Button } from "@chakra-ui/react";


const CancelModal = ({
  open,
  closeModal,
  reset,
  closeParentModal
}: {
  open: boolean;
  closeModal: () => void;
  reset: () => void;
  closeParentModal: () => void;
}) => {
  const cancelModal = () => {
    closeModal();   
    reset();
    closeParentModal();
  };

  return (
    <Modal open={open} onClose={closeModal} data-id="cancelModal">
      <ModalBody>
        <div>
          <FiAlertCircle style={{ color: "red" }} size={42} />
          <p>{CANCEL_MODAL.p3}</p>
          <p>{CANCEL_MODAL.p2}</p>
        </div>
        <ModalActions>        

          <Button             
            onClick={closeModal}
            id="cancel-modal-close" 
          >{CANCEL_MODAL.closeBtn}</Button>          

          <Button           
            onClick={cancelModal} 
            id="cancel-modal-cancel"
          >{CANCEL_MODAL.cancelBtn}</Button>
        </ModalActions>
      </ModalBody>
    </Modal>
  );
};

export default CancelModal;
