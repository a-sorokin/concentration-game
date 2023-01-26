import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SmallFieldPage } from "pages/SmallFieldPage";
import { HomePage } from "pages/HomePage";
import { MediumFieldPage } from "pages/MediumFieldPage";
import { BigFieldPage } from "pages/BigFieldPage";

export const ROUTES = {
  SMALL: "/small",
  MEDIUM: "/medium",
  BIG: "/big",
};

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: ROUTES.SMALL, element: <SmallFieldPage /> },
  { path: ROUTES.MEDIUM, element: <MediumFieldPage /> },
  { path: ROUTES.BIG, element: <BigFieldPage /> },
]);

export const AppRoutes = () => <RouterProvider router={router} />;
