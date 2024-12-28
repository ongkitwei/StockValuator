import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Body from "../components/Body";

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default HomePage;
