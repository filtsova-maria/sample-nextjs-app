import { Product } from "../Product/types";

export interface IProductInfoItem {
  label: string;
  suffix?: string;
  value: string;
  formProps: Omit<IProductInfoList, "productInfo"> & { inputKey: keyof ProductInfo }
}

export interface IProductInfoList {
  productInfo: ProductInfo;
  editable: boolean;
  productInfoFormInput: Partial<ProductInfo>;
  setProductInfoFormInput: React.Dispatch<
    React.SetStateAction<Partial<ProductInfo>>
  >;
};

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
