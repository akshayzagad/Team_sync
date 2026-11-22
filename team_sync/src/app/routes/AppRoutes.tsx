import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayouts from '../layouts/AuthLayouts';
import Login from '../features/auth/ui/login';
import Register from '../features/auth/ui/register';
import PublicRoute from '../protectedRoutes/PublicRoute';
const AppRoutes = () => {
    const router = createBrowserRouter([
        {
      path: "/",
      element: <PublicRoute />,
      children: [
        {
          path: "",
          element: <AuthLayouts />,
          children: [
            {
              path: "",
              element: <Login />,
            },
            {
              path: "register",
              element: <Register />,
            },
          ],
        },
      ],
    },
    ])
    return <RouterProvider router={router} />;
}
export default AppRoutes;