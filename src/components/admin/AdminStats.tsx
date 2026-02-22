import { stats } from "./adminData";

export function AdminStats() {
  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-border bg-bgSecondary/80 p-4"
        >
          <p className="text-sm text-txtSecondary">{item.label}</p>
          <div className="mt-3 flex items-end justify-between">
            <h3 className="text-2xl">{item.value}</h3>
            <span className="text-sm text-accentSecondary">{item.change}</span>
          </div>
        </div>
      ))}
    </section>
  );
}
