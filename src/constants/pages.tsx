import ProtectedRoute from "@/components/ProtectedRoute";
import Home from "@/pages/Home/Home";

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
    name: 'admin',
    path: "/admin",
    element: <ProtectedRoute requiredRole="admin"><>admin bro</></ProtectedRoute>
  }
];
