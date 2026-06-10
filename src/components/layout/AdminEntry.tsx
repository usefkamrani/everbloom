"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

// Small client-side component that shows the admin entry only when a
// client-side auth flag exists. We check common keys (isAdmin, authToken,
// isLoggedIn) and render the link accordingly. Keep the UI minimal so it
// matches the header styles.
export const AdminEntry: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const isAdmin = localStorage.getItem("isAdmin");
      const authToken = localStorage.getItem("authToken") || localStorage.getItem("token");
      const isLoggedIn = localStorage.getItem("isLoggedIn");

      // Basic heuristics: if any of these values exist and are truthy, show the link.
      if (
        (isAdmin && isAdmin !== "false") ||
        (authToken && authToken.length > 0) ||
        (isLoggedIn && isLoggedIn !== "false")
      ) {
        setVisible(true);
      }
    } catch (e) {
      // Ignore — localStorage may be unavailable in some test environments.
    }
  }, []);

  if (!visible) return null;

  return (
    <Link
      href="/admin"
      className="h-10 px-3 rounded-lg border border-border text-sm flex items-center bg-white/5 hover:bg-white/10"
    >
      پنل ادمین
    </Link>
  );
};
