'use client';

const CHANNELS = [
    {
        id: 'messenger',
        name: 'Facebook Messenger',
        tagline: 'Engage customers. Instantly.',
        description:
            'Engage customers instantly with our AI chatbot on Facebook Messenger. Provide real-time support, answer inquiries, and guide users through personalized conversations directly within their favorite messaging platform.',
        accent: '#0084FF',
        gradientFrom: '#0084FF22',
        gradientTo: '#00112200',
        icon: (
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                <path
                    d="M16 2C8.268 2 2 7.922 2 15.2c0 3.978 1.74 7.545 4.532 10.044V30l4.235-2.328A14.74 14.74 0 0016 28.4c7.732 0 14-5.922 14-13.2S23.732 2 16 2z"
                    fill="#0084FF"
                />
                <path
                    d="M7 19l4.5-4.75L14 16.5l4.5-4.75L24 19l-4.5-4.75L17 16.5l-2.5-2.25L7 19z"
                    fill="white"
                />
            </svg>
        ),
        mockBg: 'linear-gradient(160deg, #001f5e 0%, #0044bb 50%, #001233 100%)',
        mockLines: ['#0084FF', '#005fcc', '#003a99'],
    },
    {
        id: 'instagram',
        name: 'Instagram DMs',
        tagline: 'Automate. Engage. Grow.',
        description:
            'Connect with your audience on Instagram through AI-powered DMs. Automate responses to common questions, handle inquiries, and keep your followers engaged 24/7, driving more interaction and satisfaction.',
        accent: '#E1306C',
        gradientFrom: '#E1306C22',
        gradientTo: '#3d0d1c00',
        icon: (
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                <rect x="2" y="2" width="28" height="28" rx="8"
                    fill="url(#igGrad)" />
                <rect x="8" y="8" width="16" height="16" rx="5" stroke="white" strokeWidth="2" fill="none" />
                <circle cx="16" cy="16" r="4" stroke="white" strokeWidth="2" fill="none" />
                <circle cx="22.5" cy="9.5" r="1.5" fill="white" />
                <defs>
                    <linearGradient id="igGrad" x1="2" y1="30" x2="30" y2="2" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFDC80" />
                        <stop offset="0.4" stopColor="#E1306C" />
                        <stop offset="1" stopColor="#833AB4" />
                    </linearGradient>
                </defs>
            </svg>
        ),
        mockBg: 'linear-gradient(160deg, #1a0030 0%, #5a0080 50%, #1a0020 100%)',
        mockLines: ['#E1306C', '#a3236e', '#833AB4'],
    },
    {
        id: 'whatsapp',
        name: 'WhatsApp',
        tagline: 'Queries. Bookings. 24/7.',
        description:
            'Deliver seamless customer experiences on WhatsApp. Our AI chatbot handles customer queries, bookings, and personalized interactions while providing secure and efficient communication.',
        accent: '#25D366',
        gradientFrom: '#25D36622',
        gradientTo: '#00200900',
        icon: (
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                <circle cx="16" cy="16" r="14" fill="#25D366" />
                <path
                    d="M22.5 19.6c-.3-.15-1.8-.9-2.1-1-.3-.1-.5-.15-.7.15-.2.3-.8 1-.95 1.2-.18.2-.35.22-.65.07a8.2 8.2 0 01-2.4-1.48 9 9 0 01-1.67-2.07c-.17-.3-.02-.46.13-.6.14-.14.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52s-.7-1.7-.96-2.32c-.25-.6-.5-.52-.7-.53h-.6c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.1 4.49.7.3 1.25.48 1.68.62.7.22 1.34.19 1.84.12.56-.08 1.74-.71 1.98-1.4.25-.7.25-1.3.18-1.42-.07-.13-.27-.2-.57-.35z"
                    fill="white"
                />
            </svg>
        ),
        mockBg: 'linear-gradient(160deg, #001a08 0%, #005e23 50%, #001208 100%)',
        mockLines: ['#25D366', '#1aad55', '#0f7a3a'],
    },
];

// Simple chat bubble mock UI for each card
function ChatMock({ lines, bg }: { lines: string[]; bg: string }) {
    return (
        <div
            className="w-full h-full rounded-t-2xl flex flex-col justify-end p-6 gap-3"
            style={{ background: bg }}
        >
            {/* Simulated chat bubbles */}
            <div className="flex justify-end">
                <div
                    className="rounded-2xl rounded-tr-sm px-4 py-2 text-xs text-white/80 max-w-[70%]"
                    style={{ background: lines[0] + '99' }}
                >
                    Hi! I need help with my order.
                </div>
            </div>
            <div className="flex justify-start">
                <div className="rounded-2xl rounded-tl-sm px-4 py-2 text-xs text-white/80 max-w-[75%] bg-white/10">
                    Sure! I can help you track your order. Could you share your order ID?
                </div>
            </div>
            <div className="flex justify-end">
                <div
                    className="rounded-2xl rounded-tr-sm px-4 py-2 text-xs text-white/80 max-w-[60%]"
                    style={{ background: lines[0] + '99' }}
                >
                    ORD-284710
                </div>
            </div>
            <div className="flex justify-start">
                <div className="rounded-2xl rounded-tl-sm px-4 py-2 text-xs text-white/80 max-w-[80%] bg-white/10">
                    Found it! Your order is out for delivery. ETA: Today by 5 PM. 🎉
                </div>
            </div>
        </div>
    );
}

export default function AIChatbotChannels() {
    return (
        <section className="text-white py-24 px-6 md:px-12">
            <div className="max-w-5xl mx-auto">

                {/* Heading */}
                <div className="mb-16 max-w-2xl">
                    <span className="text-gray-500 text-xs font-mono tracking-widest block mb-4">
                        [ CHANNELS ]
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                        Reach Customers Wherever They Are.
                    </h2>
                    <p className="text-gray-400 text-base leading-relaxed">
                        Connect through the channels your customers already use — no switching, no friction.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {CHANNELS.map((channel) => (
                        <div
                            key={channel.id}
                            className="rounded-2xl overflow-hidden flex flex-col"
                            style={{
                                background: 'rgba(255,255,255,0.04)',
                                border: '1px solid rgba(255,255,255,0.08)',
                            }}
                        >
                            {/* Visual area */}
                            <div className="h-64 flex-shrink-0">
                                <ChatMock lines={channel.mockLines} bg={channel.mockBg} />
                            </div>

                            {/* Info area */}
                            <div className="p-6 flex flex-col gap-3 flex-1">
                                <div className="flex items-center gap-3">
                                    <div className="flex-shrink-0">
                                        {channel.icon}
                                    </div>
                                    <h3 className="text-base font-bold text-white">
                                        {channel.name}
                                    </h3>
                                </div>

                                <p
                                    className="text-sm font-semibold"
                                    style={{ color: channel.accent }}
                                >
                                    {channel.tagline}
                                </p>

                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {channel.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
