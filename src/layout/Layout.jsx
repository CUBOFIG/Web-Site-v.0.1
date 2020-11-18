import React, { useState } from "react";
import Footer from "./Footer/Footer";
import NavBar from "./Nav/Navbar";
import Sidebar from "./Sidebar/Sidebar";

const Layout = ({ children }) => {
  const [SidebarIsOpen, setSidebarIsOpen] = useState(false);

  const toogleSidebar = () => setSidebarIsOpen(!SidebarIsOpen);
  const clossMobileMenu = () => setSidebarIsOpen(false);

  return (
    <div>
      <NavBar
        toogleSidebar={toogleSidebar}
        isOpen={SidebarIsOpen}
        toogleSidebarFalse={clossMobileMenu}
      />
      <Sidebar
        toggle={toogleSidebar}
        isOpen={SidebarIsOpen}
        clossMobileMenu={clossMobileMenu}
      />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
