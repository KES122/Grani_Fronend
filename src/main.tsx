import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./App.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/steps1/HomePage/Home.tsx";
import Page2 from "./Pages/steps1/Forum/Page2.tsx";
import CardsArea from "./Pages/steps2/Cards-area/Cards-area.tsx";
import BackBtn from "./Pages/steps3/Settlement/btn-back/BackBtn.tsx";
import ApplicationPage3 from "./Pages/steps1/Forum2/applicationPage3.tsx";
import Checklist from "./Pages/steps2/Booking-checklist/Checklist.tsx";
import Settlement from "./Pages/steps3/Settlement/Settlement.tsx";
import ChecklistDoc from "./Pages/steps5/Checklist-documents/ChecklistDoc.tsx";
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
        path: "/Forum2",
        element: <ApplicationPage3/>
      },
      {
        path: "/Cards-area",
        element: <CardsArea />,
      },
      {
        path: "/Booking-checklist",
        element: <Checklist />,
      },
      {
        path: "/BackBtn",
        element: <BackBtn />,
      },
      {
        path: "/Settlement",
        element: <Settlement/>,
      },
      {
        path: "/Checklist-documents",
        element: <ChecklistDoc/>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
