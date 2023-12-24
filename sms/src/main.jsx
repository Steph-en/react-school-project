import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Reset from "./pages/ResetPage";
import ErrorPage from "./error-page";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/ResetPage",
    element: <Reset />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
