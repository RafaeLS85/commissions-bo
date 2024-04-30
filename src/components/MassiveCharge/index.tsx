import React, { useRef } from "react";
import { LoadButtonContainer } from "./styles";
import { DownloadContainer } from "./DownloadContainer";
import { UploadContainer } from "./UploadContainer";
import {
  massiveChargeTemplatePath,
  massiveChargefileName,
  massiveDeleteTemplatePath,
  massiveDeletefileName,
} from "@/constants/templateFiles";
import useMassiveCharge from "@/hooks/MassiveCharge/useMassiveCharge";
import styled from "styled-components";
import { MASSIVE_CHARGE_CONSTANTS } from "@/constants/massive-charge";
import { Button, Grid, GridItem, Heading } from "@chakra-ui/react";

export const StepContainer = styled.div`
  padding-bottom: 1rem;
`;

const SpacingBottom = styled.div`
  padding-bottom: 1rem;
`;

const SpacingTop = styled.div`
  padding-top: 3rem;
`;

export const OrderList = styled.ol`
  padding-left: 0;
  list-style-position: inside;
`;

export const Item = styled.li`
  font-family: "Roboto";
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5%;
`;

const Steps = () => {
  const { steps } = MASSIVE_CHARGE_CONSTANTS;

  return (
    <StepContainer>
      <SpacingBottom>
        <Heading size="s">{steps.title}</Heading>
      </SpacingBottom>

      <OrderList>
        {steps.list.map((step) => (
          <Item key={step}>{step}</Item>
        ))}
      </OrderList>
    </StepContainer>
  );
};

const ChargePage = () => {
  const { state, actions } = useMassiveCharge();
  const { download_templates, upload, upload_button } = MASSIVE_CHARGE_CONSTANTS;

  const fileRef = useRef<HTMLInputElement>(null);

  const handleRemove = () => {
    actions.onDeleteFile();
    if (fileRef.current && fileRef.current.value) {
      fileRef.current.value = "";
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    actions.onChangeFile(e);
    if (fileRef.current && fileRef.current.value) {
      fileRef.current.value = "";
    }
  };

  const handleUpload = () => {
    if (state.loading) return;
    actions.onUploadFile();
  };

  return (
    <>
      <Grid>
        <GridItem alignSelf="start">
          <Steps />
          <div>
            <div style={{ paddingBottom: "0.5rem" }}>
              <Heading size="s">{download_templates.title}</Heading>
            </div>
            <DownloadContainer
              title={download_templates.upload}
              href={massiveChargeTemplatePath}
              fileName={massiveChargefileName}
            />
            <DownloadContainer
              title={download_templates.delete}
              href={massiveDeleteTemplatePath}
              fileName={massiveDeletefileName}
            />
          </div>

          <SpacingTop>
            <SpacingBottom>
              <Heading size="m">{upload.title}</Heading>
            </SpacingBottom>
            <UploadContainer
              fileRef={fileRef}
              handleChange={handleChange}
              state={state}
              handleRemove={handleRemove}
            />
          </SpacingTop>
          <LoadButtonContainer>
            <Button
              id="uploadButton"
              size="s"              
              onClick={handleUpload}
              isLoading={state.loading}
            >{upload_button.label}</Button>
          </LoadButtonContainer>
        </GridItem>
      </Grid>
    </>
  );
};

export default ChargePage;
