import React from "react";

export type InputContainerProps = {
    children: React.ReactNode;
    errorMessage: string | undefined; 
    label: string;
    id: string;
    helpText?: string;
    required?: boolean;
}