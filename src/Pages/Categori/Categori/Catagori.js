import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummeryCart from "../../Shared/NewsSummeryCart/NewsSummeryCart";

const Catagori = () => {
  const categoryNews = useLoaderData();
  return (
    <div>
      <h3>This is category has news: {categoryNews.length}</h3>
      {categoryNews.map((news) => (
        <NewsSummeryCart key={news.id} news={news}></NewsSummeryCart>
      ))}
    </div>
  );
};

export default Catagori;
