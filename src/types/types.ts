export type TProduct = {
  _id: string;
  name: string;
  category: string;
  instock: number;
  brand: string;
  rating: number;
  description: string;
  price: number;
  image: string;
};

export type TCartItem = {
  id: string;
  name: string;
  quantity?: number;
  price: number;
  image: string;
};
