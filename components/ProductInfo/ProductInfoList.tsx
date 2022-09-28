import React from "react";
import ProductInfoItem from "./ProductInfoItem";
import { IProductInfoList, ProductInfo } from "./types";
import { EProductInfoLabels } from "./types";

const ProductInfoList: React.FC<IProductInfoList> = ({
  productInfo,
  editable,
  productInfoFormInput,
  setProductInfoFormInput,
}) => {
  return (
    <ul>
      {Object.keys(productInfo).map((key) => {
        let suffix: string = "";
        switch (key) {
          case "discountPercentage":
            suffix += "%";
            break;
          case "price":
            suffix += " $";
        }
        return (
          <ProductInfoItem
            key={key}
            label={EProductInfoLabels[key as keyof typeof EProductInfoLabels]}
            value={productInfo[key as keyof ProductInfo].toString()}
            suffix={suffix}
            formProps={{
              inputKey: key as keyof ProductInfo,
              editable,
              productInfoFormInput,
              setProductInfoFormInput,
            }}
          />
        );
      })}
    </ul>
  );
};

export default ProductInfoList;
