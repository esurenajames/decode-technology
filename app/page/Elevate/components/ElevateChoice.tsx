'use client';

import React from 'react';
import {
    EditOutlined,
    BarChartOutlined,
    VideoCameraOutlined,
    SafetyCertificateOutlined
} from '@ant-design/icons';

const ChoiceCard = ({ icon, title, description, iconBg, iconColor }: { icon: React.ReactNode, title: string, description: string, iconBg: string, iconColor: string }) => (
    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-[24px] border border-white shadow-sm hover:shadow-md transition-all">
        <div className={`w-10 h-10 ${iconBg} rounded-lg flex items-center justify-center ${iconColor} mb-6 border border-current opacity-80`}>
            {icon}
        </div>
        <h3 className="text-xl font-black text-primary mb-3 leading-tight">{title}</h3>
        <p className="text-gray-500 text-sm font-medium leading-relaxed">
            {description}
        </p>
    </div>
);

export default function ElevateChoice() {
    return (
        <section className="w-full py-24 bg-gray-100 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">

                {/* Headline Section */}
                <div className="mb-16">
                    <h2 className="text-5xl md:text-7xl font-black text-primary leading-[1.1] tracking-tight">
                        Your Learning,<br />Your Choice
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <ChoiceCard
                        icon={<EditOutlined />}
                        title="Content Management & Delivery"
                        description="Easily create, upload, and manage custom courses tailored to specific roles and business needs."
                        iconBg="bg-pink-50"
                        iconColor="text-pink-400"
                    />

                    <ChoiceCard
                        icon={<BarChartOutlined />}
                        title="Progress & Performance Analytics"
                        description="Monitor development through detailed dashboards that display completion rates and engagement metrics."
                        iconBg="bg-blue-50"
                        iconColor="text-blue-400"
                    />

                    <ChoiceCard
                        icon={<VideoCameraOutlined />}
                        title="Integrated Web Conferencing"
                        description="Engage your team with live sessions using built-in conferencing for seamless real-time interaction."
                        iconBg="bg-green-50"
                        iconColor="text-green-400"
                    />

                    <ChoiceCard
                        icon={<SafetyCertificateOutlined />}
                        title="Assessment & Certification"
                        description="Confirm skill requirements and issue certificates instantly with built-in assessment and validation tools."
                        iconBg="bg-purple-50"
                        iconColor="text-purple-400"
                    />

                </div>

            </div>
        </section>
    );
}
