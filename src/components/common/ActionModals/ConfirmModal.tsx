import React from "react";
import Modal from "@/components/common/custom-bumeran-lib/Modal";
import { AlertMessage, ButtonsContainer, ModalBody } from "@/components/common/custom-bumeran-lib/Modal.styles";
import { TertiaryButton } from "@/components/common/custom-bumeran-lib/TertiaryBtn.styles";
import { UpdateCommission } from "@/hooks/Commissions/CurrentCommission/types";
import { UseFormGetValues } from "react-hook-form";
import { CurrentCommissionForm } from "@/types/commissions";
import { ModalHeader } from "@/components/common/custom-bumeran-lib/ModalHeader";
import { Button } from "@chakra-ui/react";


const ConfirmModal = ({
  open,
  closeModal,
  setActive,
  update,
  getFormValues

}: {
    open: boolean;
  closeModal: () => void;
  setActive: (param: string) => void;
  update: (data: UpdateCommission) => Promise<void>;
  getFormValues: UseFormGetValues<CurrentCommissionForm>
}) => { 

  const onConfirm = async () => {   
    // console.log("onConfirm");
    closeModal();  
    await update({
      ...getFormValues(),
       overwrite: true
    });        
    setActive("");  
  };
  
  // TODO: Pasar el sku como parametro para mostrar en el modal.

  const handleClose = () => {    
    closeModal();   
  }

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        data-id="confirmModal"
        underlayClickExits={false}
        escapeExits={false}
        width="408px"
      >       

        <ModalHeader 
          onClose={handleClose}
          title="Ya existe una comisión vigente para el SKU"
        />

        <ModalBody>
          <AlertMessage style={{ marginBottom: "18px" }}>         
              ¿Querés reemplazarla?
          </AlertMessage>
          <ButtonsContainer>
            <TertiaryButton onClick={handleClose} data-id="cancelBtn" id="cancelBtn">
              No, seguir editando
            </TertiaryButton>
            <Button
              id="submitBtn-confirmModal"              
              variant="primary"
              size="s"
              data-id="submitBtn"
              onClick={onConfirm}            
            >Sí, reemplazar</Button>
          </ButtonsContainer>
        </ModalBody>
      </Modal>     
    </>
  );
};

export default ConfirmModal;
