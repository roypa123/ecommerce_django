import { apiClient } from "@/api/client";
import type { SignupPayload, LoginPayload, AuthResponse } from "@/types/auth";

export const signupRequest = async (payload: SignupPayload): Promise<AuthResponse> => {
    const { data } = await apiClient.post<AuthResponse>("/auth/signup/", payload);
    return data;
}

export const loginRequest = async (payload: LoginPayload): Promise<AuthResponse> => {
    const { data } = await apiClient.post<AuthResponse>("/auth/login/", payload);
    return data;
}