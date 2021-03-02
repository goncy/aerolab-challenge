import React from "react";
import {animated, useSpring} from "react-spring";

import CoinIcon from "../../assets/icons/coin.svg";
import Loading from "../Loading/Loading";

import {PointsWrapper, PointsNumber, CoinWrapper} from "./Points.styled";

interface PointsProps {
  isAuth: boolean;
  points: number | undefined;
}

const Points: React.FC<PointsProps> = ({isAuth, points}) => {
  const props = useSpring({points: isAuth ? points : 0});

  return (
    <PointsWrapper loaded={isAuth}>
      <PointsNumber>
        <animated.span>{props.points.interpolate((x) => x.toFixed(0))}</animated.span>
      </PointsNumber>
      <CoinWrapper>{isAuth ? <img alt="Coins" src={CoinIcon} /> : <Loading />}</CoinWrapper>
    </PointsWrapper>
  );
};

export default Points;
