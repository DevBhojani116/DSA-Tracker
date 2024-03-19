import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

// import QuestionsPage from "../pages/QuestionsPage";

function Question(props) {
  return (
    // <div className="cards">
      <div className="question">
        <div>
            <table>
                <tr>
                    <th>Question id</th>
                    <th>Question name</th>
                    <th>Difficulty</th>
                    <th>Link to solution</th>
                    <th>Question status</th>
                </tr>
                <tr>
                    <td>{props.id}</td>
                    <a href = {props.link[0]}><td>{props.name}</td></a>
                    <td>{props.difficulty}</td>
                    <td>{props.solution}</td>
                    <td>{props.status}</td>
                </tr>
            </table>
        </div>
        {/* {props.id} {props.name} {props.resources.map((resource) => {return resource})} {props.completion}
        {props.questions.map((question) => {return question.name})} */}
      </div>
    // </div>
  );
}

export default Question;