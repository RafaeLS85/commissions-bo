import React from "react";
import { ButtonsContainer } from "./Modal.styles";

export const ModalFooter = ({ children }: { children: React.ReactNode }) => {
  return <ButtonsContainer>{children}</ButtonsContainer>;
};
