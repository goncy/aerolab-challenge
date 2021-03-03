import React, {useState} from "react";

import {History} from "../../types";
import Pagination from "../Pagination";

import {
  TableWrapper,
  TableHeader,
  TableHead,
  TableBody,
  Row,
  Cell,
  TableFooter,
} from "./Table.styles";

interface TableProps {
  columns: string[];
  rows: History[];
}

const Table: React.FC<TableProps> = ({columns, rows = []}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [redeemsPerPage, setProductsPerPage] = useState(10);

  const lastIndex = currentPage * redeemsPerPage;
  const fristIndex = lastIndex - redeemsPerPage;
  const redeemsVisibles = rows
    .reverse()
    // .sort((a, b) => ((a.createDate as any) + b.createDate) as any)
    .slice(fristIndex, lastIndex);
  const totalPages = Math.round(rows.length / redeemsPerPage);
  const numberOfRedeemsUntilCurrentPage =
    currentPage < totalPages ? currentPage * redeemsPerPage : rows.length;

  const paginate = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      // executeScroll();
      // scrollToTarget();
    }
  };

  return (
    <TableWrapper>
      <TableHeader>
        {columns.map((text: string, i: number) => (
          <TableHead key={i}>{text}</TableHead>
        ))}
      </TableHeader>

      <TableBody>
        {redeemsVisibles.map(({_id, ...row}: History) => {
          const arrValues = Object.values(row);

          return (
            <Row key={_id}>
              {arrValues.map((val, i) => (
                <Cell key={i} gold={i === 1} gray={i === 2}>
                  {String(val)}
                </Cell>
              ))}
            </Row>
          );
        })}
      </TableBody>
      <TableFooter>
        <span>
          {numberOfRedeemsUntilCurrentPage} of <strong>{rows.length}</strong> redeems
        </span>
        <Pagination currentPage={currentPage} paginate={paginate} totalPages={totalPages} />
      </TableFooter>
    </TableWrapper>
  );
};

export default Table;
