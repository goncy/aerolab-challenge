import styled from "styled-components";

export const ProductCardSkeletonWrapper = styled.div`
  min-height: 325px;
  background: var(--white);
  border: 1px solid #eeeeee;
  overflow: hidden;
  border-radius: 6px;
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 250px;
  background: #b0b0b0;
`;

export const InfoWrapper = styled.div`
  padding: 1rem;
`;
export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Category = styled.h4`
  height: 18px;
  width: 40%;
  background: #eeeeee;
  border-radius: 6px;
  background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 80px);
  background-size: 600px;
  animation: shine-lines 1.6s infinite linear;

  @keyframes shine-lines {
    0% {
      background-position: -100px;
    }
    40% {
      background-position: 200px;
    }
    100% {
      background-position: 200px;
    }
  }
`;

export const Cost = styled.span`
  margin: 1rem 0;
  height: 18px;
  width: 30%;
  background: #eeeeee;
  border-radius: 6px;
  background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 80px);
  background-size: 600px;
  animation: shine-lines 1.6s infinite linear;
`;

export const Name = styled.div`
  height: 22px;
  width: 60%;
  background: #b0b0b0;
  border-radius: 6px;
  background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 80px);
  background-size: 600px;
  animation: shine-lines 1.6s infinite linear;
`;

export const Button = styled.div`
  width: 100%;
  height: 54px;
  background: var(--black);
`;
