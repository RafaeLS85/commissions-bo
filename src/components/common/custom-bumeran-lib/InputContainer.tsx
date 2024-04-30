import React from "react";
import { Column, ErrorMessage, ErrorSpan, HelpText, Label, Required } from "./InputContainer.styles";
import { ErrorSVG } from "../icons/ErrorSVG";

interface Props {
    children: React.ReactNode;
    errorMessage: string | undefined; 
    label: string;
    id: string;
    helpText?: string;
    required?: boolean;
}

export const InputContainer = ({
    children,
    helpText,
    errorMessage,
    label,
    id,
    required,
  }: Props) => {
    return (
      <Column>
        <Label htmlFor={id} data-id={`label-${id}`}>
          {label} {required && <Required>*</Required>}
        </Label>
        {children}
        {errorMessage ? (
          <ErrorContainer message={errorMessage} />
        ) : (
          <HelpText data-id={`helpText-${id}`}>{helpText}</HelpText>
        )}
      </Column>
    );
  };
  
  export const ErrorContainer = ({ message }: { message: string }) => {
    return (
      <ErrorSpan data-id="spanErrorMessage">
        <ErrorSVG />
        <ErrorMessage>{message}</ErrorMessage>
      </ErrorSpan>
    );
  };