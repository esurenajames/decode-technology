'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import {
    AppstoreOutlined,
    TeamOutlined,
    SettingOutlined,
    CheckOutlined,
} from '@ant-design/icons';
import outsourceBg from '../assets/outsource-bg.jpg';

gsap.registerPlugin(ScrollTrigger);

const OFFERINGS = [
    {
        icon: <AppstoreOutlined />,
        iconBg: 'bg-accent',
        title: 'App Support',
        description:
            'App support involves providing ongoing assistance, maintenance, and troubleshooting applications such as web, mobile, and existing systems or softwares, ensuring a seamless user experience.',
        highlights: [
            'Web & Mobile App Maintenance',
            'Bug Fixes & Performance Tuning',
            'System Monitoring & Alerts',
            'Version Upgrades & Patches',
            'User Experience Optimization',
            '24/7 Technical Support',
        ],
    },
    {
        icon: <TeamOutlined />,
        iconBg: 'bg-emerald-500',
        title: 'Dedicated IT Team',
        description:
            'Our Dedicated IT Development Team provides assistance to your company or projects to provide their expertise. This allows your business to leverage cost-effective resources and expertise while maintaining a competitive edge.',
        highlights: [
            'Full-Stack Development Teams',
            'Project Management Included',
            'Flexible Team Scaling',
            'Daily Stand-ups & Reports',
            'Seamless Integration with Your Workflow',
            'Cross-Timezone Collaboration',
        ],
    },
    {
        icon: <SettingOutlined />,
        iconBg: 'bg-violet-500',
        title: 'IT Professional Service',
        description:
            'IT professional services encompass a range of expert solutions tailored to empower businesses in their digital endeavors. We offer strategic consulting, seamless implementation, and ongoing support.',
        highlights: [
            'Strategic IT Consulting',
            'Infrastructure Setup & Migration',
            'Cloud Architecture Design',
            'Security Audits & Compliance',
            'Custom Software Solutions',
            'Ongoing Support & Optimization',
        ],
    },
];

export default function OutsourceOfferings() {
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const cards = gsap.utils.toArray<HTMLElement>('.offering-card');

        gsap.set(cards, { opacity: 0, y: 50 });

        ScrollTrigger.batch(cards, {
            onEnter: (batch) => {
                gsap.to(batch, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    stagger: 0.15,
                });
            },
            start: 'top 85%',
            once: true,
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="relative py-24 overflow-hidden">

            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={outsourceBg.src}
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Dark overlay */}
            <div
                aria-hidden="true"
                className="absolute inset-0 z-[1]"
                style={{ background: 'rgba(1, 68, 113, 0.88)' }}
            />

            <div className="max-w-5xl mx-auto px-6 relative z-10">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block text-accent-light font-bold text-xs tracking-widest uppercase mb-4">
                        What We Offer
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                        Start with what you need,
                        <br className="hidden md:block" />
                        customize as you go
                    </h2>
                    <p className="text-white/50 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                        Elevate your business with our comprehensive IT service offerings designed to scale with your growth.
                    </p>
                </div>

                {/* Connector Lines — hidden on mobile */}
                <div className="hidden md:block relative w-full h-32">
                    <svg
                        className="w-full h-full"
                        viewBox="0 0 900 128"
                        fill="none"
                        preserveAspectRatio="xMidYMid meet"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {/* Center vertical line from header down to split */}
                        <line x1="450" y1="0" x2="450" y2="40" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeDasharray="6 4" />

                        {/* Left branch: goes from center down, curves left, then drops to left card */}
                        <path
                            d="M 450 40 L 450 56 Q 450 68 438 68 L 162 68 Q 150 68 150 80 L 150 128"
                            stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeDasharray="6 4"
                        />

                        {/* Center vertical drop to center card */}
                        <line x1="450" y1="40" x2="450" y2="80" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeDasharray="6 4" />

                        {/* Right branch: goes from center down, curves right, then drops to right card */}
                        <path
                            d="M 450 40 L 450 56 Q 450 68 462 68 L 738 68 Q 750 68 750 80 L 750 128"
                            stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeDasharray="6 4"
                        />

                        {/* Dot — top center origin */}
                        <circle cx="450" cy="0" r="5" fill="#73C4F1" />

                        {/* Dot — split junction */}
                        <circle cx="450" cy="40" r="4" fill="rgba(255,255,255,0.35)" />

                        {/* Dot — left card entry */}
                        <circle cx="150" cy="128" r="5" fill="#2F7FF5" />

                        {/* Dot — center card entry */}
                        <circle cx="450" cy="80" r="5" fill="#10b981" />

                        {/* Dot — right card entry */}
                        <circle cx="750" cy="128" r="5" fill="#8b5cf6" />
                    </svg>
                </div>

                {/* Offerings Cards — center card offset up */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                    {OFFERINGS.map((offering, idx) => (
                        <div
                            key={idx}
                            className={`offering-card group bg-white rounded-2xl p-7 flex flex-col transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(0,0,0,0.3)] ${idx === 1 ? 'md:-mt-12' : 'md:mt-6'}`}
                        >
                            {/* Icon */}
                            <div className={`w-12 h-12 rounded-xl ${offering.iconBg} text-white flex items-center justify-center text-xl mb-5`}>
                                {offering.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-primary mb-3 tracking-tight">
                                {offering.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                {offering.description}
                            </p>

                            {/* Divider */}
                            <div className="w-full h-px bg-gray-100 mb-5" />

                            {/* Highlights Label */}
                            <span className="text-primary font-bold text-xs tracking-wider uppercase mb-4">
                                What you get:
                            </span>

                            {/* Highlights List */}
                            <div className="flex flex-col gap-3 flex-1">
                                {offering.highlights.map((item, hIdx) => (
                                    <div key={hIdx} className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 mt-0.5">
                                            <CheckOutlined className="text-[10px]" />
                                        </div>
                                        <span className="text-gray-500 text-sm leading-snug">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
