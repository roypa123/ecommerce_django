import { useMutation } from "@tanstack/react-query";
import { signupRequest } from "@/endpoints/auth";
import { useAuthStore } from "@/context/authStore";
import type { SignupPayload } from "@/types/auth";


export const useSignup = () => {
    const setAuth = useAuthStore((state) => state.setAuth);

    return useMutation({
        mutationFn: (payload: SignupPayload) =>signupRequest(payload),
        onSuccess: (data) => {
            setAuth(data);
        }
    });
};