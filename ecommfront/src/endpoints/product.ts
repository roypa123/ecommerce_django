import { apiClient } from "@/api/client";
import type { Product, CreateProductPayload } from "@/types/product";

export const getProducts = async (): Promise<Product[]> => {
    const { data } = await apiClient.get<Product[]>("/products/");
    return data;
};

export const createProductRequest = async (
    payload: CreateProductPayload
): Promise<Product> => {
    const formData = new FormData();
    formData.append("subcategory", String(payload.subcategory));
    formData.append("title", payload.title);
    formData.append("description", payload.description);
    formData.append("image", payload.image);
    formData.append("price", payload.price);

    const { data } = await apiClient.post<Product>("/products/", formData);
    return data;
}
