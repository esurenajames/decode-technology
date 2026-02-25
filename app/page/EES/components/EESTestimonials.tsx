'use client';

import React from 'react';
import Image from 'next/image';

export default function EESTestimonials() {
    return (
        <section className="py-24 bg-white w-full">
            <div className="max-w-5xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center">

                {/* Quote Icon */}
                <div className="mb-8">
                    <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 20L6.85714 0H11.1429L4.28571 20H0ZM12.8571 20L19.7143 0H24L17.1429 20H12.8571Z" fill="#014471" />
                    </svg>
                </div>

                {/* Testimonial Text */}
                <h2 className="text-[28px] md:text-4xl lg:text-[40px] leading-snug font-medium mb-12 max-w-4xl tracking-tight">
                    "EES is helping our company to decrease operational expenses and turnaround time, while increasing the compliance, resource allocation and effectiveness of our HR management."
                </h2>

                {/* Author Info */}
                <div className="flex flex-col items-center mb-24">
                    <div className="relative flex items-center justify-center mb-4">
                        <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center border-2 border-white relative z-10 shadow-sm text-gray-400">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    <div className="font-semibold text-gray-900 text-sm mb-1">HR Director</div>
                    <div className="text-gray-500 text-xs font-medium">Confidential Partner</div>
                </div>

                {/* Stats Card */}
                <div className="w-full bg-[#f8faff] rounded-3xl py-10 px-8 mt-auto border border-[#e8eef7]">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                        <div className="flex flex-col items-center">
                            <div className="text-[52px] md:text-[56px] font-medium text-primary mb-2 tracking-tighter leading-none">5+</div>
                            <div className="text-gray-500 text-sm font-medium">Years of Excellence</div>
                        </div>
                        <div className="flex flex-col items-center relative">
                            <div className="text-[52px] md:text-[56px] font-medium text-primary  mb-2 tracking-tighter leading-none">10k++</div>
                            <div className="text-gray-500 text-sm font-medium">Daily Users</div>
                        </div>
                        <div className="flex flex-col items-center relative">
                            <div className="text-[52px] md:text-[56px] font-medium text-primary mb-2 tracking-tighter leading-none">20+</div>
                            <div className="text-gray-500 text-sm font-medium">Company Partners</div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

