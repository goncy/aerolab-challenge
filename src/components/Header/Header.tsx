import React from "react";

import {AuthContext} from "~/context";
import AeroLabLogo from "../../assets/logo.svg";
import Points from "../Points";

import {HeaderWrapper, LogoWrapper, LogIn, FullName} from "./Header.styles";

const Header = () => {
  const {auth, isAuth} = React.useContext(AuthContext);

  return (
    <HeaderWrapper>
      <LogoWrapper to="/">
        <img alt="Aero Lab" src={AeroLabLogo} />
      </LogoWrapper>
      <LogIn to="/profile">
        <FullName loaded={isAuth}>{auth?.name}</FullName>
        <Points isAuth={isAuth} points={auth?.points} />
      </LogIn>
    </HeaderWrapper>
  );
};

export default Header;
