import React from 'react';
import styled from 'styled-components';
import AriaModal from 'react-aria-modal';
import { desktop } from '@/lib/media';

function getDocumentBody() {
  return document.body;
}

export const ModalActions = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

interface Props {
  open: boolean;
  children: React.ReactNode;
  onOpen?: () => void;
  onClose?: () => void;
  getApplicationNode?: () => HTMLElement;
  underlayClickExits?: boolean;
  escapeExits?: boolean;
  verticallyCenter?: boolean;
  titleText?: string,
  alert?: boolean,
  initialFocus?: string,
  className?: string,
  onAlertClose?: () => void;
  underlayColor?: string;
}

function Modal({
  open = false,
  onClose,
  className,
  onOpen,
  titleText = 'modal',
  getApplicationNode = getDocumentBody,
  children,
  alert = false,
  initialFocus,
  underlayClickExits = true,
  escapeExits = true,
  verticallyCenter = true,
  underlayColor = 'rgba(0, 0, 0, 0.3)',
  ...props
}: Props) {

  return (
    <AriaModal
      dialogClass={className}
      mounted={open}
      onEnter={onOpen}
      onExit={onClose}
      titleText={titleText}
      getApplicationNode={getApplicationNode}
      alert={alert}
      initialFocus={initialFocus}
      underlayClickExits={underlayClickExits}
      escapeExits={escapeExits}
      verticallyCenter={verticallyCenter}
      underlayColor={underlayColor}
      {...props}
    >
      {children}
    </AriaModal>
  );
}

interface ModalProps {
  width?: string;  
  maxWidth?: string;
}

export default styled(Modal)<ModalProps>`
  /* border: solid 1px ${({ theme }) => theme.separator}; */
  border-radius: 16px;
  box-shadow: 0 2px 24px 0 rgba(0, 0, 0, 0.5);
  background: white;
  padding: 1.3em;
  width: ${(props) => props.width};  

  ${desktop`
    max-width: 80vw !important;
  `}
`;
