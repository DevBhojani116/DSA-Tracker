import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "../App.css";
import Questions from "./Questions.jsx"
import ProgressBar from "./ProgressBar.jsx";

function Category(props) {
  return (
      <div className="category flex">
        <div>
            <h3 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-500"><p>{props.name}</p></h3>
            {/* <p>ID: {props.id}</p> */}
            <p>Total Questions: {props.questions.length}</p>
            <p>Completion status: {Math.floor(props.completion*100)/100}%</p>
            <Link to={`/${props.id}`}>
              <button type="button" class="text-white my-2 bg-[#E65F5C] hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:[#E65F5C] dark:hover:bg-green-700 dark:focus:ring-green-800">
                Start Solving
              </button>
            </Link>
        </div>
        <p className="py-8"><ProgressBar percentage = {Math.floor(props.completion*100)/100}/></p>
      </div>
  );
}

export default Category;