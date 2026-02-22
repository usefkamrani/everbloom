import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-[100%] bg-bgPrimary relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-10 h-64 w-64 rounded-full bg-accentSecondary/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-accentPrimary/20 blur-3xl" />
      </div>

      <div className="relative px-4 xl:px-[5vw] py-12">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <div className="rounded-2xl border border-border bg-bgSecondary/70 p-8 space-y-4">
            <h1 className="text-3xl">ورود به EverBloom</h1>
            <p className="text-txtSecondary">
              به پنل کاربری خود وارد شوید و سفارش‌ها را مدیریت کنید.
            </p>
            <div className="mt-6 space-y-4">
              <input
                className="h-12 w-full rounded-lg bg-bgPrimary/40 border border-border px-4 text-txtPrimary"
                placeholder="ایمیل یا شماره موبایل"
              />
              <input
                className="h-12 w-full rounded-lg bg-bgPrimary/40 border border-border px-4 text-txtPrimary"
                placeholder="رمز عبور"
                type="password"
              />
              <div className="flex flex-wrap items-center justify-between text-sm text-txtSecondary">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-accentPrimary" />
                  مرا به خاطر بسپار
                </label>
                <button className="text-accentSecondary">فراموشی رمز عبور</button>
              </div>
              <button className="h-12 w-full rounded-lg bg-accentPrimary text-txtPrimary">
                ورود
              </button>
              <p className="text-sm text-txtSecondary text-center">
                حساب ندارید؟{" "}
                <Link className="text-accentSecondary" href="/signup">
                  ثبت نام کنید
                </Link>
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-bgSecondary/60 p-8 space-y-6">
            <h2 className="text-2xl">مزایای حساب کاربری</h2>
            <ul className="space-y-3 text-txtSecondary">
              <li>پیگیری لحظه‌ای وضعیت ارسال و تحویل</li>
              <li>دسترسی به پیشنهادهای اختصاصی و تخفیف‌ها</li>
              <li>ثبت سریع محصولات محبوب و علاقه‌مندی‌ها</li>
            </ul>
            <div className="rounded-xl border border-border bg-bgPrimary/40 p-4">
              <p className="text-sm text-txtSecondary">پشتیبانی فوری</p>
              <p className="text-lg">۰۹۰۰-۱۲۳-۴۵۶۷</p>
              <p className="text-xs text-txtSecondary">همه روزه ۹ تا ۲۰</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
