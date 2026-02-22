export default function AdminReportsPage() {
  return (
    <>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 className="text-3xl">گزارش‌ها</h1>
          <p className="text-txtSecondary">
            گزارش‌های فروش، عملکرد کانال‌ها و تحلیل مشتریان.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button className="h-11 px-4 rounded-lg border border-border text-txtPrimary">
            خروجی PDF
          </button>
          <button className="h-11 px-5 rounded-lg bg-accentPrimary text-txtPrimary">
            ساخت گزارش
          </button>
        </div>
      </div>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          { label: "رشد ماهانه", value: "+۱۸٪" },
          { label: "سود خالص", value: "۱۲۴,۵۰۰,۰۰۰" },
          { label: "CAC", value: "۲۸۰,۰۰۰" },
          { label: "LTV", value: "۳,۴۰۰,۰۰۰" },
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

      <section className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <div className="rounded-2xl border border-border bg-bgSecondary/80 p-5">
          <h2 className="text-xl">روند فروش</h2>
          <div className="mt-6 grid h-48 grid-cols-12 items-end gap-2">
            {Array.from({ length: 12 }).map((_, index) => (
              <div key={index} className="h-full flex flex-col justify-end">
                <div
                  className="w-full rounded-md bg-gradient-to-t from-accentPrimary to-accentSecondary/70"
                  style={{ height: `${50 + index * 3}%` }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-bgSecondary/80 p-5 space-y-4">
          <h2 className="text-xl">کانال‌های فروش</h2>
          <div className="space-y-3">
            {[
              { label: "وب‌سایت", value: "۶۲٪" },
              { label: "اینستاگرام", value: "۲۱٪" },
              { label: "بازاریاب‌ها", value: "۱۰٪" },
              { label: "نمایندگان", value: "۷٪" },
            ].map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between text-sm">
                  <span>{item.label}</span>
                  <span>{item.value}</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-border">
                  <div
                    className="h-2 rounded-full bg-accentSecondary"
                    style={{ width: item.value }}
                  />
                </div>
              </div>
            ))}
          </div>
          <button className="h-11 w-full rounded-lg border border-border text-txtPrimary">
            مقایسه دوره‌ها
          </button>
        </div>
      </section>
    </>
  );
}
