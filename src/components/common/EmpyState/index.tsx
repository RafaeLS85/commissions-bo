import { FC } from "react";
import styled from "styled-components";
// import { chakra} from "@chakra-ui/react";


// const StyledButton = chakra(Button, {
//   baseStyle: {
//     background: "black",
//   },
// })


const Paragraph = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5%; 
  color: #65657e;
  margin-top: 5px;
`;

const Message = styled.div`
  color: #65657e;
  font-family: Work Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
`;

const Container = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

const BoxPictogramContainer = styled.div`
  background-color: #fafaff;
  border-radius: 100%;
`;

const MessageContainer = styled.div`
  text-align: center;
  max-width: 350px;
`;


interface Props {
  message: string;
  description: string;
  Icon: FC;
}

export const EmptyState = ({message, description, Icon}: Props) => { 





  return (
    <Container>
      <BoxPictogramContainer>      
        <Icon />
      </BoxPictogramContainer>

      <MessageContainer>
        <Message>{message}</Message>
        <Paragraph>{description}</Paragraph>
      </MessageContainer>
    </Container>
  );
};
