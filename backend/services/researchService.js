const axios = require("axios");

async function researchCompany(companyName) {
  try {
    const response = await axios.post(
      "https://api.tavily.com/search",
      {
        api_key: process.env.TAVILY_API_KEY,
        query: `${companyName} company overview revenue employees products competitors recent news`,
        search_depth: "advanced",
        include_answer: true,
        max_results: 5,
      }
    );

    return response.data;
  } catch (error) {
    console.error("Tavily Error:", error.message);
    throw error;
  }
}

module.exports = {
  researchCompany,
};