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
function App() {
  const [authenticated, setauthenticated] = useState(null);
  
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={authenticated ? <Home /> : <Signin />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/addquestion" element={<AddQuestion />} />
        <Route path="/choosequestionforweek" element={<ChooseQuestionsForWeek />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

