export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description?: string;
  sizes?: number[];
  rating?: number;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize?: number;
}

export interface FavoriteItem extends Product {
  selectedSize?: number;
}
