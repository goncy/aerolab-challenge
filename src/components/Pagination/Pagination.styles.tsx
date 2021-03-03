import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;

  & > span {
    margin: 1rem;
  }
`;

interface ImgProps {
  active: boolean;
}

export const Img = styled.img<ImgProps>`
  cursor: ${(props) => (props.active ? "pointer" : "initial")};
`;
