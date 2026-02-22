import DeliveryCard from "@/components/whyUsCards/deliveryCard";
import GuaranteeCard from "@/components/whyUsCards/guaranteeCard";
import LegacyCard from "@/components/whyUsCards/legacyCard";
import QrCodeCard from "@/components/whyUsCards/qrCodeCard";
import React from "react";

export const SectionThree = () => {
  return (
    <div className="lg:h-[calc(100vh-80px)] w-lvw overflow-hidden flex flex-col">
      <div className="flex flex-col justify-between pr-8 pt-4 lg:mt-8 xl:mr-20 h-28 lg:h-24">
        <h1 className="text-3xl lg:text-4xl xl:text-4xl">چرااوربلوم؟</h1>
        <div className="flex flex-col lg:flex-row">
          <p className="text-xl xl:text-2xl mr-1">چه چیزی سرویس های ما را</p>
          <p className="text-xl xl:text-2xl">منحصر به فرد میکند؟</p>
        </div>
      </div>
      <div className="landing-section3-grid grow">
        <GuaranteeCard className="col-span-2 row-span-2 lg:row-span-3 h-[450px] lg:h-auto lg:clip-path"/>
        <DeliveryCard className="h-[250px] lg:h-auto lg:row-span-2"/>
        <LegacyCard className="h-[250px] lg:h-auto lg:row-span-2"/>
        <QrCodeCard className="col-span-2 h-[200px] lg:h-auto"/>
      </div>
    </div>
  );
};
