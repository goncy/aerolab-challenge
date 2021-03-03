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
  RowSkeleton,
  CellSkeleton,
} from "./Table.styles";

interface TableProps {
  columns: string[];
  rows: History[];
  loading: boolean;
}

const Table: React.FC<TableProps> = ({columns, rows = [], loading = true}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setProductsPerPage] = useState(10);

  const lastIndex = currentPage * rowsPerPage;
  const fristIndex = lastIndex - rowsPerPage;
  const rowsVisibles = rows.reverse().slice(fristIndex, lastIndex);
  const totalPages = Math.round(rows.length / rowsPerPage);
  const numberOfRowsUntilCurrentPage =
    currentPage < totalPages ? currentPage * rowsPerPage : rows.length;

  const paginate = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      // executeScroll();
      // scrollToTarget();
    }
  };

  const skeletons = Array.from("a".repeat(rowsPerPage));

  return (
    <TableWrapper>
      <TableHeader>
        {columns.map((text: string, i: number) => (
          <TableHead key={i}>{text}</TableHead>
        ))}
      </TableHeader>

      <TableBody>
        {loading &&
          skeletons.map((s, i) => (
            <RowSkeleton key={i}>
              <CellSkeleton />
            </RowSkeleton>
          ))}
        {rowsVisibles.map(({_id, ...row}: History) => {
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
          {numberOfRowsUntilCurrentPage} of <strong>{rows.length}</strong> rows
        </span>
        <Pagination currentPage={currentPage} paginate={paginate} totalPages={totalPages} />
      </TableFooter>
    </TableWrapper>
  );
};

export default Table;
