import React from "react";
import SpotlightCard from "../../../components/imported/spotlightCard";
import Image from "next/image";

type LandingProductCardProps = {
  id?: number | string;
  title?: string;
  price?: string;
  image?: string;
  description?: string; // short description
  features?: string[]; // optional list of bullet features
  spotlightColor?: `rgba(${number}, ${number}, ${number}, ${number})`;
};

export const LandingProductCard: React.FC<LandingProductCardProps> = ({
  title = "زاموفیلیا",
  price = "۱,۶۸۰,۰۰۰ تومان",
  image = "/plants/landing-section2-plant.png",
  description,
  features = ["نیازمند نور کم", "تصفیه کننده هوا", "امن برای حیوانات خانگی", "سایز متوسط"],
  spotlightColor = "rgba(76, 175, 80, 1)",
}) => {
  return (
    <div>
      <SpotlightCard spotlightColor={spotlightColor} className="w-[340px] h-[550px] mx-2 p-[1px]">
        <SpotlightCard
          className=" bg-bgSecondary rounded-2xl w-full h-full"
          spotlightColor="rgba(0, 0, 0, 0)"
        >
          <div className="w-full h-full flex flex-col">
            <div className="w-full h-[45%] object-contain relative">
              <Image src={image} alt={`EverBloom | ${title}`} fill quality={100} />
            </div>
            <div className="px-8 py-4 flex flex-col justify-between grow">
              <h2 className="text-3xl">{title}</h2>
              {description ? (
                <p className="mt-4 text-txtSecondary font-text">{description}</p>
              ) : (
                <ul className="mt-4 text-txtSecondary font-text">
                  {features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              )}
              <p className="text-accentSecondary text-xl" dir="ltr">{price}</p>
              <div className="w-full flex flex-row">
                <button className="h-12 grow text-accentSecondary border-2 border-accentPrimary rounded-lg cursor-pointer hover:bg-[rgba(76,175,80,1)] hover:text-white hover:border-[rgba(76,175,80,1)] transition-colors">
                  مطالعه بیشتر
                </button>
                <button className="relative size-12 mr-2 bg-accentPrimary rounded-lg">
                  <Image src={'/cart.svg'} alt="EverBloom | Shopping Cart" fill className="p-1" />
                </button>
              </div>
            </div>
          </div>
        </SpotlightCard>
      </SpotlightCard>
    </div>
  );
};
