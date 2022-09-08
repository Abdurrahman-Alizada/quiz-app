import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

const ChooseQuestionsForWeek = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [Questions, setQuestions] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost/quizapp/api/read_question.php')
    .then(function (response) {
      setQuestions(response.data)
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }, [isSubscribed])

  
  const notify = () => toast("Question updated successfully !");

  const handleChange = (event,id, index) => {
    event.preventDefault();
    console.log("ajdk",Questions[index])
    if (Questions[index]?.is_active == 1 ) {
    axios.post("http://localhost/quizapp/api/update_is_active_question.php", {
        "id":id,
        "is_active":0
     }).then((data) => {
      notify()
      console.log("data is", data);
    }).catch((err)=>{
      console.log("error is..", err)
    });
    } else {
      axios.post("http://localhost/quizapp/api/update_is_active_question.php", {
        "id":id,
        "is_active":1
     }).then((data) => {
      notify()
    }).catch((err)=>{
      console.log("error is..", err)
    });
    }
   setIsSubscribed(!isSubscribed)
  };
  return (
    <section className="text-gray-600 body-font">
      <Navbar />
      <ToastContainer />

      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
            Choose Question from below list
          </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
         
         {
          Questions.length > 0 ?
            Questions.map((Question, index)=>(

          <div key={index} className="p-2 sm:w-1/2 w-full">
          
              <div>
            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
              <input
                value={isSubscribed}
                // checked={true}
                checked={Question?.is_active == 1 ? true : false}
                onChange={(e) => handleChange(e, Question.id, index)}
                id="subscribe"
                name="subscribe"
                type="checkbox"
                className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
              />
              <label
                className="text-sm font-medium text-gray-900 ml-2 block"
              >
               {Question.question}
              </label>
              </div>
              <div className=" px-6">
            <p>1. {Question.choice_1}</p>
            <p>2. {Question.choice_2}</p>
            <p>3. {Question.choice_3}</p>
            <p>4. {Question.choice_4}</p>
            <p className="text-green-400">2. {Question.answer}</p>
            
            </div>
            </div>


          </div>
            ))
            :<h1>No question</h1>
         }

        </div>

      </div>
    </section>
  );
};

export default ChooseQuestionsForWeek;
