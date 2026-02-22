import { NextResponse } from "next/server";

const customers = [
  {
    name: "سارا احمدی",
    segment: "VIP",
    orders: 18,
    total: "۲۳,۸۰۰,۰۰۰",
  },
  {
    name: "محمد رضایی",
    segment: "فعال",
    orders: 12,
    total: "۹,۴۰۰,۰۰۰",
  },
  {
    name: "نگار سعیدی",
    segment: "جدید",
    orders: 3,
    total: "۱,۲۸۰,۰۰۰",
  },
];

export async function GET() {
  return NextResponse.json({ items: customers });
}
