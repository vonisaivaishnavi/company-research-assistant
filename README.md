# Company Research Assistant

## Overview

Company Research Assistant is an Agentic AI application that helps users research companies, generate account plans, answer follow-up business questions, update account plans, and interact using voice commands.

The application combines web research, large language models, conversational memory, and voice capabilities to provide actionable business insights.

---

## Features

### Company Research

* Research companies using real-time web data.
* Gather company overview, products, competitors, revenue information, and recent developments.

### Account Plan Generation

Generate professional enterprise account plans including:

* Company Overview
* Key Products and Services
* Business Challenges
* Opportunities
* Competitors
* Recommended Strategy
* Potential Stakeholders
* Next Actions

### Follow-up Questions

The assistant remembers the previously researched company and can answer contextual questions such as:

* Who are its competitors?
* What products does it offer?
* Should I invest in it?
* What are its strengths and weaknesses?
* What recent news affects the company?

### Account Plan Updates

Users can modify account plans using natural language instructions.

Example:
Update the competitor section with Oracle and AWS.

### Voice Interaction

* Speech-to-text input using microphone
* Text-to-speech responses
* Voice ON/OFF toggle

---

## Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS

### Backend

* Node.js
* Express.js

### AI Services

* Google Gemini API

### Research Service

* Tavily Search API

---

## Architecture

User Input
↓
Intent Detection
↓
Research Agent
↓
Tavily Search
↓
Gemini Processing
↓
Memory Storage
↓
Response Generation

---

## Project Structure

company-research-assistant/

backend/

* routes/
* services/
* package.json

Frontend/

* src/
* components/
* package.json

README.md

---

## Setup Instructions

### Backend Setup

Navigate to backend directory:

npm install

Create a .env file:

GEMINI_API_KEY=your_gemini_api_key

TAVILY_API_KEY=your_tavily_api_key

Start backend:

npm start

---

### Frontend Setup

Navigate to Frontend directory:

npm install

Start frontend:

npm run dev

---

## Example Usage

### Research a Company

Microsoft

### Ask Follow-up Questions

Who are its competitors?

What products does it offer?

Should I invest in it?

### Update Account Plan

Update competitor section with Oracle.

### Voice Interaction

Click the microphone icon and speak your query.

---

## Design Decisions

* Tavily is used to gather company information from multiple web sources.
* Gemini is used for report generation, account plan creation, and question answering.
* A memory layer stores the latest company context to support follow-up conversations.
* Voice support improves accessibility and user experience.
* Intent routing separates company research, question answering, and account plan updates.

---

## Future Enhancements

* Multi-company comparison
* CRM integration
* PDF export of account plans
* Multi-language support
* Advanced stakeholder mapping

---

## Author

Developed as part of an Agentic AI Company Research Assistant assignment.
