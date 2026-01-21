import React from "react";
import ThemeToggle from "../ThemeToggle";
const Navbar = () => {
  return (
    <nav className="sticky top-0 z-500 bg-bg-light dark:bg-bg-dark pb-20">
      <div className="w-[80%] mx-auto flex items-center justify-between pt-5">
        <h1 className="logo text-5xl cursor-pointer">tenzin.dev</h1>
        <ul className="flex gap-5 text-xl items-center">
          <li
            className=" cursor-pointer px-4 py-2 rounded-lg
    text-textPrimary-light dark:text-textPrimary-dark
    hover:bg-bg-dark hover:text-textPrimary-dark
    dark:hover:bg-bg-light dark:hover:text-textPrimary-light
    transition-colors"
          >
            Projects
          </li>
          <li
            className=" cursor-pointer px-4 py-2 rounded-lg
    text-textPrimary-light dark:text-textPrimary-dark
    hover:bg-bg-dark hover:text-textPrimary-dark
    dark:hover:bg-bg-light dark:hover:text-textPrimary-light
    transition-colors"
          >
            About me
          </li>
          <li
            className=" cursor-pointer px-4 py-2 rounded-lg
    text-textPrimary-light dark:text-textPrimary-dark
    hover:bg-bg-dark hover:text-textPrimary-dark
    dark:hover:bg-bg-light dark:hover:text-textPrimary-light
    transition-colors"
          >
            Contact
          </li>
          <ThemeToggle />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
