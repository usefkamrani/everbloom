"use client";

import { useEffect, useMemo, useState } from "react";

type Alert = {
  name: string;
  sku: string;
  level: string;
  qty: number;
};

export default function AdminInventoryPage() {
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const res = await fetch("/api/admin/inventory/alerts");
      const data = await res.json();
      setAlerts(data.items ?? []);
      setLoading(false);
    };
    load();
  }, []);

  const filtered = useMemo(() => {
    const normalized = query.trim();
    return alerts.filter((item) => {
      if (!normalized) {
        return true;
      }
      return (
        item.name.includes(normalized) ||
        item.sku.toLowerCase().includes(normalized.toLowerCase())
      );
    });
  }, [alerts, query]);

  return (
    <>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 className="text-3xl">انبار و تامین</h1>
          <p className="text-txtSecondary">
            کنترل سطح موجودی، تامین‌کنندگان و ورود کالا.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button className="h-11 px-4 rounded-lg border border-border text-txtPrimary">
            ثبت ورود کالا
          </button>
          <button className="h-11 px-5 rounded-lg bg-accentPrimary text-txtPrimary">
            درخواست تامین
          </button>
        </div>
      </div>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          { label: "کل موجودی", value: "۱,۸۴۰" },
          { label: "هشدار کمبود", value: "۹" },
          { label: "در راه", value: "۶۲" },
          { label: "گردش ماهانه", value: "۳۲۰" },
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

      <section className="grid gap-6 xl:grid-cols-[1.2fr_1fr]">
        <div className="rounded-2xl border border-border bg-bgSecondary/80 p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-xl">هشدار موجودی</h2>
            <input
              className="h-10 rounded-lg bg-bgPrimary/40 border border-border px-3 text-sm"
              placeholder="جستجو کالا"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          <div className="mt-4 space-y-3">
            {loading && (
              <div className="text-sm text-txtSecondary">
                در حال بارگذاری...
              </div>
            )}
            {!loading && filtered.length === 0 && (
              <div className="text-sm text-txtSecondary">
                موردی برای نمایش نیست.
              </div>
            )}
            {!loading &&
              filtered.map((item) => (
                <div
                  key={item.sku}
                  className="flex items-center justify-between rounded-xl border border-border/70 bg-bgPrimary/40 p-3"
                >
                  <div>
                    <p>{item.name}</p>
                    <p className="text-xs text-txtSecondary">{item.sku}</p>
                  </div>
                  <div className="text-sm text-amber-300">
                    {item.level} - {item.qty} عدد
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-bgSecondary/80 p-5 space-y-4">
          <h2 className="text-xl">تامین‌کنندگان فعال</h2>
          <div className="space-y-3 text-sm text-txtSecondary">
            <div className="flex items-center justify-between">
              <span>گلخانه سپهر</span>
              <span>۸ قرارداد</span>
            </div>
            <div className="flex items-center justify-between">
              <span>سبزآوران</span>
              <span>۵ قرارداد</span>
            </div>
            <div className="flex items-center justify-between">
              <span>آرمان گیاه</span>
              <span>۳ قرارداد</span>
            </div>
          </div>
          <button className="h-11 w-full rounded-lg border border-border text-txtPrimary">
            مدیریت تامین‌کنندگان
          </button>
        </div>
      </section>
    </>
  );
}
