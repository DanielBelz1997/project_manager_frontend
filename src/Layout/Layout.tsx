import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { LayoutProps } from "@/types/layout";
import { Separator } from "@/components/ui/separator";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-[100vh] w-[100vw]">
      <Header />
      <Separator />
      <main className="overflow-y-auto h-[88vh]">{children}</main>
      <Separator />
      <Footer />
    </div>
  );
};

export default Layout;

