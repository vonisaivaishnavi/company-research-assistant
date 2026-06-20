const {
  GoogleGenerativeAI,
} = require("@google/generative-ai");

const genAI =
  new GoogleGenerativeAI(
    process.env.GEMINI_API_KEY
  );

async function updatePlan(
  currentPlan,
  instruction
) {
  const model =
    genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

  const prompt = `
You are editing an existing account plan.

IMPORTANT RULES:
1. Keep EXACTLY the same account plan format.
2. Keep all headings unchanged.
3. Keep all sections unchanged except the one the user wants to modify.
4. Return the COMPLETE account plan.
5. Preserve markdown formatting (#, ##, bullet points, spacing).

Current Account Plan:

${currentPlan}

User Request:

${instruction}

Return the FULL updated account plan with identical formatting.
`;

  const result =
    await model.generateContent(prompt);

  return result.response.text();
}

module.exports = {
  updatePlan,
};