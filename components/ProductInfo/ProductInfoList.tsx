import React from 'react';
import ProductInfoItem from './ProductInfoItem';
import { ProductInfo } from './types';
import { EProductInfoLabels } from './types';

type IProductInfoList = {
    productInfo: ProductInfo,
    editable: boolean;
    productInfoFormInput: Partial<ProductInfo>,
    setProductInfoFormInput: React.Dispatch<React.SetStateAction<Partial<ProductInfo>>>
};

const ProductInfoList: React.FC<IProductInfoList> = ({ productInfo, editable, productInfoFormInput, setProductInfoFormInput }) => {
    return (
        <ul>
            {Object.keys(productInfo).map(key => {
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
                        inputKey={key as keyof ProductInfo}
                        label={EProductInfoLabels[key as keyof typeof EProductInfoLabels]}
                        value={productInfo[key as keyof ProductInfo].toString()}
                        editable={editable}
                        suffix={suffix}
                        productInfoFormInput={productInfoFormInput}
                        setProductInfoFormInput={setProductInfoFormInput}
                    />
                )
            }
            )}
        </ul>
    )
}

export default ProductInfoList