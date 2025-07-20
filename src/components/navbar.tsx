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

    // Disable/enable body scrolling when mobile menu opens/closes
    useEffect(() => {
        if (isMobileMenuOpen) {
            // Disable scrolling
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
        } else {
            // Enable scrolling
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '';
        }

        // Cleanup function
        return () => {
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '';
        };
    }, [isMobileMenuOpen]);

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
                "fixed left-1/2 -translate-x-1/2 z-50 flex items-center justify-between",
                "rounded-[2.5rem] shadow-[0_2px_4px_rgba(0,0,0,0.1)] backdrop-blur-[50px]",
                "bg-[rgba(128,128,128,0.1)]",
                // Desktop Large (1440px+) - Original design
                "top-[38px] px-[60px] w-[107.375rem] h-[4.625rem]",
                // Desktop Medium (1200px - 1439px)
                "2xl:top-[32px] 2xl:px-[50px] 2xl:w-[90rem] 2xl:h-[4.375rem]",
                // Desktop Small/Laptop Large (1024px - 1199px)
                "xl:top-[28px] xl:px-[40px] xl:w-[70rem] xl:h-[4.125rem]",
                // Laptop Medium (768px - 1023px)
                "lg:top-[24px] lg:px-[35px] lg:w-[90vw] lg:h-[3.875rem]",
                // Tablet Large (640px - 767px)
                "md:top-[22px] md:px-[30px] md:w-[92vw] md:h-[3.625rem]",
                // Tablet Small/Mobile Large (480px - 639px)
                "sm:top-[20px] sm:px-[24px] sm:w-[94vw] sm:h-[3.375rem]",
                // Mobile Medium (375px - 479px)
                "xs:top-[18px] xs:px-[20px] xs:w-[95vw] xs:h-[3.125rem]",
                // Mobile Small (320px - 374px)
                "min-[320px]:top-[16px] min-[320px]:px-[16px] min-[320px]:w-[96vw] min-[320px]:h-[3rem]",
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
                        className={clsx(
                            // Desktop Large
                            "w-[44px] h-[32px]",
                            // Desktop Medium
                            "2xl:w-[42px] 2xl:h-[30px]",
                            // Desktop Small/Laptop Large
                            "xl:w-[40px] xl:h-[28px]",
                            // Laptop Medium
                            "lg:w-[38px] lg:h-[26px]",
                            // Tablet Large
                            "md:w-[36px] md:h-[24px]",
                            // Tablet Small/Mobile Large
                            "sm:w-[34px] sm:h-[22px]",
                            // Mobile Medium
                            "xs:w-[32px] xs:h-[20px]",
                            // Mobile Small
                            "min-[320px]:w-[28px] min-[320px]:h-[18px]"
                        )}
                        viewBox="0 0 44 32"
                        fill="none"
                    >
                        <path d="M44 31.9915H32.7659L32.7659 4.90613L44 0L44 31.9915Z" fill="white" />
                        <path d="M30.2708 17.2526C30.2708 25.3974 23.4944 32 15.1354 32C6.77634 32 0 25.3974 0 17.2526C0 9.10786 6.77634 2.50524 15.1354 2.50524C23.4944 2.50524 30.2708 9.10786 30.2708 17.2526ZM8.77852 17.2526C8.77852 20.6734 11.6246 23.4465 15.1354 23.4465C18.6462 23.4465 21.4922 20.6734 21.4922 17.2526C21.4922 13.8318 18.6462 11.0587 15.1354 11.0587C11.6246 11.0587 8.77852 13.8318 8.77852 17.2526Z" fill="white" />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={clsx(
                            // Desktop Large
                            "w-[44px] h-[32px]",
                            // Desktop Medium
                            "2xl:w-[42px] 2xl:h-[30px]",
                            // Desktop Small/Laptop Large
                            "xl:w-[40px] xl:h-[28px]",
                            // Laptop Medium
                            "lg:w-[38px] lg:h-[26px]",
                            // Tablet Large
                            "md:w-[36px] md:h-[24px]",
                            // Tablet Small/Mobile Large
                            "sm:w-[34px] sm:h-[22px]",
                            // Mobile Medium
                            "xs:w-[32px] xs:h-[20px]",
                            // Mobile Small
                            "min-[320px]:w-[28px] min-[320px]:h-[18px]"
                        )}
                        viewBox="0 0 44 32"
                        fill="none"
                    >
                        <path d="M44 31.9915H32.7659L32.7659 4.90613L44 0L44 31.9915Z" fill="#1D1D1D" />
                        <path d="M30.2708 17.2526C30.2708 25.3974 23.4944 32 15.1354 32C6.77634 32 0 25.3974 0 17.2526C0 9.10786 6.77634 2.50524 15.1354 2.50524C23.4944 2.50524 30.2708 9.10786 30.2708 17.2526ZM8.77852 17.2526C8.77852 20.6734 11.6246 23.4465 15.1354 23.4465C18.6462 23.4465 21.4922 20.6734 21.4922 17.2526C21.4922 13.8318 18.6462 11.0587 15.1354 11.0587C11.6246 11.0587 8.77852 13.8318 8.77852 17.2526Z" fill="#1D1D1D" />
                    </svg>
                )}
            </div>

            {/* Nav links - Desktop and Large Laptop only */}
            <div className={clsx(
                "items-center font-normal hidden xl:flex",
                // Desktop Large
                "gap-[48px] text-[20px]",
                // Desktop Medium
                "2xl:gap-[42px] 2xl:text-[19px]",
                // Desktop Small/Laptop Large
                "xl:gap-[36px] xl:text-[18px]"
            )}>
                {navItems.map((item) => (
                    <Link
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className={clsx(
                            "relative transition-colors duration-200",
                            // Desktop Large
                            "pb-[14px]",
                            // Desktop Medium
                            "2xl:pb-[12px]",
                            // Desktop Small/Laptop Large
                            "xl:pb-[10px]",
                            activeSection === item && [
                                "after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-2/3 after:h-[3px] after:rounded-full after:bg-current",
                                isDark ? "text-white" : "text-black"
                            ],
                            isDark ? "hover:text-gray-300" : "hover:text-gray-600"
                        )}
                    >
                        {item}
                    </Link>
                ))}
            </div>

            {/* Burger Menu Button - Laptop Medium and below */}
            <button
                onClick={toggleMobileMenu}
                className={clsx(
                    "xl:hidden flex flex-col justify-center items-center relative z-50",
                    // Laptop Medium and Tablet Large
                    "lg:w-8 lg:h-8 md:w-8 md:h-8",
                    // Tablet Small/Mobile Large
                    "sm:w-7 sm:h-7",
                    // Mobile Medium and Small
                    "xs:w-6 xs:h-6 min-[320px]:w-6 min-[320px]:h-6"
                )}
                aria-label="Toggle mobile menu"
            >
                <div className={clsx(
                    "h-0.5 transition-all duration-300 transform origin-center",
                    // Laptop Medium and Tablet Large
                    "lg:w-6 md:w-6",
                    // Tablet Small/Mobile Large
                    "sm:w-5",
                    // Mobile Medium and Small
                    "xs:w-4 min-[320px]:w-4",
                    isDark ? "bg-white" : "bg-black",
                    isMobileMenuOpen ? "rotate-45 translate-y-1" : "rotate-0 translate-y-0"
                )} />
                <div className={clsx(
                    "h-0.5 transition-all duration-300",
                    // Laptop Medium and Tablet Large
                    "lg:w-6 lg:my-1 md:w-6 md:my-1",
                    // Tablet Small/Mobile Large
                    "sm:w-5 sm:my-1",
                    // Mobile Medium and Small
                    "xs:w-4 xs:my-0.5 min-[320px]:w-4 min-[320px]:my-0.5",
                    isDark ? "bg-white" : "bg-black",
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                )} />
                <div className={clsx(
                    "h-0.5 transition-all duration-300 transform origin-center",
                    // Laptop Medium and Tablet Large
                    "lg:w-6 md:w-6",
                    // Tablet Small/Mobile Large
                    "sm:w-5",
                    // Mobile Medium and Small
                    "xs:w-4 min-[320px]:w-4",
                    isDark ? "bg-white" : "bg-black",
                    isMobileMenuOpen ? "-rotate-45 -translate-y-1" : "rotate-0 translate-y-0"
                )} />
            </button>
      

            {/* CTA Button - Desktop and Large Laptop only */}
            <div className="hidden xl:flex flex-1 justify-end">
                <div className="card">
                    <div className={`box-base ${isDark ? "box " : "box-white"}`}>
                        <div className="glass"></div>
                        <div className={clsx(
                            "rounded-[51px] font-[600]",
                            // Desktop Large
                            "px-[24px] py-[14px]",
                            // Desktop Medium
                            "2xl:px-[22px] 2xl:py-[12px]",
                            // Desktop Small/Laptop Large
                            "xl:px-[20px] xl:py-[10px]",
                            isDark ? "bg-gradient-to-b from-[rgba(221,221,221,0.13)] to-[rgba(67,67,67,0.13)]" : "bg-gradient-to-t from-[#DDDDDD43] to-[#43434348]"
                        )}>
                            <h1 className={clsx(
                                "mt-[1px]",
                                // Desktop Large
                                "text-base",
                                // Desktop Medium
                                "2xl:text-[15px]",
                                // Desktop Small/Laptop Large
                                "xl:text-sm"
                            )}>Talk to Sales</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu - Laptop Medium and below */}
            <div
                ref={mobileMenuRef}
                className={clsx(
                    "xl:hidden fixed top-0 left-0 w-full h-screen z-40 flex-col justify-center items-center hidden",
                    "backdrop-blur-[50px] ",
                    isDark ? "bg-black/90" : "bg-white/80"
                )}
            >
                <div className="flex flex-col items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={handleMobileLinkClick}
                            className={clsx(
                                "font-normal transition-colors duration-200",
                                // Laptop Medium and Tablet Large
                                "lg:text-2xl md:text-2xl",
                                // Tablet Small/Mobile Large
                                "sm:text-xl",
                                // Mobile Medium and Small
                                "xs:text-lg min-[320px]:text-base",
                                activeSection === item && "border-b-2 border-current pb-2",
                                isDark ? "text-white hover:text-gray-300" : "text-black hover:text-gray-600"
                            )}
                        >
                            {item}
                        </Link>
                    ))}

                    {/* Mobile CTA Button */}
                    <div className={clsx(
                        "mt-8",
                        // Laptop Medium and Tablet Large
                        "lg:mt-8 md:mt-8",
                        // Tablet Small/Mobile Large
                        "sm:mt-6",
                        // Mobile Medium and Small
                        "xs:mt-4 min-[320px]:mt-4"
                    )}>
                        <a href="#" className={clsx(
                            "talktosales inline-block px-6 py-3 rounded-full border-2 transition-colors duration-200",
                            // Laptop Medium and Tablet Large
                            "lg:px-8 lg:py-4 lg:text-lg md:px-8 md:py-4 md:text-lg",
                            // Tablet Small/Mobile Large
                            "sm:px-6 sm:py-3 sm:text-base",
                            // Mobile Medium and Small
                            "xs:px-5 xs:py-2 xs:text-sm min-[320px]:px-4 min-[320px]:py-2 min-[320px]:text-sm",
                            isDark ? "border-white text-white hover:bg-white hover:text-black" : "border-black text-black hover:bg-black hover:text-white"
                        )}>
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