import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Allquizes from "./Allquizes";
import Singin from "./Signin";
function Home() {
  const navigate = useNavigate();
  const [isAuthenticated, setisAuthenticated] = useState(0);
  const [isAdmin, setisAdmin] = useState(0);

  useEffect(() => {
    console.log("auth home", localStorage.getItem("authenticated"))
    console.log("isAdmin", localStorage.getItem("isAdmin"))
   setisAuthenticated(localStorage.getItem("authenticated"));
   setisAdmin(localStorage.getItem("isAdmin"));
 }, [isAuthenticated]);


  return (
    <div>
   
       { isAuthenticated == 0 ? <></> : <Navbar /> } 
      { isAuthenticated == 0 ? <Singin /> : <Allquizes /> 
      }

    </div>
  );
}

export default Home;
