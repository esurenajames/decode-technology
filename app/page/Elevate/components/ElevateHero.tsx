'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import heroBg from '../assets/background.png';
import heroGirl from '../assets/girl.png';
import deviceImg from '../assets/device.png';

export default function ElevateHero() {
    const containerRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const girlRef = useRef<HTMLDivElement>(null);
    const deviceRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        // Initial state
        gsap.set(contentRef.current, { opacity: 0, y: 30 });
        gsap.set(girlRef.current, { opacity: 0, x: 50 });
        gsap.set(deviceRef.current, { opacity: 0, y: 50 });

        // Entrance animation
        tl.to(contentRef.current, {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.2
        })
            .to(girlRef.current, {
                opacity: 1,
                x: 0,
                duration: 1
            }, "-=0.7")
            .to(deviceRef.current, {
                opacity: 1,
                y: 0,
                duration: 1
            }, "-=0.8");

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative w-full h-screen max-h-[95vh] bg-white overflow-hidden flex flex-col pt-20">

            {/* Split Background - Right Side Navy */}
            <div className="absolute top-0 right-0 w-full lg:w-[38%] h-full bg-primary z-0">
                <Image
                    src={heroBg}
                    alt="Background"
                    fill
                    className="object-cover opacity-20 mix-blend-overlay"
                    priority
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#19253b] to-transparent" />
            </div>

            <div className="container mx-auto px-8 relative z-10 flex flex-col items-center justify-center h-full">
                <div className="w-full flex flex-col items-center">
                    <div ref={contentRef} className="text-center w-full max-w-6xl mx-auto mb-16 relative">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] tracking-tight mb-4 leading-[1.1]">
                            Redefine Training. <span className="text-primary italic">Elevate</span>{' '}
                            <span className="lg:text-white text-[#1a1a1a]">Potential.</span>
                        </h1>
                        <p className="text-gray-600 text-lg font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
                            With Elevate, training becomes simple enabling your team to <br className="hidden md:block" />
                            develop faster and perform at a higher level.
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
                    <div ref={deviceRef} className="relative w-full max-w-5xl mx-auto z-10 -mb-2">
                        <div className="relative w-full aspect-[16/9]">
                            <Image
                                src={deviceImg}
                                alt="Elevate Dashboard Preview"
                                fill
                                className="object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Girl Image - Perfectly Aligned to the Right Navy Sidebar */}
                <div ref={girlRef} className="absolute bottom-0 right-0 w-[38%] h-[80%] z-20 hidden lg:flex items-end justify-end pointer-events-none">
                    <div className="relative w-full h-[115%]">
                        <Image
                            src={heroGirl}
                            alt="Professional woman with notebook"
                            fill
                            className="object-contain object-bottom pr-12 scale-110 origin-bottom"
                            priority
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
