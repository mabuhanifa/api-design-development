import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex justify-between  my-10">
      <div className="text-2xl font-bold text-indigo-700">Quiz Master</div>
      <div className="flex justify-end gap-10 text-bold text-xl text-indigo-500">
        <Link to={"/topics"}>Topics</Link>
        <Link to={"/statistics"}>Statistics</Link>
        <Link to={"/blog"}>Blog</Link>
      </div>
    </nav>
  );
};

export default Nav;
