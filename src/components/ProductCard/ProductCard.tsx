import React from "react";

import CoinIcon from "../../assets/icons/coin.svg";
import {Product} from "../../types";

import {
  ProductCardWrapper,
  ImageWrapper,
  InfoWrapper,
  Row,
  Category,
  Cost,
  Name,
  Button,
} from "./ProductCard.styles";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({product}) => {
  return (
    <ProductCardWrapper>
      <ImageWrapper>
        <img alt={product.name} src={product.img.hdUrl} />
      </ImageWrapper>
      <InfoWrapper>
        <Row>
          <Category>{product.category}</Category>
          <Cost>
            {product.cost}
            <img alt="Coin" src={CoinIcon} />
          </Cost>
        </Row>
        <Name>{product.name}</Name>
      </InfoWrapper>
      <Button>REDEEM NOW</Button>
    </ProductCardWrapper>
  );
};

export default ProductCard;
