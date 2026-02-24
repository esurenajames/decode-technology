'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { AppleFilled, AndroidFilled } from '@ant-design/icons';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import mobileMockup from '../assets/device.png';

export default function EESMobileApp() {
    const containerRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(contentRef.current, {
            opacity: 0,
            x: -50,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 70%',
            }
        });

        gsap.from(imageRef.current, {
            opacity: 0,
            x: 50,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 70%',
            }
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="w-full bg-[#2F7FF5] py-20 lg:py-0 lg:h-[600px] overflow-hidden flex items-center relative">
            {/* Background pattern similar to the reference */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 L100 0 L100 100 Z" fill="white" />
                </svg>
            </div>

            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div ref={contentRef} className="text-white">
                        <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6 leading-tight">
                            Download the EES Mobile <br />
                            App Now!
                        </h2>
                        <p className="text-white/80 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
                            You can now access your Employee Self Service Portal with our EES Mobile App!
                            Create filings, Clock-In/Out, Check your payslip, and MORE!
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button className="bg-white text-accent px-8 py-4 rounded-lg font-bold flex items-center gap-3 hover:bg-white/90 transition-all shadow-xl shadow-black/10">
                                <AppleFilled className="text-2xl" />
                                <span>Apple App Store</span>
                            </button>
                            <button className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-lg font-bold flex items-center gap-3 hover:bg-white/10 transition-all">
                                <AndroidFilled className="text-2xl" />
                                <span>Google Playstore</span>
                            </button>
                        </div>
                    </div>

                    {/* Right Image Mockup */}
                    <div ref={imageRef} className="relative h-[400px] md:h-[500px] lg:h-[700px] w-full flex justify-center items-center lg:items-end">
                        <div className="relative w-full h-full lg:translate-y-12">
                            <Image
                                src={mobileMockup}
                                alt="EES Mobile App Mockup"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
