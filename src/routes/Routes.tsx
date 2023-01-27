import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "pages/HomePage";
import {
  SmallFieldPage,
  MediumFieldPage,
  BigFieldPage,
} from "pages/FieldPages";

export const ROUTES = {
  HOME: "/",
  SMALL: "/small",
  MEDIUM: "/medium",
  BIG: "/big",
};

const router = createBrowserRouter([
  { path: ROUTES.HOME, element: <HomePage /> },
  { path: ROUTES.SMALL, element: <SmallFieldPage /> },
  { path: ROUTES.MEDIUM, element: <MediumFieldPage /> },
  { path: ROUTES.BIG, element: <BigFieldPage /> },
]);

export const AppRoutes = () => <RouterProvider router={router} />;
