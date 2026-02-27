"use client";
import React from "react";
import { SectionOne } from "@/app/landing/Sections/section1";
import { SectionTwo } from "@/app/landing/Sections/section2";
import { SectionThree } from "@/app/landing/Sections/section3";
import { SectionFour } from "@/app/landing/Sections/section4";
import { SectionFive } from "@/app/landing/Sections/section5";
import { SectionSix } from "@/app/landing/Sections/section6";
import { SectionSeven } from "@/app/landing/Sections/section7";
import { SectionEight } from "@/app/landing/Sections/section8";
export default function Home() {
  return (
    <div className="overflow-visible">
      <SectionOne />
      <div className="h-20"></div>
      <SectionTwo />
      <div className="h-20"></div>
      <SectionThree />
      <div className="h-20"></div>
      <SectionFour />
      <div className="h-20"></div>
      <SectionFive />
      <div className="h-20"></div>
      <SectionSix />
      <div className="h-20"></div>
      <SectionSeven />
      <div className="h-20"></div>
      <SectionEight />
      <div className="h-20"></div>

    </div>
  );
}
