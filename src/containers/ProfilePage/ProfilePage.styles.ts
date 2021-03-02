import styled from "styled-components";

export const ProfilePageWrapper = styled.main`
  min-height: 100%;
  margin-top: 80px;
`;

export const TopProfile = styled.div`
  width: 100%;
  padding: 2rem 0;
  /* background: red; */
`;

export const Container = styled.section`
  margin: 1rem 10vw;

  @media only screen and (max-width: 1200px) {
    margin: 1rem;
  }
`;

export const ProfileCard = styled.div`
  background: var(--white);
  width: 35%;
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
