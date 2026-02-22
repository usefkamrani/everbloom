import Image from 'next/image';
import React from 'react';


interface DeliveryCardProps {
  className?: string;
}

const DeliveryCard: React.FC<DeliveryCardProps> = ({ className }) => {
  return (
    <div className={`${className} relative rounded-xl overflow-hidden border-2 border-accentPrimary`}>
        <Image src={"/DeliveryCardBg.png"} alt='30-Day Plant Happiness Guarantee' fill className='object-cover object-left z-0' quality={100}/>
        <div className='z-10 absolute bg-bgPrimary/40 top-0 left-0 w-full h-full backdrop-blur-[2px] flex flex-col p-4'>
            <div className=''>
                <p className='text-xl lg:text-2xl xl:text-3xl font-medium'>سریع ترین</p>
                <p className='text-xl lg:text-2xl xl:text-3xl font-medium'>ارسال در نیشابور</p>
            </div>
            <p className='text-sm lg:text-lg xl:text-xl w-[95%] text-balance'>ارسال محصول شما در شرایط دمایی مطلوب</p>
        </div>
    </div>
  );
};

export default DeliveryCard;