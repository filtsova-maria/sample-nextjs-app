import React, { useState } from "react";
import productStyles from "../../styles/Product.module.css";
import ProductInfoList from "../ProductInfo/ProductInfoList";
import omit from "lodash/omit";
import { Product } from "./types";
import { ProductInfo } from "../ProductInfo/types";
import { axiosInstance } from "../../pages/_app";
import { useSWRConfig } from "swr";
import useProductStore from "../../hooks/store";

const ProductItem: React.FC<Product> = (product) => {
  const [editable, setEditable] = useState(false);

  const productInfo = omit(product, [
    "id",
    "title",
    "description",
    "thumbnail",
    "category",
    "images",
  ]);
  const [productInfoFormInput, setProductInfoFormInput] = useState<
    Partial<ProductInfo>
  >({});
  const activeCategory = useProductStore((state) => state.productCategory);

  return (
    <div key={product.id} className={productStyles.card}>
      <div className={productStyles.title}>
        <h4>{product.title}</h4>
        <p>{product.description}</p>
      </div>
      <img src={product.thumbnail} alt={product.title} />
      <ProductInfoList
        productInfo={productInfo}
        productInfoFormInput={productInfoFormInput}
        setProductInfoFormInput={setProductInfoFormInput}
        editable={editable}
      />
      <button
        type="submit"
        onClick={() => {
          const empty = Object.keys(productInfoFormInput).length === 0;
          if (editable && !empty) {
            axiosInstance.put(`products/${product.id}`, productInfoFormInput);
          }
          setEditable(!editable);
        }}
      >
        {editable ? "Done" : "Edit"}
      </button>
    </div>
  );
};

export default ProductItem;
