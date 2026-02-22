import Image from "next/image";
import React from "react";

export const SectionOne = () => {
  return (
    <div className="h-[calc(100vh-80px)] w-lvw relative overflow-hidden flex flex-col">
      <div className="z-10 flex flex-col justify-between pr-8 pt-8 lg:mt-12 xl:mr-20 h-96 xl:h-[500px] ">
        <div className="h-44 xl:h-[230px] flex flex-col justify-between">
        <div>
          <h1 className="text-5xl lg:text-6xl xl:text-7xl mb-6">سادگی</h1>
          <h1 className="text-5xl lg:text-6xl xl:text-7xl">ریشه در طبیعت دارد</h1>
        </div>
        <div className="flex flex-col lg:flex-row">
          <p className="text-xl xl:text-3xl ml-1">با گیاهان خانگی ما</p>
          <p className="text-xl xl:text-3xl">هوایی پاکیزه را تجربه کنید</p>
        </div>
        </div>
        <div className="flex flex-col lg:flex-row">
            <button className="w-48 xl:w-64 h-12 rounded-lg bg-accentSecondary active:bg-green-600 ml-3 hover:bg-[rgba(76,175,80,1)] transition-colors duration-200">
            <h2 className="text-xl font-bold text-bgPrimary">همین حالا خرید کنید</h2>
            </button>
          <button className="w-48 h-12">
            <h3 className="text-lg text-accentSecondary">ورود به آموزشکده</h3>
          </button>
        </div>
      </div>
      <div className="absolute z-0 bottom-0 left-[-185] sm:left-0 xl:left-20 w-[600px] h-[600px] lg:w-[700px] lg:h-[700px] xl:w-[calc(100vh-80px)] xl:h-[calc(100vh-80px)]">
        <Image
        className="object-contain"
          fill
          quality={100}
          src={"/plants/landing-section1-plant.png"}
          alt="EverBloom | Plants for your home"
        />
      </div>
    </div>
  );
};
