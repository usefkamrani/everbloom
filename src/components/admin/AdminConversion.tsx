export function AdminConversion() {
  return (
    <div className="rounded-2xl border border-border bg-bgSecondary/80 p-5 space-y-4">
      <h2 className="text-xl">نرخ تبدیل</h2>
      <div className="space-y-3">
        <div>
          <div className="flex items-center justify-between text-sm">
            <span>بازدید</span>
            <span>۱۰۰٪</span>
          </div>
          <div className="mt-2 h-2 rounded-full bg-border">
            <div className="h-2 w-full rounded-full bg-accentSecondary" />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between text-sm">
            <span>افزودن به سبد</span>
            <span>۳۸٪</span>
          </div>
          <div className="mt-2 h-2 rounded-full bg-border">
            <div className="h-2 w-[38%] rounded-full bg-accentPrimary" />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between text-sm">
            <span>پرداخت موفق</span>
            <span>۲۲٪</span>
          </div>
          <div className="mt-2 h-2 rounded-full bg-border">
            <div className="h-2 w-[22%] rounded-full bg-emerald-400/70" />
          </div>
        </div>
      </div>
      <button className="w-full h-11 rounded-lg border border-border text-txtPrimary">
        تحلیل جزئی
      </button>
    </div>
  );
}
