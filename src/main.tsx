import React from "react";
import ReactDOM from "react-dom";
import {ChakraProvider} from "@chakra-ui/react";

import theme from "./theme";

import HomeScreen from "~/app/screens/Home";
import Layout from "~/app/components/Layout";
import {Provider as UserProvider} from "~/user/context";

import "./theme.css";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <UserProvider>
        <Layout>
          <HomeScreen />
        </Layout>
      </UserProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
