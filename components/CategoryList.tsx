import React, { useEffect } from "react";
import useAxios from "../hooks/useAxios";
import categoryStyles from "../styles/Category.module.css";
import { ECategory } from "./types";

interface ICategoryList {
    activeCategory?: ECategory;
    setActiveCategory: (c: ECategory) => void;
}

const CategoryList: React.FC<ICategoryList> = ({ activeCategory, setActiveCategory }) => {
    const { res: categories, err, loading } = useAxios<ECategory[]>("/products/categories", "get", "get-categories")
    useEffect(() => {
        if (categories) {
            setActiveCategory(categories[0])
        }
    }, [categories])

    if (loading) {
        return <div>Loading categories...</div>
    }
    if (err.length > 0) {
        return (<div>Could not load categories</div>)
    }
    if (!categories) {
        return <></>
    }
    return (
        <div className={categoryStyles.list}>
            {categories.map(category =>
                <button
                    key={category}
                    className={category === activeCategory ? categoryStyles.active : ""}
                    onClick={() => setActiveCategory(category)}
                >
                    {category}
                </button>)
            }
        </div>
    )
}

export default CategoryList;