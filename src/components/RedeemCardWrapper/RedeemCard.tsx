import React from "react";

import {RedeemCardWrapper, Name, Date, Price, Category, Label} from "./RedeemCard.styles";

interface RedeemCardProps {
  name: string;
  category: string;
  createDate: string;
  cost: number;
}

const RedeemCard: React.FC<RedeemCardProps> = ({name, category, createDate, cost}) => {
  return (
    <RedeemCardWrapper>
      <Name>
        <Label>NAME:</Label>
        {name}
      </Name>
      <Date>
        <Label>DATE:</Label>
        {createDate}
      </Date>
      <Price>
        <Label>PRICE:</Label>
        {cost}
      </Price>
      <Category>
        <Label>CATEGORY:</Label>
        {category}
      </Category>
    </RedeemCardWrapper>
  );
};

export default RedeemCard;
