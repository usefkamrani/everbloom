"use client";

import { useEffect, useMemo, useState } from "react";

type Customer = {
  name: string;
  segment: string;
  orders: number;
  total: string;
};

export default function AdminCustomersPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const res = await fetch("/api/admin/customers");
      const data = await res.json();
      setCustomers(data.items ?? []);
      setLoading(false);
    };
    load();
  }, []);

  const filtered = useMemo(() => {
    const normalized = query.trim();
    return customers.filter((customer) => {
      if (!normalized) {
        return true;
      }
      return customer.name.includes(normalized);
    });
  }, [customers, query]);

  return (
    <>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 className="text-3xl">مشتریان</h1>
          <p className="text-txtSecondary">
            پروفایل مشتریان، وفاداری و رفتار خرید را بررسی کنید.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button className="h-11 px-4 rounded-lg border border-border text-txtPrimary">
            ارسال پیامک
          </button>
          <button className="h-11 px-5 rounded-lg bg-accentPrimary text-txtPrimary">
            مشتری جدید
          </button>
        </div>
      </div>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          { label: "کل مشتریان", value: "۱,۴۸۰" },
          { label: "فعال ماه جاری", value: "۳۲۰" },
          { label: "بازگشتی", value: "۶۴٪" },
          { label: "رضایت", value: "۴.۷/۵" },
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
          <h2 className="text-xl">مشتریان کلیدی</h2>
          <input
            className="h-10 rounded-lg bg-bgPrimary/40 border border-border px-3 text-sm"
            placeholder="جستجو مشتری"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
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
            filtered.map((customer) => (
              <div
                key={customer.name}
                className="flex flex-col gap-2 rounded-xl border border-border/70 bg-bgPrimary/40 p-3 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="text-lg">{customer.name}</p>
                  <p className="text-xs text-txtSecondary">
                    نوع مشتری: {customer.segment}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <span className="text-txtSecondary">
                    سفارش‌ها: {customer.orders}
                  </span>
                  <span className="text-txtPrimary">{customer.total}</span>
                  <button className="text-xs text-accentSecondary">پروفایل</button>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
}
