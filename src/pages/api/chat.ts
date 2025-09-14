export default async function handler(req, res) {
  const { message } = req.body;

  const response = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" + process.env.GEMINI_API_KEY,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [{ text: message }],
          },
          {
            role: "model",
            parts: [
              {
                text: "You are Huzaifa’s AI portfolio assistant. Tell visitors about Huzaifa, his projects, skills, and experience in a friendly way.",
              },
            ],
          },
        ],
      }),
    }
  );

  const data = await response.json();
  res.status(200).json({ reply: data.candidates[0].content.parts[0].text });
}
