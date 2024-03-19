import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "../App.css";
import Questions from "./Questions.jsx"

function Category(props) {
  return (
      <div className="category">
        <div>
            <h3><p>{props.name}</p></h3>
            <p>ID: {props.id}</p>
            <p>Total Questions: {props.questions.length}</p>
            <p>Completion status: {props.completion}%</p>
            <p>
            <Link to={`/${props.id}`}>
                Start Solving
            </Link>
            </p>
        </div>
      </div>
  );
}

export default Category;