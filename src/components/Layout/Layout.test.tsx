import React from "react";
import {render, screen} from "@testing-library/react";

import Layout from "./Layout";

test("renders intro text", () => {
  render(<Layout />);

  const introElement = screen.getByText(/Lets get this party started/i);

  expect(introElement).toBeInTheDocument();
});
