import styled from "styled-components";

export const PrimaryButtonSmall = styled.button`
  color: #ffffff;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  font-family: Work Sans;

  background-color: #7447cc;
  border: none;
  max-height: 36px;
  padding: 8px 16px;
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
    background-color: #5a2db2;
  }
  &:focus-visible {
    background-color: #5A2DB2;
    box-shadow: 0px 0px 0px 4px #B3D1FF;
    outline: unset;
  }
  &:active {
    background-color: #371380;
  }
`;
