import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Layout from "../layout/Layout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import { useEffect } from "react";
import { isAuth } from "../slice/authSlice";
import PrivateRoute from "./PrivateRoute";


export const AppRoutes = () => {
  const dispatch = useDispatch();
  const { userEmail } = useSelector((state) => state.auth);

  useEffect(() => {
    const { data } = JSON.parse(localStorage.getItem("auth")) || "";
    dispatch(isAuth(data?.email));
  }, [dispatch]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: (
            <PrivateRoute
              Component={<MainPage />}
              fallBackPath={"/login"}
              isAllowed={!userEmail}
            />
          ),
        },
      ],
    },
    {
      path: "/login",
      element: (
        <PrivateRoute
          Component={<LoginPage />}
          fallBackPath={"/"}
          isAllowed={userEmail}
        />
      ),
    },
    {
      path: "register",
      element: (
        <PrivateRoute
          Component={<RegisterPage />}
          fallBackPath={"/"}
          isAllowed={userEmail}
        />
      ),
    },
    {
      path: "*",
      element: (
        <div>
          <h1>404 Not found</h1>

          <button>
            <Link to="/">go to Home pages</Link>
          </button>
        </div>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};
