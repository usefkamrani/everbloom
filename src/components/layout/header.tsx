import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "./mobileMenu";
import { SearchBar } from "./searchBar";

export const MyHeader = () => {
  return (
    <div className="w-lvw px-4 xl:px-[5vw] lg:self-center h-20 flex flex-row justify-between items-center sticky top-0 z-40 bg-gradient-to-b from-bgPrimary via-bgPrimary/80 to-bgPrimary/0">
      <div className="flex flex-row">
        <Link className="flex flex-row items-end" href="/">
          <Image src="/logo.svg" alt="EverBloom Logo" width={40} height={40} />
          <h1 className="text-2xl lg:text-3xl">اوربلوم</h1>
        </Link>
        <div className="hidden lg:flex flex-row justify-evenly items-end w-96 h-10">
          <Link href="/shop"><h3>فروشگاه</h3></Link>
          <Link href="/cart"><h3>سبد خرید</h3></Link>
          <Link href="/about"><h3>درباره ما</h3></Link>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-4">
        <div className="w-72">
          <SearchBar />
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="h-10 px-4 rounded-lg border border-border text-sm flex items-center"
          >
            ورود
          </Link>
          <Link
            href="/signup"
            className="h-10 px-4 rounded-lg bg-accentPrimary text-txtPrimary text-sm flex items-center"
          >
            ثبت نام
          </Link>
        </div>
      </div>
      <MobileMenu />
    </div>
  );
};
