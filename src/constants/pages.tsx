import ProtectedRoute from "@/components/routes/ProtectedRoute";
import { MyRequests } from "@/pages/clients/Requests/myRequests";
import Home from "@/pages/Home/Home";
import LoginPage from "@/pages/Login/LoginPage";
import RegisterPage from "@/pages/Register/RegisterPage";

export const PAGES = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
  },
  {
    name: "register",
    path: "/register",
    element: <RegisterPage />,
  },
  {
    name: "login",
    path: "/login",
    element: <LoginPage />,
  },
  {
    name: "myRequests",
    path: "/myRequests",
    element: <MyRequests />,
  },
  {
    name: "admin",
    path: "/admin",
    element: (
      <ProtectedRoute>
        <>admin bro</>
      </ProtectedRoute>
    ),
  },
];

