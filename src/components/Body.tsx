function Body() {
  return (
    <>
      <div className="bg-white text-foreground dark:text-white dark:bg-black items-center justify-center text-xl p-5 h-screen lg:flex grid-cols-2 gap-20">
        <img
          src="../../assets/stock.jpg"
          className="h-[350px] rounded-xl"
        ></img>
        <div className="pt-[50px] lg:p-0 italic">
          <p className="w-[450px] text-sm">
            <div className="font-bold text-3xl pb-2">
              Value a Stock in just 5 minutes{" "}
            </div>
            Unlock the power of accurate investment decisions with our platform.
            Calculate a stock's intrinsic value effortlessly, add it to your
            personalized watchlist, and perform comprehensive fundamental
            analysis with ease. Plus, evaluate a company’s competitive edge
            using our unique moat rating system—all in one place.
          </p>
        </div>
      </div>
    </>
  );
}

export default Body;
