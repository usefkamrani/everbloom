import type { Metadata } from "next";
import "./globals.css";
import { MyHeader } from "@/components/layout/header";
import { MyFooter } from "@/components/layout/footer";


export const metadata: Metadata = {
  title: "EverBloom | Indoor Plants for Modern Living",
  description: "Transform your apartment into a serene oasis with EverBloom. Explore our collection today and discover how easy it is to bring the beauty of nature indoors!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  className="min-h-[100%] flex flex-col select-none" dir="rtl">
        <MyHeader />
        <div className="flex-grow">
        {children}
        </div>
        <MyFooter />
      </body>
    </html>
  );
}
