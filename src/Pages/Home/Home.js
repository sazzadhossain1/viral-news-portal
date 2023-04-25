import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummeryCart from "../Shared/NewsSummeryCart/NewsSummeryCart";

const Home = () => {
  const allNews = useLoaderData();
  return (
    <div>
      <h1>Viral News: {allNews.length}</h1>
      {allNews.map((news) => (
        <NewsSummeryCart key={news._id} news={news}></NewsSummeryCart>
      ))}
    </div>
  );
};

export default Home;
