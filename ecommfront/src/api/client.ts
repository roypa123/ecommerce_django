import axios, { type AxiosError, type InternalAxiosRequestConfig } from "axios";
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

interface RetriableConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

let isRefreshing = false;
let pendingRequests: ((token: string) => void)[] = [];

apiClient.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as RetriableConfig;

    if (error.response?.status === 401 && !originalRequest._retry) {
      const refreshToken = useAuthStore.getState().refreshToken;

      if (!refreshToken) {
        useAuthStore.getState().logout();
        window.location.href = "/login";
        return Promise.reject(error);
      }

      if (isRefreshing) {
        return new Promise((resolve) => {
          pendingRequests.push((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            resolve(apiClient(originalRequest));
          });
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        // Plain axios call — NOT apiClient — so the expired access token
        // isn't attached to this request and doesn't cause a false 401.
        const { data } = await axios.post<{ access: string }>(
          `${env.apiBaseUrl}/auth/login/refresh/`,
          { refresh: refreshToken }
        );

        useAuthStore.getState().setAccessToken(data.access);
        pendingRequests.forEach((cb) => cb(data.access));
        pendingRequests = [];

        originalRequest.headers.Authorization = `Bearer ${data.access}`;
        return apiClient(originalRequest);
      } catch (refreshError) {
        useAuthStore.getState().logout();
        window.location.href = "/login";
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);
