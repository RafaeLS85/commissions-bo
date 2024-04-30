import styled from "styled-components";

export const TertiaryButton = styled.button`
  color: #65657e;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  font-family: Work Sans;
  background-color: #ffffff;
  border: 1px solid #d5d5e7;
  max-height: 36px;
  padding: 8px calc(16px - 1px);
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  position: relative;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  gap: 4px;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  cursor: pointer;
  border-radius: 8px;
  &:hover {
    border: 1px solid #8d8da6;
    background-color: #fafaff;
    color: #3b3b4e;
  }
`;