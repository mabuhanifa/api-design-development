import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Option = ({ option, correctAnswer }) => {
  const checkAnswer = () => {
    if (correctAnswer === option) {
      toast.success("Correct answer");
    } else {
      toast.error("Wrong answer... try again");
    }
  };
  return (
    <div key={option.id}>
      <ToastContainer />
      <input
        type="checkbox"
        value={option}
        className="my-5 mx-2"
        onChange={checkAnswer}
      />
      <label htmlFor="vehicle1">{option}</label>
      <br />
    </div>
  );
};

export default Option;
