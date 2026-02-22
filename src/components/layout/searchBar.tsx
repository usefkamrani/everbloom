import Image from "next/image";
import React from "react";

export const SearchBar = () => {
  return (
    <form
      className="w-[90vw] lg:w-full h-12 border-2 border-txtSecondary rounded-full flex flex-row items-center gap-3 px-4"
      role="search"
    >
      <button
        type="submit"
        className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-bgSecondary/40"
        aria-label="جستجو"
      >
        <Image src="/search.svg" alt="جستجو" width={20} height={20} />
      </button>
      <input
        className="flex-1 bg-transparent text-sm text-txtPrimary outline-none placeholder:text-txtSecondary"
        placeholder="جستجو در اوربلوم..."
        aria-label="جستجو در اوربلوم"
      />
    </form>
  );
};
