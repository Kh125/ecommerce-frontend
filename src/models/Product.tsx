export interface Product {
  id: number | null;
  name: string | null;
  description: string | null;
  price: number | null;
  stock: number | null;
  imageUrl: string[] | null;
  category: Category | null;
  tags: Tag[] | null;
  reviews: Review[] | null;
}

export interface Category {
  id: number | null;
  name: string | null;
  description: string | null;
}

export interface Tag {
  id: number | null;
  name: string | null;
}

export interface Review {
  id: number | null;
  content: string | null;
  rating: number | null;
  reviewDate: number[] | null;
  productId: number | null;
}
