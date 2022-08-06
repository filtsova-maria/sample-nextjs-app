import React, { useState } from 'react';
import productStyles from '../styles/Product.module.css';
import { ProductInfo } from './types';

interface IProductInfoItem {
    inputKey: keyof ProductInfo;
    label: string;
    value: string;
    editable: boolean;
    suffix?: string;
    productInfoFormInput: Partial<ProductInfo>;
    setProductInfoFormInput: React.Dispatch<React.SetStateAction<Partial<ProductInfo>>>;
};

const ProductInfoItem: React.FC<IProductInfoItem> = ({ inputKey, label, value, editable, suffix, productInfoFormInput, setProductInfoFormInput }) => {
    const [inputValue, setInputValue] = useState(value);
    console.log(productInfoFormInput)
    return (
        <li>
            <label className={productStyles.tag}>{label}</label>
            <div className={productStyles["input-field"]}>
                <input
                    type="text"
                    disabled={!editable}
                    value={inputValue}
                    onChange={(e: React.FormEvent<HTMLInputElement>) => {
                        setInputValue(e.currentTarget.value);
                        setProductInfoFormInput(Object.assign(productInfoFormInput, { [inputKey]: e.currentTarget.value }))
                    }}
                />
                <span>{suffix}</span>
            </div>
        </li>
    )
}

export default ProductInfoItem;