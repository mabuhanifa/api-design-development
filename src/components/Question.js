import React from "react";
import { AiFillEye } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Option from "./Option";
const Question = ({ question }) => {
  const showAnswer = () => {
    toast(`The right answer is ${question.correctAnswer}`);
  };
  return (
    <div className="my-10 border border-gray-300 p-3 shadow-xl rounded-lg">
      <ToastContainer />
      <h2 className="text-center font-bold text-2xl text-indigo-500">{question.question}</h2>
      <span className="text-3xl cursor-pointer" onClick={showAnswer}>
        <AiFillEye />
      </span>
      {question.options.map((option) => {
        return (
          <Option option={option} correctAnswer={question.correctAnswer} key={option}/>
        );
      })}
    </div>
  );
};

export default Question;
