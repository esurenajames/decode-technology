'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { ArrowRightOutlined } from '@ant-design/icons';

// Placeholder images
import imgApp1 from '../assets/image 25.png';
import imgApp2 from '../assets/image 26.png';

// Register ScrollTrigger
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const APPS_DATA = [
    {
        id: 'chatbot',
        category: 'AI Chatbot',
        title: 'AI Chatbot That Works for Your Business',
        description: 'Automate customer support, answer inquiries instantly, and streamline operations with an AI chatbot designed to work 24/7, helping your business respond faster.',
        image: imgApp1,
        features: [
            {
                title: 'Natural Language Processing',
                desc: 'Understands context and intent to provide human-like responses to complex queries.'
            },
            {
                title: 'Multi-Channel Support',
                desc: 'Deploy seamlessly across WhatsApp, Messenger, Slack, and your website.'
            },
            {
                title: 'Seamless Handoff',
                desc: 'Intelligently routes complex issues to human agents with full context history.'
            },
        ]
    },
    {
        id: 'analytics',
        category: 'Smart Analytics',
        title: 'Deep Insights Into Every Interaction',
        description: 'Transform raw conversation data into actionable business intelligence. Understand what your customers really want and identify trends before they become issues.',
        image: imgApp2,
        features: [
            {
                title: 'Sentiment Analysis',
                desc: 'Automatically gauge customer satisfaction and emotion in real-time conversations.'
            },
            {
                title: 'Trend Detection',
                desc: 'Spot emerging topics and issues across thousands of conversations instantly.'
            },
            {
                title: 'Performance Metrics',
                desc: 'Track response times, resolution rates, and bot accuracy with detailed dashboards.'
            },
        ]
    },
    {
        id: 'outreach',
        category: 'Automated Outreach',
        title: 'Proactive Engagement at Scale',
        description: 'Don\'t just wait for customers to come to you. Reach out with personalized messages that drive conversion and retention automatically.',
        image: imgApp1,
        features: [
            {
                title: 'Smart Segmentation',
                desc: 'Target users based on behavior, demographics, and past interactions.'
            },
            {
                title: 'Drip Campaigns',
                desc: 'Set up automated sequences that nurture leads over time without manual effort.'
            },
            {
                title: 'A/B Testing',
                desc: 'Experiment with different messages and timing to optimize engagement rates.'
            },
        ]
    }
];

export default function Apps() {
    const containerRef = useRef<HTMLDivElement>(null);
    const rightColRef = useRef<HTMLDivElement>(null);
    const [activeAppIndex, setActiveAppIndex] = useState(0);

    useGSAP(() => {
        const container = containerRef.current;
        const rightCol = rightColRef.current;

        if (!container || !rightCol) return;

        // Calculate scroll distance based on right column height
        // We want the user to scroll through the entire right column
        const scrollDistance = rightCol.offsetHeight - window.innerHeight;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: "top top",
                end: () => `+=${Math.max(scrollDistance + 200, 2000)}`, // Ensure enough scroll space
                pin: true,
                scrub: 1,
                onUpdate: (self) => {
                    // Update active index based on progress
                    const idx = Math.min(
                        Math.floor(self.progress * APPS_DATA.length),
                        APPS_DATA.length - 1
                    );
                    setActiveAppIndex(idx);
                }
            }
        });

        // Translate the right column up as we scroll
        // If content is shorter than viewport, we don't need to scroll it much, but let's assume it's taller
        if (scrollDistance > 0) {
            tl.to(rightCol, {
                y: -scrollDistance,
                ease: "none"
            });
        } else {
            // Fallback for short content - just scrub timing
            tl.to({}, { duration: 1 });
        }

    }, { scope: containerRef });

    const activeApp = APPS_DATA[activeAppIndex];

    return (
        <section ref={containerRef} className="h-screen w-full bg-white relative overflow-hidden flex items-start">
            <div className="max-w-7xl mx-auto px-6 w-full h-full flex flex-col lg:flex-row gap-12 md:gap-16">

                {/* Left Side - Fixed Position (Visual) */}
                <div className="flex-1 h-full py-24 flex flex-col justify-center">
                    <div className="flex flex-col items-start space-y-6 animate-fadeIn transition-all duration-500">
                        {/* Category Pill */}
                        <div key={activeApp.id + '-cat'} className="animate-fadeIn">
                            <span className="px-4 py-2 bg-primary text-white text-sm font-bold rounded-full tracking-wide uppercase shadow-lg shadow-primary/20">
                                {activeApp.category}
                            </span>
                        </div>

                        {/* Title & Desc */}
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-black text-primary leading-tight min-h-[3em]">
                                {activeApp.title}
                            </h2>
                            <p className="text-xl text-gray-500 leading-relaxed max-w-lg min-h-[4em]">
                                {activeApp.description}
                            </p>
                        </div>


                        <button className="flex items-center gap-2 text-primary font-bold text-lg hover:text-accent transition-colors group mt-4">
                            Explore {activeApp.category}
                            <ArrowRightOutlined className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Right Side - Scrolling Content */}
                {/* We offset padding-top to align with the first item 'waiting' for the scroll */}
                <div className="flex-1 h-full overflow-hidden relative">
                    <div ref={rightColRef} className="flex flex-col pt-32 pb-32">
                        {APPS_DATA.map((app, appIndex) => {
                            const isActive = appIndex === activeAppIndex;
                            return (
                                <div
                                    key={app.id}
                                    id={`app-section-${appIndex}`}
                                    className={`py-12 flex flex-col justify-center gap-6 transition-all duration-500 ${isActive ? 'opacity-100 scale-100 blur-none' : 'opacity-30 scale-95 blur-sm'}`}
                                >
                                    {/* Mobile Title (Hidden on desktop as it's on the left) */}
                                    <div className="lg:hidden mb-8">
                                        <h3 className="text-3xl font-bold text-primary">{app.category}</h3>
                                    </div>

                                    {app.features.map((feature, fIndex) => (
                                        <div
                                            key={fIndex}
                                            className="p-8 rounded-2xl bg-surface border border-gray-100 hover:border-accent/30 hover:shadow-lg transition-all duration-300 group"
                                        >
                                            <h4 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                                                {feature.title}
                                            </h4>
                                            <p className="text-gray-500 leading-relaxed">
                                                {feature.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}
