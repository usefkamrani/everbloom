import React from "react";
import SpotlightCard from "../../../components/imported/spotlightCard";
import Image from "next/image";
import StarRating from "../../../components/imported/starRating";

type TopCommentsCardProps = {
  id?: number | string;
  name?: string;
  avatar?: string;
  comment?: string;
  rating?: number;
  location?: string;
  spotlightColor?: `rgba(${number}, ${number}, ${number}, ${number})`;
};

export const TopCommentsCard: React.FC<TopCommentsCardProps> = ({
  name = "یوسف کامرانی پور",
  avatar = "/logo.svg",
  comment = "من یک سال پیش یک گیاه ZZ خریدم، و هنوز مثل روز اول سرزنده است! کد QR مراقبت، جان من را نجات داد. متشکرم، 🌱✨",
  rating = 4,
  location = "تهران - نیاوران",
  spotlightColor = "rgba(76, 175, 80, 1)",
}) => {
  return (
    <div>
      <SpotlightCard
        spotlightColor={spotlightColor}
        className="w-[340px] h-[400px] mx-2 p-[1px]"
      >
        <SpotlightCard
          className=" bg-bgSecondary rounded-2xl w-full h-full"
          spotlightColor="rgba(0, 0, 0, 0)"
        >
          <div className="w-full h-full px-4 py-4 flex flex-col justify-between">
            <div>
              <div className="flex flex-row items-center">
                <div className="w-10 h-10 relative">
                  <Image
                    src={avatar}
                    alt={`EverBloom | ${name}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 className="text-2xl ml-4">{name}</h2>
              </div>
              <p className="px-4 mt-4 leading-relaxed text-lg">{comment}</p>

            </div>
            <div className="flex flex-row justify-between items-center">
              <StarRating rating={rating} />
              <h2>{location}</h2>
            </div>
          </div>
        </SpotlightCard>
      </SpotlightCard>
    </div>
  );
};
