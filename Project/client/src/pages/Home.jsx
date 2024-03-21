import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Categories from "../components/Categories.jsx";
function Home() {
  return (
    <div className = "app">
      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white">DSA<span class="text-[#E65F5C] dark:text-[#E65F5C]"> Tracker</span></h1>
      <div className="container">
        <Categories />
      </div>
    </div>
  );
}

export default Home;