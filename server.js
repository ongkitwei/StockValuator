import { GoogleGenerativeAI } from "@google/generative-ai";
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;
app.use(cors());

function formatText(textToFormat) {
  // Find the index where "Overall Moat Score" starts
  const startIndex = textToFormat.indexOf("Moat");

  // If found, slice the text from there onwards
  let filteredText =
    startIndex !== -1 ? textToFormat.slice(startIndex) : textToFormat;

  return filteredText;
}

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

Overall Moat Analysis Score: x/10



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
