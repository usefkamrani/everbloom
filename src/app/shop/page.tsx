"use client";
import { ProductCard } from "@/components/products/productCard";
import DualRangeSlider from "@/components/imported/rangeSlider";
import { products } from "@/lib/products";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import React, { useState } from "react";


const ProductsGridPage = () => {
  const [filtersShown, setFiltersShown] = useState(false);

  const handleFilters = () => {
    setFiltersShown(!filtersShown);
  };

  return (
    <div>
      <div className="w-full h-[calc(100vh-80px)] flex flex-col justify-between items-center mb-30">
        {/* Mobile Top Bar */}
        <div className="flex flex-row lg:hidden justify-between w-full p-4 z-20">
          <button
            className="w-[39%] h-12 border-1 border-accentSecondary rounded-lg"
            onClick={handleFilters}
          >
            <p className="text-accentSecondary">فیلترها</p>
          </button>

          <button className="w-[59%] h-12 border-1 border-accentSecondary rounded-lg flex flex-row justify-evenly items-center">
            <div className="flex flex-row">
              <Image
                src={"/sort.svg"}
                alt="مرتب‌سازی محصولات"
                width={20}
                height={20}
              />
              <p>مرتب‌سازی بر اساس:</p>
            </div>
            <p className="text-accentSecondary">پربازدیدترین</p>
          </button>
        </div>

        <div className="flex flex-row justify-center w-full h-full overflow-scroll">
          {/* Desktop Filters */}
          <div className="border border-accentSecondary/20 rounded-xl my-10 mr-10 hidden lg:flex lg:flex-col justify-between p-6">
            <h2 className="text-3xl">فیلترها</h2>

            <div className="h-[1px] w-full bg-gradient-to-r from-accentPrimary/0 via-accentPrimary to-accentPrimary/0" />

            <div className="flex flex-col gap-4">
              <h2 className="text-xl">میزان نور</h2>
              <div className="flex flex-wrap gap-2">
                <button className="h-12 px-4 border-1 border-txtSecondary rounded-lg flex gap-2 items-center">
                  <Icon icon={"solar:moon-linear"} className="text-2xl text-accentSecondary" />
                  <p>نور کم</p>
                </button>

                <button className="h-12 px-4 border-1 border-txtSecondary rounded-lg flex gap-2 items-center">
                  <Icon icon={"ph:cloud-sun-light"} className="text-2xl text-accentSecondary" />
                  <p>نور متوسط</p>
                </button>

                <button className="h-12 px-4 border-1 border-txtSecondary rounded-lg flex gap-2 items-center">
                  <Icon icon={"si:sun-duotone"} className="text-2xl text-accentSecondary" />
                  <p>نور زیاد</p>
                </button>
              </div>
            </div>

            <div className="h-[1px] w-full bg-gradient-to-r from-accentPrimary/0 via-accentPrimary to-accentPrimary/0" />

            <div>
              <h2 className="text-xl mb-4">بازه قیمت</h2>
              <DualRangeSlider />
            </div>

            <div className="h-[1px] w-full bg-gradient-to-r from-accentPrimary/0 via-accentPrimary to-accentPrimary/0" />

            <div className="flex flex-col gap-4">
              <h2 className="text-xl">برچسب‌ها</h2>
              <div className="flex flex-wrap gap-2">
                <button className="h-12 px-4 border-1 border-txtSecondary rounded-lg flex gap-2 items-center">
                  <h2 className="text-3xl text-accentSecondary">#</h2>
                  <p>مناسب حیوانات خانگی</p>
                </button>

                <button className="h-12 px-4 border-1 border-txtSecondary rounded-lg flex gap-2 items-center">
                  <h2 className="text-3xl text-accentSecondary">#</h2>
                  <p>تصفیه‌کننده هوا</p>
                </button>

                <button className="h-12 px-4 border-1 border-txtSecondary rounded-lg flex gap-2 items-center">
                  <h2 className="text-3xl text-accentSecondary">#</h2>
                  <p>نگهداری آسان</p>
                </button>

                <button className="h-12 px-4 border-1 border-txtSecondary rounded-lg flex gap-2 items-center">
                  <h2 className="text-3xl text-accentSecondary">#</h2>
                  <p>کم‌جا</p>
                </button>
              </div>
            </div>

            <div className="h-[1px] w-full bg-gradient-to-r from-accentPrimary/0 via-accentPrimary to-accentPrimary/0" />

            <div className="flex flex-col gap-4">
              <h2 className="text-xl">رنگ گلدان</h2>
              <div className="flex gap-2">
                <div className="w-12 h-12 bg-black rounded-full"></div>
                <div className="w-12 h-12 bg-gray-600 rounded-full"></div>
                <div className="w-12 h-12 bg-yellow-600 rounded-full"></div>
                <div className="w-12 h-12 bg-gray-400 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center px-16 mt-10">
              <h3 className="text-2xl">تمام گیاهان اوربلوم</h3>

              <button className="h-12 rounded-lg flex gap-4 items-center">
                <div className="flex">
                  <Image
                    src={"/sort.svg"}
                    alt="مرتب‌سازی"
                    width={20}
                    height={20}
                  />
                  <p>مرتب‌سازی بر اساس:</p>
                </div>
                <p className="text-accentSecondary">پربازدیدترین</p>
              </button>
            </div>

            <div className="w-fit h-full overflow-scroll flex flex-wrap justify-center items-center pt-4 gap-2 px-4 z-0">
              {products.map((product, index) => (
                <ProductCard
                  key={index}
                  slug={product.slug}
                  img={product.img}
                  title={product.title}
                  rate={product.rate}
                  price={product.price}
                  lastPrice={product.lastPrice}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Filters Modal */}
        {filtersShown && (
          <div className="h-full w-full absolute top-0 bg-bgPrimary/90 backdrop-blur-xs flex flex-col justify-end items-center z-10">
            <div className="w-full h-[700px] flex flex-col px-8 gap-4">
              <h2 className="text-3xl">فیلترها</h2>

              <div className="h-[1px] w-full bg-gradient-to-r from-accentPrimary/0 via-accentPrimary to-accentPrimary/0" />

              <h2 className="text-xl">میزان نور</h2>

              <h2 className="text-xl">بازه قیمت</h2>

              <h2 className="text-xl">برچسب‌ها</h2>

              <h2 className="text-xl">رنگ گلدان</h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsGridPage;

