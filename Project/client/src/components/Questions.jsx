import { useState, useEffect } from "react";
import axios from "axios";
import Question from "./Question.jsx";
import { SERVER_API_URL } from "../config.js";
import Categories from "./Categories.jsx";
import "../App.css";
import HorizontalProgressBar from "./ProgressBar.jsx";

function Questions(data) {
  const d = data.data.questions;
  
  // console.log(data.data._id);

  return (
  <div class = "app">
    <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white"><span class="text-[#E65F5C] dark:text-[#E65F5C]">DSA </span>Tracker: {data.data.name}</h1>
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
            <th className="px-6 py-3">Question id</th>
            <th className="px-6 py-3">Question name</th>
            <th className="px-6 py-3">Difficulty</th>
            <th className="px-6 py-3">Link to question</th>
            <th className="px-6 py-3">Link to solution</th>
            <th className="px-6 py-3">Question status</th>
            <th className="px-6 py-3">Notes</th>
        </tr>
      </thead>  
      <tbody>
            {d.map((question) => (
            <Question
              id = {question._id}
              name = {question.name}
              difficulty = {question.difficulty}
              solution = {question.solution}
              status = {question.status}
              link = {question.link}
              notes = {question.notes}
              catID = {data.data._id}
             />
          ))}
      </tbody>
    </table>
  </div>
  );
}

export default Questions;