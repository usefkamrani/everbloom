"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-20 text-txtPrimary">
      <motion.h1
        className="text-8xl font-light"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        404
      </motion.h1>
      <p className="text-sm text-txtSecondary text-center max-w-lg">
        این صفحه پیدا نشد. شاید آدرس را اشتباه وارد کرده‌اید یا گیاه مورد نظر جابه‌جا شده است.
      </p>
      <Link
        href="/"
        className="h-11 px-6 rounded-lg bg-accentPrimary text-txtPrimary flex items-center"
      >
        بازگشت به خانه
      </Link>
    </div>
  );
}
