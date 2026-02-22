'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollRevealText() {
    const sectionRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!textRef.current || !sectionRef.current) return;

        const text = textRef.current;
        const words = text.innerText.split(' ');
        text.innerHTML = words
            .map((word, index) => {
                const isTagline = index >= 12;
                const colorClass = isTagline ? 'text-primary' : 'text-black';
                return `<span class="inline-block ${colorClass} opacity-10 transition-colors duration-300 whitespace-pre">${word} </span>`;
            })
            .join('');

        const spans = text.querySelectorAll('span');

        // Main pinning and text reveal timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top top',
                end: '+=200%', // Makes scrolling 2x longer
                pin: true,
                scrub: 1, // Smooth scrolling effect
                anticipatePin: 1,
            },
        });

        tl.to(spans, {
            opacity: 1,
            color: (index) => {
                // The tagline "Let's make it happen." starts at word index 12
                return index >= 12 ? '#014471' : '#000000';
            },
            stagger: 0.1,
            ease: 'none',
        });

    }, { scope: sectionRef });

    return (
        <section
            ref={sectionRef}
            className="relative bg-gray-100 w-full min-h-screen overflow-hidden flex items-center justify-center"
        >
            {/* Clean Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-transparent to-gray-100" />
            </div>

            <div ref={containerRef} className="max-w-6xl mx-auto px-6 relative z-10 w-full py-20">
                <h2
                    ref={textRef}
                    className="text-6xl font-black leading-[1.1] tracking-tight text-black text-center select-none"
                >
                    We build the software that powers your future. Simple, scalable, and seamless. Let's make it happen.
                </h2>
            </div>
        </section>
    );
}
