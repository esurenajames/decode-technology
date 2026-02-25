'use client';

import { ArrowRightOutlined } from '@ant-design/icons';
import gifBg from '../assets/empacgif.gif';

export default function EMPACCTA() {
    return (
        <section className="relative py-32 px-6 overflow-hidden text-white text-center w-full">

            {/* Background GIF */}
            <div className="absolute inset-0 z-0">
                <img
                    src={gifBg.src}
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover"
                    style={{ filter: 'blur(2px) grayscale(0.1)', transform: 'scale(1.1)' }}
                />
            </div>

            <div
                aria-hidden="true"
                className="absolute inset-0 z-10"
                style={{ background: 'rgba(5,5,8,0.78)' }}
            />

            {/* Radial vignette — strong blur on left & right edges */}
            <div
                aria-hidden="true"
                className="absolute inset-0 z-10 pointer-events-none"
                style={{
                    background:
                        'radial-gradient(ellipse 55% 100% at 50% 50%, transparent 20%, rgba(0,0,0,0.92) 100%)',
                }}
            />

            {/* Content */}
            <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center gap-4">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4">
                    Discover the Future of School Management
                </h2>

                <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl leading-relaxed font-medium text-center">
                    The all-in-one platform to manage your school with ease. Simplify your daily tasks
                    and focus on delivering a better learning experience for everyone.
                </p>

                <div className="flex flex-wrap gap-4 justify-center">
                    <button className="glow-btn px-10 py-5 text-xl font-bold flex items-center gap-3 hover:scale-105 transition-transform duration-300 bg-[#2F7FF5] rounded-xl shadow-xl shadow-[#2F7FF5]/30">
                        <span className="relative z-10">Book a Demo</span>
                        <ArrowRightOutlined className="text-sm relative z-10" />
                    </button>
                </div>
            </div>
        </section>
    );
}
