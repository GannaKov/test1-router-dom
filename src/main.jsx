import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
//
import Root, { loader as rootLoader } from "./routes/Root";
import User, { loader as userLoader } from "./routes/User";
import UserSharedLayout from "./routes/UserSharedLayout";
import Address from "./routes/Address";
//, { loader as userLoader }
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
  },
  {
    path: "/users/:userId",
    element: <UserSharedLayout />,
    // loader: userLoader,
    children: [
      { index: true, element: <User />, loader: userLoader },
      { path: "address", element: <Address />, loader: userLoader },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
