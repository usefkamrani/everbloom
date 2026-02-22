import Image from 'next/image';
import React from 'react';


interface GuaranteeCardProps {
  className?: string;
}

const GuaranteeCard: React.FC<GuaranteeCardProps> = ({ className }) => {
  return (
    <div className={`${className} relative rounded-xl overflow-hidden border-2 border-accentPrimary`}>
        <Image src={"/guaranteeCardBg.png"} alt='30-Day Plant Happiness Guarantee' fill className='object-cover object-left z-0' quality={100}/>
        <div className='z-10 absolute bg-bgPrimary/60 top-0 left-0 w-full h-full backdrop-blur-[2px] flex flex-col justify-between p-8'>
            <div className=''>
                <p className='text-3xl xl:text-4xl font-medium'>۳۰ روز رضایت</p>
                <p className='text-3xl xl:text-4xl font-medium'>رضایت از محصول</p>
            </div>
            <p className='text-lg xl:text-2xl w-[70%] text-balance'>حس خوبی از هم خونه سبز جدیدت نمیگیری؟ برگردونش پیش خودمون.</p>
        </div>
    </div>
  );
};

export default GuaranteeCard;