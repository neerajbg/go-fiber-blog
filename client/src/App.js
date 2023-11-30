import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./page/Home";
import Blog from "./page/Blog";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Add from "./page/Add";
import Edit from "./page/Edit";
import Delete from "./page/Delete";
import Login from "./page/Login";
import About from "./page/About";
import Contact from "./page/Contact";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/delete/:id" element={<Delete />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
