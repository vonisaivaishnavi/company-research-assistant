let currentPlan = "";
let currentCompany = "";
let currentResearch = null;

function savePlan(plan) {
  currentPlan = plan;
}

function getPlan() {
  return currentPlan;
}

function saveCompany(company) {
  currentCompany = company;
}

function getCompany() {
  return currentCompany;
}

function saveResearch(data) {
  currentResearch = data;
}

function getResearch() {
  return currentResearch;
}

module.exports = {
  savePlan,
  getPlan,
  saveCompany,
  getCompany,
  saveResearch,
  getResearch,
};