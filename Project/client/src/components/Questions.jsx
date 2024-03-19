import { useState, useEffect } from "react";
import axios from "axios";
import Question from "./Question.jsx";
import { SERVER_API_URL } from "../config.js";
import Categories from "./Categories.jsx";

function Questions(data) {
  const [categories, setCategories] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [err, setErr] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
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
    <>
      {isLoading ? (
        <p>Loading questions...</p>
      ) : err ? (
        <p>Error fetching questions: {err.message}</p>
      ) : (
        <>
            {data.map((question) => (
            <Question
              id = {question._id}
              name = {question.name}
              difficulty = {question.difficulty}
              solution = {question.solution}
              status = {question.status}
              link = {question.link}
            />
          ))}
        </>
      )}
    </>
  );
}

export default Questions;