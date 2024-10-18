import AuthPage from "@/components/auth/auth";
import HomePage from "@/components/homepage/homepage";
import Navbar from "@/components/homepage/navbar";
import { createBrowserRouter } from "react-router-dom";

export const APP_ROUTER = createBrowserRouter([
  // Routes for the landing page
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <HomePage />
      </>
    ),
  },

  // Routes for authentication
  {
    path: "/login",
    element: <AuthPage />,
  },
]);