import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Separator } from "@/components/ui/separator";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div className="h-[87vh] w-[100vw]">
      <Header />
      <Separator />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;

