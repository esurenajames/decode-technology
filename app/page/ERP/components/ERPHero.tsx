'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import heroImg from '../assets/hero.jpg';
import hero1Img from '../assets/hero1.png';

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        // Initial state
        gsap.set(contentRef.current, { opacity: 0, x: -50 });
        gsap.set(imageRef.current, { opacity: 0, x: 50 });

        // Entrance animation
        tl.to(contentRef.current, {
            opacity: 1,
            x: 0,
            duration: 1,
            delay: 0.2
        })
            .to(imageRef.current, {
                opacity: 1,
                x: 0,
                duration: 1
            }, "-=0.8");

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative w-full overflow-hidden bg-white min-h-[90vh] lg:min-h-screen flex flex-col lg:flex-row items-center pt-20 lg:pt-0">

            {/* Background Shape & Image — desktop: top-right blob, mobile: bottom strip behind device */}
            <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-primary lg:hidden z-0 overflow-hidden">
                <Image
                    src={heroImg}
                    alt="ERP System Background"
                    fill
                    className="object-cover opacity-20 mix-blend-overlay"
                    priority
                />
            </div>
            <div className="hidden lg:block absolute top-0 right-0 w-[65%] h-[80%] bg-primary rounded-bl-[100%] overflow-hidden z-0">
                <Image
                    src={heroImg}
                    alt="ERP System Background"
                    fill
                    className="object-cover opacity-20 mix-blend-overlay"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/40"></div>
            </div>

            <div className="container max-w mx-auto h-full flex flex-col justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center h-full">
                    <div ref={contentRef} className="max-w-2xl pt-12 lg:pt-0 relative z-20 opacity-0 lg:mb-20 text-center lg:text-left mx-auto lg:mx-0 px-6 lg:px-0">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] tracking-tight mb-4 leading-[1.1]">
                            <span className="text-primary italic">ERP System</span> That Fits <br className="hidden lg:block" />Your Business,
                            <br />Right Out of the Box
                        </h1>
                        <p className="text-gray-600 text-base md:text-lg font-medium max-w-2xl mb-10 leading-relaxed">
                            A ready-to-use ERP system that adapts to your business needs—combining core modules, local compliance, and scalable features without complex customization.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                            <button className="px-8 py-4 bg-[#2F7FF5] text-white font-semibold rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 transform hover:-translate-y-1">
                                Start free trial
                            </button>
                            <button className="px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-50 transition-all border border-gray-200 hover:border-accent/50 shadow-sm">
                                Book a demo
                            </button>
                        </div>
                    </div>

                    {/* Device image — desktop only */}
                    <div className="hidden lg:block relative lg:absolute lg:bottom-0 lg:right-0 lg:w-[55%] z-20 mt-10 lg:mt-0 px-8 lg:px-0 mx-auto lg:mx-0 w-full max-w-md lg:max-w-none">
                        <div ref={imageRef} className="relative w-full aspect-[16/10] opacity-0">
                            <Image
                                src={hero1Img}
                                alt="ERP System Dashboard on Devices"
                                fill
                                className="object-contain object-bottom drop-shadow-2xl"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
