"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export const NavigationLoader: React.FC = () => {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const incRef = useRef<number | null>(null);

  useEffect(() => {
    // When pathname changes, finish the loader (navigation completed)
    if (!visible) return;
    setProgress(100);
    const t = setTimeout(() => {
      setVisible(false);
      setProgress(0);
    }, 300);
    return () => clearTimeout(t);
  }, [pathname]);

  useEffect(() => {
    // Click handler: listen for internal anchor clicks and form submits
    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const a = target.closest("a") as HTMLAnchorElement | null;
      if (a && a.href && a.origin === location.origin) {
        // internal link
        setVisible(true);
        setProgress(8);
        if (incRef.current) window.clearInterval(incRef.current);
        incRef.current = window.setInterval(() => {
          setProgress((p) => Math.min(80, p + Math.random() * 6));
        }, 250) as unknown as number;
      }
    }

    function onSubmit(e: Event) {
      setVisible(true);
      setProgress(8);
      if (incRef.current) window.clearInterval(incRef.current);
      incRef.current = window.setInterval(() => {
        setProgress((p) => Math.min(80, p + Math.random() * 6));
      }, 250) as unknown as number;
    }

    document.addEventListener("click", onClick, true);
    document.addEventListener("submit", onSubmit, true);

    return () => {
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("submit", onSubmit, true);
      if (incRef.current) window.clearInterval(incRef.current);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="h-1 w-full bg-bgPrimary/0">
        <div
          className="h-1 bg-accentPrimary transition-[width] duration-200 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="flex justify-center pointer-events-none">
        <div className="mt-2 rounded-full w-8 h-8 border-2 border-border border-t-accentPrimary animate-spin" />
      </div>
    </div>
  );
};
