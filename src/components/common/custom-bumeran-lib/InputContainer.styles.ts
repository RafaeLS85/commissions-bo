import styled from "styled-components";

export const Label = styled.label`
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  font-family: Work Sans;
  color: inherit;
`;

export const HelpText = styled.span`
  font-family: Roboto;
  color: #242433;
  line-height: 16px;
  font-weight: 400;
  font-size: 10px;
  -webkit-letter-spacing: 0.03em;
  -moz-letter-spacing: 0.03em;
  -ms-letter-spacing: 0.03em;
  letter-spacing: 0.03em;
`;

export const Required = styled.span`
  color: #cc3129;
  margin-left: 4px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  font-family: Work Sans;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  width: 100%;
`;

export const ErrorMessage = styled.span`
  color: #cc3129;
  font-family: Roboto;
  line-height: 16px;
  font-weight: 400;
  font-size: 10px;
  -webkit-letter-spacing: 0.03em;
  -moz-letter-spacing: 0.03em;
  -ms-letter-spacing: 0.03em;
  letter-spacing: 0.03em;
`;

export const ErrorSpan = styled.span`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

