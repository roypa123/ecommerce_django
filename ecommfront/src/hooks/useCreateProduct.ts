import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProductRequest } from "@/endpoints/product";

export const useCreateProduct = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createProductRequest,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["products"] });
        },
    });
}
