import { GiChargingBull } from "react-icons/gi";
import { ModeToggle } from "../components/ModeToggle";
import { FaUserCircle } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { IoMenu } from "react-icons/io5";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HeaderLanding = () => {
  // State to track if the page is scrolled
  const [isScrolled, setIsScrolled] = useState(false);
  const [isExpanded, setExpanded] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function toggleButton() {
    isExpanded ? setExpanded(false) : setExpanded(true);
  }
  return (
    <header
      className={
        isScrolled
          ? "sticky top-0 z-50 backdrop-blur-lg opacity-100 border-b border-white"
          : "sticky top-0 z-50"
      }
    >
      <div className="py-5 px-12 flex flex-row items-center justify-between text-sm md:text-base">
        <a className="flex items-center">
          <GiChargingBull size={40} className="pr-2" />
          <h1 className="text-xl font-bold">
            Portfolio<span className="text-warning">Pilot</span>
          </h1>
        </a>
        <div className="space-x-5 hidden md:block">
          <a className="p-3 rounded-full link link-hover">Pricing</a>
          <a
            className="p-3 rounded-full link link-hover"
            href="#landingpagefaq"
          >
            About
          </a>
        </div>
        <div className="dark:bg-white text-black py-2 px-3 font-bold rounded-3xl text-center hidden md:block">
          <a>Get PortfolioPilot</a>
        </div>{" "}
        <div className="flex md:hidden" onClick={toggleButton}>
          {isExpanded ? (
            <RxCross1 size={20} className="hover:cursor-pointer" />
          ) : (
            <IoMenu size={20} className="hover:cursor-pointer" />
          )}
        </div>
      </div>

      <div
        className={
          isExpanded
            ? "left-0 top-0 py-10 px-10 bg-white text-foreground w-screen h-screen dark:bg-black dark:text-white ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <ul className="pr-20 pl-16">
          <li className="pb-5 border-b border-gray-200 pt-5 hover:cursor-pointer">
            Pricing
          </li>
          <li className="pb-5 border-b border-gray-200 pt-5 hover:cursor-pointer uppercase">
            faq
          </li>
          <li className="pb-5 border-b border-gray-200 pt-5 hover:cursor-pointer uppercase">
            get portfoliopilot
          </li>
        </ul>
      </div>
    </header>
  );
};

export default HeaderLanding;
