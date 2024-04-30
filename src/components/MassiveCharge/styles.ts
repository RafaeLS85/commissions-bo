import styled from 'styled-components';

export const Header = styled.div`
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.01125rem;
`;

export const PageContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const ContainerMassiveCharge = styled.div`
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 268px; 
  /* padding: 2rem; */
  display: flex;
  flex-direction: column;
  color: black;
  font-size: 14px;  
  font-weight: 500;
  line-height: 18px;
  word-wrap: break-word;
`;

export const SubTitle = styled.h3`
  // Plantillas
  color: black;
  font-size: 14px;
  font-family: Work Sans;
  font-weight: 700;
  line-height: 18px;
  word-wrap: break-word;
  padding-bottom: 1rem;
`;


export const MassiveChargeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  font-family: Roboto; 
  color: #242433; 
  font-size: 12px;  
  font-weight: 400; 
  line-height: 16px;
  letter-spacing: 0.24px; 
  word-wrap: break-word;
  & div {
    margin-left: 1rem;
  }
`;

export const MassiveChargeInput = styled.input`
  display: none;
`;

export const ButtonChargeMassive = styled.label`

  color: #65657E;
  font-size: 14px;
  font-family: Work Sans;
  font-weight: 600;
  line-height: 20px;
  word-wrap: break-word;
  border-radius: 8px;
  font-style: normal;
  font-stretch: normal;
 
  letter-spacing: normal;
  text-align: center;
  transition: 0.2s;
  
  padding: 0.6em;
  border: 1px #D5D5E7 solid;
  cursor: pointer;
  svg {
    fill: #440099;
    stroke: #440099;
  }

  background-color: white;

  &:hover {
    border-color: #bfbfbf;
  }
`;

export const DownloadTemplateButton = styled.button`
  margin-bottom: 2.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  width: 100%;
  max-width: 420px;
  font-size: 0.9rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.01125rem;
  color: #0047b8;
  & svg {
    width: 8%;
    fill: #006afd;
    stroke: #fff;
    padding-right: 0.3125em;
  }
`;

export const DownloadButtonsContainer = styled.div`
  margin: 3rem 0 1rem;
`

export const LinkContainer = styled.div`
  width: 100%;
  margin: 0;
  white-space: nowrap;
  width: 100%;
  font-size: 0.9rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.01125rem;
  color: #0047b8;
`;

export const DownloadTemplateLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  align-items: center;
  & svg {
    vertical-align: middle;
    display: inline-block;
    stroke: #fff;
  }
`;

export const StepContainer = styled.div`
  padding: 0.5rem;
`;

export const StepParagraph = styled.p`
  width: 100%;
  margin: 0;
  white-space: nowrap;
  width: 100%;
  font-size: 0.9rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.01125rem;
  
`;

export const BackButton = styled.button`
  margin-bottom: 1.95rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  width: 100%;
  max-width: 420px;
  font-size: 1.025rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-transform: capitalize;
  color: #0047b8;
  & svg {
    width: 8%;
    fill: #0047b8;
    stroke: #fff;
  }
`;

export const LoadButtonContainer = styled.div`
  display: flex;
  height: 100%;
`;

export const ProcessedContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  & svg {
    margin-top: 0.1em;
    margin-left: 0.6em;
    width: 8%;
    fill: #208041;
  }
`;

export const SaveButton = styled.button`
  ${({ disabled }) => disabled && 'color: #fff;'}
  ${({ disabled }) => disabled && 'background-color:#bfbfbf;'};
  ${({ disabled }) => disabled && 'border: solid 1px #c8c8c8;'};
  &:hover {
    ${({ disabled }) => disabled && 'background-color:#bfbfbf;'};
  }
`;
