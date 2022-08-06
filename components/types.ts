export type Product = {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  brand: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  images: string[];
}

export type ProductsResponse = {
  products: Product[],
  limit: number,
  skip: number,
  total: number
}

export type ProductInfo = Omit<Product, "id" | "title" | "description" | "thumbnail" | "category" | "images">;

export enum ECategory {
  "smartphones" = "Smartphones",
  "laptops" = "Laptops",
  "fragrances" = "Fragrances",
  "skincare" = "Skincare",
  "groceries" = "Groceries",
  "home-decoration" = "Home Decoration",
  "furniture" = "Furniture",
  "tops" = "Tops",
  "womens-dresses" = "Women's Dresses",
  "womens-shoes" = "Women's Shoes",
  "mens-shirts" = "Men's Shirts",
  "mens-shoes" = "Men's Shoes",
  "mens-watches" = "Men's Watches",
  "womens-watches" = "Women's Watches",
  "womens-bags" = "Women's Bags",
  "womens-jewellery" = "Women's Jewellery",
  "sunglasses" = "Sunglasses",
  "automotive" = "Automotive",
  "motorcycle" = "Motorcycle",
  "lighting" = "Lighting"
}

export enum EProductInfoLabels {
  brand = "Brand",
  price = "Price",
  discountPercentage = "Discount",
  rating = "Rating",
  stock = "In stock"
}