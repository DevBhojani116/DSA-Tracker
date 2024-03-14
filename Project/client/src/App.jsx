import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
// import QuestionPage from "./pages/QuestionPage";

import './App.css';
import React from 'react';
import { useState,useEffect } from 'react';
import { SERVER_API_URL } from './config.js';
import axios from 'axios';

// const [categories,setCategories] = useState([]);
const App = () =>
{
  // useAPI();
  // return(
  //   <div className = "app">
  //     <h1>DSA Tracker</h1>
  //   </div>
  // )
  return(
    <div>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route
              path="/:cid"
              element={<QuestionPage />}
            /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

const useAPI = () =>
{
  const searchCategories = async() =>
  {
    const response = await axios.get(SERVER_API_URL);
    return(response.data.categories);
    // const categories = response.data.categories;
    // categories.forEach((category) =>
    // {
    //   console.log(category.name);
    // });
    // console.log(response.data);
  }
  useEffect(() =>
  {
      searchCategories();
  },[])
}

export default App;
