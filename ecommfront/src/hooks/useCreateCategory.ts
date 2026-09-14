import { useMutation, useQueryClient} from "@tanstack/react-query";
import { createCategoryRequest } from "@/endpoints/category";

export const useCreateCategory = () => {
   const queryClient = useQueryClient();

   return useMutation({
    mutationFn: createCategoryRequest,
    onSuccess: ()=> {
        queryClient.invalidateQueries({ queryKey: ["categories"]});
    },
   })
};