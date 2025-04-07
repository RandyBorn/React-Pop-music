import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Children } from "react";

import Drums from "./Components/Drums.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Guitar from "./Components/Guitar.jsx";
import Bass from "./Components/Bass.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/guitar",
        element: <Guitar />,
      },
      {
        path: "/bass",
        element: <Bass />,
      },
      {
        path: "/drums",
        element: <Drums />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
