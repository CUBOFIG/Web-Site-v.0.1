import React from "react";
import "./Sidebar.scss";
import { Nav } from "reactstrap";
import classNames from "classnames";
import NavItem from "../NavItem/NavItem";

const Sidebar = ({ isOpen, clossMobileMenu }) => {
  const sidebarClasses = classNames(
    "d-lg-none d-xl-none sidebar position-fixed h-100 ",
    { "is-open": isOpen }
  );

  isOpen
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "visible");

  // if (isOpen) {
  //   document.body.style.overflow = "hidden";
  // } else {
  //   document.body.style.overflow = "visible";
  // }

  return (
    <div className="sidebar-container">
      <div className={sidebarClasses}>
        <div className="side-menu">
          <Nav vertical className="list-unstyled pb-3">
            <NavItem
              text="Home"
              goTo="/"
              navItemClass="nav-item"
              linkclass="nav-links"
              clossMobileMenu={clossMobileMenu}
            />

            <NavItem
              text="Services"
              goTo="/services"
              navItemClass="nav-item"
              linkclass="nav-links"
              clossMobileMenu={clossMobileMenu}
            />

            <NavItem
              text="Products"
              goTo="/products"
              navItemClass="nav-item"
              linkclass="nav-links"
              clossMobileMenu={clossMobileMenu}
            />

            <NavItem
              text="Sign Up"
              goTo="/sign-up"
              linkclass="nav-links-mobile"
              clossMobileMenu={clossMobileMenu}
            />
          </Nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
