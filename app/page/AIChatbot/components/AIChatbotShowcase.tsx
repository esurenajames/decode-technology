'use client';

import { useState, useRef, useEffect } from 'react';

interface ShowcaseItem {
    tag: string;
    headerTitle: string;
    headerDescription: string;
    cardTitle: string;
    cardDescription: string;
    bgColor: string;
}

const SHOWCASE_ITEMS: ShowcaseItem[] = [
    {
        tag: '[ EDGE ]',
        headerTitle: 'BUILT FOR YOUR\nBUSINESS',
        headerDescription: 'Leverage cutting-edge AI to provide real-time, personalized responses to customers. Increase engagement.',
        cardTitle: 'Enhance Conversations with AI Chatbot Integration',
        cardDescription: 'Leverage cutting-edge AI to provide real-time, personalized responses to customers. Increase engagement, streamline processes, and offer 24/7 support, all while improving user satisfaction.',
        bgColor: '#d4d4d4',
    },
    {
        tag: '[ SCALE ]',
        headerTitle: 'GROW WITHOUT\nLIMITS',
        headerDescription: 'Break language barriers and expand your reach globally with multilingual AI support.',
        cardTitle: 'Go Global with Multilingual Conversation Support',
        cardDescription: 'Our AI seamlessly supports 50+ languages so your customers always feel understood — no matter where they are in the world.',
        bgColor: '#a3a3a3',
    },
    {
        tag: '[ AUTOMATE ]',
        headerTitle: 'AUTOMATE WITH\nCONFIDENCE',
        headerDescription: 'Eliminate response delays and deliver lightning-fast answers around the clock.',
        cardTitle: 'Resolve Queries Instantly with Zero Wait Time',
        cardDescription: 'Eliminate response delays and deliver lightning-fast answers. Automate repetitive workflows and let your team focus on work that truly matters.',
        bgColor: '#737373',
    },
];

const PEEK = 240;
const GAP = 16;
const TRANSITION = 'transform 0.42s ease-in-out ';

function getDiff(index: number, current: number, total: number): number {
    let diff = (index - current + total) % total;
    if (diff > Math.floor((total - 1) / 2)) diff -= total;
    return diff;
}

export default function AIChatbotShowcase() {
    const [current, setCurrent] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);
    const [step, setStep] = useState(0);

    useEffect(() => {
        const el = carouselRef.current;
        if (!el) return;
        const compute = () => setStep(el.offsetWidth - PEEK);
        compute();
        const ro = new ResizeObserver(compute);
        ro.observe(el);
        return () => ro.disconnect();
    }, []);

    const total = SHOWCASE_ITEMS.length;
    const cardWidth = Math.max(0, step - GAP);
    const item = SHOWCASE_ITEMS[current];

    const handlePrev = () => setCurrent((c) => (c === 0 ? total - 1 : c - 1));
    const handleNext = () => setCurrent((c) => (c === total - 1 ? 0 : c + 1));

    return (
        <section className="text-white py-24 px-6 md:px-12 overflow-hidden">
            <div className="max-w-5xl mx-auto">

                {/* ── Header — static, no animation ── */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-12 gap-6">
                    <div>
                        <span className="text-gray-500 text-xs font-mono tracking-widest block mb-3">
                            {item.tag}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold uppercase leading-tight whitespace-pre-line">
                            {item.headerTitle}
                        </h2>
                    </div>
                </div>

                {/* ── Card track — only this slides ── */}
                <div
                    ref={carouselRef}
                    className="relative overflow-hidden mb-8"
                    style={{ height: '540px', borderRadius: '1rem' }}
                >
                    {step > 0 && SHOWCASE_ITEMS.map((card, i) => {
                        const diff = getDiff(i, current, total);
                        return (
                            <div
                                key={i}
                                className="absolute top-0 rounded-2xl flex items-end justify-end"
                                style={{
                                    left: 0,
                                    width: `${cardWidth}px`,
                                    height: '100%',
                                    background: card.bgColor,
                                    transform: `translateX(${diff * step}px)`,
                                    transition: TRANSITION,
                                    visibility: Math.abs(diff) > 1 ? 'hidden' : 'visible',
                                    opacity: diff === 0 ? 1 : 0.45,
                                }}
                            >
                                {diff === 0 && (
                                    <button
                                        aria-label="Play video"
                                        className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-black/70 flex items-center justify-center hover:bg-black transition-colors duration-200"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5 ml-0.5">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </button>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* ── Bottom — static, no animation ── */}
                <div className="flex items-start justify-between gap-6">
                    <div className="flex-1 max-w-lg">
                        <h3 className="text-xl font-bold uppercase tracking-tight leading-snug mb-3">
                            {item.cardTitle}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {item.cardDescription}
                        </p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0 mt-1">
                        <button
                            onClick={handlePrev}
                            aria-label="Previous"
                            className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-white/60 hover:bg-white/10 transition-all duration-200"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={handleNext}
                            aria-label="Next"
                            className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-white/60 hover:bg-white/10 transition-all duration-200"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}
