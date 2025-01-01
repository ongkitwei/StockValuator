import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Body from "../components/Body";
import { Outlet } from "react-router-dom";

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header />
      <Body />
      <Footer />
      <Outlet />
    </div>
  );
}

export default HomePage;
