import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex justify-between  my-10">
      <div>Quiz Master</div>
      <div className="flex justify-end gap-10">
        <Link to={"/topics"}>Topics</Link>
        <Link to={"/statistics"}>Statistics</Link>
        <Link to={"/blog"}>Blog</Link>
      </div>
    </nav>
  );
};

export default Nav;
