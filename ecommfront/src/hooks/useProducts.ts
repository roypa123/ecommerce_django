import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/endpoints/product";

export const useProducts = () => {
    return useQuery({
        queryKey: ["products"],
        queryFn: getProducts,
    });
}
