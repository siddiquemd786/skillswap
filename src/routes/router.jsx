// src/routes/router.jsx
// src/routes/Router.jsx

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import SkillDetails from "../components/skills/SkillDetails";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PriveteRoute from "./PriveteRoute";
import BookSession from "../pages/BookSession";
import Loading from "../components/home/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, 
        element: <HomePage />,
        loader: () => fetch("/skills.json").then((res) => res.json()),
        hydrateFallbackElement:<Loading></Loading>
      },
      {
        path: "/skills/:id",
        element: <SkillDetails />,
        loader: () => fetch("/skills.json").then((res) => res.json()),
         hydrateFallbackElement:<Loading></Loading>
      },
      {
        path: "/profile",
        element: <PriveteRoute> <Profile /> </PriveteRoute>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path:"/bookSession",
        element: <BookSession></BookSession>
      }
    ],
  },
]);

export default router;
