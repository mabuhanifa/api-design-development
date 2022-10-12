import React from "react";
import { Link } from "react-router-dom";

const Topic = ({ topic: { name, logo ,id} }) => {
  return (
    <div className="rounded-lg p-2 shadow-lg">
      <div>
        <img src={logo} alt="" className=" bg-blue-100" />
        <div className="flex justify-between p-2">
          <h2 className=" font-bold text-blue-500">{name}</h2>
          <Link
            to={`/topics/${id}`}
            className="cursor-pointer bg-blue-500 text-white px-3 py-2 rounded "
          >
            Start Practice {"->"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topic;
