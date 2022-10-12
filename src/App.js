import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog";
import Home from "./components/Home";
import Nav from "./components/Nav";
import NotFound from "./components/NotFound";
import Quiz from "./components/Quiz";
import Rechart from "./components/Rechart";
import Topics from "./components/Topics";

function App() {
  return (
    <div className="mx-20">
      <Nav />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/topics/:id" element={<Quiz />} />
        <Route path="/statistics" element={<Rechart />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
