'use client';

import React from 'react';
import Image from 'next/image';
import {
    CloudServerOutlined,
    DoubleRightOutlined,
    TeamOutlined,
    LineChartOutlined,
    ReadOutlined
} from '@ant-design/icons';

const WhyCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <div className={`bg-gray-50/50 border border-gray-100/50 rounded-[40px] p-10 flex flex-col justify-between ${className}`}>
        {children}
    </div>
);

export default function ElevateWhyUs() {
    return (
        <section className="w-full py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-20 space-y-4">
                    <span className="text-[10px] font-black text-accent uppercase tracking-[0.2em]">Why Us</span>
                    <h2 className="text-4xl md:text-6xl font-black text-primary tracking-tight">
                        Why they prefer Elevate
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Card 1: Businesses */}
                    <WhyCard className="min-h-[400px]">
                        <div className="text-[100px] md:text-[140px] font-black text-[#26A69A]/80 leading-none tracking-tighter">
                            500+
                        </div>
                        <p className="text-2xl md:text-3xl font-black text-primary leading-tight max-w-[280px]">
                            Enterprises already running on Elevate
                        </p>
                    </WhyCard>

                    {/* Card 2: Instant Access */}
                    <WhyCard className="min-h-[400px]">
                        <h3 className="text-2xl md:text-3xl font-black text-primary leading-tight max-w-[320px] mb-12">
                            Instant Access to training materials at any time
                        </h3>
                        <div className="flex items-center justify-center gap-8 mt-auto">
                            <div className="w-20 h-20 rounded-3xl bg-[#26A69A] flex items-center justify-center text-white shadow-xl shadow-[#26A69A]/20">
                                <ReadOutlined className="text-3xl" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <DoubleRightOutlined className="text-gray-200 text-xl" />
                                <DoubleRightOutlined className="text-gray-200 text-xl rotate-180" />
                            </div>
                            <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-white shadow-xl shadow-primary/20">
                                <TeamOutlined className="text-3xl" />
                            </div>
                        </div>
                    </WhyCard>
                </div>

                {/* Bottom Wide Card: Growth */}
                <div className="bg-gray-50/50 border border-gray-100/50 rounded-[40px] p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 overflow-hidden mb-24">
                    <div className="flex-1 space-y-6">
                        <h3 className="text-3xl md:text-4xl font-black text-primary leading-tight">No learning volatility</h3>
                        <p className="text-gray-500 font-medium leading-relaxed max-w-sm">
                            Generate consistent growth on your human capital without making risky investments in unverified content.
                        </p>
                    </div>
                    <div className="flex-[1.5] relative w-full h-[300px] bg-white rounded-3xl p-8 border border-gray-100 shadow-sm overflow-hidden">
                        <div className="flex justify-between items-start mb-8">
                            <div className="space-y-1">
                                <p className="text-[10px] font-black text-muted uppercase tracking-widest">Skill Index</p>
                                <p className="text-3xl font-black text-primary">87.5% Avg.</p>
                            </div>
                            <div className="px-3 py-1 rounded-full bg-gray-50 text-[10px] font-bold text-gray-500 flex items-center gap-1">
                                6 Months <LineChartOutlined />
                            </div>
                        </div>
                        {/* Fake Chart SVG */}
                        <svg viewBox="0 0 400 150" className="w-full h-auto drop-shadow-lg overflow-visible">
                            <defs>
                                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#26A69A" stopOpacity="0.2" />
                                    <stop offset="100%" stopColor="#26A69A" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M0,130 Q50,110 100,90 T200,80 T300,50 T400,20"
                                fill="none"
                                stroke="#26A69A"
                                strokeWidth="4"
                                strokeLinecap="round"
                            />
                            <path
                                d="M0,130 Q50,110 100,90 T200,80 T300,50 T400,20 V150 H0 Z"
                                fill="url(#chartGradient)"
                            />
                        </svg>
                    </div>
                </div>

                {/* Client Testimony Section */}
                <div className="max-w-4xl mx-auto text-center space-y-10 py-12">
                    <div className="relative inline-block">
                        <div className="absolute -top-12 -left-12 text-[120px] text-accent/5 font-serif">“</div>
                        <h3 className="text-2xl md:text-4xl font-black text-primary leading-snug italic relative z-10">
                            “EES Workforce Elevate has redefined how we approach professional development. Our team's productivity hasn't just increased—it's multiplied.”
                        </h3>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-accent/20">
                            <Image src="https://i.pravatar.cc/150?img=33" alt="Client" fill className="object-cover" unoptimized />
                        </div>
                        <div className="space-y-1">
                            <p className="text-lg font-black text-primary">Samantha Reed</p>
                            <p className="text-xs font-bold text-muted uppercase tracking-widest">Head of Operations, Global Logistics</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
