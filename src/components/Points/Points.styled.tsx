import styled from "styled-components";

export const PointsWrapper = styled.div`
  min-height: -webkit-fill-available;
  background: var(--black);
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 48px;
  border-radius: ${(props) => (props.loaded ? "50px" : "48px")};
  padding: ${(props) => (props.loaded ? "0 1rem" : "0")};
  /* width: ${(props) => (props.loaded ? "fit-content" : "48px")}; */
  transition: all 0.8s ease;

  & > span {
    display: ${(props) => (props.loaded ? "block" : "none")};
  }
`;

export const PointsNumber = styled.span`
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--gold);
  margin-right: 0.5rem;
`;

export const CoinWrapper = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    min-height: 40px;
    width: 20px;
    animation: rotation 3s infinite alternate ease-in-out;
  }
  @keyframes rotation {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(359deg);
    }
  }
`;
