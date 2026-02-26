'use client';

import React, { useState } from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';

const PROCESS_STEPS = [
    {
        id: '1',
        title: 'Discover',
        description: "Let's collaborate on what software you need."
    },
    {
        id: '2',
        title: 'Develop',
        description: 'Our expert team of software engineers and solutions analyst will develop your software.'
    },
    {
        id: '3',
        title: 'Deploy',
        description: 'Use your specially developed software for your organization.'
    }
];

export default function SDProcess() {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        setActiveStep((prev) => (prev + 1) % PROCESS_STEPS.length);
    };

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <div>
                        <span className="text-gray-400 font-medium text-sm mb-2 block">Our Process</span>
                        <h2 className="text-4xl md:text-5xl font-medium text-[#111] tracking-tight">
                            Your D3 Software Development Plan
                        </h2>
                    </div>
                    <button className="flex items-center gap-2 px-6 py-2.5 border border-gray-300 rounded-lg text-sm font-semibold text-gray-800 hover:bg-gray-50 transition-colors whitespace-nowrap w-fit">
                        <span>All Services</span>
                        <ArrowRightOutlined className="text-xs" />
                    </button>
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
                                {/* Inactive State */}
                                {!isActive && (
                                    <div className="flex md:flex-col items-center justify-between md:justify-start w-full h-full p-5 md:py-8">
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
                                    <div className="flex w-full h-full p-8 md:p-10 animate-fade">

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

                                            <button
                                                onClick={handleNext}
                                                className="mt-auto flex items-center gap-2 px-6 py-2.5 border border-white/20 rounded-lg text-sm text-white/90 hover:bg-white/10 transition-colors w-fit tracking-wide"
                                            >
                                                <span>Next</span>
                                                <ArrowRightOutlined className="text-xs" />
                                            </button>
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
