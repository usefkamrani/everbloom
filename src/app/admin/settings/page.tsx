export default function AdminSettingsPage() {
  return (
    <>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 className="text-3xl">تنظیمات</h1>
          <p className="text-txtSecondary">
            تنظیمات فروشگاه، پرداخت‌ها و دسترسی کاربران.
          </p>
        </div>
        <button className="h-11 px-5 rounded-lg bg-accentPrimary text-txtPrimary">
          ذخیره تغییرات
        </button>
      </div>

      <section className="grid gap-6 xl:grid-cols-[1.2fr_1fr]">
        <div className="rounded-2xl border border-border bg-bgSecondary/80 p-5 space-y-4">
          <h2 className="text-xl">اطلاعات فروشگاه</h2>
          <div className="grid gap-3">
            <input
              className="h-11 rounded-lg bg-bgPrimary/40 border border-border px-3 text-txtPrimary"
              placeholder="نام فروشگاه"
              defaultValue="EverBloom"
            />
            <input
              className="h-11 rounded-lg bg-bgPrimary/40 border border-border px-3 text-txtPrimary"
              placeholder="ایمیل پشتیبانی"
              defaultValue="support@everbloom.ir"
            />
            <input
              className="h-11 rounded-lg bg-bgPrimary/40 border border-border px-3 text-txtPrimary"
              placeholder="شماره تماس"
              defaultValue="۰۹۰۰-۱۲۳-۴۵۶۷"
            />
            <textarea
              className="min-h-[110px] rounded-lg bg-bgPrimary/40 border border-border px-3 py-2 text-txtPrimary"
              placeholder="آدرس"
              defaultValue="تهران، خیابان ولیعصر، پلاک ۱۲۳"
            />
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-bgSecondary/80 p-5 space-y-4">
          <h2 className="text-xl">سطح دسترسی</h2>
          <div className="space-y-3 text-sm text-txtSecondary">
            <div className="flex items-center justify-between">
              <span>مدیر فروش</span>
              <span>دسترسی کامل</span>
            </div>
            <div className="flex items-center justify-between">
              <span>پشتیبانی</span>
              <span>مشاهده سفارش‌ها</span>
            </div>
            <div className="flex items-center justify-between">
              <span>انباردار</span>
              <span>ثبت موجودی</span>
            </div>
          </div>
          <button className="h-11 w-full rounded-lg border border-border text-txtPrimary">
            مدیریت کاربران
          </button>
        </div>
      </section>

      <section className="rounded-2xl border border-border bg-bgSecondary/80 p-5 space-y-4">
        <h2 className="text-xl">درگاه پرداخت</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <input
            className="h-11 rounded-lg bg-bgPrimary/40 border border-border px-3 text-txtPrimary"
            placeholder="شماره پایانه"
            defaultValue="TERMINAL-8891"
          />
          <input
            className="h-11 rounded-lg bg-bgPrimary/40 border border-border px-3 text-txtPrimary"
            placeholder="توکن امنیتی"
            defaultValue="****-****-1234"
          />
        </div>
        <button className="h-11 w-full rounded-lg bg-accentPrimary text-txtPrimary">
          بروزرسانی اتصال
        </button>
      </section>
    </>
  );
}
