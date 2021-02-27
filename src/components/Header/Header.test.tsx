import React from "react";
import {render, screen} from "@testing-library/react";

import Header from "./Header";

test("renders intro text", () => {
  render(<Header />);

  const introElement = screen.getByText(/Lets get this party started/i);

  expect(introElement).toBeInTheDocument();
});
