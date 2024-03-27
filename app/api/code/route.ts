import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export interface ChatCompletionUserMessageParam {
  content: string | null;
  role: string;
}

const instructionMessage: ChatCompletionUserMessageParam = {
  role: "system",
  content:
    "You are a code generator. Answer Nice Looking Code and You must answer code portion only in markdown code snippets. Use code comments for explanations.",
};

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!openai.apiKey) {
      return new NextResponse("Open AI Key not configured", { status: 500 });
    }

    if (!messages) {
      return new NextResponse("messages are required", { status: 400 });
    }

    const response = await openai.chat.completions.create({
      messages: [instructionMessage, ...messages],
      model: "gpt-3.5-turbo",
    });

    // console.log(response);

    const message = response.choices[0].message;
    return NextResponse.json(message);
  } catch (error) {
    return new NextResponse("CODE_Internal error", { status: 500 });
  }
}
