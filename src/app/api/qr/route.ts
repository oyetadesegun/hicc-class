import { NextRequest, NextResponse } from "next/server";
import QRCode from "qrcode";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const sessionId = searchParams.get('s');
  const code = searchParams.get('c');

  if (!sessionId || !code) {
    return new NextResponse("Missing parameters", { status: 400 });
  }

  const origin = request.nextUrl.origin;
  const url = `${origin}/attend?s=${sessionId}&c=${code}`;

  try {
    // Generate QR code as a PNG buffer
    const qrCodeBuffer = await QRCode.toBuffer(url, {
      type: "png",
      width: 400,
      margin: 2,
      color: {
        dark: "#000000",
        light: "#FFFFFF",
      },
    });

    return new NextResponse(new Uint8Array(qrCodeBuffer), {
      headers: {
        "Content-Type": "image/png",
        // Cache the QR code to avoid regenerating for the same URL over and over
        "Cache-Control": "public, max-age=86400",
      },
    });
  } catch (err) {
    console.error("Failed to generate QR code:", err);
    return new NextResponse("Error generating QR", { status: 500 });
  }
}
