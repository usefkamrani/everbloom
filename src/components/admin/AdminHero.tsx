export function AdminHero() {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div className="space-y-2">
        <h1 className="text-3xl lg:text-4xl">پنل مدیریت EverBloom</h1>
        <p className="text-txtSecondary">
          نمای کلی فروش، سفارش‌ها و وضعیت انبار در یک نگاه.
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <button className="h-11 px-4 rounded-lg border border-border bg-bgSecondary text-txtPrimary">
          دانلود گزارش
        </button>
        <button className="h-11 px-5 rounded-lg bg-accentPrimary text-txtPrimary">
          محصول جدید
        </button>
      </div>
    </div>
  );
}
