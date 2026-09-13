import axios from "axios";
import { env } from "@/config/env";
import { useAuthStore } from "@/context/authStore";

export const apiClient = axios.create({
    baseURL: env.apiBaseUrl,
})

apiClient.interceptors.request.use((config) => {
    const token = useAuthStore.getState().accessToken;
    if(token){
        config.headers.Authorization = `Bearer ${token}`;

    }
    return config;
})