import { useMutation } from "@tanstack/react-query";
import { loginRequest } from "@/endpoints/auth";
import { useAuthStore } from "@/context/authStore";
import type { LoginPayload } from "@/types/auth";


export const useLogin = () => {
    const setAuth = useAuthStore((state) => state.setAuth);

    return useMutation({
        mutationFn: (payload: LoginPayload) => loginRequest(payload),
        onSuccess: (data) => {
            setAuth(data);
        }
    });
};