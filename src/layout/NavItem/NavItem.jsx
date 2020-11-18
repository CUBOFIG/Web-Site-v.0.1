import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

const NavBarItem = ({
  text,
  goTo,
  navItemClass,
  linkclass,
  clossMobileMenu,
}) => {
  const navItemClasses = classNames(navItemClass);
  const linkClasses = classNames(linkclass);

  return (
    <li className={navItemClasses}>
      <Link to={goTo} className={linkClasses} onClick={clossMobileMenu}>
        {text}
      </Link>
    </li>
  );
};

export default NavBarItem;
