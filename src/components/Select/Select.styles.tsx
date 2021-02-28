import styled from "styled-components";

export const SelectWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 935px) {
    width: 100%;
    flex-direction: column;
  }
`;
export const Option = styled.button`
  margin: 0.4rem 0.5rem;
  padding: 0.5rem 2rem;
  height: fit-content;
  width: fit-content;
  background: #eeeeee;
  color: #b0b0b0;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  font-size: 16px;
  outline: none;
  cursor: pointer;

  ${(props) =>
    props.active
      ? `
    background: var(--primary);
    color: var(--white);
    box-shadow: 1px 1px 8px rgba(255, 125, 1, 0.5);
    `
      : ""}

  &:hover {
    background: var(--primary);
    color: var(--white);
    box-shadow: 1px 1px 8px rgba(255, 125, 1, 0.5);
  }

  @media only screen and (max-width: 935px) {
    width: 100%;
    margin: 0.4rem 0;
  }
`;

export const Label = styled.span`
  text-align: start;
  font-size: 1rem;
  font-weight: 500;
  color: var(--gray);

  @media only screen and (max-width: 935px) {
    width: 100%;
    font-size: 0.8rem;
  }
`;
