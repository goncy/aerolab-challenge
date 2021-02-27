import styled from "styled-components";

export const ProductCardWrapper = styled.div`
  min-height: 325px;
  background: white;
  border: 1px solid #eeeeee;
  overflow: hidden;
  border-radius: 6px;
`;

export const ImageWrapper = styled.div`
  width: 100%;

  & > img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
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
  color: #666666;
  font-weight: 500;
  font-size: 14px;
`;

export const Cost = styled.span`
  height: 24px;
  color: var(--gold);
  font-weight: 500;
  font-size: 14px;

  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    height: 80%;
    margin-left: 0.5rem;
  }
`;

export const Name = styled.h1`
  margin: 0.5rem 0;
  text-align: left;
  color: var(--black);
  font-weight: 500;
  font-size: 18px;
`;

export const Button = styled.button`
  width: 100%;
  min-height: 40px;
  padding: 1rem 0;
  background: var(--black);
  color: var(--white);
  font-weight: 600;
  font-size: 18px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: var(--gold);
    color: var(--white);
  }
`;
