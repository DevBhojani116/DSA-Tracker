import { useState, useEffect } from "react";
import axios from "axios";
import Question from "./Question.jsx";
import { SERVER_API_URL } from "../config.js";
import Categories from "./Categories.jsx";
import "../App.css";

function Questions(data) {
//   const [categories, setCategories] = useState([]);
//   const [questions, setQuestions] = useState([]);
//   const [err, setErr] = useState(null);

//   console.log(data.data[0].name);
  data = data.data;
  
//   console.log(data[0].name);
//   data.map((question) => (console.log(question.name)))
//   setQuestions = data.questions;
//   const fetchData = async () => {
//     try {
//       const res = await axios.get(SERVER_API_URL);
//       console.log(res.data);
//       setCategories(res.data.categories);
//     } catch (err) {
//       console.log(err);
//       setErr(err);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {fetchData()}, []);
  return (
    <table className="abcd">
        <tr>
            <th>Question id</th>
            <th>Question name</th>
            <th>Difficulty</th>
            <th>Link to solution</th>
            <th>Question status</th>
            <th>Notes</th>
        </tr>
        <>
            {data.map((question) => (
            <Question
              id = {question._id}
              name = {question.name}
              difficulty = {question.difficulty}
              solution = {question.solution}
              status = {question.status}
              link = {question.link}
              notes = {question.notes}
            />
          ))}
        </>
    </table>
  );
}

export default Questions;