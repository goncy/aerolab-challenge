import React from "react";

import Header from "../Header";

const Layout = ({children}) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
