import React from "react";

import {
  ProductCardSkeletonWrapper,
  ImageWrapper,
  InfoWrapper,
  Row,
  Category,
  Cost,
  Name,
  Button,
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
