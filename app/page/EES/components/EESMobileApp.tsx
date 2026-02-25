'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { AppleFilled } from '@ant-design/icons';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import mobileAppBg from '../assets/mobile-app1.png';

export default function EESMobileApp() {
    const containerRef = useRef<HTMLElement>(null);
    const buttonsRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(buttonsRef.current, {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 70%',
            }
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="max-w-7xl mx-auto py-4 bg-white">
            <div className="container mx-auto px-6 relative">
                {/* Banner Rectangle */}
                <div className="relative w-full rounded-[2rem] overflow-hidden shadow-2xl h-[650px] flex items-center">
                    <Image
                        src={mobileAppBg}
                        alt="EES Mobile App Background"
                        fill
                        className="object-fit"
                        priority
                    />

                    {/* Buttons Overlay */}
                    <div className="absolute z-10 bottom-10 left-15">
                        <div ref={buttonsRef} className="flex flex-wrap gap-4 md:gap-6">
                            {/* Google Play Button */}
                            <a
                                href="https://play.google.com/store/apps/details?id=com.decodetech.ees&hl=en"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#1C1A27] border border-white/10 text-white px-5 py-2.5 rounded-[14px] flex items-center gap-3 hover:bg-[#252233] transition-all shadow-xl shadow-black/20 group w-[180px] md:w-[220px]"
                            >
                                <svg viewBox="0 0 512 512" className="w-[32px] h-[32px] md:w-[36px] md:h-[36px] flex-shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.5 12.3L237.9 227.7L283.6 182L37.8 4.2C32.1 0.100006 26 -0.899994 22.5 12.3Z" fill="#00D2FF" />
                                    <path d="M22.5 499.7C26 512.9 32.1 511.9 37.8 507.8L283.6 330L237.9 284.3L22.5 499.7Z" fill="#FF3A44" />
                                    <path d="M344 374.3L283.6 330L237.9 284.3L283.6 182L344 137.7C365 122.4 382.7 128.7 382.7 154V357.9C382.7 383.2 365 389.6 344 374.3Z" fill="#FFD100" />
                                    <path d="M237.9 227.7L22.5 12.3C18 26.6 20.3 46 20.3 71.9V440.1C20.3 466 18 485.4 22.5 499.7L237.9 284.3L237.9 227.7Z" fill="#31DE6B" />
                                </svg>
                                <div className="text-left flex flex-col justify-center">
                                    <span className="text-[10px] md:text-xs font-medium leading-none mb-1 md:mb-1.5 text-gray-300 tracking-wide uppercase">GET IT ON</span>
                                    <span className="text-lg md:text-[22px] font-semibold leading-none tracking-tight">Google Play</span>
                                </div>
                            </a>

                            {/* App Store Button */}
                            <a
                                href="https://apps.apple.com/ph/app/ees-mobile/id6503276399"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#1C1A27] border border-white/10 text-white px-5 py-2.5 rounded-[14px] flex items-center gap-3 hover:bg-[#252233] transition-all shadow-xl shadow-black/20 group w-[180px] md:w-[220px]"
                            >
                                <AppleFilled className="text-[32px] md:text-[36px] text-white pb-0.5 flex-shrink-0" />
                                <div className="text-left flex flex-col justify-center">
                                    <span className="text-[10px] md:text-xs font-medium leading-none mb-1 md:mb-1.5 text-gray-300 tracking-wide">Download on the</span>
                                    <span className="text-lg md:text-[22px] font-semibold leading-none tracking-tight">App Store</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
