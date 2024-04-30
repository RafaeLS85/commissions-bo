import React from "react";
import {
  MassiveChargeContainer,
  MassiveChargeInput,
  ButtonChargeMassive,
} from "./styles";
import RemoveFileButton from "./RemoveFileButton";
import styled from "styled-components";
import { MASSIVE_CHARGE_CONSTANTS } from "@/constants/massive-charge";
import { importError } from "@/hooks/MassiveCharge/constants";

const Backgound = styled.div`
  background: #f8f7ff;
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 24px;
`;

interface FileMessageProps {
  message: string;
}
const FileMessage = styled.div<FileMessageProps>`
  color: ${(props) =>
    props.message === MASSIVE_CHARGE_CONSTANTS.file_input.empty
      ? "#CC3129"
      : "#242433"};
`;

interface Props {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fileRef: React.MutableRefObject<HTMLInputElement | null>;
  state: any;
  handleRemove: () => void;
}

export const UploadContainer = ({
  handleChange,
  fileRef,
  state,
  handleRemove,
}: Props) => {
  const { empty, button_label } = MASSIVE_CHARGE_CONSTANTS.file_input;

  return (
    <>
      {/* {JSON.stringify(state.message)} */}
      <Backgound>
        <MassiveChargeContainer>
          <MassiveChargeInput
            type="file"
            id="massive-charge-input"
            accept=".xlsx, .xls"
            onChange={(e) => handleChange(e)}
            ref={fileRef}
            data-id="fileInput"
          />
          <ButtonChargeMassive
            htmlFor="massive-charge-input"
            data-id="selectFileButton"
          >
            {button_label}
          </ButtonChargeMassive>

          <FileMessage message={state.message}>
            {state.file ? state.file.name : empty}
          </FileMessage>
          <RemoveFileButton fileState={state} onDelete={handleRemove} />
        </MassiveChargeContainer>
      </Backgound>
    </>
  );
};
