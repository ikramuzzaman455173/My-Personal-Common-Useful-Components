import { Outlet, createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../components/layouts/DashboardLayout";
import MainLayout from "../components/layouts/MainLayout";
import { Home } from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import DashboardPage from "../pages/Dashboard/Dashaboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout><Outlet/></MainLayout>,
    errorElement: "404 error found!",
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/shop",
        element: <Shop/>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    ),
    children: [
      {
        index: true,
        element:<DashboardPage/>,
      },
    ],
  },
]);

export default router;
