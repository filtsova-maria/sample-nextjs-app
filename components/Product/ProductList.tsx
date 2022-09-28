import React from "react";
import { ProductsResponse } from "./types";
import ProductItem from "./ProductItem";
import productStyles from "../../styles/Product.module.css";
import useProductStore from "../../hooks/store";
import useSWR, { useSWRConfig } from "swr";

const ProductList: React.FC = () => {
  const activeCategory = useProductStore((state) => state.productCategory);
  const { data, error } = useSWR<ProductsResponse>(
    `products/category/${activeCategory}`
  );
  const { cache } = useSWRConfig()
  console.log(Array.from([cache as Map<any, any>].values()))
  if (error) {
    return <div>Could not load products: {error}</div>;
  }
  if (!data) {
    return <div>Loading products...</div>;
  }
  if (!activeCategory) {
    return <div>Pick a product category</div>;
  }
  
  return (
    <div className={productStyles.list}>
      {data.products.map((product) => (
        <ProductItem {...product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
