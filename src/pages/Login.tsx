import { useState } from "react";
import axiosAPI from "../utils/axiosHelper";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { setAuth } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axiosAPI
      .post(
        "/user/login",
        {
          username,
          password,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then((res: any) => {
        const token: string = res?.data?.token;
        const username: string = res?.data?.username;
        const email: string = res?.data?.username;
        const roles: string[] = res?.data?.roles
          ?.split(",")
          ?.map((role: any) => role.trim());
        console.log(res.data);
        setAuth({ token, username, email, roles });
        navigate(from, { replace: true });
      })
      .catch((err) => {
        if (!err?.response) {
          console.error("No server response");
        } else if (err?.response?.status === 400) {
          console.log("Missing username or password");
        } else if (err?.response?.status === 401) {
          console.log("Unauthorized");
        } else {
          console.log("Failed.");
        }
      });
  };

  return (
    <div className="relative flex min-h-screen text-gray-800 antialiased flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <div className="relative py-3 sm:w-96 mx-auto text-center">
        <span className="text-2xl font-light ">Login to your account</span>
        <form onSubmit={handleSubmit}>
          <div className="mt-4 bg-white shadow-md rounded-lg text-left">
            <div className="h-2 bg-purple-400 rounded-t-md"></div>
            <div className="px-8 py-6 ">
              <label className="block font-semibold">Username</label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="Username"
                className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
              />
              <label className="block mt-3 font-semibold">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
              />
              <div className="flex justify-between items-baseline">
                <button
                  type="submit"
                  className="mt-4 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600 "
                >
                  Login
                </button>
                <a href="#" className="text-sm hover:underline">
                  Forgot password?
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
