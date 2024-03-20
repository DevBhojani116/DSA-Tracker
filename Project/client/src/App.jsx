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

const [categories, setCategories] = useState([]);
const getCategories = async() =>
{
  const res = await axios.get(SERVER_API_URL);
  setCategories(res.data.categories);
}
useEffect(() =>
{
    getCategories();
},[])

// categories.map((category) =>
//     {
//       console.log(category._id);
//     });

  return(
    <div>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            {categories.map((category) => (
              <Route key = {`/${category._id}`} path={`/${category._id}`} element={<Questions data={category.questions}/>} />
            ))}
          </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;