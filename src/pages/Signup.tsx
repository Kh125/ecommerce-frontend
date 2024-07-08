import { useState } from "react";
import axiosAPI from "../utils/axiosHelper";
import { UserRequest } from "../models/User";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handlePasswordChange = (e: any) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordMatch(newPassword === confirmPassword);
  };

  const handleConfirmPasswordChange = (e: any) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    setPasswordMatch(password === newConfirmPassword);
  };

  const handleSignUp = (e: any) => {
    e.preventDefault();
    console.log("Sign up");

    const controller = new AbortController();

    axiosAPI
      .post(
        "user/register",
        {
          username,
          email,
          password,
          roles: "USER",
        },
        {
          signal: controller.signal,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      });

    return () => {
      controller.abort("Abort request.");
    };
  };

  return (
    <div className="relative flex min-h-screen text-gray-800 antialiased flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <form onSubmit={handleSignUp}>
        <div className="relative py-3 sm:w-96 mx-auto text-center">
          <span className="text-2xl font-light ">Sign Up</span>
          <div className="mt-4 bg-white shadow-md rounded-lg text-left">
            <div className="h-2 bg-purple-400 rounded-t-md"></div>
            <div className="px-8 py-6 ">
              <label className="block font-semibold"> Username</label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="Username"
                className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
              />

              <label className="block font-semibold"> Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Email"
                className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
              />

              <label className="block mt-3 font-semibold"> Password</label>
              <input
                value={password}
                onChange={(e) => handlePasswordChange(e)}
                type="password"
                placeholder="Password"
                className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
              />

              <label className="block mt-3 font-semibold">
                Confirm Password
              </label>
              <input
                value={confirmPassword}
                onChange={(e) => handleConfirmPasswordChange(e)}
                type="password"
                placeholder="Password"
                className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
              />
              {!passwordMatch && (
                <span className="text-red-500">Password not match!</span>
              )}
              <div className="flex justify-between items-baseline">
                <button
                  type="submit"
                  className="mt-4 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600 "
                >
                  Submit
                </button>
                <a href="#" className="text-sm hover:underline">
                  Already have an account?
                </a>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
