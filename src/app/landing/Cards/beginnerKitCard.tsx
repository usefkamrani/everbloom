import Image from 'next/image'
import React from 'react'

interface BeginnerKitCardProps {
    imageSrc: string;
    title: string;
    desc: string;
    price: string;
    similarPlants: string[];
    isFullWidth?: boolean;
}

export const BeginnerKitCard: React.FC<BeginnerKitCardProps> = ({ imageSrc, title, desc, price, similarPlants, isFullWidth }) => {
    return (
    <div className={`h-[400px] bg-bgSecondary rounded-lg relative overflow-hidden ${isFullWidth ? `xl:col-span-3` : `xl:col-span-2`}`}>
        <div className={`w-full h-[50%] ${isFullWidth ? `xl:w-[60%] xl:h-full xl:absolute xl:left-0` : ``} relative`}>
            <Image src={imageSrc} alt='EverBloom | Plant Beginner Kit' fill className='object-cover object-bottom'/>
            <div className={`w-full h-full bg-linear-to-t from-0% from-bgSecondary to-40% to-bgSecondary/0  absolute left-0 top-0 ${isFullWidth ? `xl:hidden` : ``}`}/>
        </div>
        <div className={`p-4 w-full h-[65%] absolute bottom-0 flex flex-col justify-between ${isFullWidth ? `xl:h-full xl:w-[40%]` : ``}`}>
            <h2 className='text-2xl xl:text-3xl'>{title}</h2>
            <p>{desc}</p>
            {
                isFullWidth && 
                <div className='hidden xl:block'>
                    <h3>• {similarPlants[0]}</h3>
                    <h3>• {similarPlants[1]}</h3>
                    <h3>• {similarPlants[2]}</h3>
                </div>
            }
            <h3 className={`${isFullWidth ? `xl:hidden` : ``}`}>{similarPlants[0]} - {similarPlants[1]} - {similarPlants[2]}</h3>
            <div className='flex flex-row justify-between'>
                <p className='text-txtPrimary'>قیمت:</p>
                <p className='text-accentSecondary'>{price}</p>
            </div>
            <button className='w-full h-12 bg-accentPrimary rounded-lg'>
                <h2 className='text-txtPrimary font-semibold tracking-wider text-lg'>ثبت سفارش</h2>
            </button>
        </div>
    </div>
  )
}
