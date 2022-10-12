import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Question from "./Question";

const Quiz = () => {
  const { id } = useParams();

  const [quiz, setQuiz] = useState([]);
  const { questions } = quiz;
  console.log(questions?.length);

  useEffect(() => {
    const fetchQuiz = async () => {
      const { data } = await axios.get(
        `https://openapi.programming-hero.com/api/quiz/${id}`
      );
      setQuiz(data.data);
    };
    fetchQuiz();
  }, [id]);
  return (
    <div>
      <h2 className="text-center font-bold text-2xl">Quiz of {quiz?.name}</h2>
      {questions &&
        questions.map((question) => {
          return <Question question={question} key={question.id} />;
        })}
    </div>
  );
};

export default Quiz;
