import { NextResponse } from "next/server";

const alerts = [
  { name: "فیکوس لیراتا", sku: "PL-4481", level: "کم", qty: 6 },
  { name: "مونسترا", sku: "PL-5019", level: "خیلی کم", qty: 3 },
  { name: "دیفن باخیا", sku: "PL-2218", level: "کم", qty: 8 },
];

export async function GET() {
  return NextResponse.json({ items: alerts });
}
