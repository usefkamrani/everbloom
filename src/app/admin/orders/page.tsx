"use client";

import { useEffect, useMemo, useState } from "react";

type Order = {
  id: string;
  customer: string;
  total: string;
  status: string;
  date: string;
};

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("همه");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const res = await fetch("/api/admin/orders");
      const data = await res.json();
      setOrders(data.items ?? []);
      setLoading(false);
    };
    load();
  }, []);

  const statusOptions = useMemo(() => {
    const unique = new Set(orders.map((order) => order.status));
    return ["همه", ...Array.from(unique)];
  }, [orders]);

  const filtered = useMemo(() => {
    const normalized = query.trim();
    return orders.filter((order) => {
      const matchesQuery =
        !normalized ||
        order.customer.includes(normalized) ||
        order.id.toLowerCase().includes(normalized.toLowerCase());
      const matchesStatus =
        statusFilter === "همه" ? true : order.status === statusFilter;
      return matchesQuery && matchesStatus;
    });
  }, [orders, query, statusFilter]);

  return (
    <>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 className="text-3xl">سفارش‌ها</h1>
          <p className="text-txtSecondary">
            وضعیت سفارش‌ها و روند پردازش ارسال را مدیریت کنید.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button className="h-11 px-4 rounded-lg border border-border text-txtPrimary">
            خروجی اکسل
          </button>
          <button className="h-11 px-5 rounded-lg bg-accentPrimary text-txtPrimary">
            تایید گروهی
          </button>
        </div>
      </div>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          { label: "کل سفارش‌ها", value: "۳۴۲" },
          { label: "در انتظار", value: "۲۴" },
          { label: "ارسال شده", value: "۲۶۸" },
          { label: "مرجوعی", value: "۶" },
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
          <h2 className="text-xl">سفارش‌های اخیر</h2>
          <div className="flex flex-wrap items-center gap-2">
            <input
              className="h-10 rounded-lg bg-bgPrimary/40 border border-border px-3 text-sm"
              placeholder="جستجو سفارش"
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
            filtered.map((order) => (
              <div
                key={order.id}
                className="flex flex-col gap-2 rounded-xl border border-border/70 bg-bgPrimary/40 p-3 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="text-sm text-txtSecondary">{order.id}</p>
                  <p className="text-lg">{order.customer}</p>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <span className="text-txtSecondary">{order.date}</span>
                  <span className="text-txtPrimary">{order.total}</span>
                  <span className="rounded-full bg-accentPrimary/20 px-3 py-1 text-xs text-accentSecondary">
                    {order.status}
                  </span>
                  <button className="text-xs text-txtSecondary">جزئیات</button>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
}
