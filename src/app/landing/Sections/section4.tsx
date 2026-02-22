import React from "react";

export const SectionFour = () => {
  return (
    <div className="h-lvh w-lvw overflow-hidden flex flex-col relative pt-20">
      <div className="w-lvw h-lvh absolute top-0 left-0 z-0">
        <video src="/PlantCareHub.mp4" className="w-full h-full object-cover object-center z-0 " loop autoPlay muted playsInline/>
        <div className="w-full h-full absolute z-10 left-0 top-0 bg-gradient-to-b from-0% from-bgPrimary via-50% via-bgPrimary/50 to-100% to-bgPrimary"></div>
      </div>
      <div className="z-20 flex flex-col justify-between pr-8 pt-4 lg:mt-8 xl:mr-20 h-28 lg:h-24">
        <h1 className="text-3xl lg:text-4xl xl:text-4xl">آموزشکده اوربلوم</h1>
        <div className="flex flex-col lg:flex-row">
          <p className="text-xl xl:text-2xl mr-1">
            گیاهان شما به چیزی احتیاج دارند
          </p>
          <p className="text-xl xl:text-2xl">بیش از بقا - با ما بدرخشید</p>
        </div>
      </div>
      <div className="flex flex-col items-center z-0 self-center absolute bottom-0">
        <video src="/scrollDown.webm" className="w-20 h-20 object-cover object-center " loop autoPlay muted playsInline/>
      </div>
      
    </div>
  );
};
