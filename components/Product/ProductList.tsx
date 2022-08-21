import React from 'react'
import { ProductsResponse } from './types';
import ProductItem from './ProductItem';
import productStyles from '../styles/Product.module.css';
import useAxios from '../../hooks/useAxios';
import { ECategory } from '../Categories/types';

interface IProductList {
  activeCategory?: ECategory;
}

const ProductList: React.FC<IProductList> = ({ activeCategory }) => {
  const { res, err, loading } = useAxios<ProductsResponse>(`/products/category/${activeCategory}`, "get", "get-products");
  if (loading) {
    return <div>Loading products...</div>
  }
  if (err.length > 0) {
    return (<div>Could not load products</div>)
  }
  if (!res) {
    return <></>
  }
  if (!activeCategory) {
    return <div>Pick a product category</div>
  }
  return (
    <div className={productStyles.list}>
      {res.products.map(product => <ProductItem {...product} key={product.id} />)}
    </div>
  )
}

export default ProductList;
