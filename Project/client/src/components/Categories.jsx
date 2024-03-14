import { useState, useEffect } from "react";
import axios from "axios";
import Category from "./Category.jsx";
import { SERVER_API_URL } from "../config.js";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [count, setCount] = useState(0);
  const [err, setErr] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    try {
      const res = await axios.get(SERVER_API_URL);
      console.log(res.data);
      setCategories(res.data.categories);
      setCount(res.data.count);
    } catch (err) {
      console.log(err);
      setErr(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {fetchData()}, []);
  return (
    <div>
      {isLoading ? (
        <p>Loading categories...</p>
      ) : err ? (
        <p>Error fetching categories: {err.message}</p>
      ) : (
        <div>
          <h2>
            Number of categories as of now - {count}
          </h2>
          {categories.map((category) => (
            <Category
              id={category._id}
              name={category.name}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Categories;