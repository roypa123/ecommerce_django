import { apiClient } from "@/api/client";
import type { SignupPayload, AuthResponse } from "@/types/auth";

export const signupRequest = async (payload: SignupPayload): Promise<AuthResponse> => {
    const { data } = await apiClient.post<AuthResponse>("/auth/signup/", payload);
    return data;
}