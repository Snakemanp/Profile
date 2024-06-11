import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import "./Reset.css";
import Navbar from "./Nav";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </div>
  );
}
export default App;
