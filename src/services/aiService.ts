import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `You are the AI assistant for James Marcus, a Junior AWS Cloud Practitioner. 
Your goal is to answer questions about James's skills, projects, and professional background.
James is certified as an AWS Cloud Practitioner.
His key skills include: AWS S3, Lambda, EC2, CloudWatch, IAM, VPC, and Route 53.
He is passionate about cloud security, serverless architectures, and cost optimization.
Be professional, helpful, and concise. If you don't know an answer, suggest contacting James via the WhatsApp link on the portfolio.`;

export async function askJamesAI(prompt: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
    
    return response.text || "I'm sorry, I couldn't process that request right now.";
  } catch (error) {
    console.error("AI Agent Error:", error);
    return "I''m having a bit of trouble connecting to my cloud brain. Please try again or contact James directly!";
  }
}
