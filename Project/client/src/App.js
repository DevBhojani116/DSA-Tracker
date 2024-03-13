import './App.css';
import React from 'react';
import { useEffect } from 'react';
import { SERVER_API_URL } from './config.js';
import axios from 'axios';

const App = () =>
{
  useAPI();
  return(
    <div className = "app">
      <h1>DSA Tracker</h1>
    </div>
  )
}

const useAPI = () =>
{
  const searchCategories = async() =>
  {
    const response = await axios.get(SERVER_API_URL);
    console.log(response.data);
  }
  useEffect(() =>
  {
      searchCategories();
;  },[])
}

export default App;
