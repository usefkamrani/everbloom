"use client";

import { useEffect, useMemo, useState } from "react";

type Product = {
  name: string;
  sku: string;
  price: string;
  stock: number;
  status: "active" | "low" | "out";
};

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [query, setQuery] = useState("");
  const [stockFilter, setStockFilter] = useState<"all" | "low" | "out">("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const res = await fetch("/api/admin/products");
      const data = await res.json();
      setProducts(data.items ?? []);
      setLoading(false);
    };
    load();
  }, []);

  const filtered = useMemo(() => {
    const normalized = query.trim();
    return products.filter((product) => {
      const matchesQuery =
        !normalized ||
        product.name.includes(normalized) ||
        product.sku.toLowerCase().includes(normalized.toLowerCase());
      const matchesStock =
        stockFilter === "all" ? true : product.status === stockFilter;
      return matchesQuery && matchesStock;
    });
  }, [products, query, stockFilter]);

  return (
    <>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 className="text-3xl">مدیریت محصولات</h1>
          <p className="text-txtSecondary">
            افزودن، ویرایش و کنترل موجودی محصولات فروشگاه.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button className="h-11 px-4 rounded-lg border border-border text-txtPrimary">
            ورود دسته‌ای
          </button>
          <button className="h-11 px-5 rounded-lg bg-accentPrimary text-txtPrimary">
            محصول جدید
          </button>
        </div>
      </div>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          { label: "کل محصولات", value: "۱۲۴" },
          { label: "فعال", value: "۹۲" },
          { label: "ناموجود", value: "۸" },
          { label: "در انتظار تایید", value: "۴" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-border bg-bgSecondary/80 p-4"
          >
            <p className="text-sm text-txtSecondary">{item.label}</p>
            <h3 className="mt-3 text-2xl">{item.value}</h3>
          </div>
        ))}
      </section>

      <section className="rounded-2xl border border-border bg-bgSecondary/80 p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-xl">لیست محصولات</h2>
          <div className="flex flex-wrap items-center gap-2">
            <input
              className="h-10 rounded-lg bg-bgPrimary/40 border border-border px-3 text-sm"
              placeholder="جستجو محصول"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <select
              className="h-10 rounded-lg bg-bgPrimary/40 border border-border px-3 text-sm text-txtPrimary"
              value={stockFilter}
              onChange={(event) =>
                setStockFilter(event.target.value as "all" | "low" | "out")
              }
            >
              <option value="all">همه موجودی‌ها</option>
              <option value="low">کمبود</option>
              <option value="out">ناموجود</option>
            </select>
          </div>
        </div>
        <div className="mt-4 space-y-3">
          {loading && (
            <div className="text-sm text-txtSecondary">در حال بارگذاری...</div>
          )}
          {!loading && filtered.length === 0 && (
            <div className="text-sm text-txtSecondary">
              نتیجه‌ای برای فیلتر فعلی پیدا نشد.
            </div>
          )}
          {!loading &&
            filtered.map((product) => (
              <div
                key={product.sku}
                className="flex flex-col gap-2 rounded-xl border border-border/70 bg-bgPrimary/40 p-3 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="text-lg">{product.name}</p>
                  <p className="text-xs text-txtSecondary">{product.sku}</p>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <span className="text-txtSecondary">
                    موجودی: {product.stock}
                  </span>
                  <span className="text-txtPrimary">{product.price}</span>
                  <button className="rounded-full bg-accentPrimary/20 px-3 py-1 text-xs text-accentSecondary">
                    ویرایش
                  </button>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
}
