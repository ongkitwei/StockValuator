import { GiChargingBull } from "react-icons/gi";
import { IoIosNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { ModeToggle } from "../components/ModeToggle";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isExpanded, setExpanded] = useState<boolean>(false);

  function toggleButton() {
    isExpanded ? setExpanded(false) : setExpanded(true);
  }

  return (
    <header className="sticky top-0">
      <div className="flex flex-row justify-between items-center text-foreground bg-white dark:bg-[#181818] h-28 font-lato px-20">
        <Link to="/homepage">
          <div className="flex items-center">
            <GiChargingBull size={45} className="pr-2" />
            <h1 className="text-2xl font-bold">
              Portfolio<span className="text-yellow-400">Pilot</span>
            </h1>
          </div>
        </Link>
        <Link
          className="font-irish text-xs hidden lg:flex lg:text-xl hover:cursor-pointer hover:text-slate-500 hover:underline"
          to="/myportfolio"
        >
          My Portfolios
        </Link>
        <Link
          className="font-irish text-xs hidden lg:flex lg:text-xl hover:cursor-pointer hover:text-slate-500 hover:underline"
          to="/mywatchlist"
        >
          My Watchlist
        </Link>
        <Link
          className="font-irish text-xs hidden lg:flex lg:text-xl hover:cursor-pointer hover:text-slate-500 hover:underline"
          to="/stockalerts"
        >
          Stock Analysis
        </Link>
        <Link
          className="font-irish text-xs hidden lg:flex lg:text-xl hover:cursor-pointer hover:text-slate-500 hover:underline"
          to="/calculator"
        >
          Calculator
        </Link>

        <div className="items-center hidden lg:flex gap-5">
          <div className="flex items-center bg-transparent p-1.5 py-2 rounded-3xl border-foreground border-2 bg-gray-200">
            <IoIosSearch className="text-2xl ml-3" />
            <input className="bg-transparent outline-none p-1 shadow-3xl"></input>
          </div>
          <div>
            <ModeToggle />
          </div>
          <div className="bg-transparent rounded-full w-11 h-11 flex items-center justify-center hover:cursor-pointer">
            <IoIosNotifications className="text-3xl text-white" />
          </div>
          <div className="flex items-center justify-center hover:cursor-pointer">
            <FaUserCircle className="text-4xl" />
          </div>
        </div>
        <div className="flex lg:hidden p-5" onClick={toggleButton}>
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
            ? "left-0 top-0 py-5 px-10 bg-white text-foreground w-60 h-screen dark:bg-black dark:text-white ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <ul>
          <li className="pb-5 border-b border-gray-200 border-r border-r-gray-900 hover:cursor-pointer uppercase">
            <Link to="/myportfolio">My Portfolios</Link>
          </li>
          <li className="pb-5 border-b border-gray-200 border-r border-r-gray-900 pt-5 hover:cursor-pointer uppercase">
            <Link to="/mywatchlist">My Watchlist</Link>
          </li>
          <li className="pb-5 border-b border-gray-200 border-r border-r-gray-900 pt-5 hover:cursor-pointer uppercase">
            <Link to="/stockalerts">Stock Alerts</Link>
          </li>
          <li className="pb-5 border-b border-gray-200 border-r border-r-gray-900 pt-5 hover:cursor-pointer uppercase">
            <Link to="/calculator">Calculator</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
