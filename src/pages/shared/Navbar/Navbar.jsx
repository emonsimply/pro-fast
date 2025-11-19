import React from "react";
import { Link, NavLink } from "react-router";
import ProFastLogo from "../ProFastLogo/ProFastLogo";
import "./Navbar.css";
import { FaArrowRight } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const { user, logOutUser } = useAuth();


  const handleLogOut = ()=>{
    logOutUser()
  }
  const navItems = (
    <>
      <li>
        <NavLink to="services">Services</NavLink>
      </li>
      <li>
        <NavLink to="coverage">Coverage</NavLink>
      </li>
      <li>
        <NavLink to="aboutUs">About Us</NavLink>
      </li>
      <li>
        <NavLink to="pricing">Pricing</NavLink>
      </li>
      <li>
        <NavLink to="Be a Rider">Be a Rider</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-white shadow-sm rounded-2xl my-4">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navItems}
          </ul>
        </div>
        <a className="">
          <ProFastLogo></ProFastLogo>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-gray-600">{navItems}</ul>
      </div>
      {user ? (
        <div className="navbar-end">
          <Link
            onClick={handleLogOut}
            className="btn font-bold text-gray-600 border-gray-300 rounded-xl "
          >
            LogOut
          </Link>
          <Link
            to="/beARider"
            className="btn font-bold bg-primary text-gray-600 border-0 rounded-xl ml-2 "
          >
            Be a rider
          </Link>
          <span className="bg-secondary rounded-full p-3">
            <FaArrowRight className="text-primary -rotate-45" />
          </span>
        </div>
      ) : (
        <div className="navbar-end">
          <Link
            to="/login"
            className="btn font-bold text-gray-600 border-gray-300 rounded-xl "
          >
            Sign In
          </Link>
          <Link
            to="/register"
            className="btn font-bold bg-primary text-gray-600 border-0 rounded-xl ml-2 "
          >
            Sign Up
          </Link>
          <span className="bg-secondary rounded-full p-3">
            <FaArrowRight className="text-primary -rotate-45" />
          </span>
        </div>
      )}
    </div>
  );
};

export default Navbar;
