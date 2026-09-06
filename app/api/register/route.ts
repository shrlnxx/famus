import { NextRequest, NextResponse } from "next/server";

const GAS_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbxRbiAI-Oz-m7EnsusKbmf13LxU_mXClCiht3xt-CZgFQJySFNu4CppJEiH88NAkXnx/exec";

export const maxDuration = 60; // 60 seconds timeout for file uploads

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();

    // Kirim ke Google Apps Script dengan redirect follow
    const response = await fetch(GAS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
      redirect: "follow",
    });

    const text = await response.text();

    // Log response mentah untuk debugging
    console.log("[GAS Response] status:", response.status, "body:", text.substring(0, 500));

    // Jika response kosong → kemungkinan timeout/opaque
    if (!text || text.trim() === "") {
      return NextResponse.json(
        {
          success: false,
          message:
            "Server Google Apps Script tidak merespons. Pastikan deployment GAS dipublish sebagai 'Anyone'.",
        },
        { status: 502 }
      );
    }

    // Coba parse sebagai JSON terlebih dahulu
    let parsed: { success?: boolean; message?: string; data?: unknown } | null = null;
    try {
      parsed = JSON.parse(text);
    } catch {
      // Bukan JSON — akan ditangani di bawah
    }

    // Jika berhasil parse JSON
    if (parsed !== null) {
      if (parsed.success === true) {
        return NextResponse.json({
          success: true,
          message: parsed.message || "Pendaftaran berhasil.",
          data: parsed.data,
        });
      } else {
        return NextResponse.json(
          {
            success: false,
            message: parsed.message || "Pendaftaran gagal diproses oleh server.",
          },
          { status: 400 }
        );
      }
    }

    // Jika response adalah HTML error dari GAS
    if (
      text.includes("TypeError:") ||
      text.includes("<title>Salah</title>") ||
      text.includes("errorMessage") ||
      text.toLowerCase().includes("exception")
    ) {
      const matchPre = text.match(/<pre[^>]*>([^<]{10,500})<\/pre>/);
      const matchDiv = text.match(/<div style="text-align:center[^>]*>([^<]+)<\/div>/);
      const detail =
        matchPre?.[1]?.trim() ||
        matchDiv?.[1]?.trim() ||
        "Error internal pada Google Apps Script";

      console.error("[GAS Error HTML]", detail);
      return NextResponse.json(
        { success: false, message: `Error di Google Apps Script: ${detail}` },
        { status: 400 }
      );
    }

    // Respons non-JSON namun tidak mengandung error (plain text OK)
    return NextResponse.json({
      success: true,
      message: "Pendaftaran berhasil dikirim.",
    });
  } catch (err: unknown) {
    const errMsg = err instanceof Error ? err.message : String(err);
    console.error("[API /register] Error:", errMsg);
    return NextResponse.json(
      {
        success: false,
        message: errMsg || "Terjadi kesalahan saat menghubungi server Google Apps Script.",
      },
      { status: 500 }
    );
  }
}
