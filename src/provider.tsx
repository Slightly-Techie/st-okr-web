import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { APP_ROUTER } from "./app/router";

function AppProvider() {
  return (
    <HelmetProvider>
      <RouterProvider router={APP_ROUTER} />
    </HelmetProvider>
  );
}

export default AppProvider;
