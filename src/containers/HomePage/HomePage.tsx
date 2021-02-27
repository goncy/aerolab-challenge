import React, {useEffect, useState} from "react";
import axios from "axios";

import api from "../../api";
import HeroImage from "../../assets/header.png";
import Select from "../../components/Select";
import ProductCard from "../../components/ProductCard";

import {
  HomePageWrapper,
  HeroWrapper,
  H2,
  FilterWrapper,
  Container,
  PaginationInfo,
  Divider,
  Grid,
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
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("pending");

  useEffect(() => {
    api
      .getAllProducts()
      .then((res) => {
        setProducts(res.data);
        setStatus("success");
      })
      .catch((err) => {
        setStatus("failed");
      });
  }, []);

  console.log(status, products);

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
      <Container>
        <Grid>
          {status === "success"
            ? products.map((product) => <ProductCard key={product._id} product={product} />)
            : null}
        </Grid>
      </Container>
    </HomePageWrapper>
  );
};

export default HomePage;
