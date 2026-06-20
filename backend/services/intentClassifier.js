function detectIntent(message) {

  const text =
    message.toLowerCase();

  if (
    text.includes("account plan")
  ) {
    return "accountPlan";
  }

  if (
    text.includes("research") ||
    text.includes("overview")
  ) {
    return "research";
  }

  return "question";
}

module.exports =
  detectIntent;