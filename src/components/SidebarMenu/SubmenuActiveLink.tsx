import React from "react";
import { useRouter } from "next/router";
import { StyledLink } from "./SidebarMenu.styled";

type Props = {
  children: React.ReactNode;
  href: string;
  isOpenMenu: boolean;
  hasPermission: boolean;
};

function SubmenuActiveLink({
  children,
  href,
  isOpenMenu,
  hasPermission,
}: Props) {
  const router = useRouter();
  const isActive = router.asPath.includes(href);

  const style = {
    color: isActive ? "#5A2DB2" : "#000",
    justifyContent: isOpenMenu ? "space-between" : "", //
    backgroundColor: isActive ? "#EAE5FF" : "",
    marginLeft: "2.3rem",
    paddingRight: "17px",
    // width: "185px",
    opacity: hasPermission ? 1 : 0.5,
  };

  const handleClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <StyledLink
      href={href}
      onClick={handleClick}
      style={style}
      active={isActive}
      data-id={href + "-link"}
      hasPermission={hasPermission}
    >
      {children}
    </StyledLink>
  );
}

export default SubmenuActiveLink;
