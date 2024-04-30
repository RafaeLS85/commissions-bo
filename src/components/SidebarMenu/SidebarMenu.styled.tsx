import styled from 'styled-components';
import Link from 'next/link';

type ActiveLinkProps = {
  active?: boolean;
  isOpenMenu?: boolean;
  hasPermission?: boolean;
}

export const StyledLink = styled.a<ActiveLinkProps>` 
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  text-decoration: none;    
  border-radius: 8px;
  padding: 0.8rem 1rem; 
  height: 45px;
  display: flex;    
  align-items: center;    
  cursor: pointer; 

  pointer-events: ${({ hasPermission }) => (hasPermission ? 'auto' : 'none')};

  &:hover {
    background-color: #F0F0FA;
    font-weight: 500;  
    height: 45px; 
  }  
  
#dafault_com_icon{
    stroke: ${({ active }) => (active ? '#5A2DB2' : '#65657E')};
  }
  #upload_icon{   
    stroke:  ${({ active }) => (active ? '#5A2DB2' : '#65657E')};
  }  
  #commercial_discount{
    fill: ${({ active }) => (active ? '#5A2DB2' : '#65657E')};  
  }
`;

type CollapsedDivProps = {
  active?: boolean;
}

export const CollapsedDiv = styled.div<CollapsedDivProps>`
  font-family: Roboto;
  font-size: 14px;
  text-decoration: none;  
  border-radius: 8px;  
  display: flex;    
  cursor: pointer;   
  height: 45px;   

  &:hover {       
      background-color: #F0F0FA;
      height: 45px;       
  }

  #home_icon {
     fill: ${({ active }) => (active ? '#5A2DB2' : '#65657E')};   
  }
  #percent_icon{
    fill: ${({ active }) => (active ? '#5A2DB2' : '#65657E')}; 
  }
`;

export const StyledUl = styled.ul`
  list-style: none; 
  margin: 0px; 
  padding: 0px; 
`;

export const Wrapper = styled.div`
  position: relative;
  background-color: #FAFAFF;   
`;

export const ArrowWrapper = styled.span`  
  width: 100%;
  display: flex;
  justify-content: end;
`;

export const SubMenuMainTitle = styled.span`
  margin-left: 0.5rem;
  white-space: nowrap;

  &:hover {   
      font-weight: 500 !important;          
    }
`;

export const Sidebar = styled.aside`  
  height: 100vh;
  
  transition: width 200ms;
  padding-top: 16px;
  padding-bottom: 0px;

  padding-left: 10px;
  padding-right: 10px;

  position: sticky;
  top: 0;  

`;

export const SidebarLogo = styled.span`
  cursor: pointer;
`;

export const SidebarTop = styled.div`
  width: max-content;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-bottom: 1rem;
  margin-left: 1rem;
  height: 40px;
`;

export const LogoName = styled.p`
  color:#65657E;
  font-size: 14px;
  line-height: 3;
  font-family: Roboto; 
  font-weight: 400;
`;

export const SidebarList = styled.ul`
  list-style: none;
`;

interface DividerProps {
  isOpen: boolean;
}

export const Divider = styled.div<DividerProps>`
  border-bottom: 1px solid #D5D5E7;
  height: 0.5px;   
  width: ${({ isOpen }) => (isOpen ? '55px' : '248px')}; 
`;

export const SidebarLink = styled(Link)`
  font-size: 0.9rem;
  text-decoration: none;
  color: #000;
  padding: 0.8rem 1rem;
  display: flex;
  margin-bottom: 1rem;
`;

export const SidebarIcon = styled.span`
  font-size: 1.2rem;
  display: inline-block;
`;

export const SidebarName = styled.span`
  margin-left: 0.5rem;
`;
export const SubmenuIcon = styled.span`
  font-size: 0.8rem;
  display: inline-block;
`;

export const SubmenuName = styled.span`  
  white-space: nowrap;
`;

export const CloseBtn = styled.button`
  position: absolute;
  right: 0;
  top: 4.7rem;
  border: 1px solid #e5e7eb;
  border-radius: 50%;
  background-color: #fff;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transform: translateX(50%);
  font-size: 1.1rem;
`;
