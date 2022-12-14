import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Signin() {
  const notify = () => toast("Invalid email or password !");

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const clientId =
  "620618098267-78q05o1sq26j7gvhp3jsm7eovut7jl7t.apps.googleusercontent.com";
const responseGoogle = (response) => {
  console.log(response?.profileObj);
  setEmail(response?.profileObj.email)
  setPassword(response?.profileObj.googleId)
  // handleSubmit()
};

useEffect(() => {
  const initClient = () => {
    gapi.client.init({
      clientId: clientId,
      scope: "",
    });
  };
  gapi.load("client:auth2", initClient);
}, []);

const handleSubmit = (event) => {
  event.preventDefault();
  Axios.post("http://localhost/quizapp/login.php/", {
    email: email,
    password: password,
  })
    .then((data) => {
      if(data.data.status == 422 || data.data.status == 422){
       notify()
      }
      else{
      localStorage.setItem("authenticated", 1);
      localStorage.setItem("isAdmin", 1);
      console.log("data in login is..", data.data);
      navigate("/");
      }
    })
    .catch((err) => {
      console.log("error is..", err);
    });
};

  return (
  <> 
  <Navbar />
   <div className="w-full max-w-sm mt-32 mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
   <ToastContainer />
      
      <div className="px-6 py-4">
        <h2 className="text-3xl font-bold text-center text-gray-700 dark:text-white">
          Your Brand Name
        </h2>

        <h3 className="mt-1 text-xl font-medium text-center text-gray-600 dark:text-gray-200">
          Welcome Back
        </h3>

        <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
          Login or create account
        </p>

        <form>
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
            />
          </div>

          <div className="flex items-center justify-between mt-4">
            <a
              href="#"
              className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500"
            >
              Forget Password?
            </a>

            <button
              className="px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none"
              type="button"
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>
        </form>
      </div>

      <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
        <span className="text-sm text-gray-600 dark:text-gray-200">
          Don't have an account?{" "}
        </span>
        <Link
          to="/signup"
          className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
        >
          Register
        </Link>
      </div>
    </div>
  </>
  );
}

export default Signin;
