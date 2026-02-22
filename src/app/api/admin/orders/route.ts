import { NextResponse } from "next/server";

const orders = [
  {
    id: "EV-2041",
    customer: "سارا احمدی",
    total: "۲,۴۸۰,۰۰۰",
    status: "آماده ارسال",
    date: "امروز",
  },
  {
    id: "EV-2039",
    customer: "محمد رضایی",
    total: "۱,۱۲۰,۰۰۰",
    status: "در حال پردازش",
    date: "امروز",
  },
  {
    id: "EV-2037",
    customer: "نگار سعیدی",
    total: "۳,۹۸۰,۰۰۰",
    status: "پرداخت شده",
    date: "دیروز",
  },
  {
    id: "EV-2035",
    customer: "پارسا رجبی",
    total: "۷۲۰,۰۰۰",
    status: "لغو شده",
    date: "دیروز",
  },
];

export async function GET() {
  return NextResponse.json({ items: orders });
}
