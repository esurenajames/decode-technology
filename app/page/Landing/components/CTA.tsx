'use client';

import Image from 'next/image';
import { ArrowRightOutlined } from '@ant-design/icons';
import CtaBackground from '../assets/CTA.png';

export default function CTA() {
    return (
        <section className="w-full">
            <div className="max-w-5xl mx-auto px-6">
                <div className="relative bg-primary rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl overflow-hidden group">

                    <div className="absolute inset-0 z-0">
                        <Image
                            src={CtaBackground}
                            alt="Office Background"
                            fill
                            className="object-cover mix-blend-overlay"
                            placeholder="blur"
                        />
                        <div className="absolute inset-0 bg-primary/90" />
                    </div>

                    {/* Gradient Accents */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/20 blur-[120px] rounded-full pointer-events-none z-0" />
                    <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-accent-light/10 blur-[80px] rounded-full pointer-events-none z-0" />

                    <div className="relative z-10 flex flex-col items-center">
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
                            Ready to Transform Your Business?
                        </h2>

                        <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed">
                            Join the innovative companies using our platform to turn data into growth.
                            Get started with a personalized demo today.
                        </p>

                        <button className="glow-btn px-8 py-4 text-lg font-bold flex items-center gap-3 group-hover:scale-105 transition-transform duration-300">
                            Book a Demo
                            <ArrowRightOutlined className="text-sm" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
