'use client';

import { CalendarOutlined, ArrowRightOutlined } from '@ant-design/icons';
import gifBg from '../../ERP/assets/erpgif.gif';

export default function CTA() {
    return (
        <section className="relative py-32 px-6 overflow-hidden text-white text-center w-full">

            {/* GIF background */}
            <div className="absolute inset-0 z-0">
                <img
                    src={gifBg.src}
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover"
                    style={{ filter: 'blur(2px)', transform: 'scale(1.16)' }}
                />
            </div>

            {/* Dark overlay */}
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
            <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center gap-6">

                <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                    Ready to transform your business<br />
                    with smarter IT solutions?
                </h2>

                <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed font-medium">
                    Join the innovative companies using Decode to turn complex operations into seamless growth.
                    Get started with a personalized demo today.
                </p>

                <div className="flex justify-center pt-4">
                    <button className="glow-btn px-8 py-4 text-lg font-bold flex items-center gap-3 hover:scale-105 transition-transform duration-300">
                        <CalendarOutlined className="text-xl" />
                        Book a Demo
                    </button>
                </div>

            </div>
        </section>
    );
}
