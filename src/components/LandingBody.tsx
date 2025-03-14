import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import mungerQuoteImg from "../../assets/mungerquote.png";
import buffetQuoteImg from "../../assets/buffetquote.jpg";
import peterQuoteImg1 from "../../assets/peterquote1.png";
import peterQuoteImg2 from "../../assets/peterquote2.png";
import robertQuoteImg from "../../assets/robertquote.png";
import grahamQuoteImg from "../../assets/grahamquote.png";
import buffetQuoteImg2 from "../../assets/buffetquote2.jpg";
import buffetQuoteImg3 from "../../assets/buffetquote3.jpg";
import daltoQuoteImg from "../../assets/daltoquote.png";
import landingpageTimeline from "../../assets/landingpagetimeline.png";

const LandingBody = () => {
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
    <div className="flex flex-col mx-auto pt-56 items-center max-w-full">
      <h1 className=" text-5xl sm:text-6xl font-bold flex flex-col items-center">
        <a>Value a stock</a>
        <a> in seconds, not hours</a>
      </h1>
      <p className="pt-16 pb-12 text-base sm:text-lg max-w-[600px] text-center opacity-70">
        Everything you need to make decisions on investing a stock - even as a
        complete beginner.
      </p>
      <button className="btn btn-active btn-warning rounded-full py-8 px-12 sm:px-16 sm:py-8 text-lg text-black">
        Get Instant Access
      </button>
      <div className="pt-28 w-[900px] md:w-[1000px]">
        <img src={landingpageTimeline} />
      </div>
      <div
        className="dark:bg-[oklch(0.21_0.006_285.885)] mt-20 w-full py-24 flex flex-col items-center"
        id="landingpagefaq"
      >
        <h2 className="text-6xl text-white font-bold max-w-[750px] mx-auto text-center space-y-2 pb-20">
          <span className="block">Valuating stocks is</span>
          <span className="block">
            made simple for <span className="text-success">everyone</span>,
          </span>
          <span className="block">
            not just <span className="text-error">financial experts</span>
          </span>
        </h2>

        <div className="flex flex-row gap-5">
          <div className="rounded-xl border-2 border-error p-12 w-[500px] h-[500px] flex flex-col items-center">
            <h1 className="text-2xl font-semibold text-error flex items-center justify-between gap-5 pb-8">
              Valuating as a retail investor{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </h1>
            <ul className="list-disc space-y-2 text-gray-400 text-lg pl-5">
              <li>Manually calculate the intrinsic value</li>
              <li>Spend hours researching on a stock</li>
              <li>Lake of confidence in making investment decisions</li>
              <li>Feeling overwhelmed by too much data to process manually</li>
              <li>Difficulty understanding complex financial statements</li>
            </ul>
          </div>
          <div className="rounded-xl border-2 border-success p-12 w-[500px] h-[500px] flex flex-col items-center ">
            <h1 className="text-2xl font-semibold text-success flex items-center justify-between gap-5 pb-8">
              Valuating using PortfolioPilot{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </h1>
            <ul className="list-disc space-y-2 text-gray-400 text-lg">
              <li>Get the Intrinsic Value in seconds</li>
              <li>Use AI to analysis stocks</li>
              <li>Know the competitors and moat in seconds</li>
              <li>Toggle around different growth on the fly</li>
              <li>Make informed decisions at a glance</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 rounded-3xl shadow-2xl shadow-white">
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
      </div>
    </div>
  );
};

export default LandingBody;
