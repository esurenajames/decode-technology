'use client';

import React from 'react';
import {
    GlobalOutlined,
    SmileOutlined,
    RocketOutlined,
    AppstoreOutlined,
    LineChartOutlined,
    VideoCameraOutlined,
    CheckCircleFilled
} from '@ant-design/icons';

export default function ElevateBenefits() {
    const TRAINEE_BENEFITS = [
        {
            icon: <GlobalOutlined className="text-3xl text-emerald-500" />,
            title: 'Learn Anytime. Anywhere.',
            description: 'Trainees can access course materials and assignments anytime, from any device.'
        },
        {
            icon: <SmileOutlined className="text-3xl text-blue-500" />,
            title: 'Seamless Learning Experience',
            description: "Designed with simple yet amazing user interface that doesn't complicate your employee's learning."
        },
        {
            icon: <RocketOutlined className="text-3xl text-purple-500" />,
            title: 'Self-Paced Learning',
            description: 'Complete assigned courses and assessments at your own pace, ensuring flexibility for every trainee.'
        }
    ];

    const BUSINESS_BENEFITS = [
        {
            icon: <AppstoreOutlined className="text-3xl text-orange-500" />,
            title: 'Simplified Content Management',
            description: 'Upload and manage training content with ease, including scheduling and course materials.'
        },
        {
            icon: <LineChartOutlined className="text-3xl text-pink-500" />,
            title: 'Session Overview',
            description: 'Oversee multiple training sessions with simple, intuitive tools.'
        },
        {
            icon: <VideoCameraOutlined className="text-3xl text-indigo-500" />,
            title: 'Live Engagement',
            description: 'Conduct interactive training sessions via integrated web conferencing for seamless engagement.'
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* section for Trainees */}
                <div className="mb-32">
                    <div className="max-w-3xl mb-16">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-widest mb-6">
                            User Focused
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-6 tracking-tight">
                            Why Trainees Love Our <span className="text-emerald-600">Employee Training Solution</span>
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed font-medium">
                            Trainees appreciate the flexibility, ease of use, and interactive features that make learning more engaging and accessible.
                            Our solution allows them to learn at their own pace while staying connected through live sessions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {TRAINEE_BENEFITS.map((benefit, idx) => (
                            <div key={idx} className="group p-10 rounded-[40px] border border-gray-100 bg-[#fbfcfd] hover:bg-white hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500">
                                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4 group-hover:text-emerald-600 transition-colors">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-500 leading-relaxed font-medium">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* section for Business */}
                <div className="relative p-12 md:p-20 rounded-[60px] bg-[#1a1a1a] overflow-hidden">
                    {/* Decorative Background */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -mr-48 -mt-48" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px] -ml-48 -mb-48" />

                    <div className="relative z-10">
                        <div className="max-w-3xl mb-16">
                            <div className="flex items-center gap-2 mb-6">
                                <CheckCircleFilled className="text-emerald-500 text-lg" />
                                <span className="text-emerald-500 text-xs font-bold uppercase tracking-widest">Featured Section</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                                Why Our Employee Training Solution is the <span className="text-emerald-400">Best for Your Business</span>
                            </h2>
                            <p className="text-white/60 text-lg leading-relaxed font-medium">
                                Our employee training solution simplifies training management, engages your team, and grows with your business.
                                It’s easy to use, efficient, and built to enhance performance.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {BUSINESS_BENEFITS.map((benefit, idx) => (
                                <div key={idx} className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500">
                                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-all duration-300">
                                        <div className="text-white group-hover:scale-110 transition-transform duration-300">
                                            {benefit.icon}
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-3">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-white/50 text-sm leading-relaxed font-medium">
                                        {benefit.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
