import React from "react";
import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";

const Rechart = () => {
  const data = [
    {
      topic: "React",
      questions: 8,
    },
    {
      topic: "Javascript",
      questions: 9,
    },
    {
      topic: "CSS",
      questions: 8,
    },
    {
      topic: "Git",
      questions: 11,
    },
  ];
  return (
    <div className="chart">
      <div className="line">
        <h2>Topics and Questions</h2>
        <LineChart width={500} height={400} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <Line type="monotone" dataKey={"questions"} stroke="#9900ff"></Line>
          <XAxis dataKey={"topic"}></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
          <Legend />
        </LineChart>
      </div>
    </div>
  );
};

export default Rechart;
