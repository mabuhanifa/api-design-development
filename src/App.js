import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Quiz from "./components/Quiz";
import Statistics from "./components/Statistics";
import Topics from "./components/Topics";

function App() {
  return (
    <div className="mx-20">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/topics/:id" element={<Quiz />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
