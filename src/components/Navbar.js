import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

export default function Navbar() {
  const navigate = useNavigate();
  const [isAuthenticated, setisAuthenticated] = useState(0);
  const [isAdmin, setisAdmin] = useState(0);

  useEffect(() => {
    //  console.log("auth", localStorage.getItem("authenticated"))
    //  console.log("isAdmin", localStorage.getItem("isAdmin"))
    setisAuthenticated(localStorage.getItem("authenticated"));
    setisAdmin(localStorage.getItem("isAdmin"));
  }, [isAuthenticated]);

  const handleLogout = () => {
    if (window.confirm("Are you sure want to logout!") == true) {
    //  console.log("ok")
    localStorage.setItem("authenticated", 0);
    localStorage.setItem("isAdmin", 0);
    // console.log("auth", localStorage.getItem("authenticated"));
    // console.log("admin", localStorage.getItem("isAdmin"));
    setisAuthenticated(false);
    setisAdmin(false);
    navigate("/signin");     
    } else {
      console.log("cancel")

    }
  };

  return (
    <nav className="bg-white shadow dark:bg-gray-800">
      <div className="container px-6 py-3 mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link
                to="/"
                className="text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
              >
                Brand
              </Link>
            </div>

            <div className="flex md:hidden">
              <button
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                {/* <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path
                    fill-rule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg> */}
              </button>
            </div>
          </div>

          <div className="items-center md:flex">
              <Link
                to="/"
                className="my-1 text-sm leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0"
              >
                Home
              </Link>
             
              {isAdmin == 1 && isAuthenticated == 1 ?
            <div className="flex flex-col mt-2 md:flex-row md:mt-0 md:mx-1">
              <Link
                to="/addquestion"
                className="my-1 text-sm leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0"
              >
                Add Question
              </Link>

              <Link
                to="/choosequestionforweek"
                className="my-1 text-sm leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0"
              >
                Choose Questions For Week
              </Link>
            </div>
            : <></>
              }
          

             {isAuthenticated == 1 ?
            <button
              onClick={handleLogout}
              className="block w-1/2 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-gray-500 rounded-md hover:bg-blue-600 md:mx-2 md:w-auto"
            >
              Logout
            </button>
            :
             <> 
            <div className="flex items-center py-2 -mx-1 md:mx-0">
              <Link
                to="/signin"
                className="block w-1/2 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-gray-500 rounded-md hover:bg-blue-600 md:mx-2 md:w-auto"
              >
                Login
              </Link>
              <Link
                className="block w-1/2 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 md:mx-0 md:w-auto"
                to="/signup"
              >
                Join free
              </Link>
            </div>
            </>
            }
          </div>
        </div>
      </div>
    </nav>
  );
}
