import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main";
import Home from "../../Pages/Home/Home";
import Catagori from "../../Pages/Categori/Categori/Catagori";
import News from "../../Pages/News/News/News";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/category/:id", element: <Catagori></Catagori> },
      { path: "/news/:id", element: <News></News> },
    ],
  },
]);
