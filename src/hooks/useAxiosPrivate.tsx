import { useEffect } from "react";
import useRefresh from "../components/refresh";
import useAuth from "./useAuth";
import { axiosPrivate } from "../utils/axiosHelper";

const useAxiosPrivate = () => {
  const refreshOnClick = useRefresh();
  const { auth } = useAuth();

  useEffect(() => {
    const requestInterceptor = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${auth?.token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseInterceptor = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (
          (error?.response.status === 403 || error?.response.status === 302) &&
          !prevRequest.sent
        ) {
          prevRequest.sent = true;
          const accessToken = await refreshOnClick();
          prevRequest.headers["Authorization"] = `Bearer ${accessToken}`;
          return axiosPrivate(prevRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestInterceptor);
      axiosPrivate.interceptors.response.eject(responseInterceptor);
    };
  }, [auth, refreshOnClick]);

  return axiosPrivate;
};

export default useAxiosPrivate;
