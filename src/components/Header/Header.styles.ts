import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 80px;
  padding: 0 10%;
  background: rgba(255, 255, 255, 0.95);
  position: fixed;
  top: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;

  box-shadow: 4px 0px 22px rgba(34, 34, 34, 0.25);

  @media only screen and (max-width: 365px) {
    padding: 0 1rem;
  }
`;

export const LogoWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  & img {
    height: 50%;
  }

  & > img:hover {
    animation: fly 5s infinite alternate ease-in-out;
  }
`;

export const LogIn = styled.div`
  height: 60%;
  width: fit-content;
  border: 1px;
  border-radius: 50px;
  background: #f1f1f1;
  font-size: 12px;
  display: flex;
  align-items: center;
  cursor: pointer;

  @media only screen and (max-width: 365px) {
    height: 50%;
  }
`;

export const FullName = styled.span`
  padding: ${(props) => (props.loaded ? "0 1rem" : "0")};
  width: ${(props) => (props.loaded ? "fit-content" : "0")};
  transition: all 1.8s ease;
`;

export const PointsWrapper = styled.div`
  height: 100%;
  background: var(--black);
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: ${(props) => (props.loaded ? "50px" : "48px")};
  padding: ${(props) => (props.loaded ? "0 1rem" : "0")};
  width: ${(props) => (props.loaded ? "fit-content" : "48px")};
  transition: all 0.8s ease;

  & > span {
    display: ${(props) => (props.loaded ? "block" : "none")};
  }
`;

export const Points = styled.span`
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
    height: 50%;
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
