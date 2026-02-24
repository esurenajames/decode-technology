'use client';

import { ArrowRightOutlined } from '@ant-design/icons';
import Image from 'next/image';
import bgImg from '../assets/bg.png';

export default function AIChatbotHero() {
    return (
        <section className="relative w-full h-[100vh] flex flex-col items-center justify-center overflow-hidden bg-black">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={bgImg}
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 text-center flex flex-col items-center max-w-5xl px-6">

                {/* Badge/Label */}
                <div className="flex items-center gap-3 mb-12">
                    {/* <div className="w-4 h-4 bg-gray-400 opacity-80" /> Placeholder for the small icon in image */}
                    <span className="text-white text-lg font-bold tracking-tight">
                        AIAA <span className="font-normal opacity-80">AI Chatbot</span>
                    </span>
                </div>

                {/* Main Headline */}
                <h1 className="text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-16">
                    For Every Business. Every<br />
                    Community. Everyone.
                </h1>

                {/* GET STARTED Button */}
                <button className="flex items-center gap-4 border-2 border-white/80 rounded-full px-10 py-3.5 text-white hover:bg-white hover:text-black transition-all duration-300 group">
                    <span className="text-base font-bold tracking-widest uppercase">GET STARTED</span>
                    <div className="w-8 h-8 rounded-full bg-white text-black group-hover:bg-black group-hover:text-white flex items-center justify-center -mr-2">
                        <ArrowRightOutlined className="text-black text-sm " />
                    </div>
                </button>
            </div>
        </section>
    );
}
