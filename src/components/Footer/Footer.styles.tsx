import styled from "styled-components";

export const FooterWrapper = styled.footer`
  height: 80px;
  background: var(--black);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;

  & > img {
    cursor: pointer;
  }

  & > img:hover {
    animation: fly 5s infinite alternate ease-in-out;
  }
`;

export const Code = styled.code`
  margin-left: 1rem;
  font-weight: normal;
  font-size: 16px;

  & > a {
    cursor: pointer;
    color: var(--primary);
  }
`;
