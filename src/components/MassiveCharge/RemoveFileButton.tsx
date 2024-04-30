import React from 'react';
import styled from 'styled-components';
import CloseIcon from './CloseIcon';
import { MASSIVE_CHARGE_CONSTANTS } from '@/constants/massive-charge';

const StyledButton = styled.button`
  background: transparent;
  cursor: pointer;
  border: none;
`;

interface Props {
  fileState: {
     file: File,
     message: string,
     success: boolean
  },
  onDelete: () => void
}

export default function RemoveFileButton({ fileState, onDelete }: Props) {

  const {tooltips} =MASSIVE_CHARGE_CONSTANTS;
  
  return (
    <>
      {
        fileState && fileState.file && (
        <StyledButton title={tooltips.delete_file} onClick={onDelete}>
          <CloseIcon />
        </StyledButton>
        )
      }
    </>
  );
}
