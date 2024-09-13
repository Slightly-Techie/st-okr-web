import { createBrowserRouter } from "react-router-dom";
import HomePage from "./marketing/home/page";
import AuthPage from "./auth/page";
import MarketingPageLayout from "./marketing/layout";

export const APP_ROUTER = createBrowserRouter([
  // Routes for the landing page
  {
    path: "/",
    element: <MarketingPageLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
    ],
  },

  // Routes for authentication
  {
    path: "/login",
    element: <AuthPage />,
  },
]);
