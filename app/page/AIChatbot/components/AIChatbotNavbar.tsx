'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { DownOutlined, GlobalOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';
import type { MenuProps } from 'antd';

const APP_MENU_ITEMS: MenuProps['items'] = [
    { key: '1', label: 'AI Chatbot' },
    { key: '2', label: 'ERP System' },
    { key: '3', label: 'HRIS System' },
];

export default function AIChatbotNavbar() {
    const router = useRouter();

    return (
        <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-8 bg-transparent">
            {/* Left: Logo */}
            <button
                onClick={() => router.push('/')}
                className="text-2xl font-bold text-white tracking-tight no-underline bg-transparent border-none cursor-pointer p-0"
            >
                Decode Technologies
            </button>

            {/* Center: Links */}
            <div className="hidden lg:flex items-center gap-12">
                <Dropdown menu={{ items: APP_MENU_ITEMS }} trigger={['hover']}>
                    <button className="text-white text-sm font-medium flex items-center gap-2 bg-transparent border-none cursor-pointer">
                        Apps <DownOutlined className="text-[10px]" />
                    </button>
                </Dropdown>
                <button
                    onClick={() => router.push('#how-it-works')}
                    className="text-white text-sm font-medium no-underline hover:text-white/80 transition-colors bg-transparent border-none cursor-pointer p-0"
                >
                    How it works
                </button>
                <button
                    onClick={() => router.push('#faq')}
                    className="text-white text-sm font-medium no-underline hover:text-white/80 transition-colors bg-transparent border-none cursor-pointer p-0"
                >
                    FAQ
                </button>
            </div>

            {/* Right: Lang & CTA */}
            <div className="flex items-center gap-8">
                <div className="flex items-center gap-2 text-white text-sm font-medium cursor-pointer">
                    <span className="text-base">🇺🇸</span>
                    <span>EN</span>
                    <DownOutlined className="text-[10px]" />
                </div>
                <button
                    onClick={() => router.push('#demo')}
                    className="bg-white text-black px-6 py-2 rounded-md font-bold text-sm hover:bg-gray-200 transition-colors border-none cursor-pointer"
                >
                    Book a demo
                </button>
            </div>
        </nav>
    );
}
