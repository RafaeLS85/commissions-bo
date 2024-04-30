import React from "react";
import { ModalBody, ModalActions } from "./Modal.styles";
import { FiAlertCircle } from "react-icons/fi";
import { DELETE_MODAL } from "../../Commissions/SpecialCommissions/utils/constants";
import Modal from "@/components/common/custom-bumeran-lib/Modal";
import { ModalHeader } from "@/components/common/custom-bumeran-lib/ModalHeader";
import { ModalFooter } from "@/components/common/custom-bumeran-lib/ModalFooter";
import { Button } from "@chakra-ui/react";

const DeleteModal = ({
  open,
  closeModal,
  setDeleteId,
  handleDelete,
  id,
  sku
}: {
  open: boolean;
  closeModal: () => void;
  setDeleteId: (param: string) => void;
  handleDelete: (id: string) => Promise<void>;
  id: string;
  sku: string;
}) => {
  const onConfirm = async () => {
    await handleDelete(id);

    closeModal();
  };

  const onCancel = () => {
    closeModal();
    setDeleteId("");
  };

  const header = `¿Querés eliminar la comisión para el SKU ${sku}?`;
  return (
    <Modal
      open={open}
      onClose={closeModal}
      data-id="confirmModal"
      width="408px"
    >
      <ModalHeader onClose={onCancel} title={header} />

      <ModalBody>
        <p>Al hacerlo, se perderá toda la información</p>
      </ModalBody>
      <ModalFooter>
        <Button onClick={onConfirm} size="s" id="deleteButton">Si, eliminar</Button>
      </ModalFooter>
    </Modal>
  );
};

export default DeleteModal;
