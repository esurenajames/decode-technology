'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRightOutlined, CheckCircleFilled } from '@ant-design/icons';

import courseMgmtImg from '../assets/elevate-course-management.png';
import analyticsImg from '../assets/elevate-analytics.png';
import conferenceImg from '../assets/elevate-conference.png';
import certificationImg from '../assets/elevate-certification.png';
import hrisImg from '../assets/elevate-hris.png';
import bgImage from '../assets/elevate-bg.jpg';

const FEATURES = [
    {
        id: 'delivery',
        label: 'Delivery',
        title: 'Centralized Course Management',
        description: 'Create, upload, and manage custom courses tailored to specific roles. Support for videos and quizzes ensures a dynamic learning experience.',
        image: courseMgmtImg,
        idealFor: 'Custom Courses, Video Training, Interactive Lessons',
        primaryLabel: 'Start Creating Courses',
        secondaryLabel: 'View Authoring Tools',
        floatingLabel: 'Active Module'
    },
    {
        id: 'analytics',
        label: 'Analytics',
        title: 'Progress and Performance Analytics',
        description: 'Monitor progress through detailed dashboards that display completion rates, exam scores, and engagement metrics in real-time.',
        image: analyticsImg,
        idealFor: 'Detailed Dashboards, Engagement Metrics, Exam Scores',
        primaryLabel: 'Explore Dashboard',
        secondaryLabel: 'See Metric Reports',
        floatingLabel: 'Active Tracking'
    },
    {
        id: 'conferencing',
        label: 'Web Conferencing',
        title: 'Integrated Web Conferencing',
        description: 'Engage your team with live sessions using our built-in web conferencing feature. Enables real-time interaction without external tools.',
        image: conferenceImg,
        idealFor: 'Live Sessions, Real-time Interaction, Team Engagement',
        primaryLabel: 'Host a Live Session',
        secondaryLabel: 'Learn about Meetings',
        floatingLabel: 'Live Room'
    },
    {
        id: 'assessment',
        label: 'Assessment',
        title: 'Assessment and Certification',
        description: 'Validate knowledge with integrated tools for assessments and quizzes. Issue certificates upon completion to ensure compliance.',
        image: certificationImg,
        idealFor: 'Knowledge Validation, Compliance Support, Certificates',
        primaryLabel: 'Create Assessments',
        secondaryLabel: 'View Certifications',
        floatingLabel: 'Active Testing'
    },
    {
        id: 'integration',
        label: 'Integration',
        title: 'Seamless HRIS Integration',
        description: 'Integrates seamlessly with EES Workforce HRIS and Payroll systems, centralizing data for a cohesive workforce view.',
        image: hrisImg,
        idealFor: 'Data Centralization, Automated Records, HR Connectivity',
        primaryLabel: 'Explore Integrations',
        secondaryLabel: 'Learn about HRIS',
        floatingLabel: 'System Status'
    }
];

export default function ElevateFeatures() {
    const [activeTab, setActiveTab] = useState(FEATURES[0].id);
    const activeData = FEATURES.find(f => f.id === activeTab) || FEATURES[0];

    return (
        <section className="py-32 bg-primary overflow-hidden relative">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={bgImage}
                    alt="Background"
                    fill
                    className="object-cover opacity-10"
                    quality={90}
                    priority
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-6xl font-bold text-white leading-[1.05] tracking-tight">
                        Empower Your Workforce <br /> With Advanced Training Tools
                    </h2>
                </div>

                {/* Tabs Navigation */}
                <div className="flex flex-wrap justify-center gap-3 mb-20 max-w-5xl mx-auto">
                    {FEATURES.map((feature) => (
                        <button
                            key={feature.id}
                            onClick={() => setActiveTab(feature.id)}
                            className={`px-6 py-2.5 rounded-lg border text-sm font-bold transition-all duration-300 ${activeTab === feature.id
                                ? 'bg-white border-white text-primary shadow-lg'
                                : 'border-white/10 text-white/60 hover:border-white/30 hover:text-white'
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
                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src={activeData.image}
                                alt={activeData.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                placeholder="blur"
                                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
                            />
                            {/* Gradient Overlay Effect */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60" />

                            {/* Floating UI Element */}
                            <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shadow-lg">
                                        <CheckCircleFilled className="text-white text-xl" />
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-sm">{activeData.floatingLabel}</p>
                                        <p className="text-white/70 text-[10px] uppercase tracking-wider">{activeData.title}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="max-w-xl">
                        <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                            {activeData.title}
                        </h3>
                        <p className="text-base text-white/70 mb-8 leading-relaxed font-medium">
                            {activeData.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-3 mb-10">
                            <span className="text-xs font-bold text-white/40 uppercase tracking-widest mt-0.5">
                                Ideal for:
                            </span>
                            <div className="flex flex-wrap gap-2">
                                {activeData.idealFor.split(', ').map((chip, idx) => (
                                    <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-medium text-white/90">
                                        {chip}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <button className="px-8 py-3.5 bg-accent text-white rounded-lg font-bold hover:bg-accent/90 transition-colors shadow-lg">
                                {activeData.primaryLabel}
                            </button>
                            <button className="px-8 py-3.5 bg-transparent text-white border border-white/20 rounded-lg font-bold hover:border-white/50 transition-all">
                                {activeData.secondaryLabel}
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
