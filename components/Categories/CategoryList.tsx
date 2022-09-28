import React, { useEffect } from "react";
import useProductStore from "../../hooks/store";
import categoryStyles from "../../styles/Category.module.css";
import { ECategory } from "./types";
import useSWR from "swr";

const CategoryList: React.FC = () => {
  const { data: categories, error } = useSWR<ECategory[]>(
    "products/categories"
  );
  const [activeCategory, setActiveCategory] = useProductStore((state) => [
    state.productCategory,
    state.setActiveCategory,
  ]);

  useEffect(() => {
    const savedCategory = localStorage.getItem("activeCategory");
    if (savedCategory) {
      setActiveCategory(savedCategory as ECategory);
    } else if (categories) {
      setActiveCategory(categories[0]);
    }
  }, [categories]);

  if (error) {
    return <div>Could not load categories: {error}</div>;
  }
  if (!categories) {
    return <div>Loading categories...</div>;
  }
  return (
    <div className={categoryStyles.list}>
      {categories.map((category) => (
        <button
          key={category}
          className={category === activeCategory ? categoryStyles.active : ""}
          onClick={() => {
            setActiveCategory(category);
            localStorage.setItem("activeCategory", category);
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryList;
