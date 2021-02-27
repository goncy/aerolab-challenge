import React from "react";

import HeroImage from "../../assets/header.png";

import {HomePageWrapper, HeroWrapper, H2} from "./HomePage.styles";

const HomePage = () => {
  return (
    <HomePageWrapper>
      <HeroWrapper>
        <img alt="Electronics Hero" src={HeroImage} />
        <H2>Electronics</H2>
      </HeroWrapper>
    </HomePageWrapper>
  );
};

export default HomePage;
