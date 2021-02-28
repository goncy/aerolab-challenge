import React, {useEffect, useState, useRef} from "react";

import HeroImage from "../../assets/header.png";
import api from "../../api";
import Select from "../../components/Select";
import ProductCard from "../../components/ProductCard";
import Pagination from "../../components/Pagination";

import {
  HomePageWrapper,
  HeroWrapper,
  H2,
  FilterWrapper,
  Container,
  PaginationInfo,
  Divider,
  Grid,
  PaginationWrapper,
  TopPagination,
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
  const [orderedProducts, setOrderedProducts] = useState([]);
  const [status, setStatus] = useState("pending");
  const [currentPage, setCurrentPage] = useState(0);
  const [productsPerPage, setProductsPerPage] = useState(12);
  const [orderBy, setOrderBy] = useState(options[0].value);
  const titleRef = useRef(null);
  const executeScroll = () => titleRef.current.scrollIntoView();

  const lastIndex = currentPage * productsPerPage;
  const fristIndex = lastIndex - productsPerPage;
  const visibleProducts = orderedProducts.slice(fristIndex, lastIndex);
  const totalPages = Math.round(products.length / productsPerPage);
  const numberOfProductsUntilCurrentPage =
    currentPage < totalPages ? currentPage * productsPerPage : products.length;

  useEffect(() => {
    api
      .getAllProducts()
      .then((res) => {
        setProducts(() => res.data);
        setOrderedProducts(() => products);
        setCurrentPage(1);
        setStatus("success");
      })
      .catch((err) => {
        setStatus("failed");
      });
  }, []);

  useEffect(() => {
    setOrderedProducts(() => {
      switch (orderBy) {
        case options[1].value:
          return orderedProducts.concat().sort((a, b) => a.cost - b.cost);
        case options[2].value:
          return orderedProducts.concat().sort((a, b) => b.cost - a.cost);
        default:
          return products;
      }
    });
  }, [products, orderBy]);

  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      executeScroll();
    }
  };

  return (
    <HomePageWrapper>
      <HeroWrapper>
        <img alt="Electronics Hero" src={HeroImage} />
        <H2 ref={titleRef}>Electronics</H2>
      </HeroWrapper>
      <Container id={"fitler"}>
        <FilterWrapper>
          <PaginationInfo>
            {numberOfProductsUntilCurrentPage} of <strong>{products.length}</strong> products
          </PaginationInfo>
          <Divider />
          <Select options={options} orderBy={orderBy} setOrderBy={setOrderBy} />
          <Divider />
          <TopPagination>
            <Pagination currentPage={currentPage} paginate={paginate} totalPages={totalPages} />
          </TopPagination>
        </FilterWrapper>
      </Container>
      <Container>
        <Grid>
          {status === "success"
            ? visibleProducts.map((product) => <ProductCard key={product._id} product={product} />)
            : null}
        </Grid>
      </Container>
      <Container>
        <PaginationWrapper>
          <PaginationInfo>
            {numberOfProductsUntilCurrentPage} of <strong>{products.length}</strong> products
          </PaginationInfo>
          <Pagination currentPage={currentPage} paginate={paginate} totalPages={totalPages} />
        </PaginationWrapper>
      </Container>
    </HomePageWrapper>
  );
};

export default HomePage;
