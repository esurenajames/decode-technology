'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import bgImg from '../assets/bg.png';
import deviceImg from '../assets/device.png';

export default function EMPACHero() {
    const containerRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const deviceRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        gsap.set(contentRef.current, { opacity: 0, x: -30 });
        gsap.set(deviceRef.current, { opacity: 0, y: 50 });
        gsap.set(imageRef.current, { opacity: 0, y: 40 });

        tl.to(contentRef.current, { opacity: 1, x: 0, duration: 1, delay: 0.2 })
            .to(deviceRef.current, { opacity: 1, y: 0, duration: 1 }, '-=0.6')
            .to(imageRef.current, { opacity: 1, y: 0, duration: 1 }, '-=0.8');

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative w-full h-screen bg-white overflow-hidden grid grid-rows-[1.25fr_1fr] ">
            <div className="grid grid-cols-1 lg:grid-cols-2 px-10 lg:px-32 relative z-10 min-h-0">

                {/* Text Column */}
                <div ref={contentRef} className="flex flex-col justify-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] tracking-tight mb-6">
                        Keep Your Campus Ahead<br />
                        of the Curve with <span className="text-[#014471]">EMPAC</span>
                    </h1>

                    <p className="text-gray-600 text-lg font-medium max-w-xl mb-10 leading-relaxed">
                        An online School & Learning Management System that simplifies education for<br className="hidden lg:block" />
                        teachers, students, and parents—making learning more accessible and efficient.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button className="px-10 py-4 bg-[#2F7FF5] text-white font-bold rounded-lg hover:bg-[#2F7FF5]/90 transition-all shadow-lg shadow-[#2F7FF5]/20 transform hover:-translate-y-0.5">
                            Start free trial
                        </button>
                        <button className="px-10 py-4 bg-[#e8eef7] text-[#19253b] font-bold rounded-lg hover:bg-[#dfe5ee] transition-all transform hover:-translate-y-0.5">
                            Book a demo
                        </button>
                    </div>
                </div>

                {/* Device Column */}
                <div className="hidden lg:flex items-end justify-end relative pointer-events-none min-h-0">
                    <div ref={deviceRef} className="relative w-full h-full">
                        <Image
                            src={deviceImg}
                            alt="EMPAC Dashboard Preview"
                            fill
                            className="object-contain object-bottom drop-shadow-[0_40px_80px_rgba(0,0,0,0.3)]"
                            priority
                            unoptimized
                        />
                    </div>
                </div>
            </div>

            {/* Bottom Row — Rounded image box */}
            <div className="relative z-0 px-6 md:px-10 lg:px-16 pb-6 md:pb-8 min-h-0">
                <div ref={imageRef} className="w-full h-full bg-[#014471] rounded-[28px] md:rounded-[36px] p-4 md:p-5 shadow-2xl">
                    <div className="relative w-full h-full rounded-[18px] md:rounded-[24px] overflow-hidden">
                        <Image
                            src={bgImg}
                            alt="Students using EMPAC"
                            fill
                            className="object-cover object-center"
                            priority
                            unoptimized
                        />
                    </div>
                </div>
            </div>

        </section>
    );
}
