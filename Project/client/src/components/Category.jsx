import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "../App.css";
import Questions from "./Questions.jsx"

function Category(props) {
  return (
    // <div className="cards">
      <div className="category">
      {/* <Link to = <Question />> */}
        <div>
            <h3><p>{props.name}</p></h3>
            <p>ID: {props.id}</p>
            <p>Total Questions: {props.questions.length}</p>
            <p>Completion status: {props.completion}%</p>
            <p>
            <Link to={`/questions`} element={<Questions data={props.questions} />}>
            {/* <BrowserRouter>
            <Route path={`/${props._id}`} element={<Questions data={props.questions} />} />
            </BrowserRouter> */}
                Start Solving
            </Link>
            </p>
        </div>
        {/* </Link> */}
        {/* {props.id} {props.name} {props.resources.map((resource) => {return resource})} {props.completion}
        {props.questions.map((question) => {return question.name})} */}
      </div>
    // </div>
  );
}

export default Category;