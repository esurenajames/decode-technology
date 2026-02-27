'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { CloseOutlined } from '@ant-design/icons';

import thumbnailImg from '../assets/thumbnail.png';

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
const TRANSITION_DURATION = '0.55s';
const TRANSITION_EASING = 'cubic-bezier(0.25, 1, 0.5, 1)';
const TRANSITION = `transform ${TRANSITION_DURATION} ${TRANSITION_EASING}, opacity ${TRANSITION_DURATION} ${TRANSITION_EASING}, filter ${TRANSITION_DURATION} ${TRANSITION_EASING}`;

function getDiff(index: number, current: number, total: number): number {
    let diff = (index - current + total) % total;
    if (diff > Math.floor((total - 1) / 2)) diff -= total;
    return diff;
}

export default function AIChatbotShowcase() {
    const [current, setCurrent] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);
    const [step, setStep] = useState(0);
    const [showVideo, setShowVideo] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const closeVideo = useCallback(() => {
        setShowVideo(false);
    }, []);

    // Track mobile breakpoint
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const el = carouselRef.current;
        if (!el) return;
        const compute = () => {
            if (isMobile) {
                setStep(el.offsetWidth);
            } else {
                setStep(el.offsetWidth - PEEK);
            }
        };
        compute();
        const ro = new ResizeObserver(compute);
        ro.observe(el);
        return () => ro.disconnect();
    }, [isMobile]);

    // Video modal: lock scroll & Escape key
    useEffect(() => {
        if (!showVideo) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeVideo();
        };

        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [showVideo, closeVideo]);

    const total = SHOWCASE_ITEMS.length;
    const cardWidth = Math.max(0, step - GAP);
    const item = SHOWCASE_ITEMS[current];

    const handlePrev = () => setCurrent((c) => (c === 0 ? total - 1 : c - 1));
    const handleNext = () => setCurrent((c) => (c === total - 1 ? 0 : c + 1));

    return (
        <>
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

                    {/* ── Card track ── */}
                    <div
                        ref={carouselRef}
                        className="relative overflow-hidden mb-8"
                        style={{ height: isMobile ? '280px' : '540px', borderRadius: '1rem' }}
                    >
                        {step > 0 && SHOWCASE_ITEMS.map((card, i) => {
                            const diff = getDiff(i, current, total);
                            const isActive = diff === 0;
                            const mobileWidth = step - GAP;
                            return (
                                <div
                                    key={i}
                                    className="absolute top-0 rounded-2xl overflow-hidden will-change-transform"
                                    style={{
                                        left: 0,
                                        width: isMobile ? `${mobileWidth}px` : `${cardWidth}px`,
                                        height: '100%',
                                        transform: isMobile
                                            ? `translateX(${diff * step}px)`
                                            : `translateX(${diff * step}px) scale(${isActive ? 1 : 0.95})`,
                                        transition: TRANSITION,
                                        visibility: Math.abs(diff) > 1 ? 'hidden' : 'visible',
                                        opacity: isActive ? 1 : (isMobile ? 0 : 0.35),
                                        filter: isActive ? 'blur(0px)' : (isMobile ? 'blur(0px)' : 'blur(1px)'),
                                    }}
                                >
                                    {/* Thumbnail background */}
                                    <Image
                                        src={thumbnailImg}
                                        alt="Company Overview"
                                        fill
                                        className="object-cover object-center"
                                        sizes="(max-width: 768px) 100vw, 800px"
                                        placeholder="blur"
                                        priority={i === 0}
                                    />

                                    {/* Dark overlay for better contrast */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10" />

                                    {/* Centered play button */}
                                    <button
                                        aria-label="Play video"
                                        onClick={() => setShowVideo(true)}
                                        className="absolute inset-0 w-full h-full flex items-center justify-center group cursor-pointer"
                                    >
                                        <div className={`${isMobile ? 'w-14 h-14' : 'w-20 h-20'} rounded-full bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-white/25 group-hover:border-white/40 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className={`${isMobile ? 'w-6 h-6' : 'w-8 h-8'} ml-1 drop-shadow-lg`}>
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </button>

                                    {/* Bottom-left label */}
                                    <div className="absolute bottom-4 left-4 md:bottom-5 md:left-5 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                        <span className="text-white/80 text-[10px] md:text-xs font-mono tracking-wider uppercase">Company Overview</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* ── Mobile: centered nav buttons ── */}
                    <div className="flex md:hidden items-center justify-center gap-3 mb-6">
                        <button
                            onClick={handlePrev}
                            aria-label="Previous"
                            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-white/60 hover:bg-white/10 transition-all duration-200"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <span className="text-white/50 text-xs font-mono">{current + 1} / {total}</span>
                        <button
                            onClick={handleNext}
                            aria-label="Next"
                            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-white/60 hover:bg-white/10 transition-all duration-200"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* ── Bottom — text + desktop nav buttons ── */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-6">
                        <div className="flex-1 max-w-lg">
                            <h3 className="text-lg md:text-xl font-bold uppercase tracking-tight leading-snug mb-2 md:mb-3">
                                {item.cardTitle}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {item.cardDescription}
                            </p>
                        </div>
                        <div className="hidden md:flex items-center gap-2 flex-shrink-0 mt-1">
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

            {/* Video Modal */}
            {showVideo && (
                <div
                    className="fixed inset-0 z-[999] flex items-center justify-center"
                    onClick={closeVideo}
                >
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/85 backdrop-blur-sm"
                        style={{ animation: 'showcaseFadeIn 0.2s ease' }}
                    />

                    {/* Close button */}
                    <button
                        onClick={closeVideo}
                        className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
                        aria-label="Close video"
                    >
                        <CloseOutlined className="text-lg" />
                    </button>

                    {/* Video container */}
                    <div
                        className="relative w-full max-w-4xl mx-4 aspect-video rounded-2xl overflow-hidden shadow-2xl"
                        style={{ animation: 'showcaseScaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)' }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <video
                            src="/COMPANY OVERVIEW 2025.mp4"
                            controls
                            autoPlay
                            className="w-full h-full object-contain bg-black rounded-2xl"
                        />
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes showcaseFadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes showcaseScaleIn {
                    from { opacity: 0; transform: scale(0.92); }
                    to { opacity: 1; transform: scale(1); }
                }
            `}</style>
        </>
    );
}
