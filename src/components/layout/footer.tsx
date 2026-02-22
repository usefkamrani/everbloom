import Image from "next/image";
import React from "react";

export const MyFooter = () => {
  return (
    <div className="w-full flex flex-col items-center justify-evenly">
      <Image
        src="/logo.svg"
        alt="لوگوی اوربلوم | گیاهان آپارتمانی برای زندگی مدرن"
        width={100}
        height={100}
      />

      <h1 className="text-3xl">اوربلوم</h1>

      <p>زیبایی طبیعت برای زندگی شهری.</p>

      <div className="flex flex-row mt-2 mb-3 gap-2">
        <a
          href="https://www.pinterest.com"
          aria-label="پینترست اوربلوم"
          rel="noreferrer"
          target="_blank"
        >
          <Image
            src="/pinterestLogo.svg"
            alt="پینترست اوربلوم"
            width={35}
            height={35}
            className="scale-100 hover:scale-125 transition-transform cursor-pointer"
          />
        </a>

        <a
          href="https://t.me"
          aria-label="تلگرام اوربلوم"
          rel="noreferrer"
          target="_blank"
        >
          <Image
            src="/telegramLogo.svg"
            alt="تلگرام اوربلوم"
            width={35}
            height={35}
            className="scale-100 hover:scale-125 transition-transform cursor-pointer"
          />
        </a>

        <a
          href="https://www.instagram.com"
          aria-label="اینستاگرام اوربلوم"
          rel="noreferrer"
          target="_blank"
        >
          <Image
            src="/instagramLogo.svg"
            alt="اینستاگرام اوربلوم"
            width={35}
            height={35}
            className="scale-100 hover:scale-125 transition-transform cursor-pointer"
          />
        </a>

        <a
          href="https://www.tiktok.com"
          aria-label="تیک‌تاک اوربلوم"
          rel="noreferrer"
          target="_blank"
        >
          <Image
            src="/tiktokLogo.svg"
            alt="تیک‌تاک اوربلوم"
            width={35}
            height={35}
            className="scale-100 hover:scale-125 transition-transform cursor-pointer"
          />
        </a>
      </div>

      <div className="w-[90vw] h-[1px] bg-linear-to-r from-accentPrimary/0 via-accentPrimary to-accentPrimary/0"></div>

      <p className="text-sm mt-2">© ۲۰۲۶ اوربلوم — پرورش رویاهای سبز.</p>
    </div>
  );
};



