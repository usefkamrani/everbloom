"use client"
import { LandingProductCard } from "@/app/landing/Cards/landingProductCard";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";

export const SectionTwo: React.FC = () => {

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (scrollRef.current) {
      e.preventDefault();
      const scrollAmount = e.deltaY * 2;

      const newScrollLeft = scrollRef.current.scrollLeft + scrollAmount;

      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="h-[calc(100vh-80px)] w-lvw overflow-visible flex flex-col">
      <div className="flex flex-col justify-between pr-8 pt-4 lg:mt-8 xl:mr-20 h-40 lg:h-24">
        <div className="flex flex-col lg:flex-row">
          <h1 className="text-3xl lg:text-4xl xl:text-4xl ml-2">اوربلوم برای خانه شما</h1>
          <h1 className="text-3xl lg:text-4xl xl:text-4xl">چه پیشنهادی دارد؟</h1>
        </div>
        <div className="flex flex-col lg:flex-row">
          <p className="text-xl xl:text-2xl ml-1">بهترین محصولات ما</p>
          <p className="text-xl xl:text-2xl">برای طراوت منزل شما</p>
        </div>
      </div>
      <div className="self-center mt-8">
        <div
          className="px-8 xl:px-20 w-lvw flex flex-row justify-evenly overflow-x-auto py-4 scroll-smooth"
          ref={scrollRef}
          onWheel={handleWheel}
        >
          {[
            { id: 1, title: "گیاه فیلودندرون", price: "۱۹۹٬۰۰۰ تومان", image: "/plants/productImages/plants (1).png", description: "طراحی شیک برای گوشه‌های منزل" },
            { id: 2, title: "سانسوریا", price: "۱۵۰٬۰۰۰ تومان", image: "/plants/productImages/plants (2).png", description: "نگهداری بسیار آسان، مناسب مبتدی‌ها" },
            { id: 3, title: "پتوس طلایی", price: "۱۶۵٬۰۰۰ تومان", image: "/plants/productImages/plants (3).png", description: "شاخ و برگ براق و پرپشت" },
            { id: 4, title: "اسپاتی فیلوم", price: "۲۱۰٬۰۰۰ تومان", image: "/plants/productImages/plants (4).png", description: "پاک‌کنندهٔ هوای داخلی" },
            { id: 5, title: "زامیفولیا", price: "۱۸۵٬۰۰۰ تومان", image: "/plants/productImages/plants (5).png", description: "مقاوم در برابر کم‌آبی" },
            { id: 6, title: "میکس کاکتوس", price: "۱۲۰٬۰۰۰ تومان", image: "/plants/productImages/plants (6).png", description: "مجموعه‌ای از کاکتوس‌های کوچک و متنوع" },
          ].map(product => (
            <LandingProductCard
              key={product.id}
              {...product}
            />
          ))}
        </div>
        <div className="hidden xl:flex flex-row justify-between w-full px-20">
          <Image
            src={"/scrollRight.svg"}
            alt="EverBloom | Apartment Plants"
            width={40}
            height={40}
            className="scale-100 hover:scale-125 transition cursor-pointer"
            onClick={() => {
              if (scrollRef.current) {
                scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
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
                scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
              }
            }}
          />

        </div>

      </div>
    </div>
  );
};