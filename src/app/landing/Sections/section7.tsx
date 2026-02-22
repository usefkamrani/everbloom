import { BeginnerKitCard } from "@/app/landing/Cards/beginnerKitCard";
import React from "react";

export const SectionSeven = () => {
  return (
    <div className="h-auto w-lvw overflow-hidden flex flex-col">
      <div className="flex flex-col justify-between pr-8 pt-4 lg:mt-8 xl:mr-20 h-28 lg:h-24">
        <h1 className="text-3xl lg:text-4xl xl:text-4xl">
          پکیج پیشنهادی ما
        </h1>
        <div className="flex flex-col lg:flex-row">
          <p className="text-xl xl:text-2xl mr-1">پیشنهادات ما بر اساس</p>
          <p className="text-xl xl:text-2xl">نیاز ها و سلیقه شما</p>
        </div>
      </div>
      <div className="landing-section7-grid grow">
        <BeginnerKitCard imageSrc="/EasyCareKit.png" title="شروع سبز" desc="کیت مناسب برای شروع آسان با گیاهان کم‌توقع و مقاوم" similarPlants={["زاموفیلیا", "سانسوریا", "پتوس"]} price="۲,۱۰۰,۰۰۰ تومان" isFullWidth/>
        <BeginnerKitCard imageSrc="/EasyCareKit.png" title="آرامش خانگی" desc="انتخابی مینیمال برای خانه‌های پرنور با نگهداری ساده" similarPlants={["فیکوس", "شامادورا", "کالانکوئه"]} price="۲,۱۰۰,۰۰۰ تومان"/>
        <BeginnerKitCard imageSrc="/EasyCareKit.png" title="هوای تازه" desc="ترکیب گیاهانی برای تصفیه بهتر هوا و حس شادابی بیشتر" similarPlants={["اسپاتی‌فیلوم", "نخل اریکا", "دراسنا"]} price="۲,۱۰۰,۰۰۰ تومان"/>
        <BeginnerKitCard imageSrc="/EasyCareKit.png" title="سبزِ خاص" desc="مناسب فضاهای کوچک با گیاهان متفاوت و جذاب" similarPlants={["آلوئه‌ورا", "کراسولا", "آگلونما"]} price="۲,۱۰۰,۰۰۰ تومان" isFullWidth/>
      </div>
    </div>
  );
};
