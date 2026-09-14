export interface Product {
    id: number;
    subcategory: number;
    title: string;
    description: string;
    image: string;
    price: string;
    created_at: string;
    updated_at: string;
}

export interface CreateProductPayload {
    subcategory: number;
    title: string;
    description: string;
    image: File;
    price: string;
}
