import SearchEngine from "@/components/ui/SearchEngine";
import Testgemini from "@/components/ui/Testgemini";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import { TextSearch } from "lucide-react";

const MyPortfolio = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Testgemini />
      <Footer />
    </div>
  );
};

export default MyPortfolio;
