import { toast } from "@/lib/hooks/use-toast";
import axios from "axios";

// Config axios
const AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Intercept the request to add the token
AxiosInstance.interceptors.request.use(
  (config) => {
    // TODO: Add a token to the request
    // const token = localStorage.getItem('token');
    // const accessToken = JSON.parse(token);
    // const accessToken = process.env.NEXT_PUBLIC_API_AUTH_TOKEN;

    // if (accessToken) {
    //   //   if (config.headers) config.headers.token = accessToken;
    //   config.headers.Authorization = `Bearer ${accessToken}`;
    // }
    return config;
  },
  (error) => {
    // TODO: Handle request errors here
    return Promise.reject(error);
  },
);

// Axios Interceptor: Response Method
AxiosInstance.interceptors.response.use(
  (response) => {
    // Can be modified response
    return response;
  },
  (error) => {
    // Handle response errors here
    toast({
      title: "Errore",
      description: "Si è verificato un errore durante la richiesta.",
      variant: "destructive",
    });
    return Promise.reject(error);
  },
);

export default AxiosInstance;
