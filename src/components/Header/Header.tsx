import React from "react";

import AeroLabLogo from "../../assets/logo.svg";
import CoinIcon from "../../assets/icons/coin.svg";
import {AuthContext} from "~/context";
import Loading from "../Loading/Loading";

import {
  HeaderWrapper,
  LogoWrapper,
  LogIn,
  FullName,
  PointsWrapper,
  Points,
  CoinWrapper,
} from "./Header.styles";

const Header = () => {
  const {auth, isAuth} = React.useContext(AuthContext);

  return (
    <HeaderWrapper>
      <LogoWrapper>
        <img alt="Aero Lab" src={AeroLabLogo} />
      </LogoWrapper>
      <LogIn>
        <FullName loaded={isAuth}>{auth?.name}</FullName>
        <PointsWrapper loaded={isAuth}>
          <Points>{auth?.points}</Points>
          <CoinWrapper>{isAuth ? <img alt="Coins" src={CoinIcon} /> : <Loading />}</CoinWrapper>
        </PointsWrapper>
      </LogIn>
    </HeaderWrapper>
  );
};

export default Header;
