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
  @media only screen and (max-width: 720px) {
    display: none;
  }
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
  @media only screen and (max-width: 720px) {
    display: none;
  }
`;

export const Row = styled.div`
  width: 100%;
  /* height: 50px; */
  padding-bottom: 4px;

  display: grid;
  grid-template-columns: 2fr 1fr 1fr 2fr;
  grid-gap: 4px;
`;

interface CellProps {
  gold?: boolean;
  gray?: boolean;
}

export const Cell = styled.div<CellProps>`
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

export const TableFooter = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  margin-bottom: 2rem;
  background: var(--white);
  border: 1px solid #eeeeee;
  border-radius: 6px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  > span {
    font-size: 1.2rem;
  }

  @media only screen and (max-width: 420px) {
    justify-content: center;
  }
`;

export const CellSkeleton = styled.div`
  padding: 1rem;
  width: 1fr;
  height: 100%;

  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.07);
  border-collapse: collapse;
  border-radius: 5px;
  background: white;
`;

export const RowSkeleton = styled.div`
  width: 100%;
  height: 57px;
  padding-bottom: 4px;

  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 4px;
`;

export const RedeemList = styled.div`
  display: none;
  @media only screen and (max-width: 720px) {
    display: block;
  }
`;
