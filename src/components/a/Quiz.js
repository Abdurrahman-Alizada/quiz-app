import React from "react";
// import Timer from '../Timer';
const Quiz = ({
  showQuiz,
  question,
  quizs,
  checkAnswer,
  correctAnswer,
  selectedAnswer,
  questionIndex,
  nextQuestion,
  showTheResult,
  timer,
}) => {
  const options = [
    question.choice_1,
    question.choice_2,
    question.choice_3,
    question.choice_4,
  ];
  return (
    <div
      style={{ display: `${showQuiz ? "block" : "none"}` }}
      className=" px-6 py-16 text-center"
    >
      <div className=" mx-auto">
        <div className="lg:flex w-1/2 mx-auto my-10 bg-white rounded-lg ">
          <div className="bg-white rounded-lg shadow max-w-full mx-5 sm:w-full sm:mx-auto sm:overflow-hidden">
            <div className="px-4 flex justify-between py-6 border-t-2 border-gray-200 bg-gray-50 sm:px-10">
              {/* <p className="text-xl font-bold leading-5 text-gray-500">Q# {question.id}</p> */}
              <h5 className="text-xl font-bold leading-5 text-green-500">
                {quizs.indexOf(question) + 1} / {quizs?.length}
              </h5>
              <p className="text-xl font-bold leading-5 text-gray-500">
                {" "}
                {timer}{" "}
              </p>
            </div>
            <div className="px-4 py-8 sm:px-10">
              <div className="max-w-7xl  text-gray-800 dark:text-white md:text-2xl">
                <div
                  className="card p-4"
                  //   style={{ background: "#3d3d3d", borderColor: "#646464" }}
                >
                  <div className="flex justify-between md:p-3">
                    <h5 className="mb-2 font-normal ">{question?.question}</h5>
                  </div>
                  <div className="">
                    {options?.map((item, index) => (
                      <span
                        onClick={(event) => checkAnswer(event, item)}
                        key={index}
                        className="border-gray-400 flex flex-row mb-2"  >
                        <div className="container flex flex-col w-full rounded-md ">
                          <li className="border-gray-400 flex flex-row mb-2">
                            <div className="shadow border select-none cursor-pointer dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                              <div className="font-sm dark:text-white">
                                {item}
                              </div>
                            </div>
                          </li>
                        </div>
                      </span>
                    ))}
                  </div>

                  {questionIndex + 1 !== quizs.length ? (
                    <button
                      className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
                      onClick={nextQuestion}
                      disabled={!selectedAnswer}
                    >
                      Next Question
                    </button>
                  ) : (
                    <button
                      className="py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
                      onClick={showTheResult}
                      disabled={!selectedAnswer}
                    >
                      Show Result
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;

const Step = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        <div className="grid gap-6 md:grid-cols-2 md:col-span-2 lg:col-span-3">
          <div className="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-indigo-50">
            <div className="flex items-center mb-1">
              <span className="flex items-center justify-center w-4 h-4 mr-2 text-xs font-medium text-white rounded bg-deep-purple-accent-400">
                1
              </span>
              <p className="text-lg font-semibold sm:text-base">
                Read the recipe
              </p>
            </div>
            <p className="text-sm text-gray-900">
              Take a good look at the recipe. Don’t just skim it; read it
              through from start to finish. As you read, visualize doing the
              steps which will help when you’re prepping.
            </p>
          </div>
          <div className="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-teal-50">
            <div className="flex items-center mb-1">
              <span className="flex items-center justify-center w-4 h-4 mr-2 text-xs font-medium text-teal-900 rounded bg-teal-accent-400">
                2
              </span>
              <p className="text-lg font-semibold sm:text-base">
                Know the assumptions
              </p>
            </div>
            <p className="text-sm text-gray-900">
              All recipes are written using certain conventions, which define
              the characteristics of common ingredients. The rules vary from
              place to place.
            </p>
          </div>
          <div className="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-teal-50">
            <div className="flex items-center mb-1">
              <span className="flex items-center justify-center w-4 h-4 mr-2 text-xs font-medium text-white rounded md:text-teal-900 bg-deep-purple-accent-400 md:bg-teal-accent-400">
                3
              </span>
              <p className="text-lg font-semibold sm:text-base">
                Figure out the timing
              </p>
            </div>
            <p className="text-sm text-gray-900">
              Check the “prep time” and “total time” listed at the top to be
              sure you have enough time to complete the recipe. Look for hints,
              such as the words “meanwhile” .
            </p>
          </div>
          <div className="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-indigo-50">
            <div className="flex items-center mb-1">
              <span className="flex items-center justify-center w-4 h-4 mr-2 text-xs font-medium text-teal-900 rounded md:text-white bg-teal-accent-400 md:bg-deep-purple-accent-400">
                4
              </span>
              <p className="text-lg font-semibold sm:text-base">Plan ahead</p>
            </div>
            <p className="text-sm text-gray-900">
              Missing a prep instruction can leave you scrambling in the middle
              of a recipe. Keep your eyes peeled for time-consuming steps and be
              careful.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
