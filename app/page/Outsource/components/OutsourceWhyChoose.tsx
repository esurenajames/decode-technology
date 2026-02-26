'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import {
    TrophyOutlined,
    DollarOutlined,
    CustomerServiceOutlined,
    ClockCircleOutlined,
    LockOutlined,
    RiseOutlined,
} from '@ant-design/icons';

gsap.registerPlugin(ScrollTrigger);

const BENEFITS = [
    {
        icon: <TrophyOutlined />,
        title: 'Access to Quality Resources',
        description: 'Select from a wide range of experienced talents.',
    },
    {
        icon: <DollarOutlined />,
        title: 'Affordable Rates',
        description: 'Simple and Precise Rates.',
    },
    {
        icon: <CustomerServiceOutlined />,
        title: 'Continues Support',
        description: "We're here to help. Ensure Measurable Results and Timely Delivery.",
    },
    {
        icon: <ClockCircleOutlined />,
        title: 'Client Working Hours',
        description: 'Your resource will be active and working during your working hours / timezone.',
    },
    {
        icon: <LockOutlined />,
        title: 'Confidentiality',
        description: 'We value your privacy. We make sure that everything about your project remains confidential.',
    },
    {
        icon: <RiseOutlined />,
        title: 'Scalable and Reliable',
        description: 'Add more dedicated resources as your company or project as it expands.',
    },
];

export default function OutsourceWhyChoose() {
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const cards = gsap.utils.toArray<HTMLElement>('.benefit-card');

        gsap.set(cards, { opacity: 0, y: 30 });

        ScrollTrigger.batch(cards, {
            onEnter: (batch) => {
                gsap.to(batch, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: 'power3.out',
                    stagger: 0.12,
                });
            },
            start: 'top 88%',
            once: true,
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="bg-surface py-24">
            <div className="max-w-5xl mx-auto px-6">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block text-accent font-bold text-xs tracking-widest uppercase mb-4">
                        Why Us
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 tracking-tight">
                        Why Choose Our IT Outsourcing
                        <br className="hidden md:block" />
                        and Managed IT Services?
                    </h2>
                    <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                        We deliver enterprise-grade IT outsourcing with the agility and personal attention of a dedicated partner.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {BENEFITS.map((benefit, idx) => (
                        <div
                            key={idx}
                            className="benefit-card group bg-white rounded-xl p-7 border border-gray-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1 cursor-default"
                        >
                            {/* Icon Container */}
                            <div className="w-12 h-12 rounded-xl bg-accent/8 text-accent flex items-center justify-center text-xl mb-5 transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:shadow-md">
                                {benefit.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-base font-bold text-primary mb-2 tracking-tight">
                                {benefit.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
