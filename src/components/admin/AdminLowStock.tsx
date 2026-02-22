import { lowStock } from "./adminData";

export function AdminLowStock() {
  return (
    <div className="rounded-2xl border border-border bg-bgSecondary/80 p-5 space-y-4">
      <h2 className="text-xl">موجودی کم</h2>
      <div className="space-y-3">
        {lowStock.map((item) => (
          <div
            key={item.sku}
            className="flex items-center justify-between rounded-lg border border-border/70 bg-bgPrimary/30 px-3 py-2"
          >
            <div>
              <p>{item.name}</p>
              <p className="text-xs text-txtSecondary">{item.sku}</p>
            </div>
            <span className="text-sm text-amber-300">{item.qty}</span>
          </div>
        ))}
      </div>
      <button className="w-full h-11 rounded-lg bg-accentPrimary text-txtPrimary">
        ثبت درخواست تامین
      </button>
    </div>
  );
}
