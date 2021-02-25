import {Product} from "~/product/types";

export interface User {
  id: string;
  name: string;
  points: number;
  redeemHistory: Product[];
}
