'use client';

import { useRef, useState } from 'react';
import {
    ArrowLeftOutlined,
    ArrowRightOutlined,
    ThunderboltOutlined,
    LockOutlined,
    SyncOutlined,
    MobileOutlined
} from '@ant-design/icons';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function EESTechnology() {
    const containerRef = useRef<HTMLElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const techFeatures = [
        {
            title: 'AI-Driven Insights',
            description: 'Predict turnover and identify top talent with advanced machine learning algorithms.',
            icon: <ThunderboltOutlined />,
        },
        {
            title: 'Cloud Security',
            description: 'Protect sensitive employee data with enterprise-grade encryption and secure hosting.',
            icon: <LockOutlined />,
        },
        {
            title: 'Real-Time Sync',
            description: 'Keep payroll, benefits, and attendance documentation in perfect harmony across devices.',
            icon: <SyncOutlined />,
        },
        {
            title: 'Mobile First',
            description: 'Employees access tools they need, anytime and anywhere with our modern app.',
            icon: <MobileOutlined />,
        },
    ];

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % techFeatures.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + techFeatures.length) % techFeatures.length);
    };

    useGSAP(() => {
        gsap.from('.tech-card', {
            opacity: 0,
            y: 30,
            stagger: 0.1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 80%',
            },
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="w-full bg-white py-24 md:py-32 overflow-hidden">
            <div className="container mx-auto px-6 max-w-5xl">

                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-10">
                    <div className="max-w-xl text-left">
                        <span className="text-gray-400 font-bold mb-6 block text-sm tracking-widest uppercase">/TECHNOLOGY INNOVATION</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                            Smart Infrastructure <br />
                            for Modern HR
                        </h2>
                    </div>
                    <div className="max-w-md w-full text-left">
                        <p className="text-gray-400 text-lg leading-relaxed mb-10 pt-2 lg:pt-0">
                            We leverage cutting-edge tech to transform how you engage and manage your workforce.
                            Our infrastructure scales with your business needs.
                        </p>

                        {/* Navigation UI */}
                        <div className="flex items-center gap-6">
                            <button
                                onClick={handlePrev}
                                className="w-10 h-10 rounded-lg border border-gray-100 flex items-center justify-center text-gray-300 hover:border-primary hover:text-primary transition-all active:scale-95"
                            >
                                <ArrowLeftOutlined />
                            </button>
                            <div className="flex-grow h-[1.5px] bg-gray-100 relative overflow-hidden">
                                <div
                                    className="absolute top-0 left-0 h-full bg-primary transition-all duration-500 ease-out"
                                    style={{ width: `${((activeIndex + 1) / techFeatures.length) * 100}%` }}
                                />
                            </div>
                            <button
                                onClick={handleNext}
                                className="w-10 h-10 rounded-lg border border-gray-100 flex items-center justify-center text-gray-300 hover:border-primary hover:text-primary transition-all active:scale-95"
                            >
                                <ArrowRightOutlined />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {techFeatures.map((item, idx) => (
                        <div
                            key={idx}
                            onClick={() => setActiveIndex(idx)}
                            className={`tech-card p-10 rounded-2xl transition-all duration-500 cursor-pointer min-h-[380px] flex flex-col justify-between group border ${activeIndex === idx
                                ? 'bg-white border-primary shadow-xl shadow-primary/5 ring-1 ring-primary/5'
                                : 'bg-white border-gray-100 hover:border-gray-200'
                                }`}
                        >
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-12 transition-colors duration-500 ${activeIndex === idx ? 'bg-primary text-white' : 'bg-gray-50 text-gray-300'
                                }`}>
                                {item.icon}
                            </div>

                            <div className="text-left">
                                <h3 className={`text-xl font-bold mb-4 leading-tight transition-colors duration-500 ${activeIndex === idx ? 'text-primary' : 'text-gray-400'
                                    }`}>
                                    {item.title}
                                </h3>
                                <p className={`text-sm leading-relaxed transition-colors duration-500 ${activeIndex === idx ? 'text-gray-600' : 'text-gray-300'
                                    }`}>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
