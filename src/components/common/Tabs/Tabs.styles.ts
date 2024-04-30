import styled from "styled-components";


export const TabsContainer = styled.span`
    display: flex;    
`;

export const Ul = styled.ul`
    display: flex;    
    gap: 12px;    
    flex-direction: row;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    padding-left: 0px;
    line-height: 2rem;    
`;

interface LiProps {
    active: boolean
}
export const Li = styled.li<LiProps>`
    cursor: pointer;  
    color: ${(props) => props.active ? "#242433" : "#65657E"};    
    font-family: "Work Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;    
    border-bottom: ${(props) => props.active ? 
    "2px solid #7447CC;" : ""};
    padding-left: 4px;
    padding-right: 4px;
    padding-bottom: 4px;
`;