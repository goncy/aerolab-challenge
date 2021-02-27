import axios from "axios";

import {Product} from "./types";

axios.defaults.headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDM5MDJhNzdlNzE4NzAwMjBlMzhmMmEiLCJpYXQiOjE2MTQzNDg5Njd9.RVpEBg_K5A3eWPxYdswpIKdDfXicxFkowK0LpyWFi6E",
};

export default {
  getAllProducts: (): Promise<Product> =>
    axios.get("https://coding-challenge-api.aerolab.co/products"),
};
