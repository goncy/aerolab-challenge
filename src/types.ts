export interface Product {
  _id: string;
  name: string;
  category: string;
  cost: number;
  img: {
    hdUrl: string;
    url: string;
  };
}

export interface User {
  id: string;
  name: string;
  points: number;
  redeemHistory: [];
  createDate: string;
}

export interface History {
  _id: string;
  name: string;
  cost: number;
  category: string;
  createDate: string;
}

export interface Notification {
  key: number;
  msg: string;
}
