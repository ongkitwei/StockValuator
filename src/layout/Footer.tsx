import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { GiChargingBull } from "react-icons/gi";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div
      className="bg-white dark:bg-[#181818]
     text-foreground px-20 flex py-10 justify-between"
    >
      <div className="flex flex-col items-center">
        <Link to="/homepage">
          <h1 className="text-3xl font-bold flex items-center pb-12">
            <GiChargingBull className="text-7xl pr-2" />
            Portfolio<span className="text-yellow-400">Pilot</span>
          </h1>
        </Link>

        <div className="text-2xl grid grid-cols-3 gap-x-28 gap-y-8">
          <FaInstagram />
          <FaYoutube />
          <FaXTwitter />
          <FaDiscord />
          <FaTelegramPlane />
          <FaTiktok />
        </div>
      </div>
      <div className="font-serif flex flex-col gap-y-3">
        <span className="text-gray-400 font-bold">Sitemap</span>
        <Link to="/homepage" className="hover:underline">
          Home
        </Link>
        <Link to="/myportfolio" className="hover:underline">
          My Portfolios
        </Link>
        <Link to="/mywatchlist" className="hover:underline">
          My Watchlist
        </Link>
        <Link to="/stockanalysis" className="hover:underline">
          Stock Analysis
        </Link>
        <Link to="#" className="hover:underline">
          Glossary
        </Link>
      </div>

      <div className="font-serif flex flex-col gap-y-3">
        <span className="text-gray-400 font-bold">Tools</span>
        <Link to="/myportfolio" className="hover:underline">
          My Portfolios
        </Link>
        <Link to="/mywatchlist" className="hover:underline">
          My Watchlist
        </Link>
        <Link to="/stockanalysis" className="hover:underline">
          Stock Analysis
        </Link>
        <Link to="/calculator" className="hover:underline">
          IV Calculator
        </Link>
      </div>
      <div className="font-serif flex flex-col gap-y-3">
        <span className="text-gray-400 font-bold">Legal & Privacy</span>
        <Link to="#" className="hover:underline">
          Terms of Service
        </Link>
        <Link to="#" className="hover:underline">
          Privacy Policy
        </Link>
        <Link to="/homepage" className="hover:underline">
          Disclaimer
        </Link>
      </div>
    </div>
  );
}

export default Footer;
