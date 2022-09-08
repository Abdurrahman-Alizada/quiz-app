import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from "../components/Navbar";

function Signup() {
  const navigate = useNavigate();

  const notify = () => toast("Question added successfully !");

  const [question, setQuesion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [answer, setAnswer] = useState("");

  const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(question, option1, option2, option3, option4, answer);
    Axios.post("http://localhost/quizapp/api/create_question.php", {
    // question : question,
    "question" :question,
    "choice_1":option1,
    "choice_2":option2,
    "choice_3":option3,
    "choice_4":option4,
    "answer":answer
    }).then((data) => {
      notify()
      console.log("data is", data);
    }).catch((err)=>{
      console.log("error is..", err)
    });
  };
  return (
    <>
      <Navbar />
      <div className="w-full max-w-sm mt-32 mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="px-6 py-4">
        <ToastContainer />
          
          <h3 className="mt-1 text-xl font-medium text-center text-gray-600 dark:text-gray-200">
            Please enter below informations
          </h3>
          <form
            // action="http://localhost/quizapp/register.php"
            method="post"
            onSubmit={handleSubmit}
          >
            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                placeholder="question"
                value={question}
                onChange={(e) => setQuesion(e.target.value)}
                aria-label="question"
              />
            </div>
            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                value={option1}
                onChange={(e) => setOption1(e.target.value)}
                placeholder="Option 1"
                aria-label="Option 1"
              />
            </div>

            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                value={option2}
                onChange={(e) => setOption2(e.target.value)}
                placeholder="Option 2"
                aria-label="Option 2"
                required
              />
            </div>

            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                value={option3}
                onChange={(e) => setOption3(e.target.value)}
                placeholder="Option 3"
                aria-label="Option 3"
                required
              />
            </div>

            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                value={option4}
                onChange={(e) => setOption4(e.target.value)}
                placeholder="Option 4"
                aria-label="Option 4"
                required
              />
            </div>

            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Answer"
                aria-label="Answer"
                required
              />
            </div>

            <div className="flex items-center justify-between mt-4">
              <div></div>

              <button
                className="px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none"
                type="submit"
              >
                Add to Database
              </button>
            </div>
          </form>
        </div>

      </div>
    </>
  );
}

export default Signup;
