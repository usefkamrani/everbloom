export const stats = [
  { label: "فروش امروز", value: "۶۴,۲۵۰,۰۰۰", change: "+۱۲٪" },
  { label: "سفارش‌های در انتظار", value: "۱۸", change: "-۳٪" },
  { label: "بازدید ماهانه", value: "۱۲۹,۴۰۰", change: "+۸٪" },
  { label: "میانگین سبد خرید", value: "۹۸۰,۰۰۰", change: "+۵٪" },
];

export const orders = [
  { id: "EV-2041", customer: "سارا احمدی", total: "۲,۴۸۰,۰۰۰", status: "آماده ارسال", time: "۱۵ دقیقه پیش" },
  { id: "EV-2039", customer: "محمد رضایی", total: "۱,۱۲۰,۰۰۰", status: "در حال پردازش", time: "۴۵ دقیقه پیش" },
  { id: "EV-2037", customer: "نگار سعیدی", total: "۳,۹۸۰,۰۰۰", status: "پرداخت شده", time: "۱ ساعت پیش" },
  { id: "EV-2035", customer: "پارسا رجبی", total: "۷۲۰,۰۰۰", status: "لغو شده", time: "۳ ساعت پیش" },
];

export const lowStock = [
  { name: "فیکوس لیراتا", sku: "PL-4481", qty: "۶ عدد" },
  { name: "زامیفولیا", sku: "PL-3140", qty: "۹ عدد" },
  { name: "پتوس ابلق", sku: "PL-2291", qty: "۱۲ عدد" },
];

export const messages = [
  { name: "الهه محسنی", subject: "پیگیری سفارش EV-2039", time: "۱۰:۲۲" },
  { name: "واحد تامین", subject: "تایید تامین ماهانه", time: "۰۹:۵۸" },
  { name: "علی اکبری", subject: "تغییر آدرس ارسال", time: "۰۹:۱۰" },
];

export const navItems = [
  { label: "داشبورد", href: "/admin" },
  { label: "محصولات", href: "/admin/products" },
  { label: "سفارش‌ها", href: "/admin/orders" },
  { label: "انبار", href: "/admin/inventory" },
  { label: "مشتریان", href: "/admin/customers" },
  { label: "تخفیف‌ها", href: "/admin/discounts" },
  { label: "گزارش‌ها", href: "/admin/reports" },
  { label: "تنظیمات", href: "/admin/settings" },
];
