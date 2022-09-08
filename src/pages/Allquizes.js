import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from 'moment'
import  Axios  from "axios";
import Navbar from "../components/Navbar";
function Quizs() {
  const [Quizs, setQuizs] = useState([{}, {}, {}]);
  
  
  const fetchQuiz = ()=>{
    Axios.get(
      "http://localhost/quizapp/api/read_quiz.php"
    ).then((response)=>{
    
      // console.log("response is..", response.data)
      setQuizs(response.data.records);
    });
  }
  useEffect(()=>{
  fetchQuiz()
  },[])

  return (
    <div>
      <div className="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-5">
        <div className="max-w-full py-5 flex justify-end ">
          <Link
            to="/quiz"
            type="button"
            className="py-2 px-4  bg-gradient-to-r from-green-400 to-blue-500 text-white md:w-1/4 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
          >
            Take quiz
          </Link>
     
        </div>
        {Quizs.map((quiz, index) => (
          <div key={index} className="mb-10 border-t border-b divide-y">
            <div className="grid py-8 sm:grid-cols-4">
              <div className="mb-4 sm:mb-0">
                <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                  <a
                    href="/"
                    className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    aria-label="Category"
                  >
                    {quiz.username}
                  </a>

                  <p className="text-gray-600">{quiz.data_time}</p>
                  <p className="text-gray-600">{moment(quiz.data_time). format("YYYY-MM-DD HH:mm A")}</p>
                </div>
              </div>
              <div className="sm:col-span-3 lg:col-span-2">
                <div className="mb-3">
                  <a
                    href="/"
                    aria-label="Article"
                    className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                  >
                    <p className="text-2xl font-bold leading-none sm:text-4xl xl:text-4xl">
                      {quiz.quiz_name}
                    </p>
                  </a>
                </div>
                <p className="text-gray-700">Quiz description</p>
                <p className="text-gray-700">Marks : {quiz.marks}/{quiz.total_marks}</p>
              </div>
            </div>
          </div>
        ))}

        <div className="text-center">
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Load More
            <svg
              className="inline-block w-3 ml-2"
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Quizs;
