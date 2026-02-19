'use client';

import {
    MessageOutlined,
    GlobalOutlined,
    ClockCircleOutlined,
    SafetyCertificateOutlined,
    ApiOutlined,
    ThunderboltOutlined,
} from '@ant-design/icons';

const CORE_FEATURES = [
    {
        icon: <MessageOutlined />,
        title: 'Natural Language Processing',
        description: 'Understands the intent and context behind every message — not just keywords — for truly seamless, human-like conversations.',
    },
    {
        icon: <GlobalOutlined />,
        title: 'Multilingual Support',
        description: 'Communicate with customers in their native language. Automatically detects and responds across 50+ supported languages.',
    },
    {
        icon: <ClockCircleOutlined />,
        title: 'Available 24/7',
        description: 'Your AI never sleeps. Deliver instant, consistent support to customers at any hour, on any day, without additional overhead.',
    },
    {
        icon: <SafetyCertificateOutlined />,
        title: 'Enterprise-Grade Security',
        description: 'Built with bank-level encryption and data compliance standards, keeping every customer interaction private and protected.',
    },
    {
        icon: <ApiOutlined />,
        title: 'Seamless Integrations',
        description: 'Connects natively with your existing CRM, ERP, and helpdesk platforms — no complex engineering required.',
    },
    {
        icon: <ThunderboltOutlined />,
        title: 'Instant Responses',
        description: 'Zero wait times. Resolve common queries in milliseconds and keep your customers engaged throughout the conversation.',
    },
];

export default function AIChatbotCoreFeatures() {
    return (
        <section className="bg-black text-white py-24 px-12">
            <div className="max-w-7xl mx-auto">

                {/* Header Row */}
                <div className="flex items-start justify-between mb-16">
                    <div>
                        <span className="text-gray-400 text-sm font-mono tracking-widest mb-3 block">[ CORE ]</span>
                        <h2 className="text-4xl font-black tracking-tight uppercase">
                            Decode AI Chatbot
                        </h2>
                    </div>
                    <div className="text-right text-gray-300 text-lg leading-relaxed hidden md:block">
                        <p>One AI Chatbot.</p>
                        <p>Endless Business Possibilities.</p>
                    </div>
                </div>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {CORE_FEATURES.map((feature, idx) => (
                        <div
                            key={idx}
                            className="border-l border-white/15 p-10 flex flex-col gap-8 hover:bg-white/5 transition-colors duration-300"
                        >
                            {/* Icon */}
                            <div className="text-3xl text-white">
                                {feature.icon}
                            </div>

                            {/* Text */}
                            <div className="flex flex-col gap-3">
                                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
