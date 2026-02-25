'use client';

import React from 'react';
import {
    CreditCardOutlined,
    SafetyCertificateOutlined,
    VideoCameraOutlined,
    FileTextOutlined,
    CheckCircleOutlined
} from '@ant-design/icons';

const FEATURES = [
    {
        title: 'Online Enrollment',
        description: 'EMPAC has a built-in Online Payment and Online Enrollment. This helps schools and parents easily track tuition fees and payments. Parents can pay using Debit Cards, Credit Cards, or E-Wallets!',
        icon: <CreditCardOutlined />,
        tag: 'Featured'
    },
    {
        title: 'Exam Checker',
        description: 'Create exams that automatically grade as students finish. Includes smart cheat detection that recognizes if a student opened a new browser window or tab.',
        icon: <SafetyCertificateOutlined />
    },
    {
        title: 'Smart Classes',
        description: 'Teachers can connect seamlessly to their classes for the day and start their web conference sessions directly from the platform.',
        icon: <VideoCameraOutlined />
    },
    {
        title: 'Lesson Plan',
        description: 'Create lessons for each subject and easily import them to other sections with the same subjects or lessons, saving hours of preparation.',
        icon: <FileTextOutlined />
    }
];

export default function EMPACFeatures() {
    return (
        <section className="pb-24 bg-white">
            <div className="max-w-5xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-6 tracking-tight">
                        Engage, Educate, <span className="text-[#014471]">EMPAC!</span>
                    </h2>
                    <p className="text-gray-500 text-lg leading-relaxed font-medium">
                        EMPAC makes it easy for teachers to navigate to their classes, post announcements,
                        create exams, and upload learning materials in one unified space.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {FEATURES.map((feature, idx) => (
                        <div
                            key={idx}
                            className="group p-8 rounded-[32px] border border-gray-100 bg-[#fbfcfd] hover:bg-white hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 relative overflow-hidden"
                        >
                            {feature.tag && (
                                <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-[#014471] text-white text-[10px] font-bold uppercase tracking-wider">
                                    {feature.tag}
                                </div>
                            )}

                            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#2F7FF5] text-2xl mb-6 group-hover:bg-[#2F7FF5] group-hover:text-white transition-all duration-500">
                                {feature.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-[#19253b] mb-4 flex items-center gap-3">
                                {feature.title}
                                <CheckCircleOutlined className="text-[#2F7FF5] text-base opacity-0 group-hover:opacity-100 transition-opacity" />
                            </h3>

                            <p className="text-gray-500 leading-relaxed font-medium">
                                {feature.description}
                            </p>

                            {/* Decorative Glow */}
                            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-[#2F7FF5]/5 rounded-full blur-3xl group-hover:bg-[#2F7FF5]/10 transition-colors" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
