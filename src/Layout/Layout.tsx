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

/**
 * sends:
 *
 * 1. x of the page
 * 2. y of the page
 * 3. w of the page
 * 4. h of the page
 * 5. the group that created the component
 * 6. the component id
 * 7. style of the component will be default
 *
 * gets the data that has been created
 */

