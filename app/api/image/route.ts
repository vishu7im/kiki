import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt, amount = "1", resolution = "512x512" } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!openai.apiKey) {
      return new NextResponse("Open AI Key not configured", { status: 500 });
    }

    if (!prompt) {
      return new NextResponse("prompt are required", { status: 400 });
    }

    if (!amount) {
      return new NextResponse("amount are required", { status: 400 });
    }

    if (!resolution) {
      return new NextResponse("prompt are resolution", { status: 400 });
    }

    const response = await openai.images.generate({
      prompt: prompt,
      n: parseInt(amount, 10),
      size: resolution,
    });
    const image_url = response.data;
    // console.log(image_url);s
    return NextResponse.json(image_url);
  } catch (error) {
    // console.log(error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
