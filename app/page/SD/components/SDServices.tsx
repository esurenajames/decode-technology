'use client';

import { useState } from 'react';

const TABS = [
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile App Development' },
    { id: 'ecommerce', label: 'E-Commerce Development' },
];

const SERVICES: Record<string, { title: string; description: string; image: string }> = {
    web: {
        title: 'Web Development',
        description: "Custom web applications are built to your exact needs, enhancing your customers’ experience while driving your business goals.",
        image: 'https://thefusebase.com/wp-content/themes/nimbus/assets/images/homepage-october-2025/Onboarding.webp',
    },
    mobile: {
        title: 'Mobile App Development',
        description: 'Our mobile apps are built for your business and your customers. They make it easy for customers to use your services anytime, anywhere, while helping your business work faster and more efficiently.',
        image: 'https://thefusebase.com/wp-content/themes/nimbus/assets/images/homepage-october-2025/Client-Portal.webp',
    },
    ecommerce: {
        title: 'E-Commerce Development',
        description: 'Optimized online platforms that maximize conversions and deliver seamless buying experiences for your customers.',
        image: 'https://thefusebase.com/wp-content/themes/nimbus/assets/images/homepage-october-2025/PartnerDealSpace.webp',
    },
};

export default function SDServices() {
    const [activeTab, setActiveTab] = useState('web');
    const active = SERVICES[activeTab];

    return (
        <section className="pt-24 bg-primary overflow-hidden">
            <div className="max-w-full mx-auto px-6">

                {/* ── Desktop: Tab-based view ── */}
                <div className="hidden md:block">
                    {/* Header */}
                    <div className="text-center mb-10">
                        <h2 className="text-4xl font-bold text-white mb-3 tracking-tight">
                            {active.title}
                        </h2>
                        <p className="text-white/60 text-base max-w-2xl mx-auto">
                            {active.description}
                        </p>
                    </div>

                    {/* Tabs */}
                    <div className="flex justify-center mb-8">
                        <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-1 gap-1 border border-white/10">
                            {TABS.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 whitespace-nowrap ${activeTab === tab.id
                                        ? 'bg-white text-primary shadow-sm'
                                        : 'text-white/70 hover:text-white'
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Showcase Image */}
                    <div className="relative max-w-6xl mx-auto">
                        <div className="relative w-full rounded-t-2xl overflow-hidden">
                            <img
                                src={active.image}
                                alt={active.title}
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>

                {/* ── Mobile: All services stacked ── */}
                <div className="md:hidden flex flex-col gap-10 pb-12">
                    {TABS.map((tab) => {
                        const service = SERVICES[tab.id];
                        return (
                            <div key={tab.id} className="flex flex-col gap-4">
                                <div className="text-center">
                                    <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                                        {service.title}
                                    </h3>
                                    <p className="text-white/60 text-sm leading-relaxed px-2">
                                        {service.description}
                                    </p>
                                </div>
                                <div className="relative w-full rounded-xl overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-auto"
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
