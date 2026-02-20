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
        color: '#0084FF',
        bgGlow: 'rgba(0,132,255,0.12)',
    },
    {
        icon: <GlobalOutlined />,
        title: 'Multilingual Support',
        description: 'Communicate with customers in their native language. Automatically detects and responds across 50+ supported languages.',
        color: '#25D366',
        bgGlow: 'rgba(37,211,102,0.12)',
    },
    {
        icon: <ClockCircleOutlined />,
        title: 'Available 24/7',
        description: 'Your AI never sleeps. Deliver instant, consistent support to customers at any hour, on any day, without additional overhead.',
        color: '#E1306C',
        bgGlow: 'rgba(225,48,108,0.12)',
    },
    {
        icon: <SafetyCertificateOutlined />,
        title: 'Enterprise-Grade Security',
        description: 'Built with bank-level encryption and data compliance standards, keeping every customer interaction private and protected.',
        color: '#833AB4',
        bgGlow: 'rgba(131,58,180,0.12)',
    },
    {
        icon: <ApiOutlined />,
        title: 'Seamless Integrations',
        description: 'Connects natively with your existing CRM, ERP, and helpdesk platforms — no complex engineering required.',
        color: '#F5A623',
        bgGlow: 'rgba(245,166,35,0.12)',
    },
    {
        icon: <ThunderboltOutlined />,
        title: 'Instant Responses',
        description: 'Zero wait times. Resolve common queries in milliseconds and keep your customers engaged throughout the conversation.',
        color: '#0084FF',
        bgGlow: 'rgba(0,132,255,0.12)',
    },
];


export default function AIChatbotCoreFeatures() {
    return (
        <section className="text-white py-24 px-6 md:px-12 ">
            <div className="max-w-5xl mx-auto">

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
                            <div
                                className="text-3xl w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                                style={{
                                    color: feature.color,
                                    background: feature.bgGlow,
                                    boxShadow: `0 0 16px ${feature.bgGlow}`,
                                }}
                            >
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
