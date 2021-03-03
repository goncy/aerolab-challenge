import styled from "styled-components";

export const ProductCardWrapper = styled.div`
  min-height: 325px;
  background: white;
  border: 1px solid #eeeeee;
  overflow: hidden;
  border-radius: 6px;
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 250px;
  & > img {
    width: 100%;
    height: 100%;
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
  font-size: 1rem;
`;

export const Cost = styled.span`
  height: 24px;
  color: var(--gold);
  font-weight: 500;
  font-size: 1rem;

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
  font-size: 1.2rem;
`;

export const Button = styled.button`
  width: 100%;
  min-height: 40px;
  padding: 1rem 0;
  background: var(--black);
  color: var(--white);
  font-weight: 600;
  font-size: 1.2rem;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:disabled {
    background: var(--gray);
    &:hover {
      background: var(--gray);
    }
  }
  &:hover {
    background: var(--gold);
    color: var(--white);
  }
`;

export const BackDrop = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 6px;
  background: rgba(34, 34, 34, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > img {
    width: 40px;
    height: 40px;
  }
`;

export const Span = styled.span`
  margin: 1rem 0;
  font-weight: 500;
  font-size: 18px;
  color: var(--white);
`;
