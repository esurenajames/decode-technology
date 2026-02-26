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
import mobileImg from '../assets/mobile.jpg';
import footerBg from '../assets/Footer.png';
import footerDeviceBg from '../assets/footer device.png';
// Import logos
import BCG from '../assets/BCG-removebg-preview.png';
import C3 from '../assets/C3-removebg-preview.png';
import KLL1 from '../assets/KLL1-removebg-preview.png';
import LSC from '../assets/LSC-removebg-preview.png';
import PLX from '../assets/PLX-removebg-preview.png';
import PVA from '../assets/PVA-removebg-preview.png';
import RPDOTRCAB from '../assets/RP-DOTRCAB-removebg-preview.png';
import CRK from '../assets/crk-removebg-preview.png';
import EDAMAMA from '../assets/edamama-removebg-preview.png';
import GOLDPLAN from '../assets/goldplan-removebg-preview.png';
import JINZAI from '../assets/jinzai-copy-removebg-preview.png';
import SPROBE from '../assets/sprobe-removebg-preview.png';
import ONE from '../assets/1-removebg-preview.png';
import ONE_1 from '../assets/1__1_-removebg-preview.png';
import FOUR_P from '../assets/4P-removebg-preview.png';
import ACM from '../assets/ACM-removebg-preview.png';
import AMS from '../assets/AMS-removebg-preview.png';
import ASG2 from '../assets/ASG2-removebg-preview.png';
import BANDWELL from '../assets/BANDWELL-removebg-preview.png';
import VANITY from '../assets/VANITY-removebg-preview.png';
import VXI from '../assets/VXI-removebg-preview.png';
import ZBIZ from '../assets/ZBIZ-removebg-preview.png';
import ZOOMLION from '../assets/zoomlion-removebg-preview.png';

// Mock Data
const TESTIMONIALS = [
    { handle: '@techguru', name: 'Alex Chen', text: 'Decode Tech completely transformed our workflow. The ERP system is a game-changer.', avatar: 'https://i.pravatar.cc/150?img=11' },
    { handle: '@startup_jane', name: 'Jane Doe', text: 'Best IT solutions provider in the Philippines. Hands down.', avatar: 'https://i.pravatar.cc/150?img=5' },
    { handle: '@dev_mike', name: 'Mike Ross', text: 'Their school management system is intuitive and robust. Highly recommend.', avatar: 'https://i.pravatar.cc/150?img=8' },
    { handle: '@sarah_ceo', name: 'Sarah Lee', text: 'Seamless outsourcing experience. They feel like part of our internal team.', avatar: 'https://i.pravatar.cc/150?img=9' },
    { handle: '@cloud_master', name: 'David Kim', text: 'Data security and uptime have been flawless since we switched.', avatar: 'https://i.pravatar.cc/150?img=12' },
    { handle: '@frontend_wiz', name: 'Emily White', text: 'Beautiful UI/UX on all their delivered apps. A pleasure to use.', avatar: 'https://i.pravatar.cc/150?img=24' },
];

// Create 4 rows of data for variety
const ROWS_DATA = [
    [...TESTIMONIALS],
    [...TESTIMONIALS].reverse(),
    [...TESTIMONIALS.slice(3), ...TESTIMONIALS.slice(0, 3)],
    [...TESTIMONIALS.slice(2), ...TESTIMONIALS.slice(0, 2)],
];

const FOOTER_LOGOS = [
    { name: 'BCG', src: BCG },
    { name: 'C3', src: C3 },
    { name: 'KLL1', src: KLL1 },
    { name: 'LSC', src: LSC },
    { name: 'PLX', src: PLX },
    { name: 'PVA', src: PVA },
    { name: 'RP-DOTRCAB', src: RPDOTRCAB },
    { name: 'CRK', src: CRK },
    { name: 'EDAMAMA', src: EDAMAMA },
    { name: 'GOLDPLAN', src: GOLDPLAN },
    { name: 'JINZAI', src: JINZAI },
    { name: 'SPROBE', src: SPROBE },
    { name: '1', src: ONE },
    { name: '1_1', src: ONE_1 },
    { name: '4P', src: FOUR_P },
    { name: 'ACM', src: ACM },
    { name: 'AMS', src: AMS },
    { name: 'ASG2', src: ASG2 },
    { name: 'BANDWELL', src: BANDWELL },
    { name: 'VANITY', src: VANITY },
    { name: 'VXI', src: VXI },
    { name: 'ZBIZ', src: ZBIZ },
    { name: 'ZOOMLION', src: ZOOMLION },
];

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
            <div ref={testimonialRef} className="bg-primary text-white overflow-hidden relative w-full">
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
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">

                        {/* Left Card: CTA */}
                        <div className="relative rounded-lg p-10 overflow-hidden border border-gray-100 flex flex-col justify-between text-white">
                            <Image
                                src={footerBg}
                                alt="CTA Background"
                                fill
                                className="object-cover z-0"
                            />
                            <div className="absolute inset-0 bg-black/20 z-0" />

                            <div className="relative z-10">
                                <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
                                    Partner with Confidence
                                </h2>
                                <ul className="space-y-3 mb-10 text-lg text-white/70">
                                    <li className="flex items-center gap-3">
                                        <CheckCircleFilled className="text-accent" />
                                        <span>Enterprise-Grade Security</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircleFilled className="text-accent" />
                                        <span>99.9% Uptime Guarantee</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircleFilled className="text-accent" />
                                        <span>Dedicated Expert Support</span>
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

                        <div className="relative bg-[#19253b] rounded-lg overflow-hidden border border-gray-100 flex items-center justify-center min-h-[500px]">
                            <Image
                                src={footerDeviceBg}
                                alt="Device Interface"
                                fill
                                className="object-cover"
                            />
                        </div>

                    </div>


                    <div className="border-b border-gray-100 pb-16 mb-16 flex flex-col items-center gap-10">
                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em] text-center">Join the list of our happy clients</h3>
                        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                            {FOOTER_LOGOS.map((logo) => (
                                <div key={logo.name} className="relative h-12 w-32 hover:scale-105 transition-all duration-500 transform">
                                    <Image
                                        src={logo.src}
                                        alt={`${logo.name} logo`}
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
                            An AI Solution Company
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
