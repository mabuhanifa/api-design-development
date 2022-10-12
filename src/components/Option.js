import React from "react";

const Option = ({ option, correctAnswer }) => {
  const checkAnswer = () => {
    if (correctAnswer === option) {
      alert("Correct answer");
    }
    else{
        alert("Invalid answer");
    }
  };
  return (
    <div key={option.id}>
      <input
        type="checkbox"
        id="vehicle1"
        name="vehicle1"
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
