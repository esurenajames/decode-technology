'use client';

import {
    TwitterOutlined,
    LinkedinFilled,
    GithubFilled,
    ArrowRightOutlined,
    CheckCircleFilled
} from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import imgApp from '../page/Landing/assets/image 26.png'; // Reusing existing asset
import logoImg from '../page/Landing/assets/logo.jpg';

// Mock Data
const TESTIMONIALS = [
    { handle: '@techguru', name: 'Alex Chen', text: 'Decode Tech completely transformed our workflow. The ERP system is a game-changer.', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex' },
    { handle: '@startup_jane', name: 'Jane Doe', text: 'Best IT solutions provider in the Philippines. Hands down.', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane' },
    { handle: '@dev_mike', name: 'Mike Ross', text: 'Their school management system is intuitive and robust. Highly recommend.', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike' },
    { handle: '@sarah_ceo', name: 'Sarah Lee', text: 'Seamless outsourcing experience. They feel like part of our internal team.', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah' },
    { handle: '@cloud_master', name: 'David Kim', text: 'Data security and uptime have been flawless since we switched.', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David' },
    { handle: '@frontend_wiz', name: 'Emily White', text: 'Beautiful UI/UX on all their delivered apps. A pleasure to use.', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily' },
];

// Create 4 rows of data for variety
const ROWS_DATA = [
    [...TESTIMONIALS],
    [...TESTIMONIALS].reverse(),
    [...TESTIMONIALS.slice(3), ...TESTIMONIALS.slice(0, 3)],
    [...TESTIMONIALS.slice(2), ...TESTIMONIALS.slice(0, 2)],
];

const LOGOS = ['Mercury', 'Instacart', 'Retool', 'Duolingo', 'Hugging Face'];

// Updated Column Data for the new layout
const FOOTER_COLUMNS = [
    {
        title: 'Product',
        links: [
            { label: 'How it works', href: '#' },
            { label: 'Pricing', href: '#' },
            { label: 'Integrations', href: '#' },
            { label: 'Features', href: '#' },
            { label: 'Compare Decode', href: '#' },
        ]
    },
    {
        title: 'Use Cases',
        links: [
            { label: 'Business VPN', href: '#' },
            { label: 'CI/CD', href: '#' },
            { label: 'Infra Access', href: '#' },
            { label: 'Cloud Connectivity', href: '#' },
            { label: 'Zero Trust Networking', href: '#' },
            { label: 'Homelab', href: '#' },
        ]
    },
    {
        title: 'Resources',
        links: [
            { label: 'Blog', href: '/blog' },
            { label: 'Events & Webinars', href: '#' },
            { label: 'Partnerships', href: '#' },
        ]
    },
    {
        title: 'Company',
        links: [
            { label: 'Company', href: '#' },
            { label: 'Careers', href: '#' },
            { label: 'Press', href: '#' },
        ]
    },
    {
        title: 'Help & Support',
        links: [
            { label: 'Support', href: '/support' },
            { label: 'Sales', href: '#' },
            { label: 'Security', href: '#' },
            { label: 'Legal', href: '#' },
            { label: 'Open Source', href: '#' },
            { label: 'Changelog', href: '#' },
            { label: 'System Status', href: '#' },
        ]
    },
    {
        title: 'Learn',
        links: [
            { label: 'SSH keys', href: '#' },
            { label: 'Docker SSH', href: '#' },
            { label: 'NAT Traversal', href: '#' },
            { label: 'MagicDNS', href: '#' },
            { label: 'PAM', href: '#' },
            { label: 'All articles', href: '#' },
        ]
    },
];

const NEW_SOCIALS = [
    { label: 'X', icon: <TwitterOutlined /> },
    { label: 'LinkedIn', icon: <LinkedinFilled /> },
    { label: 'GitHub', icon: <GithubFilled /> },
];

export default function Footer() {
    const year = new Date().getFullYear();
    const containerRef = useRef<HTMLDivElement>(null);
    const testimonialRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        const rows = document.querySelectorAll('.testimonial-row');

        rows.forEach((row, i) => {
            const isReverse = i % 2 === 1; // Rows 1 and 3 move Right

            gsap.fromTo(row,
                { xPercent: isReverse ? -5 : 0 },
                {
                    xPercent: isReverse ? 0 : -5,
                    ease: "none",
                    scrollTrigger: {
                        trigger: testimonialRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1,
                    }
                }
            );
        });
    }, { scope: containerRef });

    return (
        <footer ref={containerRef} className="w-full flex flex-col">

            {/* ── Top Section: Testimonials (Dark) ── */}
            <div ref={testimonialRef} className="bg-primary text-white py-24 overflow-hidden relative w-full">
                <div className="relative text-center w-full py-12">
                    {/* Floating Badge */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
                        <div className="inline-block px-8 py-3 rounded-full bg-[#000]/40 backdrop-blur-xl border border-white/20 text-base font-bold shadow-2xl tracking-wide">
                            Clients Love Us
                        </div>
                    </div>

                    {/* Marquee Container */}
                    <div className="flex flex-col gap-6 w-full overflow-hidden mask-linear-gradient">
                        {ROWS_DATA.map((rowItems, rowIndex) => (
                            <div key={rowIndex} className="testimonial-row flex gap-6 w-max">
                                {/* Quadruple the items to ensure seamless loop on large screens */}
                                {[...rowItems, ...rowItems, ...rowItems, ...rowItems].map((t, i) => (
                                    <div key={i} className="w-[350px] bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col gap-4 hover:bg-white/10 transition-colors cursor-default backdrop-blur-sm">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-accent/20 overflow-hidden relative shrink-0">
                                                <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                                            </div>
                                            <div className="text-left">
                                                <div className="font-bold text-sm text-white">{t.name}</div>
                                                <div className="text-xs text-white/50">{t.handle}</div>
                                            </div>
                                        </div>
                                        <p className="text-sm text-white/80 text-left leading-relaxed line-clamp-3">
                                            "{t.text}"
                                        </p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>

                    {/* Gradients to fade edges */}
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-primary to-transparent pointer-events-none z-10" />
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-primary to-transparent pointer-events-none z-10" />
                </div>
            </div>

            {/* ── Bottom Section: CTA & Links (White) ── */}
            <div className="bg-white text-primary pt-24 pb-12 px-6">
                <div className="max-w-7xl mx-auto">

                    {/* 2. Dual CTA Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-24">

                        {/* Left Card: CTA */}
                        <div className="relative bg-[#111a2b] rounded-[2.5rem] p-10 md:p-14 overflow-hidden border border-gray-100 flex flex-col justify-between min-h-[500px] text-white">
                            {/* Background Shapes */}
                            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#d97706] rounded-full blur-[120px] opacity-20 pointer-events-none translate-x-1/2 -translate-y-1/2" />
                            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/20 rounded-full blur-[100px] opacity-20 pointer-events-none -translate-x-1/2 translate-y-1/2" />

                            <div className="relative z-10">
                                <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6">
                                    Try <span className="text-[#d97706]">Decode Tech</span> <br />
                                    for free
                                </h2>
                                <ul className="space-y-3 mb-10 text-lg text-white/70">
                                    <li className="flex items-center gap-3">
                                        <CheckCircleFilled className="text-accent" />
                                        <span>No credit card required</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircleFilled className="text-accent" />
                                        <span>Full access to all features</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircleFilled className="text-accent" />
                                        <span>24/7 Priority Support</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="relative z-10 flex flex-col sm:flex-row gap-4">
                                <button className="bg-white text-primary px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors">
                                    Get started
                                    <ArrowRightOutlined className="text-sm" />
                                </button>
                                <button className="px-8 py-4 rounded-xl font-bold border border-white/20 hover:bg-white/5 transition-colors text-white">
                                    Contact Sales
                                </button>
                            </div>
                        </div>

                        {/* Right Card: Mobile App Preview */}
                        <div className="relative bg-[#2e1065] rounded-[2.5rem] p-10 md:p-14 overflow-hidden border border-gray-100 flex items-center justify-center min-h-[500px]">
                            {/* Background Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#2e1065] to-[#4c1d95]" />

                            {/* Phone Mockup */}
                            <div className="relative w-[300px] h-[600px] bg-black rounded-[3rem] border-8 border-gray-900 shadow-2xl translate-y-16 rotate-12 hover:rotate-0 transition-transform duration-500 ease-out">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-20" />
                                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                                    <Image
                                        src={imgApp}
                                        alt="App Interface"
                                        fill
                                        className="object-cover"
                                    />
                                    {/* Overlay UI elements to make it look like app */}
                                    <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                                        <div className="font-bold">Decode Mobile</div>
                                        <div className="text-xs opacity-70">Control everything on the go.</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                    {/* 3. Trusted By Logos */}
                    <div className="border-b border-gray-100 pb-16 mb-16">
                        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                            {/* Text placeholders */}
                            {LOGOS.map(logo => (
                                <div key={logo} className="relative h-8 md:h-10 w-32 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                                    <Image
                                        src={logoImg}
                                        alt={`${logo} logo`}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>


                    {/* ── Main Footer Links (New Layout) ── */}
                    {/* 1. Links Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
                        {FOOTER_COLUMNS.map((col) => (
                            <div key={col.title}>
                                <h4 className="font-bold text-gray-900 mb-4 text-sm">{col.title}</h4>
                                <ul className="space-y-3">
                                    {col.links.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="text-gray-500 hover:text-gray-900 transition-colors text-sm"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-100 mb-12"></div>

                    {/* 2. Middle Section - Branding & Legal */}
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-12">

                        {/* Brand Logo */}
                        <div className="mb-4 lg:mb-0">
                            <h2 className="text-2xl font-bold text-primary tracking-tight">
                                Decode Technologies
                            </h2>
                        </div>

                        {/* Legal Links Column */}
                        <div className="flex flex-col gap-2 items-center lg:items-start">
                            <div className="flex flex-col gap-2 text-sm text-gray-500 underline decoration-gray-300 underline-offset-4 items-center lg:items-start">
                                <Link href="#" className="hover:text-primary">Terms of Service</Link>
                                <Link href="#" className="hover:text-primary">Privacy Policy</Link>
                                <Link href="#" className="hover:text-primary">California Notice</Link>
                                <Link href="#" className="hover:text-primary">Cookie Notice</Link>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
                                <div className="w-8 h-4 bg-primary rounded-full relative">
                                    <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full"></div>
                                </div>
                                <Link href="#" className="underline decoration-gray-300 underline-offset-4 hover:text-primary">Your Privacy Choices</Link>
                            </div>
                        </div>

                        {/* Trademark Text */}
                        <div className="text-xs text-gray-400 max-w-xs leading-relaxed text-center lg:text-left">
                            WireGuard is a registered trademark of Jason A. Donenfeld.
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3">
                            {NEW_SOCIALS.map((social) => (
                                <a
                                    key={social.label}
                                    href="#"
                                    className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/80 transition-colors"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>

                    </div>

                    {/* 3. Bottom Section - Copyright */}
                    <div className="text-xs text-gray-400 text-center">
                        © {year} Decode Technologies Inc. All rights reserved.
                    </div>

                </div>
            </div>
        </footer>
    );
}
