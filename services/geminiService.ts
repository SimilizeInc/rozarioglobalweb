import { GoogleGenAI, Type } from "@google/genai";
import { Insight } from "../types";

// Initialize Gemini Client
// Safely check for process.env to prevent crashes in browser environments
const apiKey = (typeof process !== 'undefined' && process.env) ? process.env.API_KEY : '';
const ai = new GoogleGenAI({ apiKey: apiKey || 'demo-key' });

export const fetchMarketInsights = async (): Promise<Insight[]> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Generate 3 fictional but realistic 'market insight' articles for a quantitative hedge fund named Rozario Global. Topics should cover Machine Learning in Finance, Global Macro Trends, and Alternative Data. Return as a JSON array with all fields populated.",
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING },
              title: { type: Type.STRING },
              category: { type: Type.STRING },
              summary: { type: Type.STRING },
              content: { type: Type.STRING, description: "HTML content for the article body" },
              author: { type: Type.STRING },
              role: { type: Type.STRING },
              timestamp: { type: Type.STRING, description: "A date string like 'Oct 24, 2024'" },
              readTime: { type: Type.STRING, description: "e.g., '5 min read'" },
              imageUrl: { type: Type.STRING, description: "A placeholder image URL" }
            },
            required: ["id", "title", "category", "summary", "content", "author", "role", "timestamp", "readTime", "imageUrl"]
          }
        }
      }
    });

    const data = JSON.parse(response.text || "[]");
    return data as Insight[];
  } catch (error) {
    console.error("Failed to fetch insights:", error);
    // Fallback data if API fails
    return [
      {
        id: "fallback-1",
        title: "Algorithmic Efficiency in Volatile Markets",
        category: "Quantitative Research",
        summary: "Exploring how high-frequency trading models adapt to sudden liquidity shocks in emerging markets.",
        content: "<p>In the high-stakes world of algorithmic trading, efficiency is paramount. As markets become increasingly volatile, traditional models often fail to adapt quickly enough to liquidity shocks. This article explores new methodologies in adaptive filtering and reinforcement learning that allow for robust execution even during flash crashes.</p>",
        author: "Calvin D'Rozario",
        role: "Founder & CIO",
        timestamp: "Oct 24, 2024",
        readTime: "5 min read",
        imageUrl: "https://images.unsplash.com/photo-1611974765270-ca12586343bb?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "fallback-2",
        title: "The Role of Alternative Data",
        category: "Data Science",
        summary: "Leveraging satellite imagery and supply chain IoT to predict commodity price movements before the bell.",
        content: "<p>The edge in modern finance is no longer found in the ticker tape, but in the noise of the world. By analyzing satellite imagery of crop yields, shipping container IoT signals, and credit card transaction data, we can build a more complete picture of the global economy before official reports are released.</p>",
        author: "David Okafor",
        role: "Head of Data Science",
        timestamp: "Oct 20, 2024",
        readTime: "6 min read",
        imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "fallback-3",
        title: "Macro-Economic Shifts in 2025",
        category: "Global Perspectives",
        summary: "Analyzing the impact of central bank digital currencies on traditional forex arbitrage strategies.",
        content: "<p>As central banks around the world begin to pilot and launch their own digital currencies (CBDCs), the landscape of foreign exchange is set to shift dramatically. This piece examines the potential obsolescence of traditional arbitrage strategies and the emergence of new, atomic-swap based liquidity pools.</p>",
        author: "James Chen",
        role: "CIO",
        timestamp: "Oct 15, 2024",
        readTime: "7 min read",
        imageUrl: "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=1200&auto=format&fit=crop"
      }
    ];
  }
};

export const generateVisionStatement = async (): Promise<string> => {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-3-flash-preview",
            contents: "Write a single, powerful, abstract sentence about the intersection of data, science, and finance. It should sound like a hedge fund motto.",
        });
        return response.text || "Illuminating value through the lens of data science.";
    } catch (e) {
        return "Where the scientific method meets global markets.";
    }
}