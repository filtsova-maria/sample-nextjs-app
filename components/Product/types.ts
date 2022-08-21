export type ProductsResponse = {
    products: Product[],
    limit: number,
    skip: number,
    total: number
}

export type Product = {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    brand: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    images: string[];
}