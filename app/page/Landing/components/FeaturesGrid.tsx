import { ArrowRightOutlined, SearchOutlined, PlayCircleFilled } from '@ant-design/icons';

export default function FeaturesGrid() {
    return (
        <div className="w-full bg-white text-primary py-20 rounded-3xl mb-20 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-primary leading-tight">
                            Find the information you need faster
                        </h2>
                        <p className="text-lg text-gray-500 leading-relaxed">
                            The choice for high-performance teams and finance professionals looking to make better decisions faster.
                        </p>
                    </div>
                    <button className="shrink-0 px-6 py-3 rounded-full border border-gray-200 text-primary hover:bg-primary hover:text-white transition-all duration-300 font-medium flex items-center gap-2 group shadow-sm">
                        Learn more
                        <ArrowRightOutlined className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-6 gap-6 mb-20">

                    {/* Card 1: Cut research time (Large) */}
                    <div className="col-span-4 bg-[#F9FAFB] border border-gray-100 rounded-3xl p-8 relative overflow-hidden group min-h-[320px] flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-full max-w-md mx-auto mt-8 relative z-10">
                            <div className="bg-white border border-gray-100 rounded-xl p-3 flex items-center shadow-lg transform group-hover:-translate-y-2 transition-transform duration-500">
                                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                                    <span className="text-primary font-bold">+</span>
                                </div>
                                <div className="text-gray-500 text-sm">Ask anything...</div>
                                <div className="ml-auto w-6 h-6 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                                    <ArrowRightOutlined className="text-xs text-white" />
                                </div>
                            </div>
                            {/* Glow effect */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-10 bg-blue-500/20 blur-[50px] -z-10" />
                        </div>
                        <div className="mt-8 relative z-10">
                            <div className="mt-8 relative z-10">
                                <h3 className="text-xl font-bold mb-2 text-primary">Cut research time</h3>
                                <p className="text-gray-500 text-sm">Extract any data across all events and documents from public companies in seconds with purpose-built AI.</p>
                            </div>
                            {/* Background Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F9FAFB]/50 to-white/50 z-0" />
                        </div>

                        {/* Card 2: Be first */}
                        <div className="col-span-1 md:col-span-2 bg-[#F9FAFB] border border-gray-100 rounded-3xl p-8 relative overflow-hidden group min-h-[320px] flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-full mt-4 relative z-10">
                                <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-lg">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="px-2 py-0.5 rounded-full bg-gray-100 text-[10px] text-gray-500 font-medium">14:12 • Q&A: Supply & Demand</div>
                                    </div>
                                    <div className="h-1 bg-gray-100 rounded-full overflow-hidden w-full mb-1">
                                        <div className="h-full bg-primary w-1/3 relative">
                                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(47,127,245,0.5)]" />
                                        </div>
                                    </div>
                                    <div className="flex justify-between text-[10px] text-gray-400 font-medium">
                                        <span>7:24</span>
                                        <span>Financial performance overview &gt;</span>
                                    </div>
                                </div>
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold mb-2 text-primary">Be first</h3>
                                <p className="text-gray-500 text-sm">Global live coverage of earnings calls, CMDs, and conferences.</p>
                            </div>
                        </div>

                        {/* Card 3: Trust every finding */}
                        <div className="col-span-1 md:col-span-2 bg-[#F9FAFB] border border-gray-100 rounded-3xl p-8 relative overflow-hidden group min-h-[320px] flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-full mt-4 relative z-10 opacity-80 group-hover:opacity-100 transition-opacity">
                                <div className="bg-white border border-gray-100 rounded-lg p-3 text-xs text-gray-500 shadow-lg max-w-[90%] md:mx-auto">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-4 h-4 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center text-[8px] font-bold">JH</div>
                                        <span className="font-bold text-gray-900">Jensen Huang</span>
                                        <span className="text-[8px] text-gray-400">CEO</span>
                                    </div>
                                    <p className="mb-2 leading-relaxed">"Thanks, Stewart. Q4 was another record quarter. Revenue of $39.3 billion was up 12% sequentially and up 78% year-on-year."</p>
                                    <div className="flex items-center gap-2">
                                        <span className="bg-green-500/10 text-green-600 px-1.5 py-0.5 rounded text-[8px] font-medium">NVIDIA</span>
                                        <span className="bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded text-[8px] font-medium">Q1 2025</span>
                                    </div>
                                </div>
                            </div>
                            <div className="relative z-10 mt-6">
                                <h3 className="text-xl font-bold mb-2 text-primary">Trust every finding</h3>
                                <p className="text-gray-500 text-sm">40M+ first-party documents, fully searchable and AI-integrated.</p>
                            </div>
                        </div>

                        {/* Card 4: Avoid blind spots */}
                        <div className="col-span-1 md:col-span-2 bg-[#F9FAFB] border border-gray-100 rounded-3xl p-8 relative overflow-hidden group min-h-[320px] flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-full mt-8 relative z-10">
                                <div className="relative">
                                    <div className="bg-white border border-gray-100 rounded-lg p-3 flex items-center text-gray-500 text-sm shadow-md">
                                        <SearchOutlined className="mr-3 text-gray-400" />
                                        <span className="text-gray-900 font-medium">financial outlook</span>
                                        <div className="ml-auto w-4 h-[1px] bg-primary rotate-90" />
                                    </div>
                                </div>
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold mb-2 text-primary">Avoid blind spots</h3>
                                <p className="text-gray-500 text-sm">Search for any keyword across all IR documents simultaneously.</p>
                            </div>
                        </div>

                        {/* Card 5: Spot inflection points */}
                        <div className="col-span-1 md:col-span-2 bg-[#F9FAFB] border border-gray-100 rounded-3xl p-8 relative overflow-hidden group min-h-[320px] flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-full mt-4 relative z-10 flex gap-2">
                                <div className="w-1/2 bg-white border border-gray-100 rounded-lg p-2 h-20 relative overflow-hidden shadow-sm">
                                    <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-blue-50/50 to-transparent" />
                                    <svg className="absolute bottom-2 left-2 right-2 h-8 w-full" viewBox="0 0 100 40">
                                        <path d="M0,40 Q25,30 50,20 T100,5" fill="none" stroke="#2F7FF5" strokeWidth="2" />
                                        <circle cx="20" cy="32" r="2" fill="#2F7FF5" />
                                        <circle cx="50" cy="20" r="2" fill="#2F7FF5" />
                                        <circle cx="80" cy="12" r="2" fill="#2F7FF5" />
                                    </svg>
                                    <div className="absolute bottom-1 left-2 text-[8px] text-gray-400 font-medium">Q4 2025</div>
                                </div>
                                <div className="w-1/2 bg-white border border-gray-100 rounded-lg p-2 h-20 opacity-50 shadow-sm">
                                    <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-gray-50/50 to-transparent" />
                                    <svg className="absolute bottom-2 left-2 right-2 h-8 w-full" viewBox="0 0 100 40">
                                        <path d="M0,35 Q25,35 50,30 T100,25" fill="none" stroke="#9CA3AF" strokeWidth="2" />
                                    </svg>
                                    <div className="absolute bottom-1 left-2 text-[8px] text-gray-400 font-medium">Q3 2025</div>
                                </div>
                            </div>
                            <div className="relative z-10 mt-6">
                                <h3 className="text-xl font-bold mb-2 text-primary">Spot inflection points</h3>
                                <p className="text-gray-500 text-sm">Identify changes in messaging, KPIs, and strategic focus over time.</p>
                            </div>
                        </div>

                    </div>

                    {/* Footer Testimonial */}
                    <div className="text-center max-w-3xl mx-auto">
                        <h3 className="text-2xl md:text-3xl font-serif italic mb-8 leading-relaxed text-primary">
                            “Quartr has made me think that what I did before was a bit basic and inefficient. My productivity has been boosted hugely by it.”
                        </h3>
                        <div className="flex flex-col items-center gap-2">
                            <div className="text-xl font-serif text-gray-900 tracking-widest uppercase mb-2">GAM</div>
                            <div className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-4">Investments</div>
                            <div className="text-sm font-medium text-primary">Jamie Ross</div>
                            <div className="text-sm text-gray-500">Investment Manager, GAM Investments</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
