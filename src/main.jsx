import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
//
import Root, { loader as rootLoader } from "./routes/Root";
import User from "./routes/User";
import UserSharedLayout from "./routes/UserSharedLayout";
import Address from "./routes/Address";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
  },
  {
    path: "/users/:userId",
    element: <UserSharedLayout />,
    children: [
      { index: true, element: <User /> },
      { path: "address", element: <Address /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
