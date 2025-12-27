import express from "express";
import openai from "../utils/openai.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { lead, chat, type, tone } = req.body;

  const prompt = `
You are an elite sales closer.
Write a WhatsApp follow-up message.
Keep the response concise and WhatsApp-ready.



Lead info:
${lead}

Chat history:
${chat}

Message type:
${type}

Tone:
${tone}

Return the response in this exact format:

MESSAGE:
<WhatsApp follow-up message>

BEST_TIME:
<Best time to send in 1 short phrase>
`;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 150
    });

    res.json({ result: completion.choices[0].message.content });
  } catch {
    res.status(500).json({ error: "AI error" });
  }
});

export default router;
      
