import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Roots from "./Pages/Routes/Roots";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import OurMenu from "./Pages/OurMenu/OurMenu";
import { HelmetProvider } from "react-helmet-async";
import OurShop from "./Pages/OurShop/OurShop";
import AuthProvider from "./Pages/Providers/AuthProvider/AuthProvider";
import Register from "./Pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <OurMenu />,
      },
      {
        path: "/shop/:category",
        element: <OurShop />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <div className="max-w-7xl mx-auto">
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </div>
    </AuthProvider>
  </React.StrictMode>
);
