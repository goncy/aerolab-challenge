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
