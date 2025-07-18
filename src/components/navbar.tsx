"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import clsx from "clsx";
import { StarBorder } from "./ui/star-border";
import { gsap } from "gsap";

const navItems = ["Product", "Pricing", "Company", "FAQ"];

export default function Navbar() {
    const [isDark, setIsDark] = useState(false);
    const [activeSection, setActiveSection] = useState("Company");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navRef = useRef(null);
    const mobileMenuRef = useRef(null);
    const lastScrollY = useRef(0);
    const ticking = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!ticking.current) {
                requestAnimationFrame(() => {
                    const currentScrollY = window.scrollY;
                    const scrollDirection = currentScrollY > lastScrollY.current ? 'down' : 'up';

                    // Hide navbar when scrolling down, show when scrolling up
                    if (scrollDirection === 'down' && currentScrollY > 100) {
                        gsap.to(navRef.current, {
                            y: -100,
                            duration: 0.3,
                            ease: "power2.out"
                        });
                    } else if (scrollDirection === 'up' || currentScrollY <= 100) {
                        gsap.to(navRef.current, {
                            y: 0,
                            duration: 0.3,
                            ease: "power2.out"
                        });
                    }

                    lastScrollY.current = currentScrollY;
                    ticking.current = false;
                });
                ticking.current = true;
            }

            // Handle theme and active section detection
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

    // Mobile menu toggle with GSAP animation
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);

        if (!isMobileMenuOpen) {
            // Open menu
            gsap.set(mobileMenuRef.current, { display: "flex" });
            gsap.fromTo(mobileMenuRef.current,
                { opacity: 0, y: -20 },
                { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
            );
        } else {
            // Close menu
            gsap.to(mobileMenuRef.current, {
                opacity: 0,
                y: -20,
                duration: 0.3,
                ease: "power2.out",
                onComplete: () => {
                    gsap.set(mobileMenuRef.current, { display: "none" });
                }
            });
        }
    };

    // Close mobile menu when clicking on a link
    const handleMobileLinkClick = () => {
        setIsMobileMenuOpen(false);
        gsap.to(mobileMenuRef.current, {
            opacity: 0,
            y: -20,
            duration: 0.3,
            ease: "power2.out",
            onComplete: () => {
                gsap.set(mobileMenuRef.current, { display: "none" });
            }
        });
    };

    return (
        <nav
            ref={navRef}
            className={clsx(
                "fixed top-[38px] left-1/2 -translate-x-1/2 z-50 flex items-center justify-between",
                "rounded-[2.5rem] shadow-[0_2px_4px_rgba(0,0,0,0.1)] backdrop-blur-[50px]",
                "bg-[rgba(128,128,128,0.1)]",
                // Desktop styles
                "px-[60px] w-[107.375rem] h-[4.625rem]",
                // Tablet styles
                "md:px-[40px] md:pr-[10px] md:w-[90vw] md:h-[4rem]",
                // Mobile styles
                "sm:px-[20px] sm:w-[95vw] sm:h-[3.5rem] sm:top-[20px]",
                isDark ? "text-white" : "text-black"
            )}
            style={{
                backgroundBlendMode: "luminosity"
            }}
        >
            {/* Logo */}
            <div className="flex flex-1 items-center gap-2">
                {isDark ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[44px] h-[32px] md:w-[36px] md:h-[26px] sm:w-[32px] sm:h-[24px]"
                        viewBox="0 0 44 32"
                        fill="none"
                    >
                        <path d="M44 31.9915H32.7659L32.7659 4.90613L44 0L44 31.9915Z" fill="white" />
                        <path d="M30.2708 17.2526C30.2708 25.3974 23.4944 32 15.1354 32C6.77634 32 0 25.3974 0 17.2526C0 9.10786 6.77634 2.50524 15.1354 2.50524C23.4944 2.50524 30.2708 9.10786 30.2708 17.2526ZM8.77852 17.2526C8.77852 20.6734 11.6246 23.4465 15.1354 23.4465C18.6462 23.4465 21.4922 20.6734 21.4922 17.2526C21.4922 13.8318 18.6462 11.0587 15.1354 11.0587C11.6246 11.0587 8.77852 13.8318 8.77852 17.2526Z" fill="white" />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[44px] h-[32px] md:w-[36px] md:h-[26px] sm:w-[32px] sm:h-[24px]"
                        viewBox="0 0 44 32"
                        fill="none"
                    >
                        <path d="M44 31.9915H32.7659L32.7659 4.90613L44 0L44 31.9915Z" fill="#1D1D1D" />
                        <path d="M30.2708 17.2526C30.2708 25.3974 23.4944 32 15.1354 32C6.77634 32 0 25.3974 0 17.2526C0 9.10786 6.77634 2.50524 15.1354 2.50524C23.4944 2.50524 30.2708 9.10786 30.2708 17.2526ZM8.77852 17.2526C8.77852 20.6734 11.6246 23.4465 15.1354 23.4465C18.6462 23.4465 21.4922 20.6734 21.4922 17.2526C21.4922 13.8318 18.6462 11.0587 15.1354 11.0587C11.6246 11.0587 8.77852 13.8318 8.77852 17.2526Z" fill="#1D1D1D" />
                    </svg>
                )}
            </div>

            {/* Nav links - Desktop only */}
            <div className={clsx(
                "items-center font-normal lg:flex hidden",
                // Desktop styles
                "gap-[48px] text-[20px]"
            )}>
                {navItems.map((item) => (
                    <Link
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className={clsx(
                            "relative pb-[14px]",
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

            {/* Burger Menu Button - Mobile & Tablet */}
            <button
                onClick={toggleMobileMenu}
                className="lg:hidden flex flex-col justify-center items-center w-8 h-8 relative z-50"
                aria-label="Toggle mobile menu"
            >
                <div className={clsx(
                    "w-6 h-0.5 transition-all duration-300 transform origin-center",
                    isDark ? "bg-white" : "bg-black",
                    isMobileMenuOpen ? "rotate-45 translate-y-1" : "rotate-0 translate-y-0"
                )} />
                <div className={clsx(
                    "w-6 h-0.5 my-1 transition-all duration-300",
                    isDark ? "bg-white" : "bg-black",
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                )} />
                <div className={clsx(
                    "w-6 h-0.5 transition-all duration-300 transform origin-center",
                    isDark ? "bg-white" : "bg-black",
                    isMobileMenuOpen ? "-rotate-45 -translate-y-1" : "rotate-0 translate-y-0"
                )} />
            </button>

            {/* CTA Button - Desktop only */}
            <div className="hidden lg:flex flex-1 justify-end">
                <div className="card">
                    <div className={`box-base ${isDark ? "box" : "box-white"}`}>
                        <div className="glass"></div>
                        <div className="px-[24px] py-[14px] rounded-[51px] font-[600]">
                            <h1 className="mt-[1px]">Talk to Sales</h1>
                        </div>
                    </div>
                </div>
            </div>



            {/* Mobile Menu */}
            <div
                ref={mobileMenuRef}
                className={clsx(
                    "lg:hidden fixed top-0 left-0 w-full h-screen z-40 flex-col justify-center items-center hidden",
                    "backdrop-blur-[50px]",
                    isDark ? "bg-black/80" : "bg-white/80"
                )}
            >
                <div className="flex flex-col items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={handleMobileLinkClick}
                            className={clsx(
                                "text-2xl font-normal transition-colors duration-200",
                                activeSection === item && "border-b-2 border-current pb-2",
                                isDark ? "text-white hover:text-gray-300" : "text-black hover:text-gray-600"
                            )}
                        >
                            {item}
                        </Link>
                    ))}

                    {/* Mobile CTA Button */}
                    <div className="mt-8">
                        <a href="#" className="talktosales">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Talk to Sales
                        </a>

                    </div>
                </div>
            </div>
        </nav>
    );
}