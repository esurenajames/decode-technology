'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRightOutlined } from '@ant-design/icons';

export default function EMPACLearningPossibilities() {
    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] mb-6 tracking-tight">
                        Why Your School Will <span className="text-[#014471]">Benefit</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        Discover how EMPAC transforms the educational experience, streamlining operations and maximizing student engagement.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {/* Card 1 */}
                    <div className="relative h-[380px] bg-[#6d5e70] group overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500">
                        <Image
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
                            alt="100% Cloud Based"
                            fill
                            className="object-cover opacity-60 mix-blend-overlay group-hover:scale-105 transition-transform duration-700"
                            unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent pointer-events-none" />

                        <div className="relative z-10 w-full h-full p-8 flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-3 mb-5">
                                    <span className="text-6xl lg:text-7xl font-black text-[#f7e035] tracking-tighter leading-none pt-1">100</span>
                                    <div className="flex flex-col pt-1">
                                        <span className="text-xl lg:text-2xl font-bold text-white leading-none mb-1">% cloud</span>
                                        <span className="text-[11px] font-bold text-white tracking-widest uppercase">BASED</span>
                                    </div>
                                </div>
                                <p className="text-white/95 text-sm leading-relaxed max-w-[95%]">
                                    EMPAC offers a fully cloud-based solution, ensuring that your school's data is accessible and secure 24/7 from any device.
                                </p>
                            </div>
                            <div className="mt-8 flex">
                                <button className="px-6 py-3 bg-[#f7e035] text-black text-[13px] font-bold uppercase tracking-wide hover:bg-yellow-400 transition-colors shadow-sm">
                                    See more
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="relative h-[380px] bg-[#111] group overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500">
                        <Image
                            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop"
                            alt="50% Less Admin Work"
                            fill
                            className="object-cover opacity-60 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 pointer-events-none origin-bottom"
                            unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none" />

                        <div className="relative z-10 w-full h-full p-8 flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-3 mb-5">
                                    <span className="text-6xl lg:text-7xl font-black text-[#f7e035] tracking-tighter leading-none pt-1">50</span>
                                    <div className="flex flex-col pt-1">
                                        <span className="text-xl lg:text-2xl font-bold text-white leading-none mb-1">% less</span>
                                        <span className="text-[11px] font-bold text-white tracking-widest uppercase">ADMIN WORK</span>
                                    </div>
                                </div>
                                <p className="text-white/95 text-sm leading-relaxed max-w-[95%]">
                                    Automate grading, attendance, scheduling, and reporting. Free up your teachers' time so they can focus on what matters most: teaching.
                                </p>
                            </div>
                            <div className="mt-8 flex">
                                <button className="px-6 py-3 bg-[#f7e035] text-black text-[13px] font-bold uppercase tracking-wide hover:bg-yellow-400 transition-colors shadow-sm">
                                    See more
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="relative h-[380px] bg-[#67B5FA] group overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500">
                        <div className="relative z-10 w-full h-full p-8 flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-3 mb-5">
                                    <span className="text-6xl lg:text-7xl font-black text-white tracking-tighter leading-none pt-1">30</span>
                                    <div className="flex flex-col pt-1">
                                        <span className="text-xl lg:text-2xl font-bold text-white leading-none mb-1">days</span>
                                        <span className="text-[11px] font-bold text-white tracking-widest uppercase">FREE TRIAL</span>
                                    </div>
                                </div>
                                <p className="text-white/95 text-sm leading-relaxed max-w-[95%] mt-1">
                                    Experience the full power of EMPAC with absolutely no commitment. Sign up today and transform your school's entire learning environment.
                                </p>
                            </div>
                            <div className="mt-8 w-full flex shadow-sm">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 bg-white text-gray-800 placeholder-gray-400 focus:outline-none text-sm font-medium"
                                />
                                <button className="w-14 bg-[#f7e035] text-black flex items-center justify-center hover:bg-yellow-400 transition-colors shrink-0 group-hover:w-16 duration-300">
                                    <ArrowRightOutlined className="text-xl" />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
