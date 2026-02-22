"use client";
import { LandingProductCard } from "@/app/landing/Cards/landingProductCard";
import { TopCommentsCard } from "@/app/landing/Cards/topCommentsCard";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

export const SectionSix: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const body = document.body;

    if (isHovered) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }

    return () => {
      body.style.overflow = "auto";
    };
  }, [isHovered]);

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (scrollRef.current) {
      e.preventDefault();
      const scrollAmount = e.deltaY * 2;

      const newScrollLeft = scrollRef.current.scrollLeft + scrollAmount;

      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="h-[calc(100vh-80px)] w-lvw overflow-hidden flex flex-col">
      <div className="flex flex-col justify-between pr-8 pt-4 lg:mt-8 xl:mr-20 h-40 lg:h-24">
        <div className="flex flex-col lg:flex-row">
          <h1 className="text-3xl lg:text-4xl xl:text-4xl mr-2">
            تالار افتخارات ما
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row">
          <p className="text-xl xl:text-2xl ml-1">
            نظرات شما و رضایت از
          </p>
          <p className="text-xl xl:text-2xl">حال خوبتان با گیاهان جدیدتان</p>
        </div>
      </div>
      <div className="self-center mt-20">
        <div
          ref={scrollRef}
          className="px-8 xl:px-20 w-lvw flex flex-row justify-evenly overflow-x-auto py-4 scroll-smooth"
          onWheel={handleWheel}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
            {[
            {
              id: 1,
              name: "یوسف کامرانی پور",
              avatar: "/logo.svg",
              comment:
              "یک سال پیش یک گیاه ZZ از اینجا خریدم و هنوز مثل روز اول شاداب و سبزه. کد QR مراقبت که همراه گیاه بود خیلی به من کمک کرد تا آبیاری و نور مناسب رو یاد بگیرم؛ هر بار که برگ‌هاش رو می‌بینم دلم شاد می‌شه. ممنون از بسته‌بندی حرفه‌ای و محصول باکیفیت، قطعاً دوباره از شما خرید می‌کنم. 🌿✨",
              rating: 1,
              location: "تهران - نیاوران",
            },
            {
              id: 2,
              name: "سارا احمدی",
              avatar: "/logo.svg",
              comment:
              "سفارش خیلی سریع رسید و گیاه کاملاً سالم و شاداب بود. بسته‌بندی محکم و راهنمای ساده داخل بسته باعث شد بدون استرس از روز اول مراقبتش کنم. تجربه خرید بسیار دلپذیر بود و حتماً این فروشگاه رو به دوستانم توصیه می‌کنم.",
              rating: 4,
              location: "تهران - میدان ونک",
            },
            {
              id: 3,
              name: "امیر محمدی",
              avatar: "/logo.svg",
              comment:
              "بسته‌بندی عالی بود و گیاه بدون هیچ آسیبی به دستم رسید. پشتیبانی مشتریان هم سریع پاسخگو بود وقتی سوالی درباره نور مناسب پرسیدم. الان گیاه روی بالکنم عالی رشد کرده و روزانه از دیدنش لذت می‌برم.",
              rating: 5,
              location: "مشهد",
            },
            {
              id: 4,
              name: "ناهید رضایی",
              avatar: "/logo.svg",
              comment:
              "برای فردی که تازه‌کار هستم، این گیاه گزینه‌ی فوق‌العاده‌ای بود—مراقبتش ساده و راهنمای داخل بسته خیلی کاربردی بود. برگ‌های زیباش فضای اتاق رو زنده‌تر کرده و حالِ خونم بهتر شده. ممنون از راهنمایی‌های واضح و محصول سالم.",
              rating: 4,
              location: "اصفهان",
            },
            {
              id: 5,
              name: "حسن علوی",
              avatar: "/logo.svg",
              comment:
              "خدمات پس از فروش این فروشگاه واقعاً قابل تحسینه؛ یک سوال داشتم و سریع راهنمایی کردن، حتی پیگیری کردند که همه چیز خوب پیش رفته باشه. گیاه همچنان سرحال و قوی هست و از کیفیت و دوامش راضی‌ام. سپاس از تیم حرفه‌ای شما.",
              rating: 5,
              location: "تبریز",
            },
            {
              id: 6,
              name: "مهسا کریمی",
              avatar: "/logo.svg",
              comment:
              "کیفیت گیاه و سرعت ارسال فوق‌العاده بود؛ گیاه با تازگی و بدون هیچ مشکلی رسید. جدول آبیاری و نکات نگهداری داخل بسته کمک کرد تا اشتباه نکنم و سریع به نتیجه برسم. هدیه‌ای عالی به خودم بود و قطعاً دوباره سفارش می‌دم.",
              rating: 4,
              location: "شیراز",
            },
            ].map((c) => (
            <TopCommentsCard key={c.id} {...c} />
            ))}
        </div>
        <div className="hidden xl:flex flex-row justify-between w-full px-20 ">
          <Image
            src={"/scrollRight.svg"}
            alt="EverBloom | Apartment Plants"
            width={40}
            height={40}
            className="scale-100 hover:scale-125 transition cursor-pointer"
            onClick={() => {
              if (scrollRef.current) {
                scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
              }
            }}
          />
          <Image
            src={"/scrollLeft.svg"}
            alt="EverBloom | Apartment Plants"
            width={40}
            height={40}
            className="scale-100 hover:scale-125 transition cursor-pointer"
            onClick={() => {
              if (scrollRef.current) {
                scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};
