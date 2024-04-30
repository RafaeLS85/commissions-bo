import React from "react";
import { useRouter } from "next/router";
import { StyledLink } from "./SidebarMenu.styled";

type Props = {
  children: React.ReactNode;
  href: string;
  isOpenMenu: boolean;
  hasPermission: boolean;
};

function ActiveLink({ children, href, isOpenMenu, hasPermission }: Props) {
  const router = useRouter();
  const isActive = router.asPath === href;

  const handleClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
    router.push(href);
  };

  const style = {
    color: isActive ? "#5A2DB2" : "#242433", 
    justifyContent: isOpenMenu ? "center" : "",
    backgroundColor: isActive ? "#EAE5FF" : "",
    opacity: hasPermission ? 1 : 0.5,    
  };

  return (
    <StyledLink
      href={href}
      onClick={handleClick}
      active={isActive}
      style={style}
      data-id={href + "-link"}
      hasPermission={hasPermission}
    >
      {children}
    </StyledLink>
  );
}

export default ActiveLink;
