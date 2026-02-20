'use client';

import { ArrowRightOutlined } from '@ant-design/icons';

export default function AIChatbotCTA2() {
    return (
        <section
            className="relative overflow-hidden py-28 px-6 md:px-12 text-white"
            style={{
                background: 'linear-gradient(135deg, #0f172a 0%, #0a2540 50%, #0f172a 100%)',
            }}
        >
            {/* Background accent blobs */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse, rgba(37,211,102,0.12) 0%, transparent 70%)',
                    filter: 'blur(40px)',
                }}
            />
            <div
                className="absolute bottom-0 left-1/4 w-[400px] h-[200px] rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse, rgba(0,132,255,0.10) 0%, transparent 70%)',
                    filter: 'blur(40px)',
                }}
            />

            <div className="max-w-5xl mx-auto relative z-10 text-center flex flex-col items-center gap-8">

                {/* Pill */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 text-xs font-mono text-white/50 tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse" />
                    READY TO DEPLOY
                </div>

                {/* Headline */}
                <h2 className="text-4xl md:text-6xl font-black leading-tight max-w-3xl">
                    Start Automating Your Customer Service Today.
                </h2>

                <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                    Join 200+ businesses already using Decode AI to cut support costs, increase satisfaction, and scale effortlessly.
                </p>

                {/* Buttons */}
                <div className="flex items-center gap-4 flex-wrap justify-center">
                    <button
                        className="flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
                        style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
                    >
                        Book a Demo
                        <ArrowRightOutlined className="text-xs" />
                    </button>
                </div>

                <p className="text-gray-500 text-xs">
                    Setup in under 10 minutes · Cancel anytime
                </p>

            </div>
        </section>
    );
}
