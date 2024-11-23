import ProtectedRoute from "@/components/routes/ProtectedRoute";
import { AdminHomePage } from "@/pages/Admin/AdminHomePage";
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
    element: (
      <ProtectedRoute>
        <MyRequests />
      </ProtectedRoute>
    ),
  },
  {
    name: "admin",
    path: "/admin",
    element: (
      <ProtectedRoute>
        <AdminHomePage />
      </ProtectedRoute>
    ),
  },
];

