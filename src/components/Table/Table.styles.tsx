import styled from "styled-components";

export const TableWrapper = styled.div`
  width: 100%;
`;

export const TableHeader = styled.div`
  width: 100%;
  height: 60px;
  padding: 0 2rem;
  border-radius: 6px;
  background: var(--black);

  display: grid;
  grid-template-columns: 2fr 1fr 1fr 2fr;
`;

export const TableHead = styled.div`
  margin: 0 1rem;
  padding: 0 2rem;
  width: 1fr;
  height: 100%;
  color: white;
  text-align: center;
  font-weight: 500;
  font-size: 18px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TableBody = styled.div`
  width: 100%;
  margin: 1rem 0;
  border-radius: 3px;
  background: #fcfcfc;
`;

export const Row = styled.div`
  width: 100%;
  /* height: 50px; */
  padding-bottom: 4px;

  display: grid;
  grid-template-columns: 2fr 1fr 1fr 2fr;
  grid-gap: 4px;
`;

export const Cell = styled.div`
  padding: 1rem;
  width: 1fr;
  height: 100%;

  color: var(--black);
  font-weight: 500;
  font-size: 16px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.07);
  border-collapse: collapse;
  border-radius: 5px;
  background: white;

  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) => (props.gold ? "color: var(--gold)" : "")}
  ${(props) => (props.gray ? "color: var(--gray)" : "")}
`;
