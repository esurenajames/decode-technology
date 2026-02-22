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
    GlobalOutlined,
    TeamOutlined,
    DesktopOutlined
} from '@ant-design/icons';

import imgERP from '../assets/solutions_erp.png';
import imgSchool from '../assets/solutions_school.png';
import imgDev from '../assets/solutions_dev.png';

export default function FeaturesGrid() {
    return (
        <div className="w-full bg-gray-50 text-primary py-12 rounded-3xl overflow-hidden">
            <div className="max-w-5xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-10 overflow-hidden">
                    <div className="max-w-3xl mx-auto space-y-4">
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-primary leading-tight">
                            Everything You Need to Scale Your Organization.
                        </h2>
                        <h3 className="text-lg text-gray-500 leading-relaxed font-medium">
                            Explore our comprehensive suite of digital tools designed to make your daily operations simple, efficient, and future-ready.
                        </h3>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-6 gap-6 mb-20">

                    {/* Card 1: Custom Software Development */}
                    <div className="col-span-6 lg:col-span-2 bg-primary border border-primary rounded-3xl p-5 relative overflow-hidden group min-h-[280px] flex flex-col justify-between shadow-sm hover:shadow-md transition-all text-white">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full -mr-16 -mt-16" />
                        <div className="relative z-10 flex flex-col">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="p-2 rounded-lg bg-white/20 backdrop-blur-md text-white">
                                    <CodeOutlined />
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-white/80">Tailored to You</span>
                            </div>
                            <h3 className="text-2xl font-black mb-3 text-white leading-tight">Custom Software Development</h3>
                            <p className="text-white/80 text-sm font-medium leading-relaxed">We build exactly what your organization needs—unique software solutions designed for your specific goals.</p>
                        </div>
                        <div className="relative z-10 pt-6">
                            <button className="text-white text-xs font-black uppercase tracking-widest flex items-center gap-2 group/btn">
                                Start Your Project
                                <ArrowRightOutlined className="group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* Card 2: ERP System */}
                    <div className="col-span-6 lg:col-span-4 bg-white border border-gray-100 rounded-3xl p-5 relative overflow-hidden group min-h-[280px] flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
                        <div className="flex flex-col md:flex-row gap-8 items-center h-full">
                            <div className="flex-1 space-y-4">
                                <div className="flex items-center gap-2">
                                    <div className="p-2 rounded-lg bg-primary/5 text-primary">
                                        <AppstoreOutlined />
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-primary/60">Core Business</span>
                                </div>
                                <h3 className="text-2xl font-black text-primary leading-tight">ERP System</h3>
                                <p className="text-gray-500 text-sm font-medium leading-relaxed">Manage your entire business in one place—from sales and inventory to production and stock tracking.</p>
                                <div className="grid grid-cols-2 gap-x-4 gap-y-2 pt-2">
                                    {['Inventory', 'Production', 'Sales System', 'Stock Control'].map(m => (
                                        <div key={m} className="flex items-center gap-2">
                                            <div className="w-1 h-1 rounded-full bg-accent" />
                                            <span className="text-[10px] font-bold text-primary/80 uppercase">{m}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex-1 relative w-full h-full min-h-[140px] rounded-2xl overflow-hidden border border-gray-50 bg-gray-50/30">
                                <Image src={imgERP} alt="ERP Dashboard" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                            </div>
                        </div>
                    </div>

                    {/* Card 3: AI Chatbot */}
                    <div className="col-span-6 md:col-span-3 lg:col-span-2 bg-white border border-gray-100 rounded-3xl p-8 relative overflow-hidden group min-h-[380px] flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
                        <div className="relative z-10 flex flex-col">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="p-2 rounded-lg bg-primary/5 text-primary">
                                    <RobotOutlined />
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-primary/60">Automation</span>
                            </div>
                            <h3 className="text-xl font-black mb-3 text-primary leading-tight">AI Chatbot</h3>
                            <p className="text-gray-500 text-sm font-medium leading-relaxed">Automate your customer support and sales 24/7 with intelligent assistants that learn your business.</p>
                        </div>
                        <div className="relative z-10 mt-6 p-6 rounded-2xl bg-gray-50/50 border border-gray-100 flex items-center justify-center">
                            <div className="relative w-24 h-24">
                                <div className="absolute inset-0 bg-accent/20 blur-2xl animate-pulse rounded-full" />
                                <div className="relative z-10 flex items-center justify-center h-full bg-white rounded-full shadow-lg">
                                    <RobotOutlined className="text-3xl text-accent" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 4: HRIS & Payroll */}
                    <div className="col-span-6 md:col-span-3 lg:col-span-2 bg-white border border-gray-100 rounded-3xl p-8 relative overflow-hidden group min-h-[380px] flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
                        <div className="relative z-10 flex flex-col">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="p-2 rounded-lg bg-primary/5 text-primary">
                                    <TeamOutlined />
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-primary/60">Employee Care</span>
                            </div>
                            <h3 className="text-xl font-black mb-3 text-primary leading-tight">HRIS & Payroll System</h3>
                            <p className="text-gray-500 text-sm font-medium leading-relaxed">Handle people and payroll effortlessly—track attendance, leave, and payouts with zero manual errors.</p>
                        </div>
                        <div className="grid grid-cols-2 gap-2 mt-auto">
                            <div className="h-1 bg-accent/20 rounded-full" />
                            <div className="h-1 bg-accent rounded-full" />
                            <div className="h-1 bg-accent/40 rounded-full" />
                            <div className="h-1 bg-accent/60 rounded-full" />
                        </div>
                    </div>

                    {/* Card 5: School Management */}
                    <div className="col-span-6 md:col-span-3 lg:col-span-2 bg-white border border-gray-100 rounded-3xl p-8 relative overflow-hidden group min-h-[380px] flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
                        <div className="relative z-10 flex flex-col">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="p-2 rounded-lg bg-primary/5 text-primary">
                                    <BookOutlined />
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-primary/60">Education</span>
                            </div>
                            <h3 className="text-xl font-black mb-3 text-primary leading-tight">School Management</h3>
                            <p className="text-gray-500 text-sm font-medium leading-relaxed">A simple digital workspace that connects students, teachers, and parents in one platform.</p>
                        </div>
                        <div className="relative h-32 mt-4 rounded-xl overflow-hidden border border-gray-50">
                            <Image src={imgSchool} alt="School App" fill className="object-cover" />
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
