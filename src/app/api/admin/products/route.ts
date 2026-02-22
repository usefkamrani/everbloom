import { NextResponse } from "next/server";

const products = [
  {
    name: "فیکوس لیراتا",
    sku: "PL-4481",
    price: "۲,۴۸۰,۰۰۰",
    stock: 14,
    status: "active",
  },
  {
    name: "زامیفولیا",
    sku: "PL-3140",
    price: "۱,۱۲۰,۰۰۰",
    stock: 9,
    status: "active",
  },
  {
    name: "پتوس ابلق",
    sku: "PL-2291",
    price: "۷۲۰,۰۰۰",
    stock: 21,
    status: "active",
  },
  {
    name: "مونسترا",
    sku: "PL-5019",
    price: "۳,۹۸۰,۰۰۰",
    stock: 6,
    status: "low",
  },
  {
    name: "دیفن باخیا",
    sku: "PL-2218",
    price: "۱,۸۹۰,۰۰۰",
    stock: 0,
    status: "out",
  },
];

export async function GET() {
  return NextResponse.json({ items: products });
}
