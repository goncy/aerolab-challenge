import styled from "styled-components";

export const ProfilePageWrapper = styled.div`
  width: 100%;
`;

export const TopProfile = styled.div`
  width: 100%;
  /* background: red; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
  }
`;

export const Container = styled.section`
  margin: 1rem 10vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1200px) {
    margin: 1rem;
  }
`;

export const ProfileCard = styled.div`
  background: var(--white);
  width: 100%;
  margin: 0 auto;
  min-height: 420px;
  display: flex;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const AvatarWrapper = styled.div`
  @media only screen and (max-width: 768px) {
    > img {
      width: 75%;
    }
  }
`;

export const Name = styled.span`
  margin: 1rem 0;
  font-weight: 300;
  font-size: 36px;
`;

export const H2 = styled.h2`
  margin: 1rem 0;
  text-align: left;
  font-weight: 500;
  font-size: 3rem;
  align-self: flex-start;

  @media only screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

export const H4 = styled.h4`
  margin: 1rem 0;
  text-align: left;
  font-weight: 500;
  font-size: 1.5rem;
  align-self: flex-start;
`;

export const PointsCards = styled.div`
  /* margin: 1rem 0; */
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
`;

interface PointsCardsTypes {
  type1?: boolean;
  type2?: boolean;
  type3?: boolean;
}

export const PointsCard = styled.div<PointsCardsTypes>`
  background: var(--black);
  height: 200px;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${(props) =>
    props.type1
      ? `background-color: #21D4FD;
      background-image: linear-gradient(223deg, #21D4FD 0%, #B721FF 100%);
      `
      : ""}
  ${(props) =>
    props.type2
      ? `background-color: #FF9A8B;
      background-image: linear-gradient(223deg, #FF9A8B 0%, #FF6A88 55%);
      `
      : ""}
  ${(props) =>
    props.type3
      ? `background-color: #FAD961;
      background-image: linear-gradient(223deg, #FAD961 0%, #F76B1C 100%);
      `
      : ""}

  &:hover {
    filter: brightness(1.08);
    border: 1px solid var(--gray);

    & > h3 {
      /* color: var(--black); */
    }
  }
`;

export const H3 = styled.h3`
  font-size: 24px;
  line-height: 36px;
  color: var(--white);
`;

export const PointsContainer = styled.div`
  height: 50px;
`;
