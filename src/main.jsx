import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { routes } from "./Routes/Routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes} />
);
