import React,{useState, useEffect} from "react";
import "./App.css";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Jobs from "./pages/Allquizes";
import AddQuestion from "./pages/AddQuestion";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChooseQuestionsForWeek from "./pages/ChooseQuestionsForWeek";
import QuestionCard from "./components/SingleQuestionCard";
import Quiz from "./pages/Quiz";
import NotFound from './pages/NotFound'
function App() {
  const [authenticated, setauthenticated] = useState(null);
  const [isAdmin, setIsAdmin] = useState(0)
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    const isAdmin1 = localStorage.getItem("isAdmin");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
    if(isAdmin1){
      setIsAdmin(1)
    }
    // console.log("is Admin app.js", isAdmin1)
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={authenticated ? <Home /> : <Signin />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/jobs" element={<Jobs />} />
           
        <Route path="/addquestion" element={ isAdmin !== 0 ? <AddQuestion /> : <Home />} />
        <Route path="/choosequestionforweek" element={ isAdmin !== 0 ? <ChooseQuestionsForWeek /> : <Home />} />

        <Route path="/quiz" element={<Quiz />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

