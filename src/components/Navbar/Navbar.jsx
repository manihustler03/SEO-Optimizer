import React from "react";
import "./Navbar.css";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      <nav>
        <h1>SEO Optimizzer</h1>
        <div>
            <h2>Already have an account?</h2>
            <button>
                <span>Sign in</span>
                <MdOutlineArrowRightAlt/>
            </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
