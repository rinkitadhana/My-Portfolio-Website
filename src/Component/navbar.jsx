import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleMultiClick = () => {
    handleMenuOpen();
    scrollToTop();
  };

  return (
    <div className="sticky top-0 md:static">
      <nav className="flex justify-between items-center dark:text-white text-gray-700 py-4 px-8 md:px-40  md:mx-10  bg-white dark:bg-black z-50">
        <a
          className=" font-bold text-lg inline-flex animate-background-shine bg-[linear-gradient(110deg,#939393,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text text-transparent  "
          href="/"
        >
          @therinkit
        </a>
        <ul className="hidden xl:flex items-center gap-6 dark:text-gray-400 text-gray-500 font-semibold  text-base">
          <li className="dark:hover:text-white hover:text-black cursor-pointer ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "dark:text-white text-gray-600 font-bold" : ""
              }
            >
              home
            </NavLink>
          </li>
          <li className="dark:hover:text-white hover:text-black cursor-pointer">
            {" "}
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "dark:text-white text-gray-600 font-bold" : ""
              }
            >
              about
            </NavLink>
          </li>
          <li className="dark:hover:text-white hover:text-black cursor-pointer">
            {" "}
            <NavLink
              to="/project"
              className={({ isActive }) =>
                isActive ? "dark:text-white text-gray-600 font-bold" : ""
              }
            >
              projects
            </NavLink>
          </li>
          <li className="dark:hover:text-white hover:text-black cursor-pointer">
            {" "}
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? "dark:text-white text-gray-600 font-bold" : ""
              }
            >
              blogs
            </NavLink>
          </li>
        </ul>

        <IoMenu
          className="xl:hidden block text-4xl cursor-pointer"
          onClick={handleMenuOpen}
        />
        <div
          className={` absolute xl:hidden top-16 left-0 w-full bg-white dark:bg-black dark:text-white flex flex-col items-center border-y dark:border-y-gray-500 drop-shadow-lg font-semibold text-base transform transition-transform ${
            isMenuOpen ? "block" : "hidden"
          }`}
          style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
        >
          <Link
            onClick={handleMultiClick}
            to="/"
            className="list-none w-full text-center p-4 hover:bg-theme-blue hover:text-white transition-all cursor-pointer"
          >
            <li>Home</li>
          </Link>
          <Link
            onClick={handleMultiClick}
            to="/about"
            className="list-none w-full text-center p-4 hover:bg-theme-blue hover:text-white transition-all cursor-pointer"
          >
            <li>About</li>
          </Link>
          <Link
            onClick={handleMultiClick}
            to="/project"
            className="list-none w-full text-center p-4 hover:bg-theme-blue hover:text-white transition-all cursor-pointer"
          >
            <li>Projects</li>
          </Link>
          <Link
            onClick={handleMultiClick}
            to="/blog"
            className="list-none w-full text-center p-4 hover:bg-theme-blue hover:text-white transition-all cursor-pointer"
          >
            <li>Blogs</li>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
