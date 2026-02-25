'use client';

import { ArrowRightOutlined } from '@ant-design/icons';
// Using the EES specific gif
import gifBg from '../assets/eesgif.gif';

export default function EESCTA() {
    return (
        <section className="relative py-32 px-6 overflow-hidden text-white text-center w-full">

            {/* GIF background */}
            <div className="absolute inset-0 z-0">
                <img
                    src={gifBg.src}
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover"
                    style={{ filter: 'blur(3px) grayscale(0.5)', transform: 'scale(1.1)' }}
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
            <div className="relative z-20 max-w-3xl mx-auto flex flex-col items-center gap-4">

                <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight mb-2">
                    Ready to Transform Your Workforce?
                </h2>

                <p className="md:text-lg text-white/80 mb-8 max-w-2xl leading-relaxed">
                    Experience the future of HR and Payroll management. Join hundreds of companies that have already
                    digitalized their operations with EES Workforce.
                </p>

                <div className="flex flex-wrap gap-4 justify-center">
                    <button className="glow-btn px-8 py-4 text-lg font-bold flex items-center gap-3 hover:scale-105 transition-transform duration-300 bg-accent rounded-lg shadow-xl shadow-accent/30">
                        <span className="relative z-10">Book a Demo</span>
                        <ArrowRightOutlined className="text-sm relative z-10" />
                    </button>
                </div>

            </div>
        </section>
    );
}
