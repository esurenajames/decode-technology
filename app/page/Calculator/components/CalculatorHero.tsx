'use client';

import React from 'react';
import Image from 'next/image';
import { CalculatorOutlined, ArrowRightOutlined, CheckCircleFilled } from '@ant-design/icons';
import blogHeader from '../../Blog/assets/blog-header.jpg';
import imgBlog1 from '../../Landing/assets/blog1.png';

export default function CalculatorHero() {
    return (
        <section className="relative w-full pb-20">
            {/* Background Top Half */}
            <div className="absolute top-0 left-0 w-full h-[65%] z-0 overflow-hidden">
                <Image
                    src={blogHeader}
                    alt="Office Background"
                    fill
                    className="object-cover mix-blend-overlay"
                    priority
                />
                <div className="absolute inset-0 bg-primary/90" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32">
                {/* Header Text */}
                <div className="text-center text-white mb-16 max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold mb-6">
                        Philippine Salary Calculator 2026
                    </h1>
                    <p className="text-lg text-gray-300 tracking-tight">
                        Stay ahead of payroll compliance with our latest 2026 salary calculator.
                        Accurately compute withholding tax, SSS, PhilHealth, and PAG-IBIG contributions in seconds.
                    </p>
                </div>

                {/* Featured Tool Card */}
                <div className="bg-white rounded-lg overflow-hidden shadow-2xl border border-gray-100 flex flex-col md:flex-row min-h-[320px] transform hover:scale-[1.01] transition-transform duration-500">
                    {/* Content Side */}
                    <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center items-start">
                        <div className="flex items-center gap-3 text-xs font-bold text-accent mb-4 uppercase tracking-wider">
                            <span>Simplified Payroll</span>
                            <span className="w-1 h-1 bg-accent/30 rounded-full"></span>
                            <span>Latest 2026 Rates</span>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-bold text-primary leading-tight mb-4">
                            Hassle-free Computation for Your Workforce
                        </h2>

                        <p className="text-gray-500 text-base leading-relaxed mb-8">
                            Our calculator is updated with the latest TRAIN law tax tables and contribution schedules.
                            Perfect for both employees and HR professionals ensuring transparency and accuracy.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-8 w-full">
                            <div className="flex items-center gap-2 text-sm text-primary font-medium">
                                <CheckCircleFilled className="text-primary" />
                                <span>Updated Tax Tables</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-primary font-medium">
                                <CheckCircleFilled className="text-primary" />
                                <span>SSS WISP+ Support</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-primary font-medium">
                                <CheckCircleFilled className="text-primary" />
                                <span>Real-time Preview</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-primary font-medium">
                                <CheckCircleFilled className="text-primary" />
                                <span>Export Ready</span>
                            </div>
                        </div>
                    </div>

                    {/* Visual Side */}
                    <div className="w-full md:w-2/5 bg-gray-50 flex flex-col justify-center items-center relative border-l border-gray-100 group">
                        <div className="relative w-full h-full min-h-[300px]">
                            <Image
                                src={imgBlog1}
                                alt="Featured Case Study"
                                fill
                                className="object-cover"
                            />
                            {/* Overlay to dim image slightly for button readability */}
                            <div className="absolute inset-0 bg-black/5" />
                        </div>

                        <div className="absolute inset-0 flex items-end justify-center p-8">
                            <button
                                onClick={() => window.scrollTo({ top: 850, behavior: 'smooth' })}
                                className="group/btn bg-primary text-white px-8 py-4 rounded-lg font-bold flex items-center gap-3 hover:bg-primary/95 transition-all shadow-2xl shadow-primary/40 transform hover:-translate-y-1"
                            >
                                Start Computing
                                <ArrowRightOutlined className="group-hover/btn:rotate-90 transition-transform duration-300" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
