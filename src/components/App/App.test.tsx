import React from "react";
import {render, screen} from "@testing-library/react";

import App from "./App";

test("renders intro text", () => {
  render(<App />);

  const introElement = screen.getByText(/Lets get this party started/i);

  // expect(introElement).toBeInTheDocument();
});
