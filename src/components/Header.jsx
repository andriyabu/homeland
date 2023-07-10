import React from "react";
// import Link
import { Link } from "react-router-dom";

// import logo
import { Logo } from "../assets/img";
const Header = () => {
  return (
    <header className="py-6 mb-12 border-b-[2px]">
      <div className="container flex items-center justify-between mx-auto">
        {/* logo */}
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        {/* Button */}
        <div className="flex items-center gap-5 ">
          <Link className="transition hover:text-violet-800" to="">
            Login
          </Link>
          <Link
            className="px-4 py-3 text-white transition rounded-lg bg-violet-800"
            to=""
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
