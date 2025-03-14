import LandingBody from "@/components/LandingBody";
import HeaderLanding from "@/layout/HeaderLanding";

const LandingPage = () => {
  return (
    <div className="flex flex-col bg-black min-h-screen pt-5 scroll-smooth">
      <HeaderLanding />
      <LandingBody />
    </div>
  );
};

export default LandingPage;
