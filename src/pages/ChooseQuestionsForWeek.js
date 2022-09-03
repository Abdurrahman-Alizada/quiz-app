import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from 'axios';

const ChooseQuestionsForWeek = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [Questions, setQuestions] = useState([
    { title: "what do you know about pakistan?" },
    { title: "what do you know about india?" },
    { title: "what do you know about afghanistan?" },
    { title: "what do you know about china?" },
    { title: "what do you know about japan?" },
  ]);

  useEffect(()=>{
    axios.get('http://localhost/quizapp/api/read_question.php')
    .then(function (response) {
      setQuestions(response.data.records)
      console.log(response.data.records);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }, [])

  const handleChange = (event) => {
    if (event.target.checked) {
      console.log("✅ Checkbox is checked");
    } else {
      console.log("⛔️ Checkbox is NOT checked");
    }
    setIsSubscribed((current) => !current);
  };
  return (
    <section className="text-gray-600 body-font">
      <Navbar />
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
            Choose Question from below list
          </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
         
         {
            Questions.map((Question, index)=>(

          <div key={index} className="p-2 sm:w-1/2 w-full">
          
            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
              <input
                value={isSubscribed}
                onChange={handleChange}
                id="subscribe"
                name="subscribe"
                type="checkbox"
                className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
              />
              <label
                // for="country-option-1"
                className="text-sm font-medium text-gray-900 ml-2 block"
              >
               {Question.question}
              </label>

            </div>
          
          </div>
            ))
         }

        </div>
        <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Button
        </button>
      </div>
    </section>
  );
};

export default ChooseQuestionsForWeek;
