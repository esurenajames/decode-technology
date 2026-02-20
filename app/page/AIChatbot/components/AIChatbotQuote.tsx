'use client';

import gifBg from '../assets/gif.gif';

export default function AIChatbotQuote() {
    return (
        <section className="relative py-32 px-6 overflow-hidden text-white text-center">

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
            <div className="relative z-20 max-w-3xl mx-auto flex flex-col items-center gap-6">

                <blockquote className="text-2xl md:text-3xl font-black leading-snug tracking-tight">
                    &ldquo;Decode AI stands out because it only pulls clean, first-party data from public companies. In investing, that&apos;s everything.&rdquo;
                </blockquote>

                {/* Attribution */}
                <div className="flex flex-col items-center gap-1">
                    <p className="text-white/70 text-sm font-semibold tracking-wide">
                        — Business Owner, Financial Services
                    </p>
                </div>

            </div>
        </section>
    );
}
