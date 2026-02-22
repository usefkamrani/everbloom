import { NextResponse } from "next/server";

const discounts = [
  { code: "GREEN20", value: "۲۰٪", usage: "۱۸/۵۰", status: "فعال" },
  { code: "BLOOM10", value: "۱۰٪", usage: "۴۲/۱۰۰", status: "فعال" },
  { code: "WELCOME", value: "۱۵٪", usage: "۱۲/۲۰", status: "محدود" },
];

export async function GET() {
  return NextResponse.json({ items: discounts });
}
