
import { Tooltip } from "@chakra-ui/react";
import React from "react";

export const TextLabel = ({  
  text,
  maxLength = 20,
}: {
  
  text: string;
  maxLength?: number;
}) => {  

  if (text.length > maxLength) {
    return (
      <Tooltip title={text}>
        <OverFlowText
          text={text}          
          maxLength={maxLength}
        />
      </Tooltip>
    );
  }

  return (
    <span>
      <OverFlowText text={text} maxLength={maxLength} />
    </span>
  );
};

const OverFlowText = ({
  text,
  maxLength,
}: {
  text: string;
  maxLength: number;
}) => {
  const overflowText =
    text.length > maxLength
      ? text.substring(0, 20) + " ..."
      : text;

  if (text.length > maxLength) {
    return <>{overflowText}</>;
  }

  return <>{text}</>  
};
