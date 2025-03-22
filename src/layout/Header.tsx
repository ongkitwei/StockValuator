import { GiChargingBull } from "react-icons/gi";
import { ModeToggle } from "../components/ModeToggle";
import { FaUserCircle } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isExpanded, setExpanded] = useState<boolean>(false);

  function toggleButton() {
    isExpanded ? setExpanded(false) : setExpanded(true);
  }
  return (
    <header className="sticky top-5 z-50 mx-auto">
      <div className="flex flex-row items-center justify-between dark:bg-black bg-white p-1 px-3 rounded-full gap:8 md:gap-12 ">
        <Link
          className="flex items-center justify-center p-3 rounded-full hover:shadow-lg hover:shadow-gray-600 hover:cursor-pointer transition-shadow"
          to="/homepage"
        >
          <GiChargingBull size={45} className="pr-2" />
          <h1 className="text-2xl font-bold">
            Portfolio<span className="text-yellow-400">Pilot</span>
          </h1>
        </Link>
        <div className="hidden sm:flex flex-row gap-2 text-base md:text-lg">
          <Link className="p-3 rounded-full link link-hover" to="/myportfolio">
            Portfolio
          </Link>
          <Link className="p-3 rounded-full link link-hover" to="/mywatchlist">
            Watchlist
          </Link>
          <Link className="p-3 rounded-full link link-hover" to="/calculator">
            Calculator
          </Link>
        </div>
        <div className="hidden sm:flex flex-row">
          <div className="p-2 rounded-full">
            <ModeToggle />
          </div>
          <div className="flex items-center justify-center hover:cursor-pointer hover:shadow-lg hover:shadow-gray-600 p-2 rounded-full">
            <FaUserCircle className="text-4xl" />
          </div>
        </div>
        <div className="flex sm:hidden p-5" onClick={toggleButton}>
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
            ? "left-0 top-0 py-5 px-10 bg-white text-foreground w-screen h-screen dark:bg-black dark:text-white ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <ul>
          <li className="pb-5 border-b border-gray-200 border-r border-r-gray-900 pt-5 hover:cursor-pointer uppercase">
            <Link to="/myportfolio">My Portfolios</Link>
          </li>
          <li className="pb-5 border-b border-gray-200 border-r border-r-gray-900 pt-5 hover:cursor-pointer uppercase">
            <Link to="/mywatchlist">My Watchlist</Link>
          </li>
          <li className="pb-5 border-b border-gray-200 border-r border-r-gray-900 pt-5 hover:cursor-pointer uppercase">
            <Link to="/stockanalysis">Stock Analysis</Link>
          </li>
          <li className="pb-5 border-b border-gray-200 border-r border-r-gray-900 pt-5 hover:cursor-pointer uppercase">
            <Link to="/calculator">Calculator</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
