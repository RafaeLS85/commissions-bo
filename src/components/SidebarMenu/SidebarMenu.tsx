import React from "react";
import {
  Wrapper,
  Sidebar,
  SidebarTop,
  SidebarLogo,
  LogoName,
  SidebarIcon,
  SidebarName,
  SubmenuName,
  CollapsedDiv,
  StyledUl,
  ArrowWrapper,
  SubMenuMainTitle,
  Divider,
} from "./SidebarMenu.styled";
import ActiveLink from "./ActiveLink";
import SubmenuActiveLink from "./SubmenuActiveLink";
import { useRouter } from "next/router";
import BarsIcon from "../common/icons/menu/BarsIcon";
import CloseIcon from "../common/icons/menu/CloseIcon";
import { useMenuStore } from "@/store/menu";
import { useSessionStore } from "@/store/session";
import { HiChevronUp, HiChevronDown  } from "react-icons/hi2";

const SidebarMenu = () => {  
  const items = useMenuStore((state) => state.items);
  const setOpenMenu = useMenuStore((state) => state.setOpenMenu);
  const updateList = useMenuStore((state) => state.updateList);
  const isOpenMenu = useMenuStore((state) => state.isOpenMenu); 
  const session = useSessionStore((state) => state.session);

  const hasPermission = (permissions: string[]) => {
    return permissions.some((permission) =>
      session?.permissions.includes(permission)
    );
  };  

  return (
    <Wrapper>
      <Sidebar
        style={{
          width: isOpenMenu ? "74px" : "268px",
        }}
      >
        <SidebarTop style={{ marginLeft: isOpenMenu ? "" : "1rem" }}>
          <SidebarLogo onClick={() => setOpenMenu(!isOpenMenu)}>
            {isOpenMenu ? (
              <BarsIcon data-id="barsIcon" />
            ) : (
              <CloseIcon data-id="closeButton" />
            )}
          </SidebarLogo>
          <LogoName
            style={{ display: isOpenMenu ? "none" : "" }}
            data-id="logoName"
          >
            Cerrar
          </LogoName>
        </SidebarTop>

        <span style={{ display: "block",  marginBottom: "1rem" }}>          
          <Divider isOpen={isOpenMenu} />
        </span>          

        <StyledUl>
          {items?.map((item) => (
            <li key={item.name}>
              {!item.submenu && (
                <ActiveLink
                  href={item.href}
                  isOpenMenu={isOpenMenu}
                  hasPermission={hasPermission(item.permissions)}
                >
                  <SidebarIcon>{item.icon}</SidebarIcon>
                  <SidebarName style={{ display: isOpenMenu ? "none" : "" }}>
                    {item.name}
                  </SidebarName>
                </ActiveLink>
              )}           
              {item.submenu && (
                <SubMenu
                  item={item}
                  isOpenMenu={isOpenMenu}
                  setOpenMenu={setOpenMenu}
                  updateList={updateList}                  
                />
              )}            
            </li>
          ))}
        </StyledUl>        
      </Sidebar>
    </Wrapper>
  );
};

type SubMenuButtonProps = {
  active?: boolean;
  isOpenMenu?: boolean;
};

const SubMenuButton = ({ active, isOpenMenu }: SubMenuButtonProps) => {    
  if(isOpenMenu) return <></>; 
  return (
    <ArrowWrapper>
        { active ? <HiChevronUp size="s" /> : <HiChevronDown size="s" /> } 
    </ArrowWrapper>
  );  
};

type SubMenuProps = {
  item: any;
  isOpenMenu: boolean;
  setOpenMenu: (open: boolean) => void;
  updateList: (item: any) => void;
};

const SubMenu = ({
  item,
  isOpenMenu,
  setOpenMenu,
  updateList,
}: SubMenuProps) => {
  const router = useRouter();
  const isSubmenuActive = router.asPath.includes(item.href) && isOpenMenu;
  const isMainElementActive = router.asPath.includes(item.href);
  const session = useSessionStore((state) => state.session);

  const hasPermission = (permissions: string[]) => {
    return permissions.some((permission) =>
      session?.permissions.includes(permission)
    );
  };

  const style = {
    fontWeight: isSubmenuActive ? "500" : "400", // deberia cambiar a #242433 el svg
    justifyContent: isOpenMenu ? "center" : "", 
    alignItems: isOpenMenu ? "center" : "center",
    padding: isOpenMenu ? "8px" : "0.8rem 1rem",    
    backgroundColor: isSubmenuActive ? "#EAE5FF" : "",      
  };

  const handleOpenOnCollapsed = () => {
    if (isOpenMenu) {
      setOpenMenu(false);
    }
  };
 
  return (
    <span onClick={handleOpenOnCollapsed}> 
      <CollapsedDiv
        onClick={() => updateList(item)}
        style={style}
        active={isSubmenuActive}        
      >        
        <span>{item.icon}</span>
        <SubMenuMainTitle
          data-id="subMenuMainTitle"
          style={{
            display: isOpenMenu ? "none" : "",
            fontWeight: isMainElementActive ? "500" : "400",                   
          }}
        >
          {item.name}
        </SubMenuMainTitle>
        <SubMenuButton active={item.isOpen} isOpenMenu={isOpenMenu} />
      </CollapsedDiv>
        {item.isOpen &&
          !isOpenMenu &&
          item.submenu.map((submenu: any) => {
            return (
              <span key={submenu.name}>
                <SubmenuActiveLink
                  href={submenu.href}
                  key={submenu.name}
                  isOpenMenu={isOpenMenu}
                  hasPermission={hasPermission(submenu.permissions)}
                >
                  <SubmenuName
                    style={{
                      display: isOpenMenu ? "none" : "",                      
                    }}
                  >
                    {submenu.name}
                  </SubmenuName>
                </SubmenuActiveLink>
              </span>
            );
          })}
    </span>
  );
};

export default SidebarMenu;