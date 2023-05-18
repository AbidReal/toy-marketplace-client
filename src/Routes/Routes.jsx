import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddAToy from "../Pages/AddAToy/AddAToy";
import AllToys from "../Pages/AllToys/AllToys";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyToys from "../Pages/MyToys/MyToys";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/my-toys",
        element: <MyToys />,
      },
      {
        path: "/all-toys",
        element: <AllToys />,
      },
      {
        path: "/add-a-toy",
        element: <AddAToy />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
export default router;
