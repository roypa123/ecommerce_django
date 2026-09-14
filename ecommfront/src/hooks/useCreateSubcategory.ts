import {useMutation, useQueryClient} from "@tanstack/react-query"
import { createSubcategoryRequest } from "@/endpoints/category"


export const useCreateSubcategory = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createSubcategoryRequest,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["categories"]});
        }
    })
}