const {
  GoogleGenerativeAI,
} = require("@google/generative-ai");

const genAI =
  new GoogleGenerativeAI(
    process.env.GEMINI_API_KEY
  );

async function generateCompanyReport(
  companyName,
  researchData
) {
    console.log("Calling Gemini...");
console.log(
  "API KEY EXISTS:",
  process.env.GEMINI_API_KEY ? "YES" : "NO"
);
  const model =
    genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

  const prompt = `
You are an expert business analyst.

Using the research data below,
create a company research report.

Company:
${companyName}

Research Data:
${JSON.stringify(researchData)}

Include:

1. Company Overview
2. Products and Services
3. Revenue Information
4. Employee Information
5. Competitors
6. Recent News
7. Business Opportunities

Format nicely.
`;

  const result =
    await model.generateContent(prompt);

  return result.response.text();
}

module.exports = {
  generateCompanyReport,
};