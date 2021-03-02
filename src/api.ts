import axios from "axios";

import {Product, User, History} from "./types";

axios.defaults.headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDM5MDJhNzdlNzE4NzAwMjBlMzhmMmEiLCJpYXQiOjE2MTQzNDg5Njd9.RVpEBg_K5A3eWPxYdswpIKdDfXicxFkowK0LpyWFi6E",
};

export default {
  logInUser: (): Promise<{data: User}> =>
    axios.get("https://coding-challenge-api.aerolab.co/user/me"),
  getAllProducts: (): Promise<{data: Product}> =>
    axios.get("https://coding-challenge-api.aerolab.co/products"),
  getHistory: (): Promise<{data: History[]}> =>
    axios.get("https://coding-challenge-api.aerolab.co/user/history"),
  addPoints: (amount: number): Promise<{data: {"New Points": number}}> =>
    axios.post("https://coding-challenge-api.aerolab.co/user/points", {amount}),
  redeemProduct: (productId: string): Promise<{message: string}> =>
    axios.post("https://coding-challenge-api.aerolab.co/redeem", {productId}),
};
