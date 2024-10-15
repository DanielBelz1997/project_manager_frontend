import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Separator } from "@/components/ui/separator";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div className="h-[86vh] w-[100vw]">
      <Header />
      <Separator />
      <Outlet />
      <Separator />
      <Footer />
    </div>
  );
};

export default Layout;

