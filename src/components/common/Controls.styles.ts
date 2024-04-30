import Grid from "@/components/common/layouts/Grid";
import styled from "styled-components";


interface MainWrapperProps {
  isCategories?: boolean;
}

export const ControlsMainWrapper = styled(Grid)<MainWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;  

  background-color: ${({ isCategories }) => (isCategories ? "#FAFAFF" : "transparent")};
  border-radius: ${({ isCategories }) => (isCategories ? "8px" : "none")};
  padding: ${({ isCategories }) => (isCategories ? "1rem" : "0rem")};

  @media (max-width: 1071px) {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }

`;

export const ControlsLeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;

export const ControlsRightContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: end;
`;

export const FormContainer = styled.form`
  flex-grow: 1;
  display: flex;
  align-items: center;  
  gap: 10px;
`;


export const SearchButtonContainer = styled.div`

  display: flex;
  flex-direction: row;
  gap: 10px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }

`;