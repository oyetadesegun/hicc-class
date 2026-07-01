import { getImageKit } from "@/lib/imagekit";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const imagekit = getImageKit();
    const authenticationParameters = imagekit.getAuthenticationParameters();
    return NextResponse.json({
      ...authenticationParameters,
      publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to get authentication parameters" },
      { status: 500 }
    );
  }
}
