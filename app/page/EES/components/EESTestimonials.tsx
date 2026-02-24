'use client';

import React from 'react';
import Image from 'next/image';
import { StarFilled, CaretRightOutlined, HeartFilled } from '@ant-design/icons';

// Using EES specific asset for the main card if possible, or fallback
import imgHero from '../assets/ees-hris-feature.png';

// Import logos for the footer (common clients)
import BCG from '../../../assets/BCG-removebg-preview.png';
import C3 from '../../../assets/C3-removebg-preview.png';
import LSC from '../../../assets/LSC-removebg-preview.png';
import PLX from '../../../assets/PLX-removebg-preview.png';
import CRK from '../../../assets/crk-removebg-preview.png';
import EDAMAMA from '../../../assets/edamama-removebg-preview.png';

export default function EESTestimonials() {
    return (
        <section className="py-24 bg-white w-full border-b border-gray-100">
            <div className="max-w-5xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 tracking-tight">
                        Loved by HR Teams Everywhere
                    </h2>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto font-medium">
                        Discover how EES Workforce is transforming the employee experience for industry leaders.
                    </p>
                </div>

                {/* Bento Grid layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(320px,auto)]">

                    {/* Card 1: Main Case Study (Span 2) */}
                    <div className="relative col-span-1 md:col-span-2 lg:col-span-2 rounded-[32px] overflow-hidden bg-primary shadow-2xl flex flex-col p-8 group min-h-[320px]">
                        <Image src={imgHero} alt="HR Professional" fill className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent z-10 pointer-events-none" />

                        <div className="relative z-20 max-w-sm mt-auto mb-6">
                            <h3 className="text-2xl md:text-[28px] font-bold text-white mb-3 leading-snug">
                                "EES reduced our manual payroll processing time by 75% in just 3 months."
                            </h3>
                            <p className="text-white/80 text-sm font-medium">Sarah Jenkins, People Operations Lead</p>
                        </div>
                        <div className="relative z-20 flex items-start">
                            <button className="bg-accent text-white px-6 py-3 rounded-lg shadow-lg font-bold flex items-center gap-2 hover:bg-accent/90 transition-colors text-sm">
                                Read Case Study <CaretRightOutlined />
                            </button>
                        </div>
                    </div>

                    {/* Card 2: Retention Stat */}
                    <div className="col-span-1 rounded-[32px] bg-white border border-gray-100 shadow-xl shadow-gray-200/50 p-8 flex flex-col justify-between min-h-[320px]">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100 font-bold text-blue-600">
                                <HeartFilled />
                            </div>
                        </div>
                        <div className="mt-auto">
                            <div className="text-5xl font-bold text-primary mb-3 tracking-tighter">98.5%</div>
                            <div className="font-bold text-gray-800 text-sm mb-1 leading-tight flex items-center gap-2">
                                Employee Retention
                            </div>
                            <div className="text-sm text-gray-500 mt-2 border-t border-gray-100 pt-3">
                                At companies using EES Engagement
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Culture Highlights */}
                    <div className="col-span-1 rounded-[32px] bg-accent text-white shadow-xl shadow-accent/20 p-8 flex flex-col justify-center items-center text-center relative overflow-hidden min-h-[320px]">
                        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10">
                            <svg viewBox="0 0 200 100" className="w-[150%] h-auto">
                                <path d="M10,40 Q50,90 100,50 T190,40" fill="transparent" stroke="white" strokeWidth="40" strokeLinecap="round" />
                            </svg>
                        </div>
                        <div className="w-24 h-24 rounded-full border-4 border-white shadow-xl overflow-hidden relative z-10 mb-6 bg-white mt-auto">
                            <img src="https://i.pravatar.cc/150?u=hr1" alt="Avatar" className="w-full h-full object-cover" />
                        </div>
                        <p className="font-bold text-[18px] leading-tight relative z-10 px-2 mt-auto">
                            "The best investment we've made for our company culture."
                        </p>
                    </div>

                    {/* Card 4: Efficiency Gain */}
                    <div className="col-span-1 rounded-[32px] bg-primary text-white shadow-xl shadow-primary/20 p-8 flex flex-col justify-between min-h-[320px]">
                        <h4 className="text-2xl font-bold tracking-widest opacity-80 uppercase">WORKFORCE<br />SYNC.</h4>
                        <div className="mt-auto">
                            <div className="text-6xl font-bold mb-4 tracking-tighter">120+</div>
                            <div className="text-white/80 text-sm font-medium leading-relaxed max-w-[150px]">
                                Hours saved per month on compliance reports
                            </div>
                        </div>
                    </div>

                    {/* Card 6: Long Testimonial (Span 3) */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-3 rounded-[32px] bg-white border border-gray-100 shadow-xl shadow-gray-200/50 p-10 flex flex-col justify-between min-h-[320px]">
                        <div className="flex gap-1 mb-6">
                            {[1, 2, 3, 4, 5].map(i => <StarFilled key={i} className="text-amber-400" />)}
                        </div>
                        <p className="text-[18px] md:text-[21px] text-gray-700 leading-relaxed max-w-2xl font-medium pr-4">
                            "We've seen a <span className="text-accent font-bold italic">massive shift</span> in how our employees interact with HR. The self-service portal is intuitive, and the automated payroll is flawlessly accurate every single time."
                        </p>
                        <div className="flex items-center gap-4 mt-auto pt-8">
                            <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 border-2 border-gray-50 shadow-sm">
                                <img src="https://i.pravatar.cc/150?img=33" alt="Marcus" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h4 className="font-bold text-primary text-[17px]">Marcus Chen</h4>
                                <p className="text-sm text-gray-500 font-semibold tracking-wide uppercase">Chief People Officer, Global Tech Inc.</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Logos */}
                <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-10 mt-20 pb-4 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                    {[
                        { src: BCG },
                        { src: C3 },
                        { src: LSC },
                        { src: PLX },
                        { src: CRK },
                        { src: EDAMAMA }
                    ].map((logo, idx) => (
                        <div key={idx} className="relative h-8 w-20 md:w-28 cursor-pointer">
                            <Image src={logo.src} fill className="object-contain" alt="Client Logo" />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
