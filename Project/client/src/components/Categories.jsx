import { useState, useEffect } from "react";
import axios from "axios";
import Category from "./Category.jsx";
import { SERVER_API_URL } from "../config.js";

function Categories({changeCategory}) {
  const [categories, setCategories] = useState([]);
  const [err, setErr] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    try {
      const res = await axios.get(SERVER_API_URL);
      console.log(res.data);
      setCategories(res.data.categories);
    } catch (err) {
      console.log(err);
      setErr(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {fetchData()}, []);
  return (
    <>
      {isLoading ? (
        <p>Loading categories...</p>
      ) : err ? (
        <p>Error fetching categories: {err.message}</p>
      ) : (
        <>
          {categories.map((category) => (
            <Category
              id = {category._id}
              name = {category.name}
              resources = {category.resources}
              completion = {category.completion}
              questions = {category.questions}
              category={category}
              changeCategory={changeCategory}
            />
          ))}
        </>
      )}
    </>
  );
}

export default Categories;