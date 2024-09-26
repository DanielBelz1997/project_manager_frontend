import ProtectedRoute from "@/components/routes/ProtectedRoute";
import Home from "@/pages/Home/Home";
import LoginPage from "@/pages/Login/LoginPage";

export const PAGES = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
  },
  {
    name: "another",
    path: "/another",
    element: <>hello another</>,
  },
  {
    name: "not Found",
    path: "*",
    element: <>not Found. need to fix that</>,
  },
  {
    name: "login",
    path: "/login",
    element: <LoginPage />
  },
  {
    name: 'admin',
    path: "/admin",
    element: <ProtectedRoute requiredRole="admin"><>admin bro</></ProtectedRoute>
  }
];
