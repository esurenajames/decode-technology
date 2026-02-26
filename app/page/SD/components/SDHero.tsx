'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowRightOutlined } from '@ant-design/icons';

export default function SDHero() {
    const containerRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        gsap.set(contentRef.current?.children || [], { opacity: 0, y: 30 });
        gsap.set(bottomRef.current?.children || [], { opacity: 0, y: 20 });

        tl.to(contentRef.current?.children || [], {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.15,
            delay: 0.2
        })
            .to(bottomRef.current?.children || [], {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.2
            }, "-=0.5");

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative w-full min-h-screen bg-primary flex flex-col justify-between px-6 lg:px-20 pb-12 overflow-hidden">

            {/* Top / Main Content Area */}
            <div className="flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full">
                <div ref={contentRef} className="max-w-[800px]">
                    <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-medium text-white tracking-tight leading-[1.05] mb-8">
                        Drive growth faster with software tailored to your needs
                    </h1>

                    <p className="text-white/70 text-lg md:text-xl font-medium max-w-2xl mb-12 leading-relaxed">
                        Join 150+ global clients who've streamlined operations and accelerated
                        growth with our custom software solutions—trusted for 13 years of excellence!
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                        <button className="px-6 py-3.5 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-all hover:-translate-y-0.5 shadow-lg flex items-center justify-center gap-2">
                            <span>Book a call</span>
                            <ArrowRightOutlined className="text-xs" />
                        </button>
                        <button className="px-6 py-3.5 bg-transparent text-white font-medium rounded-lg hover:bg-white/10 transition-all border border-white/30 flex items-center justify-center">
                            sales@company.com
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Stats Area */}
            <div className="max-w-7xl mx-auto w-full mt-24 lg:mt-0">
                <div ref={bottomRef} className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">

                    {/* Small left-aligned text */}
                    <div className="max-w-[200px] text-white/50 text-[13px] font-medium leading-relaxed tracking-wide">
                        See the world through <br /> the prism of technology
                    </div>

                    {/* Dark Glass Stats Card */}
                    <div className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 px-10 py-8 lg:px-14 lg:py-10 flex flex-wrap items-center gap-12 sm:gap-16 lg:gap-24">
                        <div className="flex flex-col">
                            <span className="text-white text-3xl lg:text-4xl font-semibold mb-2">20+</span>
                            <span className="text-white/50 text-xs font-semibold tracking-wide uppercase">Total Projects</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-white text-3xl lg:text-4xl font-semibold mb-2">$48M</span>
                            <span className="text-white/50 text-xs font-semibold tracking-wide uppercase">Client's Revenue</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-white text-3xl lg:text-4xl font-semibold mb-2">60+</span>
                            <span className="text-white/50 text-xs font-semibold tracking-wide uppercase">Talent Heads</span>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
}
