import React from "react";
import { useLoaderData } from "react-router-dom";

const Catagori = () => {
  const news = useLoaderData();
  return (
    <div>
      <h3>This is category has news: {news.length}</h3>
    </div>
  );
};

export default Catagori;
