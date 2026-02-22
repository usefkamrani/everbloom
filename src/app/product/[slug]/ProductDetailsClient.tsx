"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { Product } from "@/lib/products";

type ProductDetailsClientProps = {
  product: Product | null;
};

const ProductDetailsClient = ({ product }: ProductDetailsClientProps) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedPotColor, setSelectedPotColor] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  const addOns = [
    { title: "خاک مخصوص گیاهان آپارتمانی", price: "۲۹۵,۰۰۰ ریال" },
    { title: "گلدان سرامیکی مینیمال", price: "۴۹۵,۰۰۰ ریال" },
    { title: "کود مایع تقویتی", price: "۳۹۵,۰۰۰ ریال" },
  ];

  const addOnsMap = useMemo(
    () => new Set(selectedAddOns),
    [selectedAddOns]
  );

  const toggleAddOn = (title: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  if (!product) {
    return (
      <div className="w-full flex flex-col items-center justify-center gap-4 px-6 md:px-12 lg:px-20 py-16">
        <h1 className="text-2xl text-txtPrimary">گیاه موجود نیست</h1>
        <p className="text-sm text-txtSecondary">
          این گیاه در حال حاضر در کاتالوگ موجود نیست.
        </p>
        <Link
          href="/shop"
          className="h-11 px-5 rounded-lg bg-accentPrimary text-txtPrimary flex items-center"
        >
          بازگشت به فروشگاه
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-10 px-6 md:px-12 lg:px-20 py-10">
      <nav className="flex flex-wrap items-center gap-2 text-sm text-txtSecondary">
        <Link href="/" className="hover:text-accentSecondary transition-colors">
          خانه
        </Link>
        <span>/</span>
        <Link href="/shop" className="hover:text-accentSecondary transition-colors">
          فروشگاه گیاهان آپارتمانی
        </Link>
        <span>/</span>
        <span className="text-txtPrimary">{product.title}</span>
      </nav>

      <section className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8">
        <div className="flex flex-col gap-4">
          <div className="relative w-full aspect-square rounded-2xl border border-border bg-bgSecondary/30 overflow-hidden">
            <Image
              src={`/plants/productImages/${product.img}.png`}
              alt={`EverBloom | ${product.title}`}
              fill
              className="object-contain"
              sizes="(min-width: 1024px) 40vw, 90vw"
            />
          </div>

          <div className="grid grid-cols-4 gap-3">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-xl border border-border bg-bgSecondary/20 overflow-hidden"
              >
                <Image
                  src={`/plants/productImages/${product.img}.png`}
                  alt={`EverBloom | ${product.title} thumbnail ${index + 1}`}
                  fill
                  className="object-contain opacity-80"
                  sizes="(min-width: 1024px) 10vw, 20vw"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl lg:text-4xl font-semibold text-txtPrimary">
              {product.title}
            </h1>
            <div className="flex items-center gap-2 text-sm text-txtSecondary">
              <div className="flex items-center gap-1">
                <span className="text-txtPrimary">{product.rate}</span>
                <Image
                  src="/star.svg"
                  alt="امتیاز محصول"
                  width={16}
                  height={16}
                />
              </div>
              <span className="w-1 h-1 rounded-full bg-txtSecondary" />
              <span className="px-2 py-1 rounded-full border border-border text-xs text-txtSecondary">
                مناسب آپارتمان
              </span>
              <span className="w-1 h-1 rounded-full bg-txtSecondary" />
              <span>{product.stockLabel}</span>
            </div>
          </div>

          <p className="text-base leading-7 text-txtSecondary">
            {product.shortDescription}
          </p>

          <div className="flex items-end gap-3">
            <p className="text-2xl text-accentSecondary">{product.price}</p>
            <p className="text-sm line-through text-txtSecondary">
              {product.lastPrice}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-sm text-txtSecondary">انتخاب اندازه گلدان</p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded-lg border text-sm transition-colors ${
                    selectedSize === size
                      ? "border-accentSecondary text-txtPrimary bg-bgSecondary/40"
                      : "border-border text-txtPrimary hover:border-accentSecondary/60"
                  }`}
                  aria-pressed={selectedSize === size}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-sm text-txtSecondary">رنگ گلدان</p>
            <div className="flex gap-3">
              {product.potColors.map((color) => (
                <button
                  key={color}
                  type="button"
                  onClick={() => setSelectedPotColor(color)}
                  className={`w-10 h-10 rounded-full border transition-colors ${
                    selectedPotColor === color
                      ? "border-accentSecondary ring-2 ring-accentSecondary/40"
                      : "border-border hover:border-accentSecondary/60"
                  }`}
                  style={{ backgroundColor: color }}
                  aria-pressed={selectedPotColor === color}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-sm text-txtSecondary">افزودنی‌های مراقبت و نگهداری</p>
            <div className="flex flex-col gap-2">
              {addOns.map((item) => (
                <label
                  key={item.title}
                  className={`flex items-center justify-between gap-3 rounded-lg border px-4 py-3 text-sm text-txtSecondary transition-colors ${
                    addOnsMap.has(item.title)
                      ? "border-accentSecondary/60 bg-bgSecondary/30"
                      : "border-border"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded-sm border border-border accent-accentSecondary"
                      checked={addOnsMap.has(item.title)}
                      onChange={() => toggleAddOn(item.title)}
                      aria-label={`افزودن ${item.title}`}
                    />
                    {item.title}
                  </span>
                  <span className="text-accentSecondary">{item.price}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-3 px-4 py-2 rounded-lg border border-border">
              <button
                className="text-lg text-txtPrimary"
                onClick={() => setQuantity((q) => q + 1)}
                aria-label="افزایش تعداد"
              >
                +
              </button>
              <span className="text-sm text-txtSecondary">{quantity}</span>
              <button
                className="text-lg text-txtPrimary"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                aria-label="کاهش تعداد"
              >
                -
              </button>
            </div>
            <button className="flex-1 min-w-[200px] h-12 rounded-lg bg-accentPrimary text-txtPrimary">
              افزودن به سبد خرید
            </button>
            <button className="h-12 px-5 rounded-lg border border-border text-txtPrimary">
              افزودن به علاقه‌مندی
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              {
                title: "ارسال ایمن گیاه",
                detail: "بسته‌بندی ضد ضربه و حفظ رطوبت",
              },
              {
                title: "ضمانت سلامت گیاه",
                detail: "تا ۷ روز ضمانت تعویض",
              },
              {
                title: "مشاوره نگهداری",
                detail: "راهنمای نور، آبیاری و کوددهی",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-bgSecondary/20 p-4"
              >
                <p className="text-txtPrimary">{item.title}</p>
                <p className="text-xs text-txtSecondary mt-2">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8">
        <div className="rounded-2xl border border-border bg-bgSecondary/20 p-6">
          <h2 className="text-2xl text-txtPrimary mb-4">درباره گیاه</h2>
          <p className="text-base leading-7 text-txtSecondary">
            {product.description}
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="rounded-2xl border border-border bg-bgSecondary/20 p-6">
            <h2 className="text-xl text-txtPrimary mb-4">ویژگی‌ها</h2>
            <ul className="flex flex-col gap-2 text-sm text-txtSecondary">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accentSecondary" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-bgSecondary/20 p-6">
            <h2 className="text-xl text-txtPrimary mb-4">راهنمای نگهداری</h2>
            <ul className="flex flex-col gap-2 text-sm text-txtSecondary">
              {product.care.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accentSecondary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-border bg-bgSecondary/20 p-6">
        <h2 className="text-2xl text-txtPrimary mb-4">برچسب‌ها</h2>
        <div className="flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full border border-border text-sm text-txtSecondary"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetailsClient;



