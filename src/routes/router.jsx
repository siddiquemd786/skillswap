// src/routes/Router.jsx

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import SkillDetails from "../components/skills/SkillDetails";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PriveteRoute from "./PriveteRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, 
        element: <HomePage />,
        loader: () => fetch("/skills.json").then((res) => res.json()),
      },
      {
        path: "/skills/:id",
        element: <SkillDetails />,
        loader: () => fetch("/skills.json").then((res) => res.json()),
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
    ],
  },
]);

export default router;
