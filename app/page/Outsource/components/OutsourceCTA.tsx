'use client';

import { ArrowRightOutlined } from '@ant-design/icons';
import gifBg from '../assets/outsource-gif.gif';

export default function OutsourceCTA() {
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
            <div className="relative z-20 max-w-3xl mx-auto flex flex-col items-center gap-4">

                <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-2">
                    Ready to Scale Your Team?
                </h2>

                <p className="md:text-lg text-white/80 mb-8 max-w-2xl leading-relaxed">
                    Join the innovative companies using our outsourcing services to augment their workforce, drive efficiency, and reach their goals faster. Get started with a personalized demo today.
                </p>

                <button className="glow-btn px-8 py-4 text-lg font-bold flex items-center gap-3 hover:scale-105 transition-transform duration-300">
                    Schedule a Consultation
                    <ArrowRightOutlined className="text-sm" />
                </button>

            </div>
        </section>
    );
}
