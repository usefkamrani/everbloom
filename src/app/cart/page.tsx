"use client";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

const initialItems = [
  {
    id: 1,
    title: "آلوئه‌ورا",
    subtitle: "نور متوسط • آبیاری کم",
    img: "plants (1)",
    size: "متوسط",
    pot: "خاکستری",
    price: 3950000,
    oldPrice: 4250000,
    quantity: 1,
  },
  {
    id: 2,
    title: "سانسوریا",
    subtitle: "کم‌نور • مقاوم",
    img: "plants (2)",
    size: "بزرگ",
    pot: "مشکی",
    price: 3850000,
    oldPrice: 4120000,
    quantity: 2,
  },
];

const formatPrice = (value: number) =>
  new Intl.NumberFormat("fa-IR").format(value) + " ریال";

const CartPage = () => {
  const [items, setItems] = useState(initialItems);

  const totals = useMemo(() => {
    const itemsTotal = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const oldTotal = items.reduce(
      (sum, item) => sum + item.oldPrice * item.quantity,
      0
    );
    const discount = oldTotal - itemsTotal;
    return { itemsTotal, discount, finalTotal: itemsTotal };
  }, [items]);

  const updateQty = (id: number, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="w-full px-6 md:px-12 lg:px-20 py-10">
      <nav className="flex flex-wrap items-center gap-2 text-sm text-txtSecondary">
        <Link href="/" className="hover:text-accentSecondary transition-colors">
          خانه
        </Link>
        <span>/</span>
        <span className="text-txtPrimary">سبد خرید</span>
      </nav>

      <header className="mt-6 flex flex-col gap-2">
        <h1 className="text-3xl lg:text-4xl font-semibold text-txtPrimary">
          سبد خرید شما
        </h1>
        <p className="text-sm text-txtSecondary">
          انتخاب‌های سبزت رو مرور کن و اگر آماده‌ای، وارد مرحله پرداخت شو.
        </p>
      </header>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1.4fr_0.8fr] gap-8">
        <section className="flex flex-col gap-4">
          {items.length === 0 && (
            <div className="rounded-2xl border border-border bg-bgSecondary/20 p-8 text-center">
              <h2 className="text-xl text-txtPrimary">سبد خریدت خالیه</h2>
              <p className="text-sm text-txtSecondary mt-2">
                برای شروع، از فروشگاه یک گیاه انتخاب کن.
              </p>
              <Link
                href="/shop"
                className="inline-flex mt-4 h-11 px-5 rounded-lg bg-accentPrimary text-txtPrimary items-center"
              >
                رفتن به فروشگاه
              </Link>
            </div>
          )}

          {items.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-border bg-bgSecondary/20 p-4 md:p-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4">
                <div className="relative aspect-square rounded-xl border border-border bg-bgSecondary/30 overflow-hidden">
                  <Image
                    src={`/plants/productImages/${item.img}.png`}
                    alt={`EverBloom | ${item.title}`}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h2 className="text-xl text-txtPrimary">{item.title}</h2>
                      <button
                        className="text-xs text-txtSecondary hover:text-accentSecondary transition-colors"
                        onClick={() => removeItem(item.id)}
                      >
                        حذف از سبد
                      </button>
                    </div>
                    <p className="text-sm text-txtSecondary">{item.subtitle}</p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-txtSecondary">
                    <span className="px-3 py-1 rounded-full border border-border">
                      اندازه: {item.size}
                    </span>
                    <span className="px-3 py-1 rounded-full border border-border">
                      رنگ گلدان: {item.pot}
                    </span>
                    <span className="px-3 py-1 rounded-full border border-border">
                      افزودنی: کود مایع تقویتی
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <p className="text-lg text-accentSecondary">
                        {formatPrice(item.price)}
                      </p>
                      <p className="text-xs line-through text-txtSecondary">
                        {formatPrice(item.oldPrice)}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 px-3 py-2 rounded-lg border border-border">
                      <button
                        className="text-lg text-txtPrimary"
                        onClick={() => updateQty(item.id, 1)}
                        aria-label="افزایش تعداد"
                      >
                        +
                      </button>
                      <span className="text-sm text-txtSecondary">
                        {item.quantity}
                      </span>
                      <button
                        className="text-lg text-txtPrimary"
                        onClick={() => updateQty(item.id, -1)}
                        aria-label="کاهش تعداد"
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="rounded-2xl border border-border bg-bgSecondary/20 p-6">
            <h3 className="text-lg text-txtPrimary mb-3">هدیه و پیام همراه</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input
                className="h-12 rounded-lg border border-border bg-bgPrimary/40 px-4 text-sm text-txtPrimary"
                placeholder="نام گیرنده"
                aria-label="نام گیرنده"
              />
              <input
                className="h-12 rounded-lg border border-border bg-bgPrimary/40 px-4 text-sm text-txtPrimary"
                placeholder="شماره تماس"
                aria-label="شماره تماس"
              />
              <textarea
                className="md:col-span-2 min-h-[110px] rounded-lg border border-border bg-bgPrimary/40 px-4 py-3 text-sm text-txtPrimary"
                placeholder="پیام کوتاه برای کارت هدیه"
                aria-label="پیام کوتاه برای کارت هدیه"
              />
            </div>
          </div>
        </section>

        <aside className="flex flex-col gap-4">
          <div className="rounded-2xl border border-border bg-bgSecondary/20 p-6">
            <h3 className="text-lg text-txtPrimary mb-4">خلاصه سفارش</h3>
            <div className="flex flex-col gap-3 text-sm text-txtSecondary">
              <div className="flex items-center justify-between">
                <span>جمع کالاها</span>
                <span className="text-txtPrimary">
                  {formatPrice(totals.itemsTotal)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>هزینه ارسال</span>
                <span className="text-txtPrimary">رایگان</span>
              </div>
              <div className="flex items-center justify-between">
                <span>تخفیف</span>
                <span className="text-accentSecondary">
                  -{formatPrice(totals.discount)}
                </span>
              </div>
              <div className="h-[1px] w-full bg-gradient-to-r from-accentPrimary/0 via-accentPrimary to-accentPrimary/0" />
              <div className="flex items-center justify-between text-base">
                <span className="text-txtPrimary">مبلغ نهایی</span>
                <span className="text-accentSecondary">
                  {formatPrice(totals.finalTotal)}
                </span>
              </div>
            </div>

            <button className="mt-5 w-full h-12 rounded-lg bg-accentPrimary text-txtPrimary">
              ادامه فرآیند خرید
            </button>

            <div className="mt-4 flex items-center gap-2 text-xs text-txtSecondary">
              <span className="w-2 h-2 rounded-full bg-accentSecondary" />
              پرداخت امن با درگاه معتبر
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-bgSecondary/20 p-6">
            <h3 className="text-lg text-txtPrimary mb-3">کد تخفیف</h3>
            <div className="flex gap-2">
              <input
                className="flex-1 h-11 rounded-lg border border-border bg-bgPrimary/40 px-3 text-sm text-txtPrimary"
                placeholder="کد را وارد کنید"
                aria-label="کد تخفیف"
              />
              <button className="h-11 px-4 rounded-lg border border-border text-sm text-txtPrimary">
                اعمال
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-bgSecondary/20 p-6">
            <h3 className="text-lg text-txtPrimary mb-3">پیشنهاد برای شما</h3>
            <div className="flex items-center gap-3">
              <div className="relative w-16 h-16 rounded-lg border border-border bg-bgSecondary/30 overflow-hidden">
                <Image
                  src="/plants/productImages/plants (7).png"
                  alt="EverBloom | پوتوس"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-txtPrimary">پوتوس</span>
                <span className="text-xs text-txtSecondary">
                  {formatPrice(3760000)}
                </span>
              </div>
              <button className="ml-auto h-9 px-3 rounded-lg border border-border text-xs text-txtPrimary">
                افزودن
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CartPage;
