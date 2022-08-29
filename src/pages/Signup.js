import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, email, password);
    Axios.post("http://localhost/quizapp/register.php/", {
      username: name,
      email: email,
      password: password,
    }).then((data) => {
      setauthenticated(true)
      localStorage.setItem("authenticated", true);      
      console.log("data is", data);
      navigate("/")
    }).catch((err)=>{
      console.log("error is..", err)
    });
  };
  return (
    <>
      <Navbar />
      <div className="w-full max-w-sm mt-32 mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="px-6 py-4">
          <h2 className="text-3xl font-bold text-center text-gray-700 dark:text-white">
            Your Brand Name
          </h2>

          <h3 className="mt-1 text-xl font-medium text-center text-gray-600 dark:text-gray-200">
            Welcome to "Your Branch Name"
          </h3>

          <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
            Create account
          </p>

          <form
            // action="http://localhost/quizapp/register.php"
            method="post"
            onSubmit={handleSubmit}
          >
            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="Name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                aria-label="Name"
              />
            </div>
            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                aria-label="Email Address"
              />
            </div>

            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                aria-label="Password"
                required
              />
            </div>

            <div className="flex items-center justify-between mt-4">
              <div></div>

              <button
                className="px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none"
                type="submit"
              >
                Signup
              </button>
            </div>
          </form>
        </div>

        <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
          <span className="text-sm text-gray-600 dark:text-gray-200">
            Already have an account?{" "}
          </span>

          <Link
            to="/signin"
            className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
}

export default Signup;
