'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import heroImg from '../assets/hero.png';
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

        // Floating animation for the device image
        gsap.to(imageRef.current, {
            y: -15,
            duration: 2.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: 1.2
        });

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative w-full overflow-hidden bg-white min-h-screen flex items-center pt-20 lg:pt-0">
            <div className="container max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div ref={contentRef} className="max-w-2xl pt-12 lg:pt-0 relative z-20 opacity-0">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary leading-tight mb-6">
                            <span className="text-accent italic">ERP System</span> That Fits Your Business,
                            <br className="hidden md:block" />
                            Right Out of the Box
                        </h1>
                        <p className="text-lg text-muted mb-10 leading-relaxed max-w-lg">
                            A ready-to-use ERP system that adapts to your business needs—combining core modules, local compliance, and scalable features without complex customization.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                                Start free trial
                            </button>
                            <button className="px-8 py-4 bg-surface text-primary font-semibold rounded-lg hover:bg-surface/80 transition-all border border-transparent hover:border-accent/20">
                                Book a demo
                            </button>
                        </div>
                    </div>

                    {/* Right Content - Devices Image */}
                    <div className="relative z-20 mt-12 lg:mt-0 flex justify-center lg:justify-end">
                        <div ref={imageRef} className="relative w-full max-w-[650px] aspect-[4/3] opacity-0">
                            <Image
                                src={hero1Img}
                                alt="ERP System Dashboard on Devices"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Image */}
            <div className="absolute top-0 right-0 w-full lg:w-[55%] h-full">
                <div className="relative w-full h-full">
                    <Image
                        src={heroImg}
                        alt="ERP System Background"
                        fill
                        className="object-contain object-top"
                        priority
                    />
                </div>
            </div>

        </section>
    );
}
