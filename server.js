import { GoogleGenerativeAI } from "@google/generative-ai";
import { createClient } from "@supabase/supabase-js";
import yahooFinance from "yahoo-finance2";
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
// Middleware to parse jsoon
app.use(express.json());

// Remove the warning showing
yahooFinance.suppressNotices(["ripHistorical"]);

// Create a single supabase client for interacting with your database
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_API
);

// Format date for input for yahoo finance
const formateDate = () => {
  const date = new Date();
  const dateString = date.toISOString();
  const changeDateFormat = dateString.split("T")[0].toString();

  const tenYearsAgoYear = (parseInt(date.getFullYear()) - 1).toString();
  const monthString = (date.getMonth() + 1).toString().padStart(2, "0");
  const dayString = date.getDate().toString().padStart(2, "0");
  const dateTenYearsAgo = tenYearsAgoYear + "-" + monthString + "-" + dayString;
  return { changeDateFormat, dateTenYearsAgo };
};

// Get last close price
const getLastClosePrice = async (ticker) => {
  try {
    const result = await yahooFinance.quoteSummary(ticker, {
      modules: ["summaryDetail"] // Fetch summary details
    });

    // Extract the last close price
    const lastClose = result.summaryDetail.previousClose;

    console.log(`Last close price for ${ticker}: $${lastClose}`);
    return lastClose;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// Fetch data from Supabase table
const fetchData = async () => {
  const { data, error } = await supabase.from("Watchlist").select();
  return data;
};

// Insert Data to Supabase table
const insertData = async (stockName, tickerSymbol, intrinsicValue) => {
  try {
    const { data, error } = await supabase.from("Watchlist").insert({
      Stock_Name: stockName,
      Ticker_Symbol: tickerSymbol,
      IV: intrinsicValue
    });
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

app.post("/api/supabase", async (req, res) => {
  try {
    const { Stock_Name, Ticker_Symbol, IV } = req.body;
    console.log("Adding to watchlist:", { Stock_Name, Ticker_Symbol, IV });
    const { data, error } = await supabase
      .from("Watchlist")
      .insert([{ Stock_Name, Ticker_Symbol, IV }])
      .select();
    if (error) {
      console.error("Supabase Error:", error);
      return res.status(400).json({ error: error.message });
    }
    res.status(200).json({ message: "Added successfully", data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});
app.delete("/api/supabase", async (req, res) => {
  try {
    const { Ticker_Symbol } = req.body;
    const { error } = await supabase
      .from("Watchlist")
      .delete()
      .eq("Ticker_Symbol", Ticker_Symbol);
    if (error) {
      console.error("Supabase Error:", error);
      return res.status(400).json({ error: error.message });
    }
    res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/supabase", async (req, res) => {
  try {
    const data = await fetchData();
    console.log(data);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Get request for last close
app.get("/api/lastclose/:symbol", async (req, res) => {
  try {
    const { symbol } = req.params;
    const data = await getLastClosePrice(symbol);
    console.log(data);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Get request from yahoo finance
app.get("/api/genrate/:symbol", async (req, res) => {
  try {
    const { symbol } = req.params;
    const { changeDateFormat, dateTenYearsAgo } = formateDate();

    const result = await yahooFinance.historical(symbol, {
      period1: dateTenYearsAgo,
      period2: changeDateFormat,
      interval: "1mo"
    });
    console.log(result);
    res.json(result);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
});

// Get request from Gemini 2.0
app.get("/api/generate/:stockName", async (req, res) => {
  //Define the API endpoint
  try {
    const stockName = req.params.stockName;
    const genAi = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAi.getGenerativeModel({ model: "gemini-2.0-flash-exp" }); // Correct usage
    const prompt =
      "can you give me a moat analysis( with a score of 10) on" +
      stockName +
      'The moat analysis includes "brand loyalty & pricing power", "high barriers to entry", "high switching costs", "network effect", "economies of scale". with each giving a score of 10 and a short description. the moat analysis score will be the total average score, which will be shown at the top. We try not to give a perfect score for overall Moat score. Please strictly follow the format i show and avoid adding ```html at the start and end of the response, the format will be as such:' +
      ` 
<div class="text-black">

<h1 class="text-4xl text-center font-semibold font-irish">

  ${stockName} Overall Moat Analysis Score: x/10



</h1>



<br></br>



<h2 class="text-xl font-semibold font-lato">



Brand Loyalty & Pricing Power: x/10



</h2>



<p>description ...</p>



<br></br>



<h2 class="text-xl font-semibold font-lato">



High Barriers to Entry: x/10



</h2>



<p>description ...</p>



<br></br>



<h2 class="text-xl font-semibold font-lato">



High Switching Costs: x/10



</h2>



<p>description ...</p>



<br></br>



<h2 class="text-xl font-semibold font-lato">Network Effect: x/10</h2>



<p>description ...</p>



<br></br>



<h2 class="text-xl font-semibold font-lato">



Economies of Scale: x/10



</h2>



<p>description ...</p>



<br></br>



</div>
`;

    const result = await model.generateContent(prompt);

    const responseText = await result.response.text();
    console.log(responseText);
    // const jsonData = await result.response.json();
    res.send(responseText);
  } catch (err) {
    console.error("Gemini API Error:", err); // Log the error for debugging
    res.status(500).send(`Error: ${err.message}`);
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
