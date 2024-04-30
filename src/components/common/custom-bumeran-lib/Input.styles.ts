import styled, { css } from "styled-components";


type ThemeProps = {
  hasError?: boolean;
  isDate?: boolean;
};

const InputCss = css<ThemeProps>`

  font-family: Roboto;
  font-size: 16px;
  color: #242433;
  font-weight: 400;

  background-color: transparent;
  text-align: inherit;  

  box-sizing: border-box;
  padding: 12px calc(12px - 1px);
  border-radius: 8px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  gap: 4px;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: #ffffff;
  border: ${(props) =>
    props.hasError ? "1px solid #CC3129" : "1px solid #8d8da6"};

  &:focus {
    box-shadow: ${(props) =>
      props.hasError ? "0px 0px 0px 4px #F5463D;" : "0px 0px 0px 4px #b3d1ff;"};
    outline: none;
  }
`;

export const Input = styled.input`
  ${InputCss}position: relative; 
  ::-webkit-calendar-picker-indicator {  
   position: absolute; 
   right: 2%;
   cursor: pointer;    
   background-image: url('/Calendar.svg');   
   width: 24px;
   height: 24px;
  } 
`;