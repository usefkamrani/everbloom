import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="min-h-[100%] bg-bgPrimary relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-10 h-64 w-64 rounded-full bg-accentPrimary/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-accentSecondary/15 blur-3xl" />
      </div>

      <div className="relative px-4 xl:px-[5vw] py-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="rounded-2xl border border-border bg-bgSecondary/60 p-8 space-y-6">
            <h2 className="text-2xl">چرا ثبت نام کنیم؟</h2>
            <ul className="space-y-3 text-txtSecondary">
              <li>ساخت لیست خرید و مدیریت گیاهان منتخب</li>
              <li>دریافت یادآوری آبیاری و نگهداری گیاه</li>
              <li>تخفیف‌های مناسبتی و پیشنهادهای ویژه</li>
            </ul>
            <div className="rounded-xl border border-border bg-bgPrimary/40 p-4">
              <p className="text-sm text-txtSecondary">ارسال سریع</p>
              <p className="text-lg">۲۴ تا ۴۸ ساعت</p>
              <p className="text-xs text-txtSecondary">در شهرهای منتخب</p>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-bgSecondary/70 p-8 space-y-4">
            <h1 className="text-3xl">ثبت نام در EverBloom</h1>
            <p className="text-txtSecondary">
              اطلاعات خود را وارد کنید تا حساب کاربری شما ساخته شود.
            </p>
            <div className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  className="h-12 rounded-lg bg-bgPrimary/40 border border-border px-4 text-txtPrimary"
                  placeholder="نام"
                />
                <input
                  className="h-12 rounded-lg bg-bgPrimary/40 border border-border px-4 text-txtPrimary"
                  placeholder="نام خانوادگی"
                />
              </div>
              <input
                className="h-12 w-full rounded-lg bg-bgPrimary/40 border border-border px-4 text-txtPrimary"
                placeholder="ایمیل"
              />
              <input
                className="h-12 w-full rounded-lg bg-bgPrimary/40 border border-border px-4 text-txtPrimary"
                placeholder="شماره موبایل"
              />
              <input
                className="h-12 w-full rounded-lg bg-bgPrimary/40 border border-border px-4 text-txtPrimary"
                placeholder="رمز عبور"
                type="password"
              />
              <label className="flex items-center gap-2 text-sm text-txtSecondary">
                <input type="checkbox" className="accent-accentPrimary" />
                قوانین و شرایط را می‌پذیرم
              </label>
              <button className="h-12 w-full rounded-lg bg-accentPrimary text-txtPrimary">
                ساخت حساب
              </button>
              <p className="text-sm text-txtSecondary text-center">
                قبلا ثبت نام کرده‌اید؟{" "}
                <Link className="text-accentSecondary" href="/login">
                  وارد شوید
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
