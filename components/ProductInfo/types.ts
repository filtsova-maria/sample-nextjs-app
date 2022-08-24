import { Product } from "../Product/types";

export enum EProductInfoLabels {
  brand = "Brand",
  price = "Price",
  discountPercentage = "Discount",
  rating = "Rating",
  stock = "In stock",
}

export type ProductInfo = Omit<
  Product,
  "id" | "title" | "description" | "thumbnail" | "category" | "images"
>;
