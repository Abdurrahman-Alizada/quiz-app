import React, { useRef, useEffect, useState } from "react";
import Start from "../components/a/Start";
import Quiz from "../components/a/Quiz";
import Result from "../components/a/Result";
import Navbar from "../components/Navbar";
import Axios from "axios";

function App() {
  // timer
  const Ref = useRef(null);
  const [timer, setTimer] = useState("00:00:00");
  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    return {
      total,
      minutes,
      seconds,
    };
  };
  const startTimer = (e) => {
    let { total, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };
  const clearTimer = (e) => {
    setTimer("00:10");
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    // const id =
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 10);
    return deadline;
  };

  // timer end
  const questions = [
    {
      id: "01",
      question: "Which of the following is the correct name of React.js?",
      options: ["React", "React.js", "ReactJS", "All of the above"],
      answer: "All of the above",
    },
    {
      id: "02",
      question: "Which of the following are the advantages of React.js?",
      options: [
        "React.js can increase the application's performance with Virtual DOM.",
        "React.js is easy to integrate with other frameworks such as Angular, BackboneJS since it is only a view library.",
        "React.js can render both on client and server side.",
        "All of the above",
      ],
      answer: "All of the above",
    },
    {
      id: "03",
      question: "Which of the following is not a disadvantage of React.js?",
      options: [
        "React.js has only a view layer. We have put your code for Ajax requests, events and so on.",
        "The library of React.js is pretty large.",
        "The JSX in React.js makes code easy to read and write.",
        "The learning curve can be steep in React.js.",
      ],
      answer: "The JSX in React.js makes code easy to read and write.",
    },
    {
      id: "04",
      question:
        "Which of the following command is used to install create-react-app?",
      options: [
        "npm install -g create-react-app",
        "npx create-react-app my-app",
        "npm install create-react-app",
        "npm install -f create-react-app",
      ],
      answer: "npx create-react-app my-app",
    },
    {
      id: "05",
      question:
        "What of the following is used in React.js to increase performance?",
      options: [
        "Original DOM",
        "Virtual DOM",
        "Both A and B.",
        "None of the above.",
      ],
      answer: "Virtual DOM",
    },
    {
      id: "06",
      question: "What is the default port where webpack-server runs?",
      options: ["3000", "8080", "3030", "6060"],
      answer: "3000",
    },
    {
      id: "07",
      question:
        "How many numbers of elements a valid react component can return?",
      options: ["1", "2", "3", "Unlimited"],
      answer: "1",
    },
    {
      id: "08",
      question:
        "What is the declarative way to render a dynamic list of components based on values in an array?",
      options: [
        "Using the reduce array method",
        "Using the <Each /> component",
        "Using the Array.map() method",
        "With a for/while loop",
      ],
      answer: "Using the Array.map() method",
    },
    {
      id: "09",
      question: "What is a state in React?",
      options: [
        "A permanent storage.",
        "Internal storage of the component.",
        "External storage of the component.",
        "None of the above.",
      ],
      answer: "Internal storage of the component.",
    },
    {
      id: "10",
      question: "What are the two ways to handle data in React?",
      options: [
        "State & Props",
        "Services & Components",
        "State & Services",
        "State & Component",
      ],
      answer: "State & Props",
    },
  ];
  // All Quizs, Current Question, Index of Current Question, Answer, Selected Answer, Total Marks
  const [quizs, setQuizs] = useState([]);
  const [question, setQuesion] = useState({});
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [marks, setMarks] = useState(0);

  useEffect(() => {
    let counter = 0;
    const interval = setInterval(() => {
      if (counter >= 10) {
        nextQuestion();
        clearInterval(interval);
        // console.log("hello if");
      } else {
        // console.log("hello else");

        // setCount(count => count + 1);
        counter++; // local variable that this closure will see
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [questionIndex]);

  // Display Controlling States
  const [showStart, setShowStart] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
     Axios.get(
      "http://localhost/quizapp/api/active_question.php"
    ).then((response)=>{
    
      console.log("response is..", response.data.records)
      setQuizs(response.data.records);
    });
  }, []);

  // Set a Single Question
  useEffect(() => {
    if (quizs.length > questionIndex) {
      setQuesion(quizs[questionIndex]);
      // clearTimer(getDeadTime())
    }
  }, [quizs, questionIndex]);

  // Start Quiz
  const startQuiz = () => {
    if(quizs.length >= 1){
      setShowStart(false);
      setShowQuiz(true);
      clearTimer(getDeadTime());
    }else{
    alert("No quiz today")
    }
  };

  // Check Answer
  const checkAnswer = (event, selected) => {
    if (!selectedAnswer) {
      setCorrectAnswer(question.answer);
      setSelectedAnswer(selected);

      if (selected === question.answer) {
        event.target.classList.add("bg-green-300");
        setMarks(marks + 5);
      } else {
        event.target.classList.add("bg-red-300");
      }
    }
  };

  // Next Quesion
  const nextQuestion = () => {
    setCorrectAnswer("");
    setSelectedAnswer("");
    const wrongBtn = document.querySelector("div.bg-red-300");
    wrongBtn?.classList.remove("bg-red-300");
    console.log("wrong buton..", wrongBtn)
    const rightBtn = document.querySelector("div.bg-green-300");
    rightBtn?.classList.remove("bg-green-300");
    console.log("right buton..", rightBtn)

    setQuestionIndex(questionIndex + 1);
    clearTimer(getDeadTime());
  };

  // Show Result
  const showTheResult = () => {
    setShowResult(true);
    setShowStart(false);
    setShowQuiz(false);
  handleSubmit()

  };

  const handleSubmit = (event) => {
    // event.preventDefault();
    Axios.post("http://localhost/quizapp/api/send_to_quiz.php", {
     "score":"0",
     "user_name":"rahman" 
  }).then((data) => {
      console.log("data is", data);
    }).catch((err)=>{
      console.log("error is..", err)
    });
  };

  // Start Over
  const startOver = () => {
    setShowStart(false);
    setShowResult(false);
    setShowQuiz(true);
    setCorrectAnswer("");
    setSelectedAnswer("");
    setQuestionIndex(0);
    setMarks(0);
    clearTimer(getDeadTime());

    const wrongBtn = document.querySelector("button.bg-red-300");
    wrongBtn?.classList.remove("bg-red-300");
    const rightBtn = document.querySelector("button.bg-green-300");
    rightBtn?.classList.remove("bg-green-300");
  };

  return (
    <>
      <Navbar />
      {/* Welcome Page */}
      <Start startQuiz={startQuiz} showStart={showStart} />

      {/* Quiz Page */}
      <Quiz
        showQuiz={showQuiz}
        question={question}
        quizs={quizs}
        checkAnswer={checkAnswer}
        correctAnswer={correctAnswer}
        selectedAnswer={selectedAnswer}
        questionIndex={questionIndex}
        nextQuestion={nextQuestion}
        showTheResult={showTheResult}
        timer={timer}
      />

      {/* Result Page */}
      <Result
        showResult={showResult}
        quizs={quizs}
        marks={marks}
        startOver={startOver}
      />
    </>
  );
}

export default App;
