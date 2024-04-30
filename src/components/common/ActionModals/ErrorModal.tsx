import React from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { ModalBody, ModalActions } from './Modal.styles';
import { ERROR_MODAL } from '../../Commissions/SpecialCommissions/utils/constants';
import Modal from '@/components/common/custom-bumeran-lib/Modal';
import { Button } from '@chakra-ui/react';

const ErrorModal = ({ open, closeModal, errors }: {
    open:boolean,  
    closeModal: () => void,
    errors: string
  }) => { 
    
    return (
      <Modal open={open} onClose={closeModal} data-id="errorModal">
        <ModalBody>
          <div>
            <FiAlertCircle style={{ color: 'red' }} size={42} />
            <p>              
              {errors}
            </p>
          </div>         
          <ModalActions>           
            <Button             
              onClick={closeModal}
              data-id="successButton"
              id="successButton"
            >{ERROR_MODAL.successBtn}</Button>
          </ModalActions>
        </ModalBody>       
      </Modal>
    )
  }

  export default ErrorModal;
