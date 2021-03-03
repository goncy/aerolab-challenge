import React from "react";

import PreviousIconActive from "../../assets/icons/arrow-left-clickable.svg";
import NextIconActive from "../../assets/icons/arrow-right-clickable.svg";
import PreviousIcon from "../../assets/icons/arrow-left.svg";
import NextIcon from "../../assets/icons/arrow-right.svg";

import {PaginationWrapper, Img} from "./Pagination.styles";

const Pagination = ({currentPage, totalPages, paginate}) => {
  return (
    <PaginationWrapper>
      <Img
        active={currentPage > 1}
        alt={"Previous page"}
        src={currentPage > 1 ? PreviousIconActive : PreviousIcon}
        onClick={() => paginate(currentPage - 1)}
      />

      <span>
        {currentPage} / <strong>{totalPages}</strong>
      </span>
      <Img
        active={currentPage < totalPages}
        alt={"Next page"}
        src={currentPage < totalPages ? NextIconActive : NextIcon}
        onClick={() => paginate(currentPage + 1)}
      />
    </PaginationWrapper>
  );
};

export default Pagination;
