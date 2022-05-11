import { ChakraProvider, extendTheme, ScaleFade } from "@chakra-ui/react";
import Container from "components/layouts/container";
import React, { FC, ReactNode } from "react";
import { useRouter } from "next/router";

export const customTheme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  fonts: {
    heading: "'Source Sans Pro', sans-serif",
    body: "'Inter', sans-serif",
  },
});

interface IProps {
  children?: ReactNode;
}

const Layout: FC<IProps> = ({ children }) => {
  const router = useRouter();

  return (
    <ChakraProvider theme={customTheme}>
      <ScaleFade key={router.route} initialScale={0.95} in={true}>
        <Container>{children}</Container>
      </ScaleFade>
    </ChakraProvider>
  );
};

export default Layout;
