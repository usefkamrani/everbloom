export function AdminSalesChart() {
  return (
    <div className="rounded-2xl border border-border bg-bgSecondary/80 p-5">
      <div className="flex items-center justify-between">
        <h2 className="text-xl">نمودار فروش ماهانه</h2>
        <p className="text-sm text-txtSecondary">۳۰ روز اخیر</p>
      </div>
      <div className="mt-6 grid h-48 grid-cols-12 items-end gap-2">
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index} className="h-full flex flex-col justify-end">
            <div
              className="w-full rounded-md bg-gradient-to-t from-accentPrimary to-accentSecondary/70"
              style={{ height: `${40 + index * 4}%` }}
            />
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between text-xs text-txtSecondary">
        <span>هفته اول</span>
        <span>هفته دوم</span>
        <span>هفته سوم</span>
        <span>هفته چهارم</span>
      </div>
    </div>
  );
}
