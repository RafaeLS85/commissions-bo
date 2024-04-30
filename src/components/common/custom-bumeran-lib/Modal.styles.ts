import styled from "styled-components";

type ModalBodyProps = {
    width?: string;   
    height?: string;
};
export const ModalBody = styled.div<ModalBodyProps>`       
   width: ${(props) => props.width};
   height: ${(props) => props.height};
   display: flex;
   flex-direction: column; 
   padding-top: 2rem;
   position: relative; 

   /* modal typography */
   color: #242433;

  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;

`;

export const Header = styled.div`  
  color: #242433;
  font-size: 20px;
  font-family: Work Sans;
  font-weight: 600;
  /* word-wrap: break-word; */
  display: flex;
  justify-content: space-between;
`;

export const ModalActions = styled.div`
  position: absolute; 
  bottom: 0;
  left: 0;    
`;

type FormProps = {
    width?: string;   
    height?: string;
    maxWidth?: string;
};

export const FormContainer = styled.form<FormProps>`
  display: flex; 
  width: ${(props) => props.width};  
  max-width: ${(props) => props.maxWidth};  
  flex-direction: column;
  gap: 1rem;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 100%;
`;

interface TitleProps {
  fontSize?: string;  
}
export const Title = styled.h2<TitleProps>`
  margin: 0;
  padding: 0;
  color: #242433;  
  font-size: ${(props) => props.fontSize ? props.fontSize : "20px"};
  font-family: Work Sans;
  font-weight: 600;  
`;

interface SubtitleProps {
  fontSize?: string;
  fontWeight?: string;
}
export const Subtitle = styled.p<SubtitleProps>`
  margin: 0;
  padding: 0;
  color: #242433;  
  font-size: ${(props) => props.fontSize ? props.fontSize : "10px"};
  font-family: Roboto;  
  font-weight: ${(props) => props.fontWeight ? props.fontWeight : "400"};
  letter-spacing: 0.14;
  word-wrap: break-word;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

export const AlertMessage = styled.div`    
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;    
    letter-spacing: 0.14px;     
`;
