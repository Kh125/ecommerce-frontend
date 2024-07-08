import React from "react";
import { Link } from "react-router-dom";

const Unauthorized: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 items-center justify-center p-6">
      <div className="max-w-md p-6 bg-white shadow-md rounded-lg text-center">
        <svg
          className="w-16 h-16 mx-auto text-red-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M18 15a3 3 0 01-6 0m6 0a3 3 0 00-6 0m6 0a3 3 0 01-6 0M3 12l9-9m0 0L21 12m-9-9v18"
          />
        </svg>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Unauthorized</h1>
        <p className="text-gray-600 mb-6">
          Sorry, you do not have permission to access this page. Please contact
          your administrator if you believe this is a mistake.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 transition duration-300"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default Unauthorized;
