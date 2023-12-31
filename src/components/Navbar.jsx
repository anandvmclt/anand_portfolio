import { useState } from "react";
import { logo, close, menu } from "../assets";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      {/* <img src={logo} alt="logo" className="w-[124px] h-[32px]" /> */}
      <h1 className="text-white font-Montserrat text-[25px] font-semibold">
        ANAND{" "}
      </h1>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.lenght - 1 ? "mr-0" : "mr-10"
            } text-white mr-10`}
          >
            {nav.id == "/careergoals" ? (
              <Link to={nav.id}>{nav.title}</Link>
            ) : (
              <a href={nav.id}>{nav.title}</a>
            )}
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-[#fefefe] absolute top-20  right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.lenght - 1 ? "mr-0" : "mb-4"
                } text-black font-semibold mr-10`}
              >
                {nav.id == "/careergoals" ? (
                  <Link to={nav.id}>{nav.title}</Link>
                ) : (
                  <a href={nav.id}>{nav.title}</a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
