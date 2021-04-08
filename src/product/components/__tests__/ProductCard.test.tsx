import * as React from "react";
import {fireEvent, render, screen} from "@testing-library/react";

import * as userHooks from "~/user/hooks";
import {Product} from "~/product/types";

import ProductCard from "../ProductCard";

const product: Product = {
  _id: "id",
  category: "category",
  cost: 100,
  img: {
    hdUrl: "//placehold.it/256x256",
    url: "//placehold.it/256x256",
  },
  name: "product",
};

beforeEach(() => {
  jest.spyOn(userHooks, "usePoints").mockReturnValue([1000, jest.fn()]);
  jest.spyOn(userHooks, "useRedeem").mockReturnValue(jest.fn());
});

test("should show image, price and button", () => {
  render(<ProductCard product={product} />);

  expect(screen.getByTestId("product")).toHaveTextContent(product.name);
  expect(screen.getByAltText("coin")).toBeVisible();
  expect(screen.getByRole("button")).toBeVisible();
});

test("should call redeem when the button is clicked", () => {
  const redeem = jest.fn();

  jest.spyOn(userHooks, "useRedeem").mockReturnValue(redeem);

  render(<ProductCard product={product} />);

  fireEvent.click(screen.getByRole("button"));

  expect(redeem).toHaveBeenCalled();
});

test("button should be disabled when no enough points", () => {
  jest.spyOn(userHooks, "usePoints").mockReturnValue([0, jest.fn()]);

  render(<ProductCard product={product} />);

  expect(screen.getByRole("button")).toBeDisabled();
});
