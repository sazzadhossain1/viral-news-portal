import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main";
import Home from "../../Pages/Home/Home";
import Catagori from "../../Pages/Categori/Categori/Catagori";
import News from "../../Pages/News/News/News";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/news"),
      },
      {
        path: "/catagori/:id",
        element: <Catagori></Catagori>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: "/news/:id",
        element: <News></News>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
