import React from 'react';

const Result = ({ showResult, quizs, marks, startOver }) => {
    return (

<div style={{ display: `${showResult ? "block" : "none"}` }}
 className=" px-6 py-16 mx-auto  text-center">
<div className="max-w-7xl mx-auto">
  <div className="lg:flex w-1/2 mx-auto my-10 bg-white rounded-lg ">
    <div className="bg-white rounded-lg shadow max-w-full mx-5 sm:w-full sm:mx-auto sm:overflow-hidden">
      
      <div className="w-full overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-xl">
    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto mt-8 h-16 w-16 text-green-400" viewBox="0 0 20 20" fill="currentColor">
      <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"  />
    </svg>
    <h1 className="mt-2 text-center text-2xl font-bold text-gray-500">Quiz has been completed</h1>
    <p className="my-4 text-center text-sm text-gray-500"> successfully attempted 3/5 questions</p>
    <p className="my-4 text-center text-sm text-gray-500">{marks > (quizs.length * 5 / 2) ? 'Awesome!' : 'Oops!'} </p>
    <p className="my-4 text-center text-sm text-gray-500">Your score is {marks} out of {quizs.length * 5} </p>
    <div className="space-x-4 bg-gray-100 py-4 text-center">
      <button className="inline-block rounded-md bg-green-500 px-6 py-2 font-semibold text-green-100 shadow-md duration-75 hover:bg-green-400">Go to main page</button>
    </div>
  </div>

    </div>
  </div>
</div>
</div>
    );
};

export default Result;
