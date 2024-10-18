import { APP_ROUTER } from "@/router";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";

function AppProvider() {
  return (
    <HelmetProvider>
      <RouterProvider router={APP_ROUTER} />
    </HelmetProvider>
  );
}

export default AppProvider;
