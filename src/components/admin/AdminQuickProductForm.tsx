export function AdminQuickProductForm() {
  return (
    <div className="rounded-2xl border border-border bg-bgSecondary/80 p-5 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl">افزودن محصول سریع</h2>
        <span className="text-xs text-txtSecondary">فرم کوتاه</span>
      </div>
      <div className="grid gap-3">
        <input
          className="h-11 rounded-lg bg-bgPrimary/40 border border-border px-3 text-txtPrimary"
          placeholder="نام محصول"
        />
        <div className="grid gap-3 sm:grid-cols-2">
          <input
            className="h-11 rounded-lg bg-bgPrimary/40 border border-border px-3 text-txtPrimary"
            placeholder="کد کالا"
          />
          <input
            className="h-11 rounded-lg bg-bgPrimary/40 border border-border px-3 text-txtPrimary"
            placeholder="قیمت (تومان)"
          />
        </div>
        <textarea
          className="min-h-[110px] rounded-lg bg-bgPrimary/40 border border-border px-3 py-2 text-txtPrimary"
          placeholder="توضیحات کوتاه"
        />
        <button className="h-11 rounded-lg bg-accentPrimary text-txtPrimary">
          ذخیره محصول
        </button>
      </div>
    </div>
  );
}
