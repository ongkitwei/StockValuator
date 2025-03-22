import LandingBody from "@/components/LandingBody";
import Footer from "@/layout/Footer";
import HeaderLanding from "@/layout/HeaderLanding";

const LandingPage = () => {
  return (
    <div className="flex flex-col bg-black min-h-screen pt-5 scroll-smooth">
      <HeaderLanding />
      <LandingBody />
      <Footer />
    </div>
  );
};

export default LandingPage;
