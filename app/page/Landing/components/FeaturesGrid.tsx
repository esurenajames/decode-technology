'use client';

import React from 'react';
import Image from 'next/image';
import {
    ArrowRightOutlined,
    AppstoreOutlined,
    BookOutlined,
    CodeOutlined,
    RobotOutlined,
    MobileOutlined,
    GlobalOutlined
} from '@ant-design/icons';

import imgERP from '../assets/solutions_erp.png';
import imgSchool from '../assets/solutions_school.png';
import imgDev from '../assets/solutions_dev.png';

export default function FeaturesGrid() {
    return (
        <div className="w-full bg-gray-50 text-primary py-24 rounded-3xl overflow-hidden">
            <div className="max-w-5xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16 overflow-hidden">
                    <div className="max-w-3xl mx-auto space-y-6">
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-primary leading-tight">
                            Your IT Solutions to Run Your Organization Even Better Are Here.
                        </h2>
                        <h3 className="text-lg text-gray-500 leading-relaxed font-medium">
                            Shape your business with our comprehensive suite of digital tools designed to improve efficiency, productivity, and growth.
                        </h3>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-6 gap-6 mb-20">

                    {/* Card 1: Custom Software Development (Blue, Top Left) */}
                    <div className="col-span-6 md:col-span-2 bg-[#1D91FF] border border-[#1D91FF] rounded-3xl p-8 relative overflow-hidden group min-h-[360px] flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow text-white text-center">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl rounded-full -mr-16 -mt-16" />

                        <div className="relative z-10 flex flex-col items-center">
                            <div className="flex items-center gap-2 mb-4 justify-center">
                                <div className="p-2 rounded-lg bg-white/20 backdrop-blur-md text-white">
                                    <CodeOutlined />
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-white/80">Custom Solutions</span>
                            </div>
                            <h3 className="text-2xl font-black mb-3 text-white leading-tight">Custom Software Development</h3>
                            <p className="text-white/80 text-sm font-medium leading-relaxed">Develop custom software applications for your organization at a competitive cost.</p>
                        </div>

                        <div className="relative z-10 pt-6 flex justify-center">
                            <button className="text-white text-xs font-black uppercase tracking-widest flex items-center gap-2 group/btn">
                                Develop Your App
                                <ArrowRightOutlined className="group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* Card 2: ERP System (White Large, Top Right) */}
                    <div className="col-span-6 md:col-span-4 bg-white border border-gray-100 rounded-3xl p-8 relative overflow-hidden group min-h-[360px] flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex flex-col md:flex-row gap-8 items-center h-full">
                            <div className="flex-1 space-y-4 text-center md:text-left">
                                <div className="flex items-center gap-2 justify-center md:justify-start">
                                    <div className="p-2 rounded-lg bg-primary/5 text-primary">
                                        <AppstoreOutlined />
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-primary/60">Comprehensive ERP</span>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-accent text-sm font-black uppercase tracking-widest">Digitalize Your Business Operations</h4>
                                    <h3 className="text-3xl font-black text-primary leading-tight">Empowered Enterprise Suite (EES)</h3>
                                </div>
                                <p className="text-gray-500 text-sm font-medium leading-relaxed">
                                    A cloud-based ERP system designed to digitalize your operations, improve efficiency, and productivity. Manage every facet of your organization in one unified system.
                                </p>

                                <div className="grid grid-cols-2 gap-x-4 gap-y-2 pt-2">
                                    {['HR & Payroll', 'Inventory', 'Production', 'Sales System'].map(m => (
                                        <div key={m} className="flex items-center gap-2 justify-center md:justify-start">
                                            <div className="w-1 h-1 rounded-full bg-accent" />
                                            <span className="text-[10px] font-bold text-primary/80 uppercase">{m}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex-1 relative w-full h-full min-h-[200px] rounded-2xl overflow-hidden border border-gray-50 shadow-inner">
                                <Image src={imgERP} alt="ERP Dashboard" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
                            </div>
                        </div>
                    </div>

                    {/* Card 3: School Management System (White, Bottom Left) */}
                    <div className="col-span-6 md:col-span-2 bg-white border border-gray-100 rounded-3xl p-8 relative overflow-hidden group min-h-[360px] flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow text-center">
                        <div className="relative z-10 flex flex-col items-center text-center">
                            <div className="flex items-center gap-2 mb-4 justify-center">
                                <div className="p-2 rounded-lg bg-primary/5 text-primary text-lg">
                                    <BookOutlined />
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-primary/60">EdTech Solution</span>
                            </div>
                            <h3 className="text-xl font-black mb-3 text-primary leading-tight">Empowered Academy Suite (EMPAC)</h3>
                            <p className="text-gray-500 text-sm font-medium">A simple and scalable School Management System for students, teachers, and parents.</p>
                        </div>

                        <div className="relative h-40 mt-4 rounded-xl overflow-hidden border border-gray-50 shadow-sm">
                            <Image src={imgSchool} alt="School App" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                    </div>

                    {/* Card 4: AI Development (White, Bottom Middle) */}
                    <div className="col-span-6 md:col-span-2 bg-white border border-gray-100 rounded-3xl p-8 relative overflow-hidden group min-h-[360px] flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow text-center">
                        <div className="relative z-10 flex flex-col items-center">
                            <div className="flex items-center gap-2 mb-4 justify-center">
                                <div className="p-2 rounded-lg bg-primary/5 text-primary">
                                    <RobotOutlined />
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-primary/60">Future Tech</span>
                            </div>
                            <h3 className="text-xl font-black mb-3 text-primary leading-tight">Artificial Intelligence (AI) Development</h3>
                            <p className="text-gray-500 text-sm font-medium">Build intelligent systems that automate complex processes and provide predictive insights.</p>
                        </div>

                        <div className="relative z-10 mt-6 p-6 rounded-2xl bg-gray-50/50 border border-gray-100 flex items-center justify-center mx-auto w-full">
                            <div className="relative w-24 h-24">
                                <div className="absolute inset-0 bg-accent/20 blur-2xl animate-pulse rounded-full" />
                                <div className="relative z-10 flex items-center justify-center h-full bg-white rounded-full shadow-lg">
                                    <RobotOutlined className="text-3xl text-accent" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 5: Apps & E-Commerce (Yellow, Bottom Right) */}
                    <div className="col-span-6 md:col-span-2 bg-[#FFBD26] border border-[#FFBD26] rounded-3xl p-8 relative overflow-hidden group min-h-[360px] flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow text-center">
                        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20 pointer-events-none">
                            <svg viewBox="0 0 200 100" className="w-[120%] h-auto">
                                <path d="M10,40 Q50,90 100,50 T190,40" fill="transparent" stroke="white" strokeWidth="20" strokeLinecap="round" />
                            </svg>
                        </div>

                        <div className="relative z-10 flex flex-col items-center">
                            <div className="flex items-center gap-2 mb-4 justify-center">
                                <div className="p-2 rounded-lg bg-white/30 backdrop-blur-md text-primary">
                                    <GlobalOutlined />
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-primary/80">Growth Focused</span>
                            </div>
                            <h3 className="text-xl font-black mb-3 text-primary leading-tight">E-Commerce & Mobile Applications</h3>
                            <p className="text-primary/70 text-sm font-medium leading-relaxed">Scalable web and mobile solutions to expand your digital footprint and increase revenue.</p>
                        </div>

                        <div className="relative z-10 pt-6 flex justify-center">
                            <button className="text-primary text-xs font-black uppercase tracking-widest flex items-center gap-2 group/btn">
                                Grow Your Business
                                <ArrowRightOutlined className="group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                </div>

                {/* Footer Testimonial */}
                <div className="text-center max-w-3xl mx-auto">
                    <h3 className="text-2xl md:text-3xl font-black mb-8 leading-relaxed text-primary">
                        “EES has completely digitalized our operations. What used to take days now happens in real-time, boosting our productivity significantly.”
                    </h3>
                    <div className="flex flex-col items-center gap-2">
                        <div className="text-sm font-black text-primary">Operations Manager</div>
                        <div className="text-sm text-gray-500 font-medium tracking-tight uppercase">Leading Logistics Enterprise (Anonymous)</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
