import React from "react";

import HeroImage from "../../assets/header.png";
import Select from "~/components/Select";

import {
  HomePageWrapper,
  HeroWrapper,
  H2,
  FilterWrapper,
  Container,
  PaginationInfo,
  Divider,
} from "./HomePage.styles";

const options = [
  {
    name: "Most Recents",
    value: "most-recent",
  },
  {
    name: "Lowest Price",
    value: "lowest-price",
  },
  {
    name: "Highest Price",
    value: "highest-price",
  },
];

const HomePage = () => {
  return (
    <HomePageWrapper>
      <HeroWrapper>
        <img alt="Electronics Hero" src={HeroImage} />
        <H2>Electronics</H2>
      </HeroWrapper>
      <Container>
        <FilterWrapper>
          <PaginationInfo>
            16 of <strong>36</strong> products
          </PaginationInfo>
          <Divider />
          <Select options={options} />
        </FilterWrapper>
      </Container>
    </HomePageWrapper>
  );
};

export default HomePage;
