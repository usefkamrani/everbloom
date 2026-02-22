"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "./adminData";

export function AdminSidebar() {
  const pathname = usePathname();
  return (
    <aside className="bg-bgSecondary/80 border border-border rounded-2xl p-5 space-y-6">
      <div>
        <p className="text-sm text-txtSecondary">حساب کاربری</p>
        <h2 className="text-xl">مدیر فروش</h2>
        <p className="text-sm text-txtSecondary">سطح دسترسی: کامل</p>
      </div>
      <nav className="space-y-2">
        {navItems.map((item, index) => {
          const isActive =
            item.href === "/admin"
              ? pathname === "/admin"
              : pathname?.startsWith(item.href);

          return (
          <div
            key={item.href}
            className={`flex items-center justify-between rounded-lg transition-colors ${
              isActive
                ? "bg-accentPrimary/20 text-txtPrimary"
                : "text-txtSecondary hover:bg-border/50"
            }`}
          >
            <Link className="flex-1 px-3 py-2" href={item.href}>
              {item.label}
            </Link>
            {isActive && (
              <span className="ml-2 text-xs bg-accentSecondary text-bgPrimary px-2 py-0.5 rounded-full">
                فعال
              </span>
            )}
          </div>
        )})}
      </nav>
      <div className="border-t border-border pt-4">
        <p className="text-sm text-txtSecondary">وضعیت سیستم</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-sm">درگاه پرداخت</span>
          <span className="text-xs bg-emerald-400/20 text-emerald-300 px-2 py-0.5 rounded-full">
            پایدار
          </span>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-sm">حمل و نقل</span>
          <span className="text-xs bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded-full">
            هشدار تاخیر
          </span>
        </div>
      </div>
    </aside>
  );
}
