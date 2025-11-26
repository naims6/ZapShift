import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import axios from "axios";
import PrivateRoute from "./PrivateRoute";
import SendAParcel from "../Pages/SendAParcel/SendAParcel";
import DashBoardLayout from "../Layouts/DashBoardLayout";
import MyParcels from "../Pages/MyParcels/MyParcels";

export const router = createBrowserRouter([
  // Root Layout
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/coverage",
        Component: Coverage,
        loader: () => axios("/data/warehouses.json").then((data) => data.data),
        hydrateFallbackElement: <h1>Loading...</h1>,
      },
      {
        path: "/send-parcel",
        element: (
          <PrivateRoute>
            <SendAParcel></SendAParcel>
          </PrivateRoute>
        ),
        loader: () => axios("/data/warehouses.json").then((data) => data.data),
        hydrateFallbackElement: <h1>Loading...</h1>,
      },
    ],
  },
  // Auth Layout
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
  // Dashboard Layout
  {
    path: "/dashboard",
    Component: DashBoardLayout,
    children: [
      {
        path: "/dashboard/my-parcels",
        element: (
          <PrivateRoute>
            <MyParcels></MyParcels>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
