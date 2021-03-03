import React from "react";
import {render, screen} from "@testing-library/react";

import ProductCard from "./ProductCard";

test("renders intro text", () => {
  render(<ProductCard />);

  const introElement = screen.getByText(/Lets get this party started/i);

  expect(introElement).toBeInTheDocument();
});
