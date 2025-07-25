"use client";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

export default function Teaser({ onPlayTeaserClick }: { onPlayTeaserClick: () => void }) {
    const [isDark, setIsDark] = useState(false);
    const [activeSection, setActiveSection] = useState("product");
    const navRef = useRef(null);
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
                            y: 0,
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


        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);



    return (
        <div
            ref={navRef}
            className=
            "flex my-6 ml-[28px]  w-fit h-[3rem]  text-white xl:hidden motion-playteaser"

        >

            {/* CTA Button - Desktop and Large Laptop only */}
            <div onClick={onPlayTeaserClick} className="flex  ">
                <div className="card">
                    <div className="box-base box" style={{ "--angle": "53deg" } as React.CSSProperties}> {/* 👈 hardcoded `box` */}
                        <div className="glass"></div>
                        <div className="rounded-[51px] font-[400] px-[24px] py-[14px] 2xl:px-[22px] 2xl:py-[12px] xl:px-[20px] xl:py-[10px] bg-gradient-to-b from-[rgba(221,221,221,0.13)] to-[rgba(67,67,67,0.13)]">
                            <h1 className="flex  items-center text-gray-300 justify-between gap-2 capitalize mt-[1px] text-base 2xl:text-[15px] xl:text-sm"><svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4 fill-gray-400"
                                viewBox="0 0 24 24"
                            >
                                <path d="M8 5v14l11-7z" />
                            </svg>Play Teaser</h1>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}