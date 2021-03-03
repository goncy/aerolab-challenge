import React, {useContext, Ref} from "react";

import CoinIcon from "../../assets/icons/coin.svg";
import {Product} from "../../types";
import api from "~/api";
import {AuthContext} from "~/context";
import Loading from "../Loading/Loading";

import {
  ProductCardSkeletonWrapper,
  ImageWrapper,
  InfoWrapper,
  Row,
  Category,
  Cost,
  Name,
  Button,
  BackDrop,
  Span,
} from "./ProductCardSkeleton.styles";

const ProductCardSkeleton = () => {
  return (
    <ProductCardSkeletonWrapper>
      <ImageWrapper />
      <InfoWrapper>
        <Row>
          <Category />
          <Cost />
        </Row>
        <Name />
      </InfoWrapper>
      <Button />
    </ProductCardSkeletonWrapper>
  );
};

export default ProductCardSkeleton;
