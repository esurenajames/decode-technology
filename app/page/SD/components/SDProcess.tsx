'use client';

import React, { useState } from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';

const PROCESS_STEPS = [
    {
        id: '1',
        title: 'Discover',
        description: 'We start by understanding your business, goals, and challenges. Through workshops and discussions, we identify the exact software needs that will drive real results.',
        bg: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80'
    },
    {
        id: '2',
        title: 'Plan',
        description: 'Our team creates a strategic roadmap, defining features, timelines, and resources. This ensures your project is aligned with business objectives and set up for success from the start.',
        bg: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80'
    },
    {
        id: '3',
        title: 'Develop',
        description: 'Using the latest technologies, our developers and solution analysts turn your ideas into a fully functional, user-friendly software solution tailored to your needs.',
        bg: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80'
    },
    {
        id: '4',
        title: 'Test',
        description: 'Before launch, we rigorously test your software for performance, usability, and security. This guarantees a smooth, reliable, and bug-free experience for your team and customers.',
        bg: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80'
    },
    {
        id: '5',
        title: 'Deploy',
        description: 'We deploy your custom software seamlessly into your operations, provide training and support, and ensure it drives efficiency, growth, and business impact from day one.',
        bg: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80'
    }
];

export default function SDProcess() {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        setActiveStep((prev) => (prev + 1) % PROCESS_STEPS.length);
    };

    return (
        <section className="pt-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-medium text-primary tracking-tight">
                            Our Software Development Plan
                        </h2>
                        <p className="text-gray-500 text-base md:text-lg mt-4 max-w-2xl leading-relaxed">
                            From discovery to deployment, our proven 5-step process ensures your software is built right — on time, on budget, and tailored to your business.
                        </p>
                    </div>
                </div>

                {/* Process Accordion */}
                <div className="flex flex-col md:flex-row gap-4 h-[600px] md:h-[450px]">
                    {PROCESS_STEPS.map((step, idx) => {
                        const isActive = activeStep === idx;

                        return (
                            <div
                                key={step.id}
                                onClick={() => setActiveStep(idx)}
                                className={`relative cursor-pointer transition-all duration-500 ease-in-out rounded-2xl overflow-hidden flex ${isActive
                                    ? 'md:flex-1 bg-[#1c1c1c] text-white w-full h-full'
                                    : 'md:w-24 bg-[#f4f4f4] text-gray-800 hover:bg-[#eaeaea] h-16 md:h-full w-full border border-gray-100'
                                    }`}
                            >
                                {/* Background Image */}
                                <img
                                    src={step.bg}
                                    alt=""
                                    aria-hidden="true"
                                    className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
                                />
                                {/* Dark Overlay */}
                                <div className={`absolute inset-0 pointer-events-none ${isActive ? 'bg-[#1c1c1c]/80' : 'bg-[#f4f4f4]/85'}`} />
                                {/* Inactive State */}
                                {!isActive && (
                                    <div className="flex md:flex-col items-center justify-between md:justify-start w-full h-full p-5 md:py-8 relative z-10">
                                        <span className="text-lg font-medium mb-4">{step.id}</span>
                                        <div className="hidden md:flex flex-1 items-center justify-center -rotate-180" style={{ writingMode: 'vertical-rl' }}>
                                            <span className="whitespace-nowrap font-medium text-gray-700 tracking-wide text-[15px]">
                                                {step.title}
                                            </span>
                                        </div>
                                        <span className="md:hidden font-medium text-gray-700">{step.title}</span>
                                    </div>
                                )}

                                {/* Active State */}
                                {isActive && (
                                    <div className="flex w-full h-full p-8 md:p-10 animate-fade relative z-10">

                                        {/* Left Side vertical title & ID */}
                                        <div className="hidden md:flex flex-col items-center mr-8 h-full">
                                            <span className="text-xl font-medium text-white/60 mb-8">{step.id}</span>
                                            <div className="flex-1 flex items-center justify-center -rotate-180" style={{ writingMode: 'vertical-rl' }}>
                                                <span className="whitespace-nowrap font-medium text-white/60 tracking-wide text-sm">
                                                    {step.title}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Vertical divider */}
                                        <div className="hidden md:block w-px bg-white/20 mr-10 h-full" />

                                        {/* Content */}
                                        <div className="flex flex-col h-full flex-1 pt-1">
                                            <div className="md:hidden text-lg font-medium text-white/50 mb-4">{step.id}</div>
                                            <h3 className="text-2xl md:text-[28px] font-medium mb-6 leading-tight text-white/90 tracking-wide">
                                                {step.title}
                                            </h3>
                                            <p className="text-white/60 text-base md:text-lg leading-[1.8] max-w-2xl font-light">
                                                {step.description}
                                            </p>

                                            {idx < PROCESS_STEPS.length - 1 && (
                                                <button
                                                    onClick={handleNext}
                                                    className="mt-auto flex items-center gap-2 px-6 py-2.5 border border-white/20 rounded-lg text-sm text-white/90 hover:bg-white/10 transition-colors w-fit tracking-wide"
                                                >
                                                    <span>Next</span>
                                                    <ArrowRightOutlined className="text-xs" />
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-fade {
                    animation: fadeIn 0.4s ease forwards;
                    animation-delay: 0.2s;
                    opacity: 0;
                }
            `}</style>
        </section>
    );
}
