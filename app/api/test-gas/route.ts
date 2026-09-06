import { NextResponse } from "next/server";

const GAS_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbxRbiAI-Oz-m7EnsusKbmf13LxU_mXClCiht3xt-CZgFQJySFNu4CppJEiH88NAkXnx/exec";

export async function GET() {
  try {
    // Test GET request to GAS
    const res = await fetch(GAS_ENDPOINT, { redirect: "follow" });
    const text = await res.text();
    return NextResponse.json({
      method: "GET",
      status: res.status,
      statusText: res.statusText,
      body: text.substring(0, 1000),
    });
  } catch (err: unknown) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

export async function POST() {
  // Send minimal dummy payload (no files) to test GAS validation response
  const dummyPayload = {
    cabangLomba: "TEST",
    namaAnak: "TEST DIAGNOSTIK",
    usia: "10",
    asalLembaga: "TEST",
    namaPendamping: "TEST",
    noHp: "081234567890",
    detailKhusus: "",
    // No file data → GAS should return validation error (not save to sheet)
  };

  try {
    const res = await fetch(GAS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(dummyPayload),
      redirect: "follow",
    });

    const text = await res.text();

    let parsed = null;
    try {
      parsed = JSON.parse(text);
    } catch {
      // not JSON
    }

    return NextResponse.json({
      method: "POST",
      status: res.status,
      statusText: res.statusText,
      rawBody: text.substring(0, 2000),
      parsedJson: parsed,
      isJson: parsed !== null,
    });
  } catch (err: unknown) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
