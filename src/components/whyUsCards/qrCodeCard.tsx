import Image from "next/image";
import React from "react";

interface QrCodeCardProps {
  className?: string;
}

const QrCodeCard: React.FC<QrCodeCardProps> = ({ className }) => {
  return (
    <div
      className={`${className} rounded-xl overflow-hidden border-2 border-accentPrimary`}
    >
      <div className="w-full h-full flex flex-row items-center p-4">
        <div className="h-[75%] lg:h-[90%] aspect-square w-h relative">
          <Image src={"/qrCode.png"} alt="EverBloom | Botanist-Curated Care" fill className="object-contain"/>
        </div>
        <div className="flex flex-col justify-between h-[80%] pl-1">
          <div className="flex flex-col xl:flex-row">
            <p className="text-xl xl:text-3xl font-medium xl:mr-2">آموزش همیشه</p>
            <p className="text-xl xl:text-3xl font-medium">در دسترس شما</p>
          </div>
          <p className="text-sm lg:text-base xl:text-xl text-balance">
            هر گیاه یک QR Code خاص خودش را دارد که با اسکن آن میتوانید آموزش های مربوط به آن گیاه را مشاهده کنیدث
          </p>
        </div>
      </div>
    </div>
  );
};

export default QrCodeCard;
