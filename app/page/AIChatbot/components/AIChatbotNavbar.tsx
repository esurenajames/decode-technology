'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Dropdown } from 'antd';
import { DownOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

const TOP_NAV_LINKS = [
    { label: 'Blogs', href: '/blog' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Support', href: '/support' },
    { label: 'Calculator', href: '/calculator' },
];

const BOTTOM_NAV_LINKS = [
    { label: 'AI Chatbot', href: '/ai-chatbot' },
    { label: 'ERP System', href: '/erp' },
    { label: 'HRIS and Payroll System', href: '/ees' },
    { label: 'School Management System', href: '/empac' },
    { label: 'Training Management System', href: '/elevate' },
    { label: 'Custom Software Development', href: '/sd' },
    { label: 'IT Outsourcing', href: '/outsource' },
];

const LANGUAGES = [
    { flag: '🇺🇸', code: 'EN', label: 'English' },
    { flag: '🇲🇾', code: 'MY', label: 'Malay' },
];

export default function AIChatbotNavbar() {
    const router = useRouter();
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [selectedLang, setSelectedLang] = useState(LANGUAGES[0]);
    const [showBottomBar, setShowBottomBar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const currentScrollY = window.scrollY;
            setScrolled(currentScrollY > 10);

            if (currentScrollY > 100) {
                if (currentScrollY < lastScrollY) {
                    setShowBottomBar(true);
                } else {
                    setShowBottomBar(false);
                }
            } else {
                setShowBottomBar(true);
            }

            setLastScrollY(currentScrollY);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [lastScrollY]);

    // Close mobile menu on resize to desktop
    useEffect(() => {
        const onResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false); };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    const langMenuItems: MenuProps['items'] = LANGUAGES.map(lang => ({
        key: lang.code,
        label: (
            <span className="flex items-center gap-2 text-sm font-medium text-black">
                <span>{lang.flag}</span>
                <span>{lang.label}</span>
            </span>
        ),
        onClick: () => setSelectedLang(lang),
    }));

    const navigateTo = (href: string) => {
        setMobileOpen(false);
        router.push(href);
    };

    return (
        <>
            <div
                id="chatbot-navbar-wrapper"
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-2xl' : 'shadow-none'}`}
            >
                {/* Main bar — Black bg / White text */}
                <div className="bg-black border-b border-white/10 h-16 flex items-center justify-center px-4 md:px-8 relative z-20">
                    <div className="max-w-[1280px] w-full mx-auto flex items-center justify-between lg:grid lg:grid-cols-3 lg:items-center">

                        {/* Left — Logo */}
                        <button
                            onClick={() => navigateTo('/')}
                            className="bg-transparent border-none p-0 flex items-center gap-2.5 cursor-pointer w-fit"
                        >
                            <span className="text-lg font-extrabold text-white tracking-tight">
                                Decode Technologies
                            </span>
                        </button>

                        {/* Center — Nav links (desktop) */}
                        <nav className="hidden lg:flex items-center justify-center gap-x-6">
                            {TOP_NAV_LINKS.map(link => (
                                <button
                                    key={link.label}
                                    onClick={() => navigateTo(link.href)}
                                    className={`relative px-4 py-2 rounded-full text-sm whitespace-nowrap font-semibold transition-all duration-300 ease-out border-none cursor-pointer ${pathname === link.href
                                        ? 'bg-white/20 text-white font-bold'
                                        : 'text-white/70 hover:text-white hover:bg-white/10 bg-transparent'
                                        }`}
                                >
                                    {link.label}
                                </button>
                            ))}
                        </nav>

                        {/* Right — Language + CTA + Hamburger */}
                        <div className="flex items-center justify-end gap-3">

                            {/* Language dropdown */}
                            <Dropdown
                                menu={{ items: langMenuItems }}
                                trigger={['click']}
                                placement="bottomRight"
                            >
                                <button className="flex items-center gap-1.5 bg-transparent border-none cursor-pointer p-0">
                                    <span className="text-base">{selectedLang.flag}</span>
                                    <span className="text-sm font-medium text-white">{selectedLang.code}</span>
                                    <DownOutlined className="text-[10px] text-white/60" />
                                </button>
                            </Dropdown>

                            <button
                                onClick={() => navigateTo('#demo')}
                                className="bg-white text-black px-6 py-2 rounded-lg font-bold text-sm hover:bg-gray-200 transition-all ml-2 whitespace-nowrap hidden lg:inline-flex border-none cursor-pointer shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                            >
                                Book a Demo
                            </button>

                            {/* Hamburger button — mobile only */}
                            <button
                                onClick={() => setMobileOpen(!mobileOpen)}
                                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-transparent border-none cursor-pointer text-white hover:bg-white/10 transition-colors"
                                aria-label="Toggle menu"
                            >
                                {mobileOpen
                                    ? <CloseOutlined className="text-xl" />
                                    : <MenuOutlined className="text-xl" />
                                }
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom bar — White bg / Black text (desktop, hidden on scroll) */}
                <div
                    className={`hidden lg:flex bg-white items-center justify-center px-8 transition-all duration-300 ease-in-out overflow-hidden relative z-10 ${showBottomBar ? 'h-12 opacity-100' : 'h-0 opacity-0'
                        }`}
                >
                    <div className="max-w-[1280px] w-full mx-auto flex items-center justify-between px-2">
                        {BOTTOM_NAV_LINKS.map(link => (
                            <button
                                key={link.label}
                                onClick={() => navigateTo(link.href)}
                                className={`text-[0.8rem] font-bold whitespace-nowrap px-4 py-1.5 rounded-full transition-all duration-300 ease-out border border-transparent cursor-pointer ${pathname === link.href
                                    ? 'bg-black text-white shadow-md'
                                    : 'text-black/60 hover:text-black hover:bg-black/5 bg-transparent'
                                    }`}
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile menu overlay */}
            <div
                className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${mobileOpen ? 'visible' : 'invisible'}`}
            >
                {/* Backdrop */}
                <div
                    className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${mobileOpen ? 'opacity-100' : 'opacity-0'}`}
                    onClick={() => setMobileOpen(false)}
                />

                {/* Slide-down panel — dark theme */}
                <div
                    className={`absolute top-16 left-0 right-0 bg-[#111111] border-b border-white/10 shadow-2xl max-h-[calc(100vh-4rem)] overflow-y-auto transition-all duration-300 ease-out ${mobileOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
                        }`}
                >
                    <div className="px-6 py-6 flex flex-col gap-1">

                        {/* Menu section */}
                        <p className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-white/40 mb-2 px-3">Menu</p>
                        {TOP_NAV_LINKS.map(link => (
                            <button
                                key={link.label}
                                onClick={() => navigateTo(link.href)}
                                className={`w-full text-left px-4 py-3 text-[0.95rem] font-medium rounded-xl transition-all duration-200 border-none cursor-pointer ${pathname === link.href
                                    ? 'text-white bg-white/10 font-bold'
                                    : 'text-white/70 hover:bg-white/5 hover:text-white bg-transparent'
                                    }`}
                            >
                                {link.label}
                            </button>
                        ))}

                        {/* Divider */}
                        <div className="h-px bg-white/10 my-3" />

                        {/* Services section */}
                        <p className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-white/40 mb-2 px-3">Services</p>
                        {BOTTOM_NAV_LINKS.map(link => (
                            <button
                                key={link.label}
                                onClick={() => navigateTo(link.href)}
                                className={`w-full text-left px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-200 border-none cursor-pointer ${pathname === link.href
                                    ? 'text-white bg-white/10 font-bold'
                                    : 'text-white/50 hover:text-white/80 hover:bg-white/5 bg-transparent'
                                    }`}
                            >
                                {link.label}
                            </button>
                        ))}

                        {/* CTA */}
                        <button
                            onClick={() => navigateTo('#demo')}
                            className="mt-4 w-full bg-white text-black px-6 py-3 rounded-xl font-bold text-sm hover:bg-gray-200 transition-all border-none cursor-pointer shadow-[0_0_15px_rgba(255,255,255,0.15)]"
                        >
                            Book a Demo
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

