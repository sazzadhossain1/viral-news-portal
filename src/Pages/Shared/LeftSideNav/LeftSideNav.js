import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState();
  // console.log(categories);
  useEffect(() => {
    fetch("http://localhost:5000/news-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h4>All Categories {categories && categories.length} </h4>
      <div>
        {categories &&
          categories.map((category) => (
            <p key={category.id}>
              <Link to={`/catagori/${category.id}`}>{category.name}</Link>
            </p>
          ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
