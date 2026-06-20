require("dotenv").config();

const {
  researchCompany,
} = require("./services/researchService");

async function run() {
  const result = await researchCompany("Microsoft");

  console.log(
    JSON.stringify(result, null, 2)
  );
}

run();