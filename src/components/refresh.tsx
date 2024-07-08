import useAuth from "../hooks/useAuth";
import axiosAPI from "../utils/axiosHelper";

const useRefresh = () => {
  const { setAuth } = useAuth();

  const refreshToken = async () => {
    try {
      const res = await axiosAPI.get("/auth/refreshToken", {
        withCredentials: true,
      });
      const token: string = res?.data?.token;
      const username: string = res?.data?.username;
      const email: string = res?.data?.email;
      const roles: string[] = res?.data?.roles
        ?.split(",")
        ?.map((role: any) => role.trim());

      setAuth({ token, username, email, roles });

      return token;
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  return refreshToken;
};

export default useRefresh;
