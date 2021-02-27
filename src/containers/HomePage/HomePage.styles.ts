import styled from "styled-components";

export const HomePageWrapper = styled.div`
  width: 100%;
`;

export const HeroWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;

  & > img {
    height: 45vh;
    width: 100%;
    object-fit: cover;
    object-position: center right;
  }
`;

export const H2 = styled.h2`
  font-weight: bold;
  font-size: 64px;
  color: #ffffff;
  text-shadow: 0px 4px 12px rgba(12, 51, 77, 0.4);
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
  padding: 0 10%;

  @media only screen and (max-width: 769px) {
    font-size: 48px;
  }
  @media only screen and (max-width: 480px) {
    font-size: 24px;
    padding: 0 1rem;
  }
`;
