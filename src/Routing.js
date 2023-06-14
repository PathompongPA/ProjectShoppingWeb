import { useRoutes } from "react-router-dom";
import { LayoutNav1, LayoutNav2, LayoutNav3 } from "./App";
import Womenswear from "./page/Womenswear";
import ErrorPage from "./page/ErrorPage";
import Playment from "./page/Playment";
import SingUp from "./page/SingUp";

export default function Routing() {
  const router = [
    {
      path: "/",
      element: <LayoutNav3 />,
      children: [
        {
          path: "WomensWear",
          element: <Womenswear />,
          children: [],
        },
        {
          path: "Menswear",
          element: <ErrorPage />,
          children: [],
        },
        {
          path: "Kidwear",
          element: <ErrorPage />,
          children: [],
        },
        {
          path: "Beauty",
          element: <ErrorPage />,
          children: [],
        },
        {
          path: "Hobbies",
          element: <ErrorPage />,
          children: [],
        },
        {
          path: "Homeware",
          element: <ErrorPage />,
          children: [],
        },
        {
          path: "sellitem",
          element: <ErrorPage />,
          children: [],
        },
        {
          path: "Playment",
          element: <Playment />,
          children: [],
        },
        {
          path: "Singup",
          element: <SingUp />,
          children: [],
        },
        {
          path: "Login",
          element: <ErrorPage />,
          children: [],
        },
      ],
    },
  ];

  return useRoutes(router);
}
