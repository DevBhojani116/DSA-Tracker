import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

// import QuestionsPage from "../pages/QuestionsPage";

function Question(props) {
  return (
    <tr className="question">
      <td>{props.id}</td>
      <td>
        <a href={props.link[0]}>{props.name}</a>
      </td>
      <td>{props.difficulty == 0?"Easy":props.difficulty == 1?"Medium":"Hard"}</td>
      <td>
        <a href={props.solution}>{props.solution}</a>
      </td>
      <td>{props.status}</td>
      <td>{props.notes}</td>
    </tr>
  );
}

export default Question;
