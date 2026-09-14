import { apiclient } from "@/api/client";
import type {
    Category,
    Subcategory,
    CreateCategoryPayload,
    CreateSubcategoryPayload,
} from "@/types/category"

export const getCategories = async (): Promise<Category[]> => {
    const { data } = await apiclient.get<Category[]>("/categories/");
    return data;
};

export const createCategoryRequest = async (
    payload: CreateCategoryPayload
): Promise<Category> => {
    const formData = new FormData();
    formData.append("name", payload.name);
    formData.append("image", payload.image);

    const { data } = await apiclient.post<Category>("/categories/", formData);
    return data;

}


export const createSubcategoryRequest = async (
    payload: CreateSubcategoryPayload
): Promise<Subcategory> => {
  const formData = new FormData();
  formData.append("category", String(payload.category));
  formData.append("name", payload.name);
  formData.append("image", payload.image);

  const { data } = await apiclient.post<Subcategory>("/subcategories", formData);
  return data;
}