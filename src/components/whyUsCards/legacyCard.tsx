import Image from 'next/image';
import React from 'react';


interface LegacyCardProps {
  className?: string;
}

const LegacyCard: React.FC<LegacyCardProps> = ({ className }) => {
  return (
    <div className={`${className} relative rounded-xl overflow-hidden border-2 border-accentPrimary`}>
        <Image src={"/LegacyCardBg.png"} alt='30-Day Plant Happiness Guarantee' fill className='object-cover z-0' quality={100}/>
        <div className='z-10 absolute bg-bgPrimary/40 top-0 left-0 w-full h-full backdrop-blur-[2px] flex flex-col justify-between p-4'>
            <div className=''>
                <p className='text-xl lg:text-2xl xl:text-3xl font-medium'>کمک همیشگی</p>
                <p className='text-xl lg:text-2xl xl:text-3xl font-medium'>به حفظ محیط زیست</p>
            </div>
            <p className='text-sm lg:text-lg xl:text-xl w-[100%] text-balance'>با هر خرید شما نهالی به طبیعت اهدا می شود</p>
        </div>
    </div>
  );
};

export default LegacyCard;