import styled, { css } from "styled-components";

interface InputProps {
  dateEditable?: boolean;
}

const InputCss = css<InputProps>`
  font-family: ${(props) => (props.dateEditable ? "Roboto" : "Work Sans")};
  font-size: ${(props) => (props.dateEditable ? "14px" : "16px")};
  padding: 0.5rem;
  border: 0.5px solid #cfcfcf;
  background-color: transparent;
  text-align: inherit;

  &:focus {
    border-bottom: 2.5px solid rgb(129, 82, 183);
    outline: none;
  }
`;

export const Input = styled.input`
  ${InputCss}
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: small;
  margin: 2px;
  padding: 0px;
`;

export const ActionBtn = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

export const NoCommissionsWrapper = styled.div`
  display: flex;
  justify-content: center;
  background: transparent;
`;

export const ActionContainer = styled.div`
  display: flex;
  gap: 5px;
  /* justify-content: center; */
`;
