import React from "react";
import { ModalBody } from "./Modal.styles";
import Modal from "@/components/common/custom-bumeran-lib/Modal";
import { ModalHeader } from "@/components/common/custom-bumeran-lib/ModalHeader";
import { ModalFooter } from "@/components/common/custom-bumeran-lib/ModalFooter";
import { BASE_COMMISSIONS } from "@/constants/commissions";
import { Button } from "@chakra-ui/react";

const DeleteSellerModal = ({
  open,
  closeModal,
  setDeleteId,
  handleDelete,
  id,
}: {
  open: boolean;
  closeModal: () => void;
  setDeleteId: (param: string) => void;
  handleDelete: (id: string) => Promise<void>;
  id: string;  
}) => {

  const {header, message} = BASE_COMMISSIONS.deleteModal 

  const onConfirm = async () => {
    await handleDelete(id);

    closeModal();
  };

  const onCancel = () => {
    closeModal();
    setDeleteId("");
  };
  
  return (
    <Modal
      open={open}
      onClose={closeModal}
      data-id="confirmModal"
      width="408px"
    >
      <ModalHeader onClose={onCancel} title={header} />

      <ModalBody>
        <p>{message}</p>
      </ModalBody>

      <ModalFooter>
        <Button onClick={onConfirm} size="s" id="deleteButton">Si, eliminar</Button>
      </ModalFooter>
    </Modal>
  );
};

export default DeleteSellerModal;
