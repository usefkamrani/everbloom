"use client";

import { useEffect, useMemo, useState } from "react";

type Discount = {
  code: string;
  value: string;
  usage: string;
  status: string;
};

export default function AdminDiscountsPage() {
  const [discounts, setDiscounts] = useState<Discount[]>([]);
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("همه");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const res = await fetch("/api/admin/discounts");
      const data = await res.json();
      setDiscounts(data.items ?? []);
      setLoading(false);
    };
    load();
  }, []);

  const statusOptions = useMemo(() => {
    const unique = new Set(discounts.map((discount) => discount.status));
    return ["همه", ...Array.from(unique)];
  }, [discounts]);

  const filtered = useMemo(() => {
    const normalized = query.trim();
    return discounts.filter((discount) => {
      const matchesQuery =
        !normalized ||
        discount.code.toLowerCase().includes(normalized.toLowerCase());
      const matchesStatus =
        statusFilter === "همه" ? true : discount.status === statusFilter;
      return matchesQuery && matchesStatus;
    });
  }, [discounts, query, statusFilter]);

  return (
    <>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 className="text-3xl">تخفیف‌ها</h1>
          <p className="text-txtSecondary">
            کمپین‌های فروش، کدهای تخفیف و محدودیت‌ها را مدیریت کنید.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button className="h-11 px-4 rounded-lg border border-border text-txtPrimary">
            ساخت کمپین
          </button>
          <button className="h-11 px-5 rounded-lg bg-accentPrimary text-txtPrimary">
            کد تخفیف جدید
          </button>
        </div>
      </div>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          { label: "کدهای فعال", value: "۱۴" },
          { label: "کدهای منقضی", value: "۶" },
          { label: "میانگین تخفیف", value: "۱۲٪" },
          { label: "درآمد کمپین‌ها", value: "۴۸,۲۰۰,۰۰۰" },
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
        <div className="flex items-center justify-between">
          <h2 className="text-xl">کدهای فعال</h2>
          <div className="flex flex-wrap items-center gap-2">
            <input
              className="h-10 rounded-lg bg-bgPrimary/40 border border-border px-3 text-sm"
              placeholder="جستجو کد"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <select
              className="h-10 rounded-lg bg-bgPrimary/40 border border-border px-3 text-sm text-txtPrimary"
              value={statusFilter}
              onChange={(event) => setStatusFilter(event.target.value)}
            >
              {statusOptions.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
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
            filtered.map((discount) => (
              <div
                key={discount.code}
                className="flex flex-col gap-2 rounded-xl border border-border/70 bg-bgPrimary/40 p-3 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="text-lg">{discount.code}</p>
                  <p className="text-xs text-txtSecondary">
                    میزان تخفیف: {discount.value}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <span className="text-txtSecondary">
                    استفاده: {discount.usage}
                  </span>
                  <span className="rounded-full bg-accentPrimary/20 px-3 py-1 text-xs text-accentSecondary">
                    {discount.status}
                  </span>
                  <button className="text-xs text-txtSecondary">ویرایش</button>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
}
