import React from "react";

import {History} from "../../types";

import {TableWrapper, TableHeader, TableHead, TableBody, Row, Cell} from "./Table.styles";

interface TableProps {
  columns: string[];
  rows: History[];
}

const Table: React.FC<TableProps> = ({columns, rows = []}) => {
  return (
    <TableWrapper>
      <TableHeader>
        {columns.map((text: string, i: number) => (
          <TableHead key={i}>{text}</TableHead>
        ))}
      </TableHeader>

      <TableBody>
        {rows
          .sort((a, b) => b.createDate.localeCompare(a.createDate))
          .map(({_id, ...row}: History) => {
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
    </TableWrapper>
  );
};

export default Table;
