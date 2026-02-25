'use client';

import React from 'react';
import { AppstoreOutlined, WalletOutlined, MessageOutlined } from '@ant-design/icons';
import bgImg from '../assets/empacsteps.jpg';

const STEPS = [
    {
        number: '1',
        title: 'Discover',
        description: 'Discover how EMPAC\'s features align with your school\'s goals.'
    },
    {
        number: '2',
        title: 'Determine',
        description: 'Our team ensures EMPAC is configured with precision for your school.'
    },
    {
        number: '3',
        title: 'Deploy',
        description: 'Make an impact on your school management with EMPAC!'
    }
];

export default function EMPACProcess() {
    return (
        <section className="relative w-full overflow-hidden bg-white">

            {/* Top Section: Steps (Dark Background) */}
            <div className="relative pt-24 pb-64 bg-[#014471] text-white">
                {/* Background Image with Low Opacity */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={bgImg.src}
                        alt=""
                        className="w-full h-full object-cover opacity-20"
                    />
                </div>
                {/* Blue Overlay */}
                <div className="absolute inset-0 z-0 bg-[#014471]/60" />

                <div className="relative z-10 max-w-5xl mx-auto px-6">
                    {/* Header */}
                    <div className="mb-20 text-center">
                        <span className="text-[#2F7FF5] font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
                            Our Process
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold leading-[1.1] max-w-2xl mx-auto">
                            Experience a seamless transition <br />
                            to digital excellence.
                        </h2>
                    </div>

                    {/* Steps Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {STEPS.map((step, idx) => (
                            <div
                                key={idx}
                                className="step-card group relative p-10 bg-white/5 border border-white/10 rounded-[32px] hover:bg-white/10 transition-all duration-500"
                            >
                                {/* Circle Number Indicator that fills on hover */}
                                <div className="mx-auto w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-lg font-bold mb-8 transition-all duration-500 group-hover:bg-[#2F7FF5] group-hover:border-[#2F7FF5] group-hover:shadow-[0_0_20px_rgba(47,127,245,0.4)]">
                                    {step.number}
                                </div>

                                <h3 className="text-2xl font-bold mb-4">
                                    {step.title}
                                </h3>
                                <p className="text-white/70 leading-relaxed font-medium transition-colors duration-300 group-hover:text-white">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Section: About Card (Overlapping) */}
            <div className="relative z-20 max-w-6xl mx-auto px-6">
                <div className="-mt-40 bg-white rounded-[40px] border border-gray-100 shadow-2xl shadow-gray-200/50 p-12 md:p-16">
                    {/* Top Section: Header & Brief Desc */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12 items-start">
                        <div>
                            <span className="text-[#2F7FF5] font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
                                Built for Education
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] leading-[1.1] tracking-tight">
                                Designed to <span className="text-[#014471]">Inspire.</span>
                            </h2>
                        </div>
                        <div className="lg:pt-10">
                            <p className="text-gray-500 text-lg leading-relaxed font-medium">
                                Empress provides a unified digital ecosystem that combines administrative
                                management and learning tools into one seamless platform.
                            </p>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Feature 1 */}
                        <div className="flex flex-col gap-6 group">
                            <div className="w-14 h-14 rounded-2xl bg-[#f0f7ff] flex items-center justify-center text-[#2F7FF5] text-2xl transition-transform duration-300 group-hover:scale-110">
                                <AppstoreOutlined />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#19253b] mb-3">Unified LMS & SMS</h3>
                                <p className="text-gray-500 leading-relaxed text-sm font-medium">
                                    Manage attendance, grading, and scheduling alongside online learning
                                    resources—all in one place.
                                </p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex flex-col gap-6 group">
                            <div className="w-14 h-14 rounded-2xl bg-[#f0f7ff] flex items-center justify-center text-[#2F7FF5] text-2xl transition-transform duration-300 group-hover:scale-110">
                                <WalletOutlined />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#19253b] mb-3">Secure Online Payments</h3>
                                <p className="text-gray-500 leading-relaxed text-sm font-medium">
                                    Simplify fee collection with integrated payment processing for tuition
                                    and other school expenses securely.
                                </p>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex flex-col gap-6 group">
                            <div className="w-14 h-14 rounded-2xl bg-[#f0f7ff] flex items-center justify-center text-[#2F7FF5] text-2xl transition-transform duration-300 group-hover:scale-110">
                                <MessageOutlined />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#19253b] mb-3">Real-Time Engagement</h3>
                                <p className="text-gray-500 leading-relaxed text-sm font-medium">
                                    Foster collaboration with instant messaging, notifications, and updates
                                    for students, teachers, and parents.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Spacer */}
            <div className="h-24 bg-white" />
        </section>
    );
}
