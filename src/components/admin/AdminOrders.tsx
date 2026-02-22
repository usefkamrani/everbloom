import { orders } from "./adminData";

export function AdminOrders() {
  return (
    <div className="rounded-2xl border border-border bg-bgSecondary/80 p-5">
      <div className="flex items-center justify-between">
        <h2 className="text-xl">سفارش‌های اخیر</h2>
        <button className="text-sm text-accentSecondary">مشاهده همه</button>
      </div>
      <div className="mt-4 space-y-3">
        {orders.map((order) => (
          <div
            key={order.id}
            className="flex flex-col gap-2 rounded-xl border border-border/70 bg-bgPrimary/40 p-3 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="text-sm text-txtSecondary">{order.id}</p>
              <p className="text-lg">{order.customer}</p>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <span className="text-txtSecondary">{order.time}</span>
              <span className="text-txtPrimary">{order.total}</span>
              <span className="rounded-full bg-accentPrimary/20 px-3 py-1 text-xs text-accentSecondary">
                {order.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
