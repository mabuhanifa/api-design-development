import axios from "axios";
import React, { useEffect, useState } from "react";
import Topic from "./Topic";

const Topics = () => {
  const [topics, setTopics] = useState([]);
  const fetchProducts = async () => {
    const {
      data: { data },
    } = await axios.get("https://openapi.programming-hero.com/api/quiz");
    setTopics(data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="flex flex-col-reverse sm:flex-row gap-5 ">
      {topics &&
        topics.map((topic) => {
          return <Topic key={topic.id} topic={topic} />;
        })}
    </div>
  );
};

export default Topics;
