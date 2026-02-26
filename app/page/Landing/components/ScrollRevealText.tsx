'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowRightOutlined } from '@ant-design/icons';

gsap.registerPlugin(ScrollTrigger);

interface TooltipData {
    description: string;
    link: string;
}

const INTERACTIVE_WORDS: Record<string, TooltipData> = {
    'software': {
        description: 'Empowering enterprises with bespoke, high-performance digital architectures.',
        link: '/page/Services'
    },
    'future.': {
        description: 'Architecting scalable, AI-driven solutions to command the next generation.',
        link: '/page/ERP'
    },
    'happen.': {
        description: 'Transforming ambitious conceptual visions into precise, market-ready realities.',
        link: '/page/Careers'
    }
};

export default function ScrollRevealText() {
    const sectionRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [hoveredWord, setHoveredWord] = useState<string | null>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const rawText = "We build the software that powers your future. Simple, scalable, and seamless. Let's make it happen.";
    const words = rawText.split(' ');

    useGSAP(() => {
        if (!sectionRef.current) return;

        const spans = sectionRef.current.querySelectorAll('.reveal-word');

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top top',
                end: '+=200%',
                pin: true,
                scrub: 1,
                anticipatePin: 1,
            },
        });

        tl.to(spans, {
            opacity: 1,
            color: (index) => {
                return index >= 12 ? '#014471' : '#000000';
            },
            stagger: 0.1,
            ease: 'none',
        });

    }, { scope: sectionRef });

    const handleMouseMove = (e: React.MouseEvent) => {
        setMousePos({ x: e.clientX, y: e.clientY });
    };

    return (
        <section
            ref={sectionRef}
            className="relative bg-gray-100 w-full min-h-screen overflow-hidden flex items-center justify-center cursor-default"
            onMouseMove={handleMouseMove}
        >
            {/* Original Background Styling */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-transparent to-gray-100" />
            </div>

            <div ref={containerRef} className="max-w-6xl mx-auto px-6 relative z-10 w-full py-20">
                <h2 className="text-6xl font-black leading-[1.1] tracking-tight text-center select-none">
                    {words.map((word, index) => {
                        const cleanWord = word.toLowerCase();
                        const isInteractive = INTERACTIVE_WORDS[cleanWord];
                        const isTagline = index >= 12;

                        return (
                            <span
                                key={index}
                                className={`reveal-word inline-block opacity-10 whitespace-pre relative transition-all duration-300 ${isInteractive ? 'underline decoration-2 underline-offset-8 cursor-pointer underline-black' : ''
                                    }`}
                                onMouseEnter={() => isInteractive && setHoveredWord(cleanWord)}
                                onMouseLeave={() => setHoveredWord(null)}
                            >
                                {word}{' '}
                            </span>
                        );
                    })}
                </h2>
            </div>

            {/* Premium Tooltip */}
            {hoveredWord && INTERACTIVE_WORDS[hoveredWord] && (
                <div
                    className="fixed z-[100] max-w-[280px] bg-white rounded-2xl p-6 shadow-2xl border border-gray-100 pointer-events-none transition-all duration-300"
                    style={{
                        left: mousePos.x,
                        top: mousePos.y + 20,
                        transform: 'translateX(-50%)'
                    }}
                >
                    <p className="text-gray-800 text-sm leading-relaxed font-bold">
                        {INTERACTIVE_WORDS[hoveredWord].description}
                    </p>
                </div>
            )}
        </section>
    );
}
