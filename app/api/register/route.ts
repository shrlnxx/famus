import { NextRequest, NextResponse } from "next/server";

const GAS_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbzoXRzkeSN-jZdY3ggZDV0JCLMLZJ8Ac-xsu5iNKq4abWV0ELMjb--8QpGDNc9X1dgD/exec";

export const maxDuration = 60; // 60 seconds timeout for file uploads

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();

    const response = await fetch(GAS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
      redirect: "follow",
    });

    const text = await response.text();

    // Detect Google Apps Script HTML error output
    if (text.includes("TypeError:") || text.includes("<title>Salah</title>") || text.includes("errorMessage")) {
      const match = text.match(/<div style="text-align:center[^>]*>([^<]+)<\/div>/);
      const detail = match ? match[1] : "Error internal pada Google Apps Script";
      
      return NextResponse.json(
        {
          success: false,
          message: `Error di Google Apps Script (${detail}). Silakan hapus pemanggilan '.setHeaders(...)' pada baris 58 file 'Kode.gs' di editor Apps Script Anda.`,
        },
        { status: 400 }
      );
    }

    try {
      const data = JSON.parse(text);
      return NextResponse.json(data);
    } catch {
      // If response text is not JSON but request succeeded without error page
      return NextResponse.json({
        success: true,
        message: "Pendaftaran berhasil dikirim.",
      });
    }
  } catch (err: any) {
    return NextResponse.json(
      {
        success: false,
        message: err?.message || "Terjadi kesalahan saat menghubungi server Google Apps Script.",
      },
      { status: 500 }
    );
  }
}
