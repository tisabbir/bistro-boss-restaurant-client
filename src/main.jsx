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
import PrivateRoute from "./Pages/Routes/PrivateRoute";
import AllUsers from "./Pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./Pages/Routes/AdminRoute";
import AddItems from "./Pages/Dashboard/AddItems/AddItems";
import ManageItems from "./Pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "./Pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "./Pages/Dashboard/Payment/Payment";
import PaymentHistory from "./Pages/Dashboard/PaymentHistory/PaymentHistory";

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
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: 'payment',
        element: <Payment />
      },
      {
        path: 'history',
        element: <PaymentHistory />
      },

      //for admin only
      {
        path:'manageItems',
        element: <AdminRoute> <ManageItems /> </AdminRoute>
      },

      {
        path: "users",
        element: <AdminRoute> <AllUsers /></AdminRoute>,
      },
      {
        path: "addItems",
        element: <AdminRoute> <AddItems /></AdminRoute>,
      },
      {
        path: "updateItem/:id",
        element: <AdminRoute> <UpdateItem /></AdminRoute>,
        loader : ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
      },
    ],
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
