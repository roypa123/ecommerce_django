export interface Subcategory {
    id: number;
    category: number;
    name: string;
    image: string;
    created_at: string;
    updated_at: string;
}

export interface Category {
    id: number;
    name: string;
    image: string;
    subcategories: Subcategory[];
    created_at: string;
    updated_at: string;
}


export interface CreateCategoryPayload {
    name: string;
    image: File;
}

export interface CreateSubcategoryPayload {
    category: number;
    name: string;
    image:File
}