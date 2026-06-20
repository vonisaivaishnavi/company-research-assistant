const {
  GoogleGenerativeAI,
} = require("@google/generative-ai");

const genAI =
  new GoogleGenerativeAI(
    process.env.GEMINI_API_KEY
  );

async function generateAccountPlan(
  companyName,
  researchData
) {
  const model =
    genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

  const prompt = `
You are an enterprise account strategist.

Create a professional account plan.

Company:
${companyName}

Research Data:
${JSON.stringify(researchData)}

Generate:

# ACCOUNT PLAN

## Company Overview

## Key Products and Services

## Business Challenges

## Opportunities

## Competitors

## Recommended Strategy

## Potential Stakeholders

## Next Actions

Make the content actionable and concise.
`;

  const result =
    await model.generateContent(prompt);

  return result.response.text();
}

module.exports = {
  generateAccountPlan,
};