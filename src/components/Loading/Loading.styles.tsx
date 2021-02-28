import styled from "styled-components";

export const LoadingWrapper = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  margin: 0 auto;
  border: 3px solid transparent;
  border-top: 3px solid var(--white);
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(365grad);
    }
  }
`;
