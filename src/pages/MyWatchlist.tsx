import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import MyWatchlistBody from "@/components/MyWatchlistBody";

const MyWatchlist = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {" "}
      <Header />
      <MyWatchlistBody />
      <Footer />
    </div>
  );
};

export default MyWatchlist;
