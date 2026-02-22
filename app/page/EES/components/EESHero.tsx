'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import bgImg from '../assets/bg.png';
import deviceImg from '../assets/device.png';

export default function EESHero() {
    const containerRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const deviceRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        // Initial state
        gsap.set(contentRef.current, { opacity: 0, y: 30 });
        gsap.set(deviceRef.current, { opacity: 0, y: 60 });

        // Entrance animation
        tl.to(contentRef.current, {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.2
        })
            .to(deviceRef.current, {
                opacity: 1,
                y: 0,
                duration: 1.2
            }, "-=0.6");

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative w-full min-h-screen pt-20 overflow-hidden flex flex-col items-center bg-white">

            {/* Background at the very bottom - Exact approach provided */}
            <div className="absolute bottom-0 left-0 w-full h-[45%] bg-primary z-0">
                <Image
                    src={bgImg}
                    alt="Background"
                    fill
                    className="object-cover opacity-20 mix-blend-overlay"
                    priority
                    unoptimized
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#19253b] to-transparent" />
            </div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center h-full">

                {/* Hero Content Wrapper */}
                <div className="w-full flex flex-col items-center">

                    {/* Header Text Section */}
                    <div ref={contentRef} className="text-center w-full max-w-6xl mx-auto mb-16 relative">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] tracking-tight mb-4 leading-[1.1]">
                            Made your HRIS and Payroll System<br />
                            Simple with <span className="text-primary italic">EES</span>
                        </h1>

                        <p className="text-gray-600 text-lg font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
                            From payroll automation to accurate record-keeping, EES Workforce reduces<br className="hidden md:block" />
                            admin work and helps your HR team focus on what matters most.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center">
                            <button className="px-10 py-4 bg-[#2F7FF5] text-white font-bold rounded-lg hover:bg-[#2F7FF5]/90 transition-all shadow-lg shadow-[#2F7FF5]/20 transform hover:-translate-y-0.5">
                                Start free trial
                            </button>
                            <button className="px-10 py-4 bg-[#e8eef7] text-[#19253b] font-bold rounded-lg hover:bg-[#dfe5ee] transition-all transform hover:-translate-y-0.5">
                                Book a demo
                            </button>
                        </div>
                    </div>

                    {/* Dashboard/Devices Mockup Section */}
                    <div ref={deviceRef} className="relative w-full max-w-6xl mx-auto z-10 -mb-2">
                        <div className="relative w-full aspect-[21/9]">
                            <Image
                                src={deviceImg}
                                alt="EES Dashboard Preview"
                                fill
                                className="object-contain object-bottom drop-shadow-[0_30px_60px_rgba(0,0,0,0.12)]"
                                priority
                                unoptimized
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
