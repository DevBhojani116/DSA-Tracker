import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Categories from "../components/Categories.jsx";
function Home({changeCategory}) {
  return (
    <div className = "app">
      <h1>DSA Tracker</h1>
      <div className="container">
      <Categories changeCategory={changeCategory}/>
      </div>
    </div>
  );
}

export default Home;