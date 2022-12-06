import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const menuitem = (
    <>
      <li className="text-accent font-bold">
        <Link to="/">New cars</Link>
      </li>
      <li className="text-accent font-bold">
        <Link to="">used Cars</Link>
      </li>
      <li className="text-accent font-bold">
        <Link to="">Community Groups </Link>
      </li>
      <li className="text-accent font-bold">
        <Link to="">About </Link>
      </li>
      <li className="text-accent font-bold">
        <Link to="">Login</Link>
      </li>{" "}
      <li className="text-accent btn bg-primary rounded-xl font-bold">
        <Link to="">Create free account</Link>
      </li>
    </>
  );
  return (
    <div className="absolute w-full">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost text-accent lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu   menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuitem}
            </ul>
          </div>
        </div>
        <div className="navbar-end w-full hidden lg:flex">
          <ul className="menu menu-horizontal p-0"> {menuitem} </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
