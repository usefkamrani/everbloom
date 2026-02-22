"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { SearchBar } from "./searchBar";

export const MobileMenu = () => {
  const [mobileMenuOpen, setMobileMenu] = useState(false);

  const handleMenu = () => {
    setMobileMenu(!mobileMenuOpen);
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  return (
    <div className="block lg:hidden">
      {mobileMenuOpen ? (
        <Image
          className="block lg:hidden"
          src={"closeMenu.svg"}
          alt="EverBloom Logo"
          width={35}
          height={35}
          onClick={handleMenu}
        />
      ) : (
        <Image
          className="block lg:hidden"
          src={"hamburgerMenu.svg"}
          alt="EverBloom Logo"
          width={35}
          height={35}
          onClick={handleMenu}
        />
      )}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-0 z-100 w-lvw h-[calc(100vh-80px)] bg-bgPrimary/90 backdrop-blur-xs flex flex-col justify-between items-center pt-4">
          <SearchBar />
          <div>
            <a
              className="w-lvw h-24 flex justify-center items-center border-t-2 border-border text-2xl"
              href="/shop"
            >
              <h3>فروشگاه</h3>
            </a>
            <a
              className="w-lvw h-24 flex justify-center items-center border-t-2 border-border text-2xl"
              href="/cart"
            >
              <h3>سبد خرید</h3>
            </a>
            <a
              className="w-lvw h-24 flex justify-center items-center border-t-2 border-border text-2xl"
              href="/about"
            >
              <h3>درباره ما</h3>
            </a>
            <a
              className="w-lvw h-24 flex justify-center items-center border-t-2 border-border text-2xl"
              href="/login"
            >
              <h3>ورود</h3>
            </a>
            <a
              className="w-lvw h-24 flex justify-center items-center border-t-2 border-border text-2xl"
              href="/signup"
            >
              <h3>ثبت نام</h3>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
