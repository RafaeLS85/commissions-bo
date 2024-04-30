import React from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { ModalBody, ModalActions } from './Modal.styles';
import { SUCCESS_MODAL } from '../../Commissions/SpecialCommissions/utils/constants';
import Modal from '@/components/common/custom-bumeran-lib/Modal';
import { Button } from '@chakra-ui/react';


const SuccessModal = ({ open, closeModal, reset, setActive }: {
    open:boolean,  
    closeModal: () => void,
    reset: () => void,
    setActive: (param: string) => void;    
  }) => { 

  const handleSuccessModal = () => {
    closeModal();
    setActive('');
    reset();
  };
    
    return (
      <Modal open={open} onClose={closeModal} data-id="successModal">      
        <ModalBody>
          <div>
            <AiOutlineCheckCircle style={{ color: 'green' }} size={42} />
            <p>
              {SUCCESS_MODAL.message}
            </p>
          </div>        
          <ModalActions>
            {/* <Button outlined onClick={handleSuccessModal} loading={false} data-id="successButton">
              {SUCCESS_MODAL.successBtn}
            </Button>                 */}
            <Button              
              onClick={handleSuccessModal}
            >{SUCCESS_MODAL.successBtn}</Button>
          </ModalActions>
        </ModalBody>     
      </Modal>
    )
  }

  export default SuccessModal;