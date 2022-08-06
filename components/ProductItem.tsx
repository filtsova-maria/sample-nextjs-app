import React, { useState } from 'react'
import { Product, ProductInfo } from './types'
import productStyles from '../styles/Product.module.css';
import ProductInfoList from './ProductInfoList';
import omit from 'lodash/omit';
import useAxios from '../hooks/useAxios';

const ProductItem: React.FC<Product> = (product) => {
  const [editable, setEditable] = useState(false);
  const productInfo = omit(product, ["id", "title", "description", "thumbnail", "category", "images"]);
  const [productInfoFormInput, setProductInfoFormInput] = useState<Partial<ProductInfo>>({});
  const { fetch } = useAxios(`products/${product.id}`, "put", "product-edit", productInfo);
  return (
    <div key={product.id} className={productStyles.card}>
      <div className={productStyles.title}>
        <h4>{product.title}</h4>
        <p>{product.description}</p>
      </div>
      <img src={product.thumbnail} />
      <ProductInfoList
        productInfo={productInfo}
        productInfoFormInput={productInfoFormInput}
        setProductInfoFormInput={setProductInfoFormInput}
        editable={editable}
      />
      <button
        type='submit'
        onClick={() => {
          if (editable && Object.keys(productInfoFormInput).length > 0) {
            fetch(productInfoFormInput)
          }
          setEditable(!editable)
        }}
      >
        {editable ? "Done" : "Edit"}
      </button>
    </div>
  )
}

export default ProductItem;