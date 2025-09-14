import { NextApiRequest, NextApiResponse } from "next";
import { GoogleGenerativeAI } from "@google/generative-ai";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== "POST") return res.status(405).json({ text: "Method not allowed" });

    const { prompt } = req.body;
    if (!prompt) return res.status(400).json({ text: "Prompt is required" });

    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const portfolioContext = `
      Huzaifa Sheikh - AI & Automation Developer Profile:
      About: Professional AI & Automation Developer.
      Skills: Python, JavaScript, TypeScript, React, Node.js, OpenAI API, LangChain, Hugging Face.
      Services: AI Agent Development, Workflow Automation, API Integration, Data Analysis.
      Projects: AI Resume Analyzer, WhatsApp AI Agent, Currency Converter Agent.
    `;

    const fullPrompt = `You are Huzaifa Sheikh's AI assistant. Answer questions based on this portfolio info: ${portfolioContext}.\n\nUser question: ${prompt}`;

    const result = await model.generateContent(fullPrompt);

    const text = result?.response?.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, couldn't generate response.";

    res.status(200).json({ text });
  } catch (error) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ text: "Error contacting AI. Please try again later." });
  }
}
