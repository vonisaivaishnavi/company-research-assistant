const {
  GoogleGenerativeAI,
} = require("@google/generative-ai");

const genAI =
  new GoogleGenerativeAI(
    process.env.GEMINI_API_KEY
  );

async function answerQuestion(
  company,
  researchData,
  question
) {
  const model =
    genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

  const prompt = `
You are a company research assistant.

Company:
${company}

Research Data:
${JSON.stringify(researchData)}

Question:
${question}

Answer ONLY the question.

Do not generate:
- Account Plan
- Full Report

Provide a concise business answer.
`;

  const result =
    await model.generateContent(prompt);

  return result.response.text();
}

module.exports = {
  answerQuestion,
};