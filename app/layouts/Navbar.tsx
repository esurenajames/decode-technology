'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

const TOP_NAV_LINKS = [
    { label: 'About', href: '#about' },
    { label: 'Blogs', href: '/blog' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Support', href: '/support' },
];

const BOTTOM_NAV_LINKS = [
    { label: 'AI Chatbot', href: '/ai-chatbot' },
    { label: 'ERP System', href: '#erp' },
    { label: 'HRIS and Payroll System', href: '#hris' },
    { label: 'School Management System', href: '#school' },
    { label: 'Training Management System', href: '#training' },
    { label: 'Custom Software Development', href: '#custom' },
    { label: 'IT Outsourcing', href: '#it-outsourcing' },
];

const LANGUAGES = [
    { flag: '🇺🇸', code: 'EN', label: 'English' },
    { flag: '🇲🇾', code: 'MY', label: 'Malay' },
];

export default function Navbar() {
    const router = useRouter();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeTop, setActiveTop] = useState('');
    const [activeBottom, setActiveBottom] = useState('');
    const [selectedLang, setSelectedLang] = useState(LANGUAGES[0]);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const onResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false); };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    const langMenuItems: MenuProps['items'] = LANGUAGES.map(lang => ({
        key: lang.code,
        label: (
            <span className="flex items-center gap-2 text-sm font-medium text-primary">
                <span>{lang.flag}</span>
                <span>{lang.label}</span>
            </span>
        ),
        onClick: () => setSelectedLang(lang),
    }));

    return (
        <>
            <div
                id="navbar-wrapper"
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : 'shadow-none'}`}
            >
                {/* Main bar */}
                <div className="bg-white border-b border-primary/10 h-16 flex items-center justify-center px-8 relative z-20">
                    <div className="max-w-[1280px] w-full mx-auto grid grid-cols-3 items-center">

                        {/* Left — Logo */}
                        <button
                            onClick={() => router.push('/')}
                            className="bg-transparent border-none p-0 flex items-center gap-2.5 cursor-pointer w-fit"
                        >
                            <span className="text-lg font-extrabold text-primary tracking-tight">
                                Decode Technologies
                            </span>
                        </button>

                        {/* Center — Nav links */}
                        <nav className="hidden lg:flex items-center justify-center gap-x-6">
                            {TOP_NAV_LINKS.map(link => (
                                <button
                                    key={link.label}
                                    onClick={() => {
                                        setActiveTop(link.label);
                                        router.push(link.href);
                                    }}
                                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-out border-none cursor-pointer ${activeTop === link.label
                                        ? 'bg-primary/5 text-primary'
                                        : 'text-primary/70 hover:text-primary hover:bg-primary/5 bg-transparent'
                                        }`}
                                >
                                    {link.label}
                                </button>
                            ))}
                        </nav>

                        {/* Right — Language + CTA + Hamburger */}
                        <div className="flex items-center justify-end gap-4">

                            {/* Language dropdown — antd */}
                            <Dropdown
                                menu={{ items: langMenuItems }}
                                trigger={['click']}
                                placement="bottomRight"
                            >
                                <button className="flex items-center gap-1.5 bg-transparent border-none cursor-pointer p-0">
                                    <span className="text-base">{selectedLang.flag}</span>
                                    <span className="text-sm font-medium text-primary">{selectedLang.code}</span>
                                    <DownOutlined className="text-[10px] text-primary/60" />
                                </button>
                            </Dropdown>

                            <button
                                onClick={() => router.push('#contact')}
                                className="glow-btn ml-4 whitespace-nowrap hidden lg:inline-flex"
                            >
                                <span>Get a Quote</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom bar — service links (Hidden on scroll) */}
                <div
                    className={`hidden lg:flex bg-primary items-center justify-center px-8 transition-all duration-300 ease-in-out overflow-hidden relative z-10 ${scrolled ? 'h-0 opacity-0' : 'h-12 opacity-100'
                        }`}
                >
                    <div className="max-w-[1280px] w-full mx-auto flex items-center justify-between px-2">
                        {BOTTOM_NAV_LINKS.map(link => (
                            <button
                                key={link.label}
                                onClick={() => {
                                    setActiveBottom(link.label);
                                    router.push(link.href);
                                }}
                                className={`text-[0.8rem] font-medium whitespace-nowrap px-4 py-1.5 rounded-full transition-all duration-300 ease-out border border-transparent cursor-pointer ${activeBottom === link.label
                                    ? 'bg-white/15 text-white shadow-sm'
                                    : 'text-white/70 hover:text-white hover:bg-white/10 bg-transparent'
                                    }`}
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {/* Mobile menu removed as per request */}
            {/* <div
                id="mobile-menu"
                className="lg:hidden fixed top-16 left-0 right-0 z-40 bg-white border-b border-primary/10 overflow-hidden transition-all duration-300"
                style={{ maxHeight: mobileOpen ? '600px' : '0' }}
            >
                <div className="px-6 py-4 pb-6 flex flex-col gap-1">
                    <p className="text-[0.7rem] font-bold tracking-widest uppercase text-muted mb-1">Menu</p>
                    {TOP_NAV_LINKS.map(link => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => { setActiveTop(link.label); setMobileOpen(false); }}
                            className={`block px-3 py-2.5 text-[0.95rem] font-medium no-underline rounded-lg border-l-[3px] transition-all duration-150 ${activeTop === link.label
                                ? 'text-accent border-accent bg-accent/5'
                                : 'text-primary border-transparent hover:bg-primary/5'
                                }`}
                        >
                            {link.label}
                        </a>
                    ))}

                    <p className="text-[0.7rem] font-bold tracking-widest uppercase text-muted mt-4 mb-1">Services</p>
                    {BOTTOM_NAV_LINKS.map(link => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => { setActiveBottom(link.label); setMobileOpen(false); }}
                            className={`block px-3 py-2 text-sm font-medium no-underline rounded-lg transition-all duration-150 ${activeBottom === link.label
                                ? 'text-accent bg-accent/5'
                                : 'text-muted hover:bg-primary/5 hover:text-primary'
                                }`}
                        >
                            {link.label}
                        </a>
                    ))}

                    <a href="#contact" className="glow-btn mt-5 justify-center">
                        <span>Get a Quote</span>
                    </a>
                </div>
            </div> */}
        </>
    );
}
