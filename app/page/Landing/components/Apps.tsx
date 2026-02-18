'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all'; // Import from 'gsap/all' to ensure registration works in Next.js environment
import { ArrowRightOutlined } from '@ant-design/icons';

// Placeholder images
import imgApp1 from '../assets/image 25.png';
import imgApp2 from '../assets/image 26.png'; // Reusing for demo

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
            {
                title: 'Custom Knowledge Base',
                desc: 'Train the bot on your specific documents, FAQs, and brand guidelines in minutes.'
            }
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
            {
                title: 'Export & Integration',
                desc: 'Sync data with your CRM or data warehouse for unified reporting.'
            }
        ]
    },
    {
        id: 'outreach',
        category: 'Automated Outreach',
        title: 'Proactive Engagement at Scale',
        description: 'Don\'t just wait for customers to come to you. Reach out with personalized messages that drive conversion and retention automatically.',
        image: imgApp1, // Reusing
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
            {
                title: 'Personalized Content',
                desc: 'Dynamically insert user data to create messages that feel truly personal.'
            }
        ]
    }
];

export default function Apps() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeAppIndex, setActiveAppIndex] = useState(0);

    useGSAP(() => {
        APPS_DATA.forEach((app, index) => {
            ScrollTrigger.create({
                trigger: `#app-section-${index}`,
                start: 'top center', // When top of right section hits center of viewport
                end: 'bottom center', // When bottom of right section hits center
                onEnter: () => setActiveAppIndex(index),
                onEnterBack: () => setActiveAppIndex(index),
                // markers: true, // Uncomment for debugging
            });
        });
    }, { scope: containerRef });

    const activeApp = APPS_DATA[activeAppIndex];

    return (
        <section ref={containerRef} className="py-16 bg-white relative">
            <div className="max-w-5xl mx-auto px-6 flex flex-col lg:flex-row gap-12 md:gap-16">

                {/* Left Side - Sticky Content */}
                <div className="lg:w-1/2 h-fit lg:sticky lg:top-24 transition-all duration-500 ease-in-out">
                    <div className="flex flex-col items-start space-y-6 animate-fadeIn">
                        {/* Category Pill */}
                        <span className="px-4 py-2 bg-primary text-white text-sm font-bold rounded-full tracking-wide uppercase shadow-lg shadow-primary/20">
                            {activeApp.category}
                        </span>

                        {/* Title & Desc */}
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-black text-primary leading-tight">
                                {activeApp.title}
                            </h2>
                            <p className="text-xl text-gray-500 leading-relaxed max-w-lg">
                                {activeApp.description}
                            </p>
                        </div>

                        {/* App Image Card */}
                        <div className="w-full aspect-[4/3] relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-50 mt-8">
                            <Image
                                src={activeApp.image}
                                alt={activeApp.title}
                                fill
                                className="object-cover transition-opacity duration-500"
                            />
                        </div>

                        <button className="flex items-center gap-2 text-primary font-bold text-lg hover:text-accent transition-colors group mt-4">
                            Explore {activeApp.category}
                            <ArrowRightOutlined className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Right Side - Scrollable Features List */}
                <div className="lg:w-1/2 flex flex-col pt-8">
                    {APPS_DATA.map((app, appIndex) => (
                        <div
                            key={app.id}
                            id={`app-section-${appIndex}`}
                            className="min-h-[50vh] py-12 flex flex-col justify-center gap-6"
                        >
                            {/* Mobile Title (visible only on small screens where sticky doesn't apply well) */}
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
                    ))}
                </div>

            </div>
        </section>
    );
}
