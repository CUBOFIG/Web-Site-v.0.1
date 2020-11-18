import React, { useState } from "react";
import { Navbar as NavbarBootstrap, Nav } from "reactstrap";
import { Link } from "react-router-dom";
import ButtonShared from "shared/ButtonShared/ButtonShared";
import FontAwesomeIcon from "shared/FontAwesomeIcon/FontAwesomeIcon";
import NavItem from "../NavItem/NavItem";
import "./Navbar.scss";

const Navbar = ({ toogleSidebar, isOpen, toogleSidebarFalse }) => {
  const [button, setButton] = useState(true);

  const showButton = () => {
    if (window.innerWidth <= 992) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <NavbarBootstrap light className="navbar shadow-sm pt-0 pb-0" expand="lg">
      <div className="container">
        <Link to="/" className="navbar-logo mr-auto ml-4">
          CUBE
          <i>
            <FontAwesomeIcon size="lg" className="ml-1" icon="cubes" />
          </i>
        </Link>

        <Link
          to="#"
          className="d-lg-none d-block ml-auto mr-4"
          onClick={toogleSidebar}
        >
          <FontAwesomeIcon size="lg" icon={isOpen ? "times" : "bars"} />
        </Link>

        <Nav className="d-lg-flex d-none ml-auto align-items-center" navbar>
          <NavItem
            text="Home"
            goTo="/"
            navItemClass="nav-item"
            linkclass="nav-links"
            clossMobileMenu={toogleSidebarFalse}
          />

          <NavItem
            text="Services"
            goTo="/services"
            navItemClass="nav-item"
            linkclass="nav-links"
            clossMobileMenu={toogleSidebarFalse}
          />

          <NavItem
            text="Products"
            goTo="/products"
            navItemClass="nav-item"
            linkclass="nav-links"
            clossMobileMenu={toogleSidebarFalse}
          />

          <NavItem
            text="Sign Up"
            goTo="/sign-up"
            linkclass="nav-links-mobile"
            clossMobileMenu={toogleSidebarFalse}
          />
        </Nav>

        {button && (
          <ButtonShared buttonStyle="btn--outline">SIGN UP</ButtonShared>
        )}
      </div>
    </NavbarBootstrap>
  );
};

export default Navbar;
