'use client';

import { useState } from 'react';

import Footer from '@/components/footer';
import HoldingHeadset from '@/components/LandingSections/HoldingHeadset';
import Features from '@/components/LandingSections/Features';
import WhatsInTheBox from '@/components/LandingSections/WhatsInTheBox';
import BuiltForEnterprise from '@/components/LandingSections/BuiltForEnterprice';

export default function ClientWrapper() {
    const [revealDone, setRevealDone] = useState(false);

    return (
        <>
            <section id="product" data-theme="light" className="w-full overflow-hidden">
                <HoldingHeadset onRevealComplete={() => setRevealDone(true)} />
            </section>

            {revealDone && (
                <>
                    <section id="product" data-theme="dark" className="h-screen bg-black">
                        <Features />
                    </section>
                    <section id="product" data-theme="light" className="h-screen ">
                        <WhatsInTheBox />
                    </section>
                    <section id="product" data-theme="light" className="h-screen ">
                        <BuiltForEnterprise />
                    </section>
                    <section id="product" data-theme="dark">
                        <Footer />
                    </section>
                </>
            )}
        </>
    );
}
