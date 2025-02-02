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
    const prompt = `can you give me a moat analysis( with a score of 10) on ${stockName} the moat analysis includes "brand loyalty & pricing power", "high barriers to entry", "high switching costs", "network effect", "economies of scale". with each giving a score of 10 and a short description. the moat analysis score will be the total average score, which will be shown at the top. we try not to give a perfect score for overall Moat score, and help me leave a empty line in between different pointers using <br> tags to make it look tidy, the font size of the overall moat anlaysis should be bigger than the rest, and the response should start with overall moat analysis score..., centering the overall moat anlysis score.Do not include any markdown formatting, code blocks, or backticks.  The output should be pure HTML that can be directly inserted into a web page. can we also have a font-irish for those headers. Example of how it should be: <center><font size="16">Overall Moat Analysis Score: 9.4/10</font></center><font className="font-irish text-3xl"><b>Brand Loyalty & Pricing Power: 10/10</b></font>

<br>
<p>
description</p>
<br>
<br>`;
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
