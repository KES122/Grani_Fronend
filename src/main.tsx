import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./App.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/steps1/HomePage/Home.tsx";
import Page2 from "./Pages/steps1/Forum/Page2.tsx";
import CardsArea from "./Pages/steps2/Cards-area/Cards-area.tsx";
import Settelement from "./Pages/steps3/Settlement/Settlement.tsx";
import BackBtn from "./Pages/steps3/Settlement/btn-back/BackBtn.tsx";
import Page3 from "./Pages/steps1/Forum2/Page3.tsx";
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
      {
        path: '/Forum2',
        element: <Page3 />
      },
      {
        path: "/Cards-area",
        element: <CardsArea/>,
      },
      {
        path: "/Settlement",
        element: <Settelement/>,
      },
      {
        path: "/BackBtn",
        element: <BackBtn/>,
      },
     
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
