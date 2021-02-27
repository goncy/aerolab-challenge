import React from "react";

import Header from "../Header";

import {Main} from "./Layout.styles";

const Layout = ({children}) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;
