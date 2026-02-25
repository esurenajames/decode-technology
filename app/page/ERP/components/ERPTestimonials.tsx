'use client';

import React from 'react';
import Image from 'next/image';
import { StarFilled, CaretRightOutlined } from '@ant-design/icons';

// Fallback image for the big card
import imgDashboard from '../../Landing/assets/image 26.png';

// Import logos for the footer
import BCG from '../../../assets/BCG-removebg-preview.png';
import C3 from '../../../assets/C3-removebg-preview.png';
import LSC from '../../../assets/LSC-removebg-preview.png';
import PLX from '../../../assets/PLX-removebg-preview.png';
import CRK from '../../../assets/crk-removebg-preview.png';
import EDAMAMA from '../../../assets/edamama-removebg-preview.png';

export default function ERPTestimonials() {
    return (
        <section className="py-24 bg-[#FAF9F6] w-full">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#19253b] mb-4 tracking-tight">
                        Don't just take our word for it.
                    </h2>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto font-medium">
                        Real results from some of our (many) happy customers.
                    </p>
                </div>

                {/* Bento Grid layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(320px,auto)]">

                    {/* Card 1: Image (Span 2) */}
                    <div className="relative col-span-1 md:col-span-2 lg:col-span-2 rounded-2xl overflow-hidden bg-gray-900 shadow-sm flex flex-col p-8 group min-h-[320px]">
                        <Image src={imgDashboard} alt="Customer" fill className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none" />

                        <div className="relative z-20 max-w-sm mt-auto mb-6">
                            <h3 className="text-2xl md:text-[28px] font-bold text-white mb-3 leading-snug">
                                Our customers activated 30% faster with EES ERP.
                            </h3>
                            <p className="text-white/80 text-sm font-medium">Cate McCaffery, Senior Manager</p>
                        </div>
                        <div className="relative z-20 flex items-start">
                            <button className="bg-white text-black px-4 py-2.5 rounded shadow-sm font-bold flex items-center gap-2 hover:bg-gray-50 transition-colors text-sm">
                                Watch now <CaretRightOutlined />
                            </button>
                        </div>
                    </div>

                    {/* Card 2: Stars / Stats */}
                    <div className="col-span-1 rounded-2xl bg-white border border-gray-100 shadow-sm p-8 flex flex-col justify-between min-h-[320px]">
                        <div className="flex items-center gap-3">
                            {/* Abstract logo icon */}
                            <div className="w-10 h-10 rounded bg-[#FFEDE0] flex items-center justify-center shrink-0 border border-transparent font-black text-[#FF632E] text-xs text-center leading-none">
                                ERP
                            </div>
                        </div>
                        <div className="mt-auto">
                            <div className="text-5xl font-black text-[#19253b] mb-3 tracking-tighter">1,500+</div>
                            <div className="font-bold text-gray-800 text-sm mb-1 leading-tight flex items-center gap-2">
                                Happy Clients
                            </div>
                            <div className="text-sm text-gray-500 mt-2 border-t border-gray-100 pt-3">
                                Successfully Approved & Served
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Yellow Background */}
                    <div className="col-span-1 rounded-2xl bg-[#FFBD26] text-[#19253b] shadow-sm p-8 flex flex-col justify-center items-center text-center relative overflow-hidden min-h-[320px]">
                        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30">
                            {/* Decorative shape similar to ref */}
                            <svg viewBox="0 0 200 100" className="w-[120%] h-auto">
                                <path d="M10,40 Q50,90 100,50 T190,40" fill="transparent" stroke="#E6A115" strokeWidth="35" strokeLinecap="round" />
                            </svg>
                        </div>
                        <div className="w-24 h-24 rounded-full border-4 border-[#FFBD26] shadow-xl overflow-hidden relative z-10 mb-6 bg-white mt-auto">
                            <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Avatar" className="w-full h-full object-cover" />
                        </div>
                        <p className="font-bold text-[17px] leading-tight relative z-10 px-2 mt-auto">
                            EES ERP cut implementation time by 58%
                        </p>
                    </div>

                    {/* Card 4: Blue Background */}
                    <div className="col-span-1 rounded-2xl bg-[#1D91FF] text-white shadow-sm p-8 flex flex-col justify-between min-h-[320px]">
                        <h4 className="text-2xl font-black tracking-widest opacity-90 drop-shadow-sm uppercase">EES<br />ERP.</h4>
                        <div className="mt-auto">
                            <div className="text-6xl font-black mb-4 tracking-tighter drop-shadow-sm">2.5x</div>
                            <div className="text-white/90 text-sm font-medium leading-relaxed max-w-[120px]">
                                Increase in onboarding capacity
                            </div>
                        </div>
                    </div>


                    {/* Card 6: Long Quote (Span 3) */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-3 rounded-2xl bg-white border border-gray-100 shadow-sm p-8 flex flex-col justify-between min-h-[320px]">
                        <p className="text-[17px] md:text-[19px] text-gray-700 leading-relaxed max-w-[480px] font-medium pr-4 mt-2">
                            "We're seeing <span className="text-[#0E906F] font-bold">higher average closed revenue</span> with sales rooms and <span className="text-[#0E906F] font-bold">faster days to close</span>—it's showing us a material impact on sales velocity."
                        </p>
                        <div className="flex items-center gap-4 mt-auto pt-6">
                            <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-gray-100">
                                <img src="https://i.pravatar.cc/150?img=11" alt="Kalvin" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#19253b] text-[15px]">Kalvin Richan</h4>
                                <p className="text-sm text-gray-500 font-medium">Revenue Operations Manager</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Logos */}
                <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-10 mt-20 pb-4">
                    {[
                        { src: BCG, caseStudy: false },
                        { src: C3, caseStudy: true },
                        { src: LSC, caseStudy: false },
                        { src: PLX, caseStudy: true },
                        { src: CRK, caseStudy: false },
                        { src: EDAMAMA, caseStudy: false }
                    ].map((logo, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-4">
                            <div className="relative h-7 w-20 md:w-24 transition-all cursor-pointer">
                                <Image src={logo.src} fill className="object-contain" alt="Client Logo" />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
