import chartImg from "../../assets/stock.jpg";
import excelImg from "../../assets/excel_tracker.png";
import Typewriter from "typewriter-effect";
import mungerQuoteImg from "../../assets/mungerquote.png";
import buffetQuoteImg from "../../assets/buffetquote.jpg";
import peterQuoteImg1 from "../../assets/peterquote1.png";
import peterQuoteImg2 from "../../assets/peterquote2.png";
import robertQuoteImg from "../../assets/robertquote.png";
import grahamQuoteImg from "../../assets/grahamquote.png";
import buffetQuoteImg2 from "../../assets/buffetquote2.jpg";
import buffetQuoteImg3 from "../../assets/buffetquote3.jpg";
import daltoQuoteImg from "../../assets/daltoquote.png";
import { useEffect, useContext } from "react";
import { AuthenticateContext } from "@/contexts/AuthContext";
import Marquee from "react-fast-marquee";

function HomePageBody() {
  const { setWatchlistObject, setLastClose } = useContext(AuthenticateContext);
  useEffect(() => {
    const fetchSupabaseTableData = async () => {
      const newLastCloseArray: number[] = [];
      const response = await fetch("http://localhost:4000/api/supabase");
      const result = await response.json();

      const filteredData = result.map((item: any) => ({
        nameOfStock: item.Stock_Name,
        tickerSymbol: item.Ticker_Symbol,
        intrinsicValue: item.IV
      }));
      console.log(filteredData);
      for (const x of filteredData) {
        try {
          const response = await fetch(
            `http://localhost:4000/api/lastclose/${x.tickerSymbol}`
          );
          console.log(`Fetching data for ${x.tickerSymbol}:`, response.status); // Log status

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.text();
          if (data) {
            newLastCloseArray.push(parseFloat(data));
            console.log(data);
          }
        } catch (error) {
          console.error(`Error fetching data for ${x.tickerSymbol}:`, error);
        }
      }

      setWatchlistObject(filteredData);
      setLastClose(newLastCloseArray);
    };
    fetchSupabaseTableData();
  }, []);
  const images = [
    buffetQuoteImg,
    peterQuoteImg2,
    mungerQuoteImg,
    peterQuoteImg1,
    buffetQuoteImg3,
    robertQuoteImg,
    buffetQuoteImg2,
    daltoQuoteImg,
    grahamQuoteImg
  ];

  return (
    <div className="flex-grow">
      {/* <div className="bg-white text-foreground dark:text-white dark:bg-black items-center justify-center text-xl p-5 lg:flex flex-grow grid-cols-2 gap-20">
        <img src={chartImg} className="h-[350px] rounded-xl"></img>
        <div className="pt-[50px] lg:p-0 italic">
          <p className="w-[450px] text-sm">
            <div className="font-bold text-3xl pb-2">
              <Typewriter
                options={{
                  strings: ["Value a Stock in just 5 minutes"],
                  autoStart: true,
                  loop: true,
                  delay: 150
                }}
              />
            </div>
            Unlock the power of accurate investment decisions with our platform.
            Calculate a stock's intrinsic value effortlessly, add it to your
            personalized watchlist, and perform comprehensive fundamental
            analysis with ease. Plus, evaluate a company’s competitive edge
            using our unique moat rating system— all in one place
          </p>
        </div>
      </div> */}
      {/* <div className="xl:w-[1500px] w-[1200px] mx-auto rounded-3xl shadow-2xl shadow-white">
        <Marquee speed={50} pauseOnHover={false} direction="right">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              className="w-[500px] h-[350px] object-cover mx-4 my-4 rounded-3xl"
              alt="Slideshow"
            />
          ))}
        </Marquee>
      </div> */}
      {/* <div className="bg-white text-foreground dark:text-white dark:bg-black items-center justify-center text-xl p-5 lg:flex flex-grow grid-cols-2 gap-20">
        <img src={chartImg} className="h-[350px] rounded-xl"></img>
        <div className="pt-[50px] lg:p-0 italic">
          <p className="w-[450px] text-sm">
            <div className="font-bold text-3xl pb-2">
              <Typewriter
                options={{
                  strings: ["Value a Stock in just 5 minutes"],
                  autoStart: true,
                  loop: true,
                  delay: 150
                }}
              />
            </div>
            Unlock the power of accurate investment decisions with our platform.
            Calculate a stock's intrinsic value effortlessly, add it to your
            personalized watchlist, and perform comprehensive fundamental
            analysis with ease. Plus, evaluate a company’s competitive edge
            using our unique moat rating system— all in one place
          </p>
        </div>
      </div> */}
      {/* <div className="bg-white text-foreground dark:text-white dark:bg-black items-center justify-center text-xl p-5 lg:flex flex-grow grid-cols-2 gap-20">
        <img src={chartImg} className="h-[350px] rounded-xl"></img>
        <div className="pt-[50px] lg:p-0 italic">
          <p className="w-[450px] text-sm">
            <div className="font-bold text-3xl pb-2">
              <Typewriter
                options={{
                  strings: ["Value a Stock in just 5 minutes"],
                  autoStart: true,
                  loop: true,
                  delay: 150
                }}
              />
            </div>
            Unlock the power of accurate investment decisions with our platform.
            Calculate a stock's intrinsic value effortlessly, add it to your
            personalized watchlist, and perform comprehensive fundamental
            analysis with ease. Plus, evaluate a company’s competitive edge
            using our unique moat rating system— all in one place
          </p>
        </div>
      </div> */}
      {/* <div className="bg-white text-foreground dark:text-white dark:bg-black items-center justify-center text-xl p-5 lg:flex flex-grow grid-cols-2 gap-20">
        <img src={chartImg} className="h-[350px] rounded-xl"></img>
        <div className="pt-[50px] lg:p-0 italic">
          <p className="w-[450px] text-sm">
            <div className="font-bold text-3xl pb-2">
              <Typewriter
                options={{
                  strings: ["Value a Stock in just 5 minutes"],
                  autoStart: true,
                  loop: true,
                  delay: 150
                }}
              />
            </div>
            Unlock the power of accurate investment decisions with our platform.
            Calculate a stock's intrinsic value effortlessly, add it to your
            personalized watchlist, and perform comprehensive fundamental
            analysis with ease. Plus, evaluate a company’s competitive edge
            using our unique moat rating system— all in one place
          </p>
        </div>
      </div> */}
      {/* <div
        className="bg-white text-foreground dark:text-white dark:bg-black items-center justify-center text-xl p-5 lg:flex flex-grow grid-cols-2 gap-20"
        id="bottom"
      >
        <img src={chartImg} className="h-[350px] rounded-xl"></img>
        <div className="pt-[50px] lg:p-0 italic">
          <p className="w-[450px] text-sm">
            <div className="font-bold text-3xl pb-2">
              <Typewriter
                options={{
                  strings: ["Value a Stock in just 5 minutes"],
                  autoStart: true,
                  loop: true,
                  delay: 150
                }}
              />
            </div>
            Unlock the power of accurate investment decisions with our platform.
            Calculate a stock's intrinsic value effortlessly, add it to your
            personalized watchlist, and perform comprehensive fundamental
            analysis with ease. Plus, evaluate a company’s competitive edge
            using our unique moat rating system— all in one place
          </p>
        </div>
      </div> */}
      {/* <div className="bg-white text-foreground dark:text-white dark:bg-black items-center justify-center text-xl p-5 h-screen lg:flex flex-grow grid-cols-2 gap-20">
        <img src={excelImg}></img>

        <img src={chartImg} className="h-[350px] rounded-xl"></img>
        <div className="pt-[50px] lg:p-0 italic">
          <p className="w-[450px] text-sm">
            <div className="font-bold text-3xl pb-2">
              <Typewriter
                options={{
                  strings: ["Value a Stock in just 5 minutes"],
                  autoStart: true,
                  loop: true,
                  delay: 150
                }}
              />
            </div>
            Unlock the power of accurate investment decisions with our platform.
            Calculate a stock's intrinsic value effortlessly, add it to your
            personalized watchlist, and perform comprehensive fundamental
            analysis with ease. Plus, evaluate a company’s competitive edge
            using our unique moat rating system— all in one place
          </p>
        </div> */}
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      {/* </div>
      <div>
        <img src={excelImg}></img>
      </div> */}
    </div>
  );
}

export default HomePageBody;
