import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./App.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/steps1/HomePage/Home.tsx";
import Page2 from "./Pages/steps1/Forum/Page2.tsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Forum",
        element: <Page2 />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
