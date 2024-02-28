"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

function ReturnToTop() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        window.scrollY > 100 ? setShowTopBtn(true) : setShowTopBtn(false);
      },
      { capture: true, passive: true }
    );
    return () => {
      window.removeEventListener(
        "scroll",
        () => {
          window.scrollY > 100 ? setShowTopBtn(true) : setShowTopBtn(false);
        },
        { capture: true, passive: true }
      );
    };
  }, []);

  return (
    <div className="fixed bottom-2 right-2 hover:animate-bounce">
      {showTopBtn && (
        <Link href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 md:w-8 md:h-8 text-sky-500 hover:text-sky-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </Link>
      )}
    </div>
  );
}

export default ReturnToTop;
