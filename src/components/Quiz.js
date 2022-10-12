import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Quiz = () => {
  const { id } = useParams();

  const [quiz, setQuiz] = useState([]);

  useEffect(() => {
    const fetchQuiz = async () => {
      const { data } = await axios.get(
        `https://openapi.programming-hero.com/api/quiz/${id}`
      );
      setQuiz(data.data);
    };
    fetchQuiz();
  }, [id]);
  console.log(quiz);
  return <div>
    <h2 className="text-center font-bold text-2xl">Quiz of {quiz?.name}</h2>
  </div>;
};

export default Quiz;
