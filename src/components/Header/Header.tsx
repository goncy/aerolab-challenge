import React from "react";

import AeroLabLogo from "../../assets/logo.svg";
import CoinIcon from "../../assets/icons/coin.svg";

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
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <img alt="Aero Lab" src={AeroLabLogo} />
      </LogoWrapper>
      <LogIn>
        <FullName>John Kite</FullName>
        <PointsWrapper>
          <Points>10000</Points>
          <CoinWrapper>
            <img alt="Coins" src={CoinIcon} />
          </CoinWrapper>
        </PointsWrapper>
      </LogIn>
    </HeaderWrapper>
  );
};

export default Header;
