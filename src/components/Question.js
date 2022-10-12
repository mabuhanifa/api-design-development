import React from "react";
import Option from "./Option";

const Question = ({ question }) => {
  
  return (
    <div className="my-10 border border-gray-300 p-3">
      <h2 className="text-center font-bold text-2xl">{question.question}</h2>
      {question.options.map((option) => {
        return (
          <Option option={option} correctAnswer={question.correctAnswer}
          />
        );
      })}
    </div>
  );
};

export default Question;
