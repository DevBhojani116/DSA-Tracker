import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Category(props) {
  return (
    <div>
      <h5>
        {props.name}
      </h5>
    </div>
  );
}

export default Category;