'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const SCROLL_ITEMS = [
    {
        label: '[ CONNECT ]',
        title: 'Enhance Conversations with AI Chatbot Integration',
        description: 'Leverage cutting-edge AI to provide real-time, personalized responses to customers. Increase engagement, streamline processes, and offer 24/7 support — all while improving user satisfaction.',
        rightLabel: '[ CONNECT ]',
        rightTitle: 'Enhance Conversations with\nAI Chatbot Integration',
    },
    {
        label: '[ SCALE ]',
        title: 'Go Global with Multilingual Conversation Support',
        description: 'Break language barriers and expand your reach. Our AI seamlessly supports 50+ languages, so your customers always feel understood — no matter where they are in the world.',
        rightLabel: '[ SCALE ]',
        rightTitle: 'Go Global with Multilingual\nConversation Support',
    },
    {
        label: '[ AUTOMATE ]',
        title: 'Resolve Queries Instantly with Zero Wait Time',
        description: 'Eliminate response delays and deliver lightning-fast answers. Automate repetitive workflows and let your team focus on work that truly matters.',
        rightLabel: '[ AUTOMATE ]',
        rightTitle: 'Resolve Queries Instantly with\nZero Wait Time',
    },
];

export default function AIChatbotScrollFeatures() {
    const containerRef = useRef<HTMLDivElement>(null);
    const pinnedRef = useRef<HTMLDivElement>(null);

    // left panel refs
    const leftPanelsRef = useRef<HTMLDivElement[]>([]);
    // right panel refs
    const rightPanelsRef = useRef<HTMLDivElement[]>([]);

    useGSAP(() => {
        if (!containerRef.current || !pinnedRef.current) return;

        const totalItems = SCROLL_ITEMS.length;

        // Pin the inner layout while the scroll container passes
        ScrollTrigger.create({
            trigger: containerRef.current,
            start: 'top top',
            end: `+=${(totalItems - 1) * 100}%`,
            pin: pinnedRef.current,
            pinSpacing: false,
        });

        // For each item: fade in left + right panels using scrub progress
        SCROLL_ITEMS.forEach((_, i) => {
            const leftPanel = leftPanelsRef.current[i];
            const rightPanel = rightPanelsRef.current[i];

            // Calculate which portion of the scroll this item occupies
            const startPct = i === 0 ? 'top top' : `${(i / totalItems) * 100}% top`;
            const endPct = `${((i + 1) / totalItems) * 100}% top`;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: i === 0 ? 'top top' : `+=${i * (100 / totalItems)}%`,
                    end: `+=${100 / totalItems}%`,
                    scrub: 0.5,
                },
            });

            if (i === 0) {
                // First panel starts visible
                gsap.set(leftPanel, { opacity: 1, y: 0 });
                gsap.set(rightPanel, { opacity: 1, y: 0 });

                // Fade out at the end
                tl.to([leftPanel, rightPanel], { opacity: 0, y: -30, duration: 0.3 }, 0.7);
            } else if (i < totalItems - 1) {
                // Middle panels: fade in then fade out
                gsap.set(leftPanel, { opacity: 0, y: 30 });
                gsap.set(rightPanel, { opacity: 0, y: 30 });

                tl.to([leftPanel, rightPanel], { opacity: 1, y: 0, duration: 0.3 }, 0)
                    .to([leftPanel, rightPanel], { opacity: 0, y: -30, duration: 0.3 }, 0.7);
            } else {
                // Last panel: fade in and stay
                gsap.set(leftPanel, { opacity: 0, y: 30 });
                gsap.set(rightPanel, { opacity: 0, y: 30 });

                tl.to([leftPanel, rightPanel], { opacity: 1, y: 0, duration: 0.3 }, 0);
            }
        });
    }, { scope: containerRef });

    return (
        <div
            ref={containerRef}
            style={{ height: `${SCROLL_ITEMS.length * 100}vh` }}
            className="relative bg-black text-white"
        >
            {/* Pinned layout */}
            <div
                ref={pinnedRef}
                className="w-full h-screen flex flex-col"
            >
                {/* Section Header */}
                <div className="max-w-7xl mx-auto w-full px-12 pt-24 pb-10">
                    <span className="text-gray-400 text-sm font-mono tracking-widest block mb-2">[ AI AUTOMATE ]</span>
                    <h2 className="text-3xl font-black uppercase tracking-tight">Decode AI Chatbot</h2>
                </div>

                {/* Content area */}
                <div className="flex-1 max-w-7xl mx-auto w-full px-12 grid grid-cols-2 gap-20 items-center pb-24 relative">

                    {/* LEFT PANELS — stacked absolutely */}
                    <div className="relative h-full flex items-center">
                        {SCROLL_ITEMS.map((item, i) => (
                            <div
                                key={i}
                                ref={(el) => { if (el) leftPanelsRef.current[i] = el; }}
                                className="absolute inset-0 flex flex-col justify-center"
                            >
                                <span className="text-gray-500 text-xs font-mono tracking-widest mb-6 block">{item.label}</span>
                                <h3 className="text-3xl font-bold text-white leading-snug mb-6">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT PANELS — stacked absolutely */}
                    <div className="relative h-full flex items-center">
                        {SCROLL_ITEMS.map((item, i) => (
                            <div
                                key={i}
                                ref={(el) => { if (el) rightPanelsRef.current[i] = el; }}
                                className="absolute inset-0 flex flex-col justify-center gap-5"
                            >
                                {SCROLL_ITEMS.map((ri, j) => (
                                    <div
                                        key={j}
                                        className={`rounded-xl px-6 py-5 border transition-colors ${j === i
                                            ? 'border-white/20 bg-white/8'
                                            : 'border-white/5 bg-white/3'
                                            }`}
                                        style={{
                                            background: j === i ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.02)',
                                        }}
                                    >
                                        <span className={`text-xs font-mono tracking-widest block mb-2 ${j === i ? 'text-white/60' : 'text-white/20'}`}>
                                            {ri.rightLabel}
                                        </span>
                                        <p className={`text-sm font-semibold leading-snug whitespace-pre-line ${j === i ? 'text-white' : 'text-white/25'}`}>
                                            {ri.rightTitle}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}
