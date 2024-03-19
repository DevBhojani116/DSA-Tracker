import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Categories from "../components/Categories.jsx";
function Home() {
  return (
    <div className = "app">
      <h1>DSA Tracker</h1>
      <div className="container">
      <Categories />
      </div>
    </div>
  );
}

export default Home;