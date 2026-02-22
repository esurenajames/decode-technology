'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
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
    { label: 'ERP System', href: '/erp' },
    { label: 'HRIS and Payroll System', href: '/hris' },
    { label: 'School Management System', href: '#school' },
    { label: 'Training Management System', href: '/elevate' },
    { label: 'Custom Software Development', href: '#custom' },
    { label: 'IT Outsourcing', href: '#it-outsourcing' },
];

const LANGUAGES = [
    { flag: '🇺🇸', code: 'EN', label: 'English' },
    { flag: '🇲🇾', code: 'MY', label: 'Malay' },
];

export default function AIChatbotNavbar() {
    const router = useRouter();
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
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

    return (
        <>
            <div
                id="chatbot-navbar-wrapper"
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-2xl' : 'shadow-none'}`}
            >
                {/* Main bar — Black bg / White text */}
                <div className="bg-black border-b border-white/10 h-16 flex items-center justify-center px-8 relative z-20">
                    <div className="max-w-[1280px] w-full mx-auto grid grid-cols-3 items-center">

                        {/* Left — Logo */}
                        <button
                            onClick={() => router.push('/')}
                            className="bg-transparent border-none p-0 flex items-center gap-2.5 cursor-pointer w-fit"
                        >
                            <span className="text-lg font-extrabold text-white tracking-tight">
                                Decode Technologies
                            </span>
                        </button>

                        {/* Center — Nav links */}
                        <nav className="hidden lg:flex items-center justify-center gap-x-6">
                            {TOP_NAV_LINKS.map(link => (
                                <button
                                    key={link.label}
                                    onClick={() => {
                                        router.push(link.href);
                                    }}
                                    className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ease-out border-none cursor-pointer ${pathname === link.href
                                        ? 'bg-white/20 text-white font-bold'
                                        : 'text-white/70 hover:text-white hover:bg-white/10 bg-transparent'
                                        }`}
                                >
                                    {link.label}
                                </button>
                            ))}
                        </nav>

                        {/* Right — Language + CTA */}
                        <div className="flex items-center justify-end gap-4">

                            {/* Language dropdown — antd */}
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
                                onClick={() => router.push('#demo')}
                                className="bg-white text-black px-6 py-2 rounded-lg font-bold text-sm hover:bg-gray-200 transition-all ml-4 whitespace-nowrap hidden lg:inline-flex border-none cursor-pointer shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                            >
                                Book a Demo
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom bar — White bg / Black text (Hidden on scroll) */}
                <div
                    className={`hidden lg:flex bg-white items-center justify-center px-8 transition-all duration-300 ease-in-out overflow-hidden relative z-10 ${showBottomBar ? 'h-12 opacity-100' : 'h-0 opacity-0'
                        }`}
                >
                    <div className="max-w-[1280px] w-full mx-auto flex items-center justify-between px-2">
                        {BOTTOM_NAV_LINKS.map(link => (
                            <button
                                key={link.label}
                                onClick={() => {
                                    router.push(link.href);
                                }}
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
        </>
    );
}
