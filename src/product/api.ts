import axios from "axios";

import {Product} from "./types";

const requester = axios.create({
  baseURL: "https://coding-challenge-api.aerolab.co",
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDI5NjIwZjdlNzE4NzAwMjBlMzhlZjUiLCJpYXQiOjE2MTMzMjQ4MTV9.YwxmvA6s0eW-IbuoRzme6xLfaIALy3RhSRiR3GrMzwo`,
  },
});

requester.interceptors.response.use((response) => response.data);

export default {
  list: (): Promise<Product[]> => requester.get(`/products`, {}),
  redeem: (product: Product): Promise<string> =>
    Promise.resolve(`You have redeem the product successfully (${product.name})`),
};
