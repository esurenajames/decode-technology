'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import bgImg from '../assets/bg.png';
import deviceImg from '../assets/device.png';

export default function SDHero() {
    const containerRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const deviceRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        gsap.set(contentRef.current, { opacity: 0, x: -30 });
        gsap.set(bgRef.current, { opacity: 0, x: 60 });
        gsap.set(deviceRef.current, { opacity: 0, y: 50 });

        tl.to(contentRef.current, { opacity: 1, x: 0, duration: 1, delay: 0.2 })
            .to(bgRef.current, { opacity: 1, x: 0, duration: 1 }, '-=0.7')
            .to(deviceRef.current, { opacity: 1, y: 0, duration: 1 }, '-=0.5');

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative w-full h-screen bg-white overflow-hidden flex flex-col pt-16 px-20">

            {/* Main area — 2-column grid: left text | right square + person */}
            <div className="grid grid-cols-2 flex-1 overflow-hidden">

                {/* Left column — Flex split: top = text, bottom = device */}
                <div className="flex flex-col flex-1 relative z-10">

                    {/* Top half — Text block */}
                    <div ref={contentRef} className="flex-1 flex flex-col justify-center items-center">
                        <div className="w-[80%] pl-24 flex flex-col items-start">
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5 leading-[1.1]">
                                <span className="text-primary">Custom </span>
                                <span className="text-accent">Software<br />Development</span>
                                <span className="text-primary"> for Every Need</span>
                            </h1>

                            <p className="text-gray-500 text-lg font-medium max-w-md mb-8 leading-relaxed">
                                We build tailored software solutions that fit your business—from web apps
                                to enterprise systems, built to scale and grow with you.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <button className="px-10 py-4 bg-accent text-white font-bold rounded-lg hover:bg-accent/90 transition-all shadow-lg shadow-accent/20 transform hover:-translate-y-0.5">
                                    Start free trial
                                </button>
                                <button className="px-10 py-4 bg-[#e8eef7] text-primary font-bold rounded-lg hover:bg-[#dfe5ee] transition-all transform hover:-translate-y-0.5">
                                    Book a demo
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Bottom half — Device mockup */}
                    <div ref={deviceRef} className="flex-1 flex items-end overflow-visible">
                        <div className="relative w-[155%] aspect-[16/9]">
                            <Image
                                src={deviceImg}
                                alt="Software Dashboard Preview"
                                fill
                                className="object-contain object-bottom-left drop-shadow-[0_30px_60px_rgba(0,0,0,0.15)]"
                                priority
                                unoptimized
                            />
                        </div>
                    </div>

                </div>

                {/* Right column — CSS grid stack: square behind, person in front */}
                <div ref={bgRef} className="grid grid-cols-1 grid-rows-1">

                    {/* bg-primary square — bottom-center of grid cell */}
                    <div className="col-start-1 row-start-1 self-end justify-self-center bg-primary w-[78%] h-[55%] pointer-events-none" />

                    {/* Person image — same grid cell, on top */}
                    <div className="col-start-1 row-start-1 relative pointer-events-none -mt-32">
                        <Image
                            src={bgImg}
                            alt="Software Developer"
                            fill
                            className="object-contain object-bottom"
                            priority
                            unoptimized
                        />
                    </div>

                </div>

            </div>

        </section>
    );
}
