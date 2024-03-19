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
  // const [category,setCategory] = useState([]);
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const changeCategory = (newCategory) => {
    setCategory(newCategory);
    console.log(category)
    console.log(newCategory)
  }
  const searchCategories = async() =>
  {
    const response = await axios.get(SERVER_API_URL);

    return(response.data.categories);
    const categories = response.data.categories;
    categories.forEach((category) =>
    {
      console.log(category.name);
    });
    // console.log(response.data);
  }
  useEffect(() =>
  {
      searchCategories();
  },[])
  // return(
  //   <div className = "app">
  //     <h1>DSA Tracker</h1>
  //   </div>
  // )
  return(
    <div>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home changeCategory={changeCategory}/>} />
            <Route path={`/${category._id}`} element={<Questions changeCategory={changeCategory}/>} />
            {/* {categories.map((category) => (
              <Route path={`/${category._id}`} element={<Questions data={category.questions} />} />
            ))} */}
            {/* <Route path="/:cid" element={<QuestionsPage />} /> */}
            {/* <Route path={category.id} */}
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
    const categories = response.data.categories;
    categories.forEach((category) =>
    {
      console.log(category.name);
    });
    // console.log(response.data);
  }
  useEffect(() =>
  {
      searchCategories();
  },[])
}

export default App;
