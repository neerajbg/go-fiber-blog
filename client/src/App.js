import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./page/Home";
import Blog from "./page/Blog";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:id" element={<Blog />} />
    </Routes>
  );
}

export default App;
