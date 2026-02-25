'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { DownOutlined } from '@ant-design/icons';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import eesHrisImg from '../assets/eeshr.png';

export default function EESAbout() {
    const [activeAccordion, setActiveAccordion] = useState<number | null>(1);
    const containerRef = useRef<HTMLElement>(null);
    const statsRef = useRef<HTMLDivElement>(null);

    const stats = [
        { label: 'Years of Excellence', value: '5+' },
        { label: 'Daily Active Users', value: '10k+' },
        { label: 'Company Partners', value: '20+' },
        { label: 'Growth & Success', value: '98%' },
    ];

    const features = [
        {
            id: 0,
            title: 'Keep Information Up-to-Date',
            content: 'Organize your HR and Payroll Files and digitalize all your records. De-clutter from old and paper-based records.',
        },
        {
            id: 1,
            title: 'On-Time and Precise Payroll',
            content: "Disburse your employee's payroll and loans accurately including their pay-slips without the hassle.",
        },
        {
            id: 2,
            title: 'Time is Valuable',
            content: 'Seamlessly track your employee\'s time and match it with their working hours.',
        },
    ];

    useGSAP(() => {
        gsap.from('.stat-item', {
            opacity: 0,
            y: 20,
            stagger: 0.1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: statsRef.current,
                start: 'top 80%',
            },
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="w-full bg-gray-100 py-16 overflow-hidden">
            <div className="container mx-auto px-6">

                {/* Top Section — Intro & Stats */}
                <div className="mb-12">
                    <div className="flex flex-col mb-8">
                        <span className="text-gray-500 font-semibold mb-4 text-sm tracking-widest uppercase">Overview</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-primary max-w-4xl leading-tight">
                            Streamlined Workforce.
                        </h2>
                    </div>

                    <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="stat-item flex flex-col items-start">
                                <span className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                                    {stat.value}
                                </span>
                                <span className="text-gray-500 font-medium text-sm">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Section — Image & Accordion */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Image Area */}
                    <div className="relative rounded-[32px] overflow-hidden aspect-video lg:aspect-[4/3] shadow-2xl group">
                        <Image
                            src={eesHrisImg}
                            alt="EES - Human Resource Information System"
                            fill
                            className="object-cover transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" />
                    </div>

                    {/* Content & Accordion Area */}
                    <div className="flex flex-col">
                        <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                            HR Management, <span className="text-accent">Simplified</span>
                        </h3>
                        <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                            EES syncs your entire employee lifecycle—from hire to retire.
                        </p>

                        <div className="space-y-4">
                            {features.map((feature) => (
                                <div
                                    key={feature.id}
                                    className={`group rounded-2xl transition-all duration-300 ${activeAccordion === feature.id
                                        ? 'bg-accent text-white shadow-xl shadow-accent/20'
                                        : 'bg-gray-50 hover:bg-gray-200'
                                        }`}
                                >
                                    <button
                                        onClick={() => setActiveAccordion(activeAccordion === feature.id ? null : feature.id)}
                                        className="w-full flex items-center justify-between p-6 text-left"
                                    >
                                        <div className="flex items-center gap-4">
                                            <span className={`text-sm font-bold ${activeAccordion === feature.id ? 'text-white/70' : 'text-primary'
                                                }`}>
                                                (0{feature.id + 1})
                                            </span>
                                            <span className="text-lg font-bold">
                                                {feature.title}
                                            </span>
                                        </div>
                                        <div className={`transition-transform duration-300 ${activeAccordion === feature.id ? 'rotate-180' : ''
                                            }`}>
                                            <DownOutlined className="text-lg" />
                                        </div>
                                    </button>

                                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeAccordion === feature.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                                        }`}>
                                        <div className="p-6 pt-0 mt-0">
                                            <p className="text-white/90 leading-relaxed">
                                                {feature.content}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
