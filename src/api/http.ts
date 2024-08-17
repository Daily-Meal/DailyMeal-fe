import { useAuthStore } from "@/stores/authStore";
import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

const DEFAULT_TIMEOUT = 30000;

export const createClient = (config?: AxiosRequestConfig) => {
  const axiosInstance = axios.create({
    baseURL: "example.com", // 환경변수로 관리할 예정
    timeout: DEFAULT_TIMEOUT,
    headers: {
      "Content-Type": "application/json",
      Authorization: "token", // 로그인 기능 구현할 예정
    },
    withCredentials: true,
    ...config,
  });

  axios.interceptors.request.use(config => {
    const { accessToken } = useAuthStore.getState();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  });

  axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => response,
    async (error: AxiosError) => {
      const originalRequest = error.config as CustomAxiosRequestConfig;

      if (!originalRequest) {
        return Promise.reject(error);
      }

      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        const { refreshToken, setAccessToken, clearTokens } =
          useAuthStore.getState();

        try {
          const { data } = await axios.post("refresh토큰 api url", {
            token: refreshToken,
          });

          setAccessToken(data.accessToken);
          axiosInstance.defaults.headers["Authorization"] =
            `Bearer ${data.accessToken}`;
          originalRequest.headers["Authorization"] =
            `Bearer ${data.accessToken}`;

          return axiosInstance(originalRequest);
        } catch (err) {
          clearTokens();
          window.location.href = "/login";
          return Promise.reject(err);
        }
      }

      return Promise.reject(error);
    },
  );

  return axiosInstance;
};

export const httpClient = createClient();
