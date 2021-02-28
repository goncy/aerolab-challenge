import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;

  & > span {
    margin: 1rem;
  }
`;

export const Img = styled.img`
  cursor: ${(props) => (props.active ? "pointer" : "initial")};
`;
