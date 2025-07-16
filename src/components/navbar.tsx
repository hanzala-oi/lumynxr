"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";
import { StarBorder } from "./ui/star-border";

const navItems = ["Product", "Pricing", "Company", "FAQ"];

export default function Navbar() {
    const [isDark, setIsDark] = useState(false);
    const [activeSection, setActiveSection] = useState("Company");

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section[data-theme]");
            for (const section of sections) {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 150 && rect.bottom >= 150) {
                    const theme = section.getAttribute("data-theme");
                    const id = section.getAttribute("id");
                    if (theme) setIsDark(theme === "dark");
                    if (id) setActiveSection(id.charAt(0).toUpperCase() + id.slice(1));
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={clsx(
                "fixed top-0 left-0 w-full z-50 flex items-center justify-between px-[120px] mt-[38px]  ",
                isDark ? "text-white" : "text-black"
            )}
        >
            {/* Logo */}
            <div className="flex flex-1 items-center gap-2">
                {isDark ? <svg xmlns="http://www.w3.org/2000/svg" width="44" height="32" viewBox="0 0 44 32" fill="none">
                    <path d="M44 31.9915H32.7659L32.7659 4.90613L44 0L44 31.9915Z" fill="white" />
                    <path d="M30.2708 17.2526C30.2708 25.3974 23.4944 32 15.1354 32C6.77634 32 0 25.3974 0 17.2526C0 9.10786 6.77634 2.50524 15.1354 2.50524C23.4944 2.50524 30.2708 9.10786 30.2708 17.2526ZM8.77852 17.2526C8.77852 20.6734 11.6246 23.4465 15.1354 23.4465C18.6462 23.4465 21.4922 20.6734 21.4922 17.2526C21.4922 13.8318 18.6462 11.0587 15.1354 11.0587C11.6246 11.0587 8.77852 13.8318 8.77852 17.2526Z" fill="white" />
                </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="44" height="32" viewBox="0 0 44 32" fill="none">
                    <path d="M44 31.9915H32.7659L32.7659 4.90613L44 0L44 31.9915Z" fill="#1D1D1D" />
                    <path d="M30.2708 17.2526C30.2708 25.3974 23.4944 32 15.1354 32C6.77634 32 0 25.3974 0 17.2526C0 9.10786 6.77634 2.50524 15.1354 2.50524C23.4944 2.50524 30.2708 9.10786 30.2708 17.2526ZM8.77852 17.2526C8.77852 20.6734 11.6246 23.4465 15.1354 23.4465C18.6462 23.4465 21.4922 20.6734 21.4922 17.2526C21.4922 13.8318 18.6462 11.0587 15.1354 11.0587C11.6246 11.0587 8.77852 13.8318 8.77852 17.2526Z" fill="#1D1D1D" />
                </svg>}
            </div>


            {/* Nav links */}
            <div className="flex items-center gap-[48px] text-[20px] text-[#4C4C4C] font-normal">
                {navItems.map((item) => (
                    <Link
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className={clsx(
                            "relative  pb-[14px]",
                            activeSection === item && [
                                "after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-2/3 after:h-[3px] after:rounded-full after:bg-current",
                                isDark ? "text-white" : "text-black"
                            ]
                        )}
                    >
                        {item}
                    </Link>

                ))}
            </div>

            {/* CTA button */}

            <div className="flex-1 flex justify-end">
                <div className="space-y-8">
                    <StarBorder darkMode={isDark} >
                        TALK TO SALES
                    </StarBorder>
                </div>
            </div>
        </nav>
    );
}
