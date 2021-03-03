import React, {useEffect, useState, useRef} from "react";
import {useSpring, animated, config} from "react-spring";

import HeroImage from "../../assets/header.png";
import api from "../../api";
import Select from "../../components/Select";
import ProductCard from "../../components/ProductCard";
import Pagination from "../../components/Pagination";
import NotificationHub from "~/components/Notification";
import ProductCardSkeleton from "~/components/ProductCardSkeleton";

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
  const [productsPerPage, setProductsPerPage] = useState(16);
  const [orderBy, setOrderBy] = useState(options[0].value);
  const catalogueRef = useRef(null);
  const message = useRef(null);
  const [, setY] = useSpring(() => ({y: 0}));

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

  const paginate = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      // executeScroll();
      scrollToTarget();
    }
  };

  let isStopped = false;
  const onWheel = () => {
    isStopped = true;
    window.removeEventListener("wheel", onWheel);
  };

  const scrollToTarget = () => {
    const element = catalogueRef.current;
    const value = window.scrollY + element.getBoundingClientRect().bottom;

    window.addEventListener("wheel", onWheel);

    setY({
      y: value - 80,
      reset: true,
      from: {y: window.scrollY},
      onRest: () => {
        isStopped = false;
        window.removeEventListener("wheel", onWheel);
      },
      onFrame: (props) => {
        if (!isStopped) {
          window.scroll(0, props.y);
        }
      },
    });
  };

  const skeletons = Array.from(">>aerolab.co");

  return (
    <HomePageWrapper>
      <HeroWrapper ref={catalogueRef}>
        <img alt="Electronics Hero" src={HeroImage} />
        <H2>Electronics</H2>
      </HeroWrapper>
      <animated.div>
        <Container>
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
            {status === "pending" && skeletons.map((s, i) => <ProductCardSkeleton key={i} />)}
            {status === "success"
              ? visibleProducts.map((product) => (
                  <ProductCard key={product._id} messageRef={message} product={product} />
                ))
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
      </animated.div>
      <NotificationHub children={(add) => (message.current = add)} />
    </HomePageWrapper>
  );
};

export default HomePage;
