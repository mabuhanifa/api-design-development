import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center">
      <h2 className="text-red-500 text-4xl font-bold mt-20"> 404 not found </h2>
      <h3 className="text-red-500 text-2xl font-bold mt-20">
        The page you are looking for does not exist.
        <Link to={"/"}> Go to Home Page</Link>
      </h3>
    </div>
  );
};

export default NotFound;
