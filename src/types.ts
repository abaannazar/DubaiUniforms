export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  ctaImage?: string;
  features: string[];
  products: Product[];
}

export interface Product {
  name: string;
  description: string;
  price: string;
  image: string;
}