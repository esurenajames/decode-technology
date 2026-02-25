'use client';

import React from 'react';
import {
    SearchOutlined,
    ControlOutlined,
    RocketOutlined,
    ArrowRightOutlined
} from '@ant-design/icons';
import Link from 'next/link';

const STEPS = [
    {
        number: "01",
        label: "Discover",
        title: "Discover",
        description: "Experience the simplicity and power of EES Workforce Elevate.",
        icon: <SearchOutlined />,
    },
    {
        number: "02",
        label: "Determine",
        title: "Determine",
        description: "Effortlessly set up materials, instructors, and trainees.",
        icon: <ControlOutlined />,
    },
    {
        number: "03",
        label: "Deploy",
        title: "Deploy",
        description: "Unleash a seamless training experience for your team.",
        icon: <RocketOutlined />,
    }
];

export default function ElevateShowcase() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-5xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-20">
                    <span className="text-accent font-bold uppercase tracking-widest text-xs mb-4 block">Process</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                        Elevate Your Employee Training Today!
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        A simple, three-step approach to transforming your workforce development program.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {STEPS.map((step, idx) => (
                        <div key={idx} className="group relative bg-white p-10 rounded-lg shadow-sm border border-gray-100 hover:shadow-xl hover:border-accent/10 transition-all duration-500">
                            {/* Step Number Badge */}
                            <div className="absolute top-6 right-8 text-primary/10 text-6xl font-bold leading-none group-hover:text-accent/10 transition-colors">
                                {step.number}
                            </div>

                            {/* Icon Container */}
                            <div className="w-16 h-16 rounded-lg bg-accent/5 flex items-center justify-center text-2xl text-accent mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                                {step.icon}
                            </div>

                            {/* Text Content */}
                            <div>
                                <h3 className="text-xs font-bold text-accent uppercase tracking-wider mb-2">{step.label}</h3>
                                <h4 className="text-2xl font-bold text-primary mb-4">{step.title}</h4>
                                <p className="text-gray-600 leading-relaxed font-medium">
                                    {step.description}
                                </p>
                            </div>

                            {/* Bottom Accent Bar */}
                            <div className="absolute bottom-0 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-500 rounded-b-lg" />
                        </div>
                    ))}
                </div>

                {/* CTA Action */}
                <div className="flex flex-col items-center gap-6">
                    <Link
                        href="#demo"
                        className="inline-flex items-center gap-4 px-12 py-5 bg-primary text-white font-bold rounded-lg hover:bg-primary/95 transition-all shadow-2xl shadow-primary/20 transform hover:-translate-y-1"
                    >
                        Book a Demo
                        <ArrowRightOutlined />
                    </Link>
                    <p className="text-gray-400 text-sm font-medium italic">Empower your team with a 14-day free trial</p>
                </div>
            </div>
        </section>
    );
}
