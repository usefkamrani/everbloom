"use client";
import AskQuestionCard from "@/app/landing/Cards/askQuestionCard";
import FAQCard from "@/app/landing/Cards/faqCard";
import React, { useRef, useState, useEffect } from "react";

export const SectionEight: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isMobileCardOpen, setMobileCardOpen] = useState(false);


  const handleCardOpen = () => {
    setMobileCardOpen(!isMobileCardOpen);
  }

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (scrollRef.current) {
      e.preventDefault();
      const scrollAmount = e.deltaY * 2;

      const newScrollLeft = scrollRef.current.scrollLeft + scrollAmount;
      const scrollWidth = scrollRef.current.scrollWidth;
      const clientWidth = scrollRef.current.clientWidth;

      if (newScrollLeft <= 0 || newScrollLeft >= scrollWidth - clientWidth) {
        document.body.style.overflow = "auto";
      } else {
        document.body.style.overflow = "hidden";
      }

      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };


return (
  <div className="h-[calc(100vh-80px)] w-lvw overflow-hidden flex flex-col">
    <div className="flex flex-col justify-between pr-8 pt-4 lg:mt-8 xl:mr-20 h-28 lg:h-24">
      <h1 className="text-3xl lg:text-4xl xl:text-4xl">سوالی داری؟</h1>
      <div className="flex flex-col lg:flex-row">
        <p className="text-xl xl:text-2xl ml-1">
          چه مراقبت از گیاهت باشه چه هر چیز دیگه‌ای
        </p>
        <p className="text-xl xl:text-2xl">ما هوات رو داریم</p>
      </div>
    </div>

    <div className="flex flex-row mx-8 xl:mx-20 justify-center overflow-scroll grow">
      <div className="grow mt-8 ml-4 overflow-scroll">
        <FAQCard
          faq={{
            question: "چطور از گیاه خودم مراقبت کنم؟",
            answer:
              "نگران نباش! اگر تا ۴۸ ساعت عکس ارسال کنی، گیاهت رو رایگان جایگزین می‌کنیم. بسته‌بندی کنترل‌شده‌ی ما باعث میشه ۹۹٪ گیاه‌ها سالم به دستت برسن.",
          }}
        />

        <FAQCard
          faq={{
            question: "سیاست بازگشت کالا چیه؟",
            answer: "می‌تونی تا ۳۰ روز بعد از خرید، گیاهت رو مرجوع کنی.",
          }}
        />

        <FAQCard
          faq={{
            question: "ارسال در همان روز دارید؟",
            answer:
              "بله، سفارش‌هایی که قبل از ظهر ثبت بشن، در همان روز ارسال می‌شن.",
          }}
        />

        <FAQCard
          faq={{
            question: "می‌تونم سفارشم رو شخصی‌سازی کنم؟",
            answer:
              "حتماً! هنگام ثبت سفارش می‌تونی جزئیات رو به دلخواه تغییر بدی.",
          }}
        />

        <FAQCard
          faq={{
            question: "چطور از گیاه خودم مراقبت کنم؟",
            answer:
              "نگران نباش! اگر تا ۴۸ ساعت عکس ارسال کنی، گیاهت رو رایگان جایگزین می‌کنیم. بسته‌بندی کنترل‌شده‌ی ما باعث میشه ۹۹٪ گیاه‌ها سالم به دستت برسن.",
          }}
        />

        <FAQCard
          faq={{
            question: "سیاست بازگشت کالا چیه؟",
            answer: "می‌تونی تا ۳۰ روز بعد از خرید، گیاهت رو مرجوع کنی.",
          }}
        />

        <FAQCard
          faq={{
            question: "ارسال در همان روز دارید؟",
            answer:
              "بله، سفارش‌هایی که قبل از ظهر ثبت بشن، در همان روز ارسال می‌شن.",
          }}
        />

        <FAQCard
          faq={{
            question: "می‌تونم سفارشم رو شخصی‌سازی کنم؟",
            answer:
              "حتماً! هنگام ثبت سفارش می‌تونی جزئیات رو به دلخواه تغییر بدی.",
          }}
        />
      </div>

      <div className="hidden xl:flex w-[30%]">
        <AskQuestionCard xl />
      </div>
    </div>

    <p
      className="xl:hidden self-end px-8 py-4 text-accentSecondary"
      onClick={handleCardOpen}
    >
      پاسخ سوالت رو پیدا نکردی؟
    </p>

    {isMobileCardOpen && (
      <div className="w-full h-full xl:hidden absolute bg-bgPrimary/90 backdrop-blur-xs flex flex-col justify-center items-center">
        <AskQuestionCard closeModal={handleCardOpen} />
      </div>
    )}
  </div>
);

};
