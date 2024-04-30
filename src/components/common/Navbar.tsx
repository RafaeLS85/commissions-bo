import React from "react";
import styled from "styled-components";
import { desktop } from "@/lib/media";
import { useSessionStore } from "@/store/session";
import { BrandIcon } from "./icons/Brand";


const NavbarContainer = styled.div`  
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  border-bottom: 1px solid rgb(212, 212, 212);
  padding: 0px 1rem;
  height: 56px;
`;

const Separator = styled.div`
  width: 1px;
  height: 2rem;  
  background-color: #D4D4D4;
  margin-left: 4rem;
  margin-right: 2rem;

  display: none;
  ${desktop`display: inherit`}
`;
const Title = styled.h1`  
  font-family: Work Sans;
  -webkit-box-flex: 1;
    flex-grow: 1;
    font-size: 20px;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: 28px;
    letter-spacing: -0.18px;
`;

interface Props { 
  title: string;
}

function Navbar({ title }: Props) {
  return (    
    <NavbarContainer>      
      <BrandIcon />
      <Separator />
      <Title data-id="pageTitle">{title}</Title>      
      <Login />
    </NavbarContainer>
  );
}

export default styled(Navbar)`
  display: flex;
  align-items: center;
  justify-content: space-between;  
  border-bottom: 1px solid #d4d4d4; 
  padding: 0 1rem;
 
`;

const Login = styled(({ className }) => {
  const session = useSessionStore((state) => state.session);

  return <div className={className} data-id="login">{session && session.email}</div>;
})`
  display: none;
  ${desktop`display: inherit`}
`;
