import styled from "styled-components";

export const HomePageWrapper = styled.div`
  width: 100%;
`;

export const HeroWrapper = styled.div`
  height: 48vh;
  margin-bottom: 2rem;
  position: relative;

  & > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center right;
  }

  @media only screen and (max-width: 480px) {
    max-height: 30vh;
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

  @media only screen and (max-width: 935px) {
    font-size: 48px;
  }
  @media only screen and (max-width: 480px) {
    font-size: 24px;
    padding: 0 1rem;
  }
`;

export const FilterWrapper = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  background: var(--white);
  border: 1px solid #eeeeee;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 1440px) {
    & > span {
      display: none;
    }
  }
`;

export const Container = styled.section`
  margin: 1rem 10vw;

  @media only screen and (max-width: 1200px) {
    margin: 1rem;
  }
`;

export const PaginationInfo = styled.span`
  font-size: 1.2rem;
`;

export const Divider = styled.div`
  height: 1.2rem;
  width: 2px;
  margin: 0 1rem;
  background: var(--gray);

  @media only screen and (max-width: 1440px) {
    display: none;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
`;

export const PaginationWrapper = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  margin-bottom: 2rem;
  background: var(--white);
  border: 1px solid #eeeeee;
  border-radius: 6px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 420px) {
    justify-content: center;
  }
`;

export const TopPagination = styled.div`
  @media only screen and (max-width: 935px) {
    display: none;
  }
`;
