import React from "react";

const Blog = () => {
  return (
    <div className="m-20">
      <div className="py-10">
        <h2 className="py-10 text-2xl font-bold">
          Q1. What's the purpose of React Router?
        </h2>
        <p className="py-10">
          Ans: React Router is a standard library for routing in React. It
          enables the navigation among views of various components in a React
          Application, allows changing the browser URL, and keeps the UI in sync
          with the URL.{" "}
        </p>
      </div>
      <div className="py-10">
        <h2 className="py-10 text-2xl font-bold">
          Q2. How does Context API works?
        </h2>
        <p className="py-10">
          Ans: The React Context API is a way for a React app to effectively
          produce global variables that can be passed around. This is the
          alternative to "prop drilling" or moving props from grandparent to
          child to parent, and so on. Context is also touted as an easier,
          lighter approach to state management using Redux.
        </p>
      </div>
      <div className="py-10">
        <h2 className="py-10 text-2xl font-bold">Q3. What's useRef Hook?</h2>
        <p className="py-10">
          Ans: The useRef returns a mutable ref object. This object has a
          property called .current. The value is persisted in the
          refContainer.current property. These values are accessed from the
          current property of the returned object. The .current property could
          be initialised to the passed argument initialValue e.g.
          useRef(initialValue). The object can persist a value for a full
          lifetime of the component.
        </p>
      </div>
    </div>
  );
};

export default Blog;
