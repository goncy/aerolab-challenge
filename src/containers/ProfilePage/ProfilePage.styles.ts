import styled from "styled-components";

export const ProfilePageWrapper = styled.main`
  min-height: 100%;
  margin-top: 80px;
`;

export const TopProfile = styled.div`
  width: 100%;
  /* background: red; */
  display: flex;
  justify-content: space-between;
`;

export const Container = styled.section`
  margin: 1rem 10vw;
  padding-top: 2rem;

  @media only screen and (max-width: 1200px) {
    margin: 1rem;
  }
`;

export const ProfileCard = styled.div`
  background: var(--white);
  width: 35%;
  margin-right: 20px;
  min-height: 420px;
  display: flex;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AvatarWrapper = styled.div``;

export const Name = styled.span`
  margin: 1rem 0;
  font-weight: 300;
  font-size: 36px;
`;

export const H2 = styled.h2`
  margin: 1rem 0;
  text-align: left;
  font-weight: 500;
  font-size: 48px;
`;

export const H4 = styled.h4`
  margin: 1rem 0;
  text-align: left;
  font-weight: 500;
  font-size: 28px;
`;

export const PointsCards = styled.div`
  width: 65%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(370px, 1fr));
  grid-gap: 20px;
`;

export const PointsCard = styled.div`
  background: var(--black);
  height: 200px;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${(props) =>
    props.type1
      ? "background: linear-gradient(284.63deg, #222222 4.3%, rgba(34, 34, 34, 0.75) 89.9%);"
      : ""}
  ${(props) =>
    props.type2
      ? "background: linear-gradient(284.24deg, #f8b013 8.86%, rgba(248, 176, 19, 0.75) 85.99%);"
      : ""}
  ${(props) =>
    props.type3
      ? "background: linear-gradient(284.63deg, #6EE8FF 4.3%, rgba(115, 219, 238, 0.75) 89.9%);"
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
