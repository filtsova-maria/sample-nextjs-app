import React, { useState } from "react";
import productStyles from "../../styles/Product.module.css";
import { IProductInfoItem } from "./types";

const ProductInfoItem: React.FC<IProductInfoItem> = ({
  label,
  value,
  suffix,
  formProps: form,
}) => {
  const [inputValue, setInputValue] = useState(value);
  return (
    <li>
      <label className={productStyles.tag}>{label}</label>
      <div className={productStyles["input-field"]}>
        <input
          type="text"
          disabled={!form.editable}
          value={inputValue}
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            setInputValue(e.currentTarget.value);
            form.setProductInfoFormInput(
              Object.assign(form.productInfoFormInput, {
                [form.inputKey]: e.currentTarget.value,
              })
            );
          }}
        />
        <span>{suffix}</span>
      </div>
    </li>
  );
};

export default ProductInfoItem;
