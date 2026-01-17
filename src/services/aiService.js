import { fallbackMessages } from './fallbackMessages'

const API_KEY = "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" 

export async function getAiMessage(prompt, forceOffline = false) {
  // If the user toggled the Offline Switch, skip the API call
  if (forceOffline) {
    return getRandomFallback();
  }

  try {
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages: [
            { role: "system", content: "You are a supportive mental health companion. Keep responses short and calming." },
            { role: "user", content: prompt }
          ]
        })
      }
    )

    const result = await response.json()
    if (result.choices && result.choices[0]?.message?.content) {
      return result.choices[0].message.content
    }
    throw new Error("Invalid AI response")

  } catch (error) {
    console.warn("API Error, using fallback:", error)
    return getRandomFallback()
  }
}

function getRandomFallback() {
  return fallbackMessages[Math.floor(Math.random() * fallbackMessages.length)]
}