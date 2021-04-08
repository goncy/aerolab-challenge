import * as React from "react";
import {render, screen} from "rtl";

import * as userHooks from "~/user/hooks";
import {Product} from "~/product/types";

import ProductCard from "../ProductCard";

describe("ProductCard", () => {
  it("deberia mostrar la imagen, precio y boton", () => {
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

    jest.spyOn(userHooks, "usePoints").mockReturnValue([1000, jest.fn()]);
    jest.spyOn(userHooks, "useRedeem").mockReturnValue(jest.fn());

    render(<ProductCard product={product} />);

    expect(screen.getByTestId("product")).toHaveTextContent(product.name);
    expect(screen.getByAltText("coin")).toBeVisible();
    expect(screen.getByRole("button")).toBeVisible();
  });
});
