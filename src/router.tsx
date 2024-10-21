import AuthPage from "@/components/auth/auth";
import HomePage from "@/components/homepage/homepage";
import Navbar from "@/components/homepage/navbar";
import CreateCompany from "@/pages/CreateCompany";
import { createBrowserRouter } from "react-router-dom";
import JoinCompany from "./pages/JoinCompany";

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

  // Route for creating a company
  {
    path: "/create-company",
    element: <CreateCompany />,
  },

  // joining a company
  {
    path: "join-company",
    element: <JoinCompany />,
  },
]);
