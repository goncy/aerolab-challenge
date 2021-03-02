import React, {useContext, Ref} from "react";

import CoinIcon from "../../assets/icons/coin.svg";
import {Product} from "../../types";
import api from "~/api";
import {AuthContext} from "~/context";

import {
  ProductCardWrapper,
  ImageWrapper,
  InfoWrapper,
  Row,
  Category,
  Cost,
  Name,
  Button,
  BackDrop,
  Span,
} from "./ProductCard.styles";

interface ProductCardProps {
  product: Product;
  messageRef: Ref;
}

const ProductCard: React.FC<ProductCardProps> = ({product, messageRef}) => {
  const [{auth, isAuth}, setAuthContext] = useContext(AuthContext);

  const redeemProduct = () => {
    api
      .redeemProduct(product._id)
      .then(() => {
        messageRef.current(`${product.name} redeem it.`);
      })
      .catch((err) => {
        messageRef.current(`Ops! Something went wrong.`);
      });
    // Updating Users Points
    setAuthContext({isAuth, auth: {...auth, points: auth.points - product.cost}});
  };

  const canNotBuy = auth?.points < product.cost;

  return (
    <ProductCardWrapper>
      <ImageWrapper>
        {canNotBuy && (
          <BackDrop>
            <img alt="Coin Icon" src={CoinIcon} />
            <Span>You need {product.cost} coins</Span>
          </BackDrop>
        )}
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
      <Button disabled={canNotBuy} onClick={redeemProduct}>
        REDEEM NOW
      </Button>
    </ProductCardWrapper>
  );
};

export default ProductCard;
