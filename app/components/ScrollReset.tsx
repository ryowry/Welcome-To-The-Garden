"use client";

import { useEffect } from "react";

export default function ScrollReset() {
  useEffect(() => {
    // Clear any leftover #section in the address bar
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
    // Always start at the very top of the page
    window.scrollTo(0, 0);
  }, []);

  return null;
}
