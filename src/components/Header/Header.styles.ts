import styled, {StyledFunction} from "styled-components";
import {Link} from "react-router-dom";

export const HeaderWrapper = styled.header`
  width: inherit;
  height: 80px;
  padding: 0 10%;
  background: rgba(255, 255, 255, 0.95);
  /* position: fixed;
  top: 0; */

  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;

  box-shadow: 4px 0px 22px rgba(34, 34, 34, 0.25);

  @media only screen and (max-width: 365px) {
    padding: 0 1rem;
  }
`;

export const LogoWrapper = styled(Link)`
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

export const LogIn = styled(Link)`
  height: 60%;
  width: fit-content;
  border: 1px;
  border-radius: 50px;
  background: #f1f1f1;
  font-size: 12px;
  text-decoration: none;
  display: flex;
  align-items: center;
  cursor: pointer;

  @media only screen and (max-width: 365px) {
    height: 50%;
  }
`;

interface FullNameProps {
  loaded?: boolean;
}
export const FullName = styled.span<FullNameProps>`
  text-decoration: none;
  color: var(--black);
  font-size: 1rem;
  padding: ${(props) => (props.loaded ? "0 1rem" : "0")};
  /* width: ${(props) => (props.loaded ? "fit-content" : "0")}; */
  opacity: ${(props) => (props.loaded ? "1" : "0")};
  transition: all 1.8s ease;
`;

// styled<Props, 'div'>('div')`
//   color: ${color.primary}
// `
