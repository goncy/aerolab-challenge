import styled from "styled-components";
import {animated} from "react-spring";

interface NotificationHubWrapperProps {
  top: boolean;
  position: string;
}
export const NotificationHubWrapper = styled.div<NotificationHubWrapperProps>`
  position: fixed;
  z-index: 1000;
  width: 0 auto;
  top: ${(props) => (props.top ? "30px" : "unset")};
  bottom: ${(props) => (props.top ? "unset" : "30px")};
  margin: 0 auto;
  left: 30px;
  right: 30px;
  display: flex;
  flex-direction: ${(props) => (props.top ? "column-reverse" : "column")};
  pointer-events: none;
  align-items: ${(props) =>
    props.position === "center" ? "center" : `flex-${props.position || "end"}`};
  @media (max-width: 680px) {
    align-items: center;
  }
`;

export const Message = styled(animated.div)`
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  width: 40ch;
  @media (max-width: 680px) {
    width: 100%;
  }
`;

interface ContentProps {
  top: boolean;
  canClose: boolean;
}

export const Content = styled.div<ContentProps>`
  color: var(--white);
  font-weight: 500;
  background: var(--black);
  opacity: 0.9;
  padding: 12px 22px;
  font-size: 0.8rem;
  display: grid;
  grid-template-columns: ${(props) => (props.canClose === false ? "1fr" : "1fr auto")};
  grid-gap: 10px;
  overflow: hidden;
  height: auto;
  border-radius: 3px;
  margin-top: ${(props) => (props.top ? "0" : "10px")};
  margin-bottom: ${(props) => (props.top ? "10px" : "0")};
`;

export const Button = styled.button`
  cursor: pointer;
  pointer-events: all;
  outline: 0;
  border: none;
  background: transparent;
  display: flex;
  align-self: flex-end;
  overflow: hidden;
  margin: 0;
  padding: 0;
  padding-bottom: 14px;
  color: var(--white);
  :hover {
    color: rgba(255, 255, 255, 0.75);
  }
`;

interface LifeProps {
  top: boolean;
}

export const Life = styled(animated.div)<LifeProps>`
  position: absolute;
  bottom: ${(props) => (props.top ? "10px" : "0")};
  left: 0px;
  width: auto;
  background-image: linear-gradient(130deg, var(--primary), var(--gold));
  height: 5px;
`;
