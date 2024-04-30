import React from "react";
import Head from "next/head";
import styled from "styled-components";
import Navbar from "../Navbar";
import SidebarMenu from "@/components/SidebarMenu/SidebarMenu";

const MainContainer = styled.div`
  display: flex;
`;

const Content = styled.div`
  flex-grow: 1;
  padding: 2rem;
`;

const Aside = styled.aside`
  display: flex;
`;

interface Props {
  children: React.ReactNode;
  title: string;
  styles?: any;
  className?: string;
  metaTags?: any;
}

export default function BaseLayout({ children, title, styles }: Props) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta property="og:locale" content="es-ES" />
        <title>{title}</title>
      </Head>
      <div>
        <Navbar title={title} />
      </div>
      <MainContainer>
        <Aside>
          <SidebarMenu />
        </Aside>
        <Content>
          <div style={styles}>{children}</div>
        </Content>
      </MainContainer>
    </>
  );
}
