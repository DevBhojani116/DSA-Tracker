import { BrowserRouter, Routes, Route, Await } from "react-router-dom";

import Home from "./pages/Home";
import Questions from "./components/Questions";

import './App.css';
import React from 'react';
import { useState,useEffect } from 'react';
import { SERVER_API_URL } from './config.js';
import axios from 'axios';


const App = () =>
{
//   const categories = axios.get(SERVER_API_URL);
//   categories.data.map((category) =>
//     {
//       console.log(category.name);
//     });
// console.log(categories.data);
const [categories, setCategories] = useState([]);
  const fetchData = async () => {
    try {
      const res = await axios.get(SERVER_API_URL);
      console.log(res.data);
      setCategories(res.data.categories);
    } catch (err) {
      console.log(err);
    }
  };
  categories.map((category) =>
    {
      console.log(category.name);
    });
// console.log(categories[0]._id);

  useEffect(() => {fetchData()}, []);
  // return(
  //   <div className = "app">
  //     <h1>DSA Tracker</h1>
  //   </div>
  // )
  return(
    <div>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            {categories.map((category) => (
              <Route key = {`/${category._id}`} path={`/${category._id}`} element={<Questions data={category.questions} />} />
            ))}
            {/* <Route path="/:cid" element={<QuestionsPage />} /> */}
          </Routes>
      </BrowserRouter>
    </div>
  );
}

const useAPI = () =>
{
  const searchCategories = async() =>
  {
    const res = await axios.get(SERVER_API_URL);
    // console.log(res.data);
    return(res.data.categories);
    // const categories = res.data.categories;
    // categories.forEach((category) =>
    // {
    //   console.log(category.name);
    // });
    // console.log(res.data);
  }
  useEffect(() =>
  {
      searchCategories();
  },[])
}

export default App;


// [
//   {
//       "_id": "65edbc4d59d8d413d72305a9",
//       "name": "Strings",
//       "resources": [
//           "https://www.youtube.com/watch?v=dlt9Gyq6rb0&list=PLDdcY4olLQk0A0o2U0fOUjmO2v3X6GOxX"
//       ],
//       "completion": 0,
//       "questions": [
//           {
//               "name": "Reverse a String",
//               "difficulty": 0,
//               "solution": "https://leetcode.com/problems/reverse-string/solutions",
//               "status": 0,
//               "link": [
//                   "https://leetcode.com/problems/reverse-string/"
//               ],
//               "_id": "65ee2012269e20427f243587"
//           }
//         ]
//       }
//     ]