import { GiChargingBull } from "react-icons/gi";
import { IoIosNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

function Header() {
  return (
    <div>
      <header className="flex flex-row justify-between items-center text-black bg-white h-28 px-24 font-lato">
        <div className="flex items-center">
          <GiChargingBull className="text-5xl pr-2" />
          <h1 className="text-2xl font-bold">
            Market<span className="text-yellow-400">Clubhouse</span>
          </h1>
        </div>
        <div className="flex text-xl gap-40">
          <h3>My Portfolios</h3>
          <h3>My Watchlist</h3>
          <h3>Stock Alerts</h3>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center bg-transparent p-1.5 py-2 rounded-3xl border-black border-2 bg-gray-200">
            <IoIosSearch className="text-2xl ml-3" />
            <input className="bg-transparent outline-none p-1 shadow-3xl"></input>
          </div>
          <div className="bg-transparent rounded-full w-11 h-11 flex items-center justify-center hover:bg-gray-200 hover:text-black">
            <IoIosNotifications className="text-3xl" />
          </div>
          <div className="flex items-center justify-center">
            <FaUserCircle className="text-4xl" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
