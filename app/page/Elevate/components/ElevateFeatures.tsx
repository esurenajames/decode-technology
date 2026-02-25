'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRightOutlined } from '@ant-design/icons';

const FEATURES = [
    {
        id: 'delivery',
        label: 'Delivery',
        title: 'Centralized Course Management',
        description: 'Our employee training solution allows trainers to easily create, upload, and manage custom courses tailored to specific roles and business needs. Support for videos, quizzes, and interactive lessons ensures a dynamic learning experience.',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop',
        idealFor: 'Custom Courses, Video Training, Interactive Lessons'
    },
    {
        id: 'analytics',
        label: 'Analytics',
        title: 'Progress and Performance Analytics',
        description: 'With our employee training solution, trainers can monitor progress through detailed dashboards that display completion rates, exam scores, and engagement metrics, ensuring performance is always in focus.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
        idealFor: 'Detailed Dashboards, Engagement Metrics, Exam Scores'
    },
    {
        id: 'conferencing',
        label: 'Web Conferencing',
        title: 'Integrated Web Conferencing',
        description: 'Engage your team with live sessions using our built-in web conferencing feature. This employee training solution enables real-time interaction without the need for external tools, making learning seamless and interactive.',
        image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=800&auto=format&fit=crop',
        idealFor: 'Live Sessions, Real-time Interaction, Team Engagement'
    },
    {
        id: 'assessment',
        label: 'Assessment',
        title: 'Assessment and Certification',
        description: 'To validate knowledge and support compliance, EES Workforce Elevate includes tools for assessments, quizzes, and certification. This enables companies to confirm that employees meet essential skill requirements and to issue certificates upon completion.',
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop',
        idealFor: 'Knowledge Validation, Compliance Support, Certificates'
    },
    {
        id: 'integration',
        label: 'Integration',
        title: 'Seamless HRIS Integration',
        description: 'EES Workforce Elevate integrates seamlessly with EES Workforce - HRIS and Payroll system, centralizing employee data and updating training records automatically for a cohesive workforce development view.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
        idealFor: 'Data Centralization, Automated Records, HR Connectivity'
    },
    {
        id: 'mobile',
        label: 'Mobile',
        title: 'Mobile Accessibility',
        description: 'Designed to support today’s mobile workforce. Employees can access training materials from any mobile device, making it easy to complete courses wherever they are, increasing engagement and retention.',
        image: 'https://images.unsplash.com/photo-1522244474664-44d326c197bc?q=80&w=800&auto=format&fit=crop',
        idealFor: 'On-the-go Learning, Multi-device Support, High Retention'
    }
];

export default function ElevateFeatures() {
    const [activeTab, setActiveTab] = useState(FEATURES[0].id);
    const activeData = FEATURES.find(f => f.id === activeTab) || FEATURES[0];

    return (
        <section className="py-24 bg-[#FFD9E8] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-7xl font-serif text-[#1a1a1a] leading-[1.05] tracking-tight">
                        Drive Higher Engagement <br /> With Awesome Features
                    </h2>
                </div>

                {/* Tabs Navigation */}
                <div className="flex flex-wrap justify-center gap-3 mb-20 max-w-5xl mx-auto">
                    {FEATURES.map((feature) => (
                        <button
                            key={feature.id}
                            onClick={() => setActiveTab(feature.id)}
                            className={`px-8 py-3 rounded-full border text-sm font-bold transition-all duration-300 ${activeTab === feature.id
                                ? 'bg-white border-white text-black shadow-lg'
                                : 'border-black/10 text-black/60 hover:border-black/30 hover:text-black'
                                }`}
                        >
                            {feature.label}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* Visual Mockup */}
                    <div className="relative group">
                        {/* Shadow Element */}
                        <div className="absolute inset-0 bg-black/5 blur-3xl rounded-full scale-90 translate-y-10" />

                        {/* Main Container */}
                        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-white/20 backdrop-blur-sm p-4 border border-white/30">
                            <div className="w-full h-full rounded-2xl overflow-hidden relative">
                                <Image
                                    src={activeData.image}
                                    alt={activeData.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    unoptimized
                                />
                                {/* Phone Mockup Overlay Effect */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                            </div>

                            {/* Floating UI Element */}
                            <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-lg">
                                        <div className="w-6 h-6 bg-[#FFD9E8] rounded-md" />
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-sm">Empowering Your Team</p>
                                        <p className="text-white/70 text-[10px]">Real-time Learning Platform</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="max-w-xl">
                        <h3 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
                            {activeData.title}
                        </h3>
                        <p className="text-xl text-black/70 mb-10 leading-relaxed font-medium">
                            {activeData.description}
                        </p>

                        <p className="text-sm font-bold text-black/40 uppercase tracking-widest mb-10">
                            Ideal for: <span className="text-black/80">{activeData.idealFor}...</span>
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button className="px-10 py-5 bg-black text-white rounded-full font-bold text-lg hover:bg-gray-800 transition-colors shadow-xl shadow-black/10">
                                View Live Demo
                            </button>
                            <button className="px-10 py-5 bg-white text-black border border-black/10 rounded-full font-bold text-lg hover:border-black/30 transition-all shadow-xl shadow-black/5">
                                Get Started — For Free!
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
