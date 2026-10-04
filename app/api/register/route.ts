import { NextResponse } from "next/server";

export async function POST() {
  // Pendaftaran Festival Anak Muslim 2026 telah resmi ditutup
  return NextResponse.json(
    {
      success: false,
      message:
        "Pendaftaran Festival Anak Muslim 2026 telah resmi ditutup. Terima kasih atas antusiasme dan partisipasi luar biasa seluruh peserta. Sampai jumpa di Festival Anak Muslim 2027!",
    },
    { status: 403 }
  );
}
