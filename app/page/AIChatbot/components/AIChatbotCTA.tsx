'use client';

import { ArrowRightOutlined, StarFilled } from '@ant-design/icons';

// Inline chat mockup visual
function ChatVisual() {
    return (
        <div
            className="w-full h-full rounded-2xl overflow-hidden flex flex-col"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
            {/* Top bar */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-white/8">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <svg viewBox="0 0 32 32" fill="none" className="w-4 h-4">
                        <circle cx="16" cy="16" r="14" fill="#25D366" />
                        <path d="M22.5 19.6c-.3-.15-1.8-.9-2.1-1-.3-.1-.5-.15-.7.15-.2.3-.8 1-.95 1.2-.18.2-.35.22-.65.07a8.2 8.2 0 01-2.4-1.48 9 9 0 01-1.67-2.07c-.17-.3-.02-.46.13-.6.14-.14.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52s-.7-1.7-.96-2.32c-.25-.6-.5-.52-.7-.53h-.6c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.1 4.49.7.3 1.25.48 1.68.62.7.22 1.34.19 1.84.12.56-.08 1.74-.71 1.98-1.4.25-.7.25-1.3.18-1.42-.07-.13-.27-.2-.57-.35z" fill="white" />
                    </svg>
                </div>
                <div>
                    <p className="text-white text-xs font-semibold">Decode AI</p>
                    <p className="text-green-400 text-[10px]">● Online</p>
                </div>
            </div>

            {/* Chat body */}
            <div className="flex-1 flex flex-col justify-end gap-3 p-5">
                <div className="flex justify-start">
                    <div className="bg-white/10 rounded-2xl rounded-tl-sm px-4 py-2.5 text-xs text-white/80 max-w-[80%]">
                        Hi! I'd like to learn more about your AI Chatbot solutions. 👋
                    </div>
                </div>
                <div className="flex justify-end">
                    <div className="rounded-2xl rounded-tr-sm px-4 py-2.5 text-xs text-white/90 max-w-[80%]" style={{ background: 'rgba(37,211,102,0.25)' }}>
                        Hi there! I'd love to help. Would you like to book a live demo with our team?
                    </div>
                </div>
                <div className="flex justify-start">
                    <div className="bg-white/10 rounded-2xl rounded-tl-sm px-4 py-2.5 text-xs text-white/80">
                        Yes, that sounds great!
                    </div>
                </div>
                <div className="flex justify-end">
                    <div className="rounded-2xl rounded-tr-sm px-4 py-2.5 text-xs text-white/90 max-w-[80%]" style={{ background: 'rgba(37,211,102,0.25)' }}>
                        Perfect. I've sent a booking link to your email. See you soon! ✅
                    </div>
                </div>

                {/* Input bar */}
                <div className="flex items-center gap-2 mt-2 bg-white/5 rounded-xl px-4 py-3 border border-white/10">
                    <p className="text-white/30 text-xs flex-1">Type a message…</p>
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: '#25D366' }}>
                        <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3">
                            <path d="M22 2L11 13" stroke="white" strokeWidth="2" strokeLinecap="round" />
                            <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function AIChatbotCTA() {
    return (
        <section
            className="text-white py-32 px-6 md:px-12"
            style={{ background: '#111212' }}
        >
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">

                {/* ── Left: chat visual ── */}
                <div className="w-full md:w-[520px] flex-shrink-0 h-[420px]">
                    <ChatVisual />
                </div>

                {/* ── Right: copy + CTA ── */}
                <div className="flex-1 flex flex-col gap-6">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 w-fit text-xs font-mono text-white/60 tracking-widest">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                        AI CHATBOT
                    </div>

                    {/* Headline */}
                    <h2 className="text-4xl md:text-5xl font-black leading-tight">
                        See It In Action.<br />
                        <span className="text-gray-400">Book a Live Demo.</span>
                    </h2>

                    {/* Sub-copy */}
                    <p className="text-gray-400 text-base leading-relaxed max-w-lg">
                        Watch our AI Chatbot handle real conversations — live. Get a personalised walkthrough tailored to your business and see exactly how it integrates with your existing channels.
                    </p>

                    {/* CTA row */}
                    <div className="flex items-center gap-2 flex-wrap mt-2">
                        <button
                            className="flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
                            style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
                        >
                            Book a Demo
                            <ArrowRightOutlined className="text-xs" />
                        </button>

                        <button className="flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-white/70 border border-white/15 hover:border-white/40 hover:text-white transition-all duration-200">
                            View Pricing
                        </button>
                    </div>

                    {/* Social proof */}
                    <div className="flex items-center gap-3 pt-2">
                        <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <StarFilled
                                    key={i}
                                    className="text-xs"
                                    style={{ color: i < 4 ? '#F5A623' : '#4b5563' }}
                                />
                            ))}
                        </div>
                        <span className="text-white/40 text-sm">
                            <span className="text-white font-semibold">4.8/5</span> — trusted by 200+ businesses
                        </span>
                    </div>

                </div>
            </div>
        </section>
    );
}
