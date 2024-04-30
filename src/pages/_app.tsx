import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import jwt from "jsonwebtoken";
import type { AppProps } from "next/app";
import { ThemeProvider, DefaultTheme } from "styled-components";
import { useSessionStore } from "@/store/session";
import { useEffect } from "react";
import { getToken } from "@/lib/utils";
import dynamic from "next/dynamic";
const ErrorBoundary = dynamic(() => import("@/components/ErrorBoundary"));
const SnackbarContainer = dynamic(() => import("@/components/common/Snackbar"));
import { ChakraProvider } from '@chakra-ui/react'

export default function App({ Component, pageProps }: AppProps) {
  const updateSession = useSessionStore((state) => state.updateSession);
  const setToken = useSessionStore((state) => state.updateToken);

  useEffect(() => {
    const token = getToken();
    setToken(token);
    const session = jwt.decode(token);
    updateSession(session);    
  }, [updateSession, setToken]);

  return (
    <ChakraProvider>
      <ErrorBoundary>
        <Component {...pageProps} />
        <SnackbarContainer />
      </ErrorBoundary>
    </ChakraProvider>
  );
}
