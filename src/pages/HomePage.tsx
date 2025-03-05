import Header from "../layout/Header";
import Header3 from "../layout/Header3";
import Footer from "../layout/Footer";
import HomePageBody from "../components/HomePageBody";
import { Outlet } from "react-router-dom";

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <HomePageBody />
      <Footer />
      <Outlet />
    </div>
  );
}

export default HomePage;
