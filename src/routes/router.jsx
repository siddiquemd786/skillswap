// src/routes/Router.jsx
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/HomePage";
import SkillDetails from "../components/skills/SkillDetails";
import HomePage from "../pages/HomePage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
         index: true, 
        element: <HomePage />,
    loader: () => fetch("/skills.json").then(res => res.json()), 
  },
  {
    path: "/skills/:id",
    element: <SkillDetails />,
    loader: () => fetch("/skills.json").then(res => res.json()), 
  },
      
    ],
  },
]);

export default router
