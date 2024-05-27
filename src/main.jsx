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
import SignUp from "./Pages/SignUp/SignUp";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Dashboard from "./Layout/Dashboard";
import Cart from "./Pages/Dashboard/Cart/Cart";

// Create a client
const queryClient = new QueryClient();

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
      {
        path: "/sign",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children : [
      {
        path: 'cart',
        element : <Cart />

      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <div className="max-w-7xl mx-auto">
          <HelmetProvider>
            <RouterProvider router={router} />
          </HelmetProvider>
        </div>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
