'use client';

import { SearchOutlined } from '@ant-design/icons';
import Image from 'next/image';
import blogHeader from '../../Blog/assets/blog-header.jpg'; // Reusing existing asset for consistency

export default function SupportHero() {
    return (
        <section className="relative w-full pb-20">
            {/* Background Top Half */}
            <div className="absolute top-0 left-0 w-full h-[100%] z-0 overflow-hidden">
                <Image
                    src={blogHeader}
                    alt="Office Background"
                    fill
                    className="object-cover mix-blend-overlay"
                    priority
                />
                <div className="absolute inset-0 bg-primary/90" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-20 text-center text-white">
                <h1 className="text-5xl font-bold mb-6">Support</h1>
                <p className="text-lg text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
                    Explore expert-driven articles from your trusted IT solutions provider and technology partner.
                    From ERP and HRIS guides to tax compliance updates and AI innovations.
                </p>

                {/* Search Bar */}
                <div className="relative max-w-2xl mx-auto bg-white">
                    <input
                        type="text"
                        placeholder="Search topics chuchu"
                        className="w-full pl-6 pr-14 py-4 rounded-lg text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-accent/30 shadow-xl text-lg transition-all"
                    />
                    <button className="absolute right-2 top-2 h-[calc(100%-16px)] w-12 bg-accent hover:bg-accent-light text-white rounded-md flex items-center justify-center transition-colors">
                        <SearchOutlined className="text-xl" />
                    </button>
                </div>
            </div>
        </section>
    );
}
