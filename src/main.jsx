import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/Home";
import Contact from "./component/Contact";
import About from "./component/About";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path:"/contact",
    element:<Contact/>
  },
  {
    path:"/about",
    element:<About/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
