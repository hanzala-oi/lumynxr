"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";

const navItems = ["Product", "Pricing", "Company", "FAQ"];

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[data-theme]");
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          const theme = section.getAttribute("data-theme");
          setIsDark(theme === "dark");
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // trigger on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4  ",
        isDark ? "text-white" : "text-black"
      )}
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image
          src={isDark ? "/oilogo.svg" : "/oilogoblack.svg"} // swap logos
          alt="Logo"
          width={40}
          height={40}
          priority
        />
      </div>

      {/* Nav links */}
      <div className="flex items-center gap-8">
        {navItems.map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            className={clsx(
              "text-sm font-medium ",
              item === "Product" && "underline underline-offset-4"
            )}
          >
            {item}
          </Link>
        ))}
      </div>

      {/* CTA button */}
      <button
        className={clsx(
          "text-sm font-medium px-6 py-2 rounded-full shadow ",
          isDark
            ? "bg-white/10 text-white"
            : "bg-black/10 text-black"
        )}
      >
        TALK TO SALES
      </button>
    </nav>
  );
}
