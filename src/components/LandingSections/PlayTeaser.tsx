"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XIcon } from "lucide-react";
import Teaser from "./Teaser";

function getPreferredVideoFormat(): "webm" | "mp4" {
    if (typeof navigator !== "undefined") {
        const ua = navigator.userAgent;
        const isIOS = /iPad|iPhone|iPod/.test(ua);
        const isSafari = /^((?!chrome|android).)*safari/i.test(ua);
        if (isIOS && isSafari) return "mp4";
        return "webm";
    }
    return "mp4";
}

const PlayTeaser = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [format, setFormat] = useState<"webm" | "mp4">("mp4");

    useEffect(() => {
        setFormat(getPreferredVideoFormat());
    }, []);

    return (
        <>
            <Teaser onPlayTeaserClick={() => setIsOpen(true)} />
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        onClick={() => setIsOpen(false)}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md"
                    >
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="relative mx-4 aspect-video w-full max-w-4xl md:mx-0"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <motion.button
                                onClick={() => setIsOpen(false)}
                                className="absolute -top-16 right-0 rounded-full bg-neutral-900/50 p-2 text-xl text-white ring-1 backdrop-blur-md"
                            >
                                <XIcon className="size-5" />
                            </motion.button>

                            <div className="relative isolate z-[1] size-full overflow-hidden rounded-2xl border-2 border-gray-900">
                                <video className="size-full rounded-2xl object-cover" autoPlay controls>
                                    <source
                                        src={`${process.env.NEXT_PUBLIC_CDN_URL}/videos/${format === "webm" ? "Teaser.webm" : "Teaser_v3.mp4"}`}
                                        type={`video/${format}`}
                                    />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default PlayTeaser;
