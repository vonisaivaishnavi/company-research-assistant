const {
  researchCompany,
} = require("./researchService");

const {
  saveCompany,
  saveResearch,
} = require("./memory");


async function runResearch(companyName) {
  
  console.log(
    "Research Agent: Starting..."
  );

  const researchData =
    await researchCompany(companyName);

  saveCompany(companyName);
  saveResearch(researchData);

  return {
    companyName,
    researchData,
  };
}

module.exports = {
  runResearch,
};