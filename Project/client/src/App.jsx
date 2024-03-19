import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Questions from "./components/Questions";

import './App.css';
import React from 'react';
import { useState,useEffect } from 'react';
import { SERVER_API_URL } from './config.js';
import axios from 'axios';


const App = () =>
{
  const categories = useAPI();
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
            {/* {categories.map((category) => (
              <Route path={`/${category._id}`} element={<Questions data={category.questions} />} />
            ))} */}
            <Route path="/questions" />
          </Routes>
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
