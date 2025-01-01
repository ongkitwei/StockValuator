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
      className="bg-white dark:bg-black
     text-foreground h-[300px] px-20 flex items-start pt-10 justify-between"
    >
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold flex items-center pb-12">
          <GiChargingBull className="text-7xl pr-2" />
          Market<span className="text-yellow-400">Clubhouse</span>
        </h1>
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
        <Link to="HomePage">Home</Link>
        <Link to="#">My Portfolios</Link>
        <Link to="#">My Watchlist</Link>
        <Link to="#">Stock Alerts</Link>
        <Link to="#">Glossary</Link>
      </div>

      <div className="font-serif flex flex-col gap-y-3">
        <span className="text-gray-400 font-bold">Tools</span>
        <Link to="#">My Portfolios</Link>
        <Link to="#">My Watchlist</Link>
        <Link to="HomePage">Stock Alerts</Link>
      </div>
      <div className="font-serif flex flex-col gap-y-3">
        <span className="text-gray-400 font-bold">Legal & Privacy</span>
        <Link to="#">Terms of Service</Link>
        <Link to="#">Privacy Policy</Link>
        <Link to="HomePage">Disclaimer</Link>
      </div>
    </div>
  );
}

export default Footer;
