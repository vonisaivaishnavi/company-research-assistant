const express = require("express");
const router = express.Router();

const {
  runResearch,
} = require("../services/companyResearchAgent");

const {
  generateAccountPlan,
} = require("../services/accountPlanService");

const {
  savePlan,
  getPlan,
  getCompany,
  getResearch,
} = require("../services/memory");

const {
  updatePlan,
} = require("../services/updateSectionService");

const {
  answerQuestion,
} = require("../services/questionAnswerService");

router.post("/", async (req, res) => {
  try {
    const { message } = req.body;

    console.log(
      "MESSAGE RECEIVED:",
      message
    );

    const lowerMessage =
      message.toLowerCase();

    // =====================
    // QUESTION DETECTION
    // =====================

    const questionWords = [
      "why",
      "what",
      "who",
      "when",
      "where",
      "should",
      "can",
      "does",
      "is",
      "are",
      "competitor",
      "revenue",
      "employee",
      "news",
      "invest",
      "products",
      "services",
      "strengths",
      "weaknesses",
      "opportunities",
      "threats"
    ];

    const isQuestion =
      questionWords.some((word) =>
        lowerMessage.includes(word)
      );

    // =====================
    // UPDATE ACCOUNT PLAN
    // =====================

    if (
      lowerMessage.startsWith(
        "update"
      )
    ) {
      const existingPlan =
        getPlan();

      if (!existingPlan) {
        return res.json({
          success: true,
          reply:
            "Please research a company first.",
        });
      }

      const updatedPlan =
        await updatePlan(
          existingPlan,
          message
        );

      savePlan(updatedPlan);

      return res.json({
        success: true,
        reply: updatedPlan,
      });
    }

    // =====================
    // QUESTION MODE
    // =====================

    if (isQuestion) {
      const company =
        getCompany();

      const researchData =
        getResearch();

      if (
        !company ||
        !researchData
      ) {
        return res.json({
          success: true,
          reply:
            "Please research a company first. Example: Microsoft, Google, Tesla, NVIDIA",
        });
      }

      const answer =
        await answerQuestion(
          company,
          researchData,
          message
        );

      return res.json({
        success: true,
        reply: answer,
      });
    }

    // =====================
    // COMPANY RESEARCH MODE
    // =====================

    const researchResult =
      await runResearch(message);

    const report =
      await generateAccountPlan(
        message,
        researchResult.researchData
      );

    savePlan(report);

    return res.json({
      success: true,
      steps: [
        "Gathering company overview...",
        "Searching recent news...",
        "Identifying competitors...",
        "Generating account plan...",
      ],
      reply: report,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

module.exports = router;