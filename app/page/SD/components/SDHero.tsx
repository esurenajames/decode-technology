'use client';

import { StarFilled } from '@ant-design/icons';
import Image from 'next/image';

// Import local assets for floating cards
import img1 from '../../Landing/assets/hero/ees.png';
import img2 from '../../Landing/assets/hero/erp-dashboard.png';
import img3 from '../../Landing/assets/hero/sales-dashboard.png';
import img4 from '../../Landing/assets/hero/elevate-dashboard.png';
import img5 from '../../Landing/assets/hero/ees.png';

// Import Partner Logos
import logo1 from '../../../assets/PVA-removebg-preview.png';
import logo2 from '../../../assets/4P-removebg-preview.png';
import logo3 from '../../../assets/ACM-removebg-preview.png';
import logo4 from '../../../assets/AMS-removebg-preview.png';
import logo5 from '../../../assets/BCG-removebg-preview.png';

export default function SDHero() {
    return (
        <section className="relative w-full min-h-[90vh] bg-[#F5F7FA] flex flex-col justify-between pt-32 overflow-hidden">

            <div className="flex-1 max-w-[1400px] mx-auto w-full px-6 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-8 pb-10">

                {/* Left Content Area */}
                <div className="flex flex-col justify-center max-w-[600px] z-10 py-10 lg:py-20 lg:pr-8">

                    {/* Top Pill badge */}
                    <div className="inline-flex items-center gap-3 bg-white rounded-full p-1.5 pr-5 border border-gray-200/80 w-fit mb-8 shadow-sm">
                        <span className="bg-primary text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                            Custom Power Development
                        </span>
                        <span className="text-gray-500 text-xs font-semibold">
                            For your growing business
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-3xl md:text-4xl font-bold text-primary leading-[1.05] tracking-tight mb-4">
                        Building Digital Solutions That Move Your Business Forward.
                    </h1>

                    {/* Subheadline */}
                    <p className="text-gray-500 text-sm md:text-base font-medium mb-8 leading-relaxed max-w-[550px]">
                        We build user-focused software that turns ideas into powerful digital solutions—boosting efficiency, strengthening your brand, and keeping you ahead.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 mb-14">
                        <button className="w-full sm:w-auto px-8 py-4 bg-[#2F7FF5] text-white font-semibold rounded-lg hover:bg-primary/90 transition-all shadow-md">
                            Get started for free
                        </button>
                        <button className="w-full sm:w-auto px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-50 transition-all border border-gray-200 shadow-sm">
                            Book a demo
                        </button>
                    </div>

                    {/* Social Proof Row */}
                    <div className="flex flex-col sm:flex-row ">

                        {/* Reviews */}
                        <div className="flex items-center gap-4 sm:border-l border-gray-200/80">
                            {/* Avatars */}
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <div key={i} className="w-9 h-9 border-2 border-[#F5F7FA] bg-gray-200 shrink-0 overflow-hidden rounded-full shadow-sm relative" style={{ zIndex: 10 - i }}>
                                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="avatar" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center gap-1 text-[#FDB022] text-sm mb-0.5">
                                    <StarFilled />
                                    <StarFilled />
                                    <StarFilled />
                                    <StarFilled />
                                    <StarFilled />
                                    <span className="text-primary font-bold ml-1">4.8</span>
                                </div>
                                <span className="text-gray-500 text-[11px] font-medium uppercase tracking-wide">Rated by our clients</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Right Area - Floating Cards Grid */}
                <div className="relative w-full h-full hidden lg:block overflow-visible pt-10">
                    <div className="absolute top-0 -right-[20%] w-[120%] grid grid-cols-2 gap-6 opacity-90 scale-100">

                        {/* Column 1 */}
                        <div className="flex flex-col gap-6 -translate-y-8">
                            <div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
                                <Image src={img2} alt="UI" className="w-full h-auto" />
                            </div>
                            <div className="bg-[#FFD15B] rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden p-6">
                                <Image src={img1} alt="UI" className="w-full h-auto rounded-lg shadow-sm bg-white" />
                            </div>
                            <div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
                                <Image src={img3} alt="UI" className="w-full h-auto" />
                            </div>
                        </div>

                        {/* Column 2 */}
                        <div className="flex flex-col gap-6">
                            <div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden pt-4 px-4 pb-0">
                                <Image src={img5} alt="UI" className="w-full h-auto rounded-t-lg bg-gray-50" />
                            </div>
                            <div className="bg-[#1C2033] rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden p-6 pb-0">
                                <div className="w-full aspect-video bg-gray-800 rounded-t-lg overflow-hidden flex items-end justify-center px-4 pt-4 relative">
                                    <Image src={img4} alt="UI" className="w-full h-auto rounded-t-lg opacity-90 object-cover object-top" />
                                </div>
                            </div>
                            <div className="bg-[#F0F4FF] rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden p-6">
                                <Image src={img2} alt="UI" className="w-full h-auto rounded-lg shadow-sm bg-white" />
                            </div>
                        </div>

                    </div>
                    {/* Gradient overlays to soften the edges of cards */}
                    <div className="absolute inset-y-0 -left-6 w-32 bg-gradient-to-r from-[#F5F7FA] via-[#F5F7FA] to-transparent pointer-events-none z-10" />
                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#F5F7FA] to-transparent pointer-events-none z-10" />
                </div>
            </div>

            {/* Bottom Dark Strip - Adopted by Startups */}
            <div className="bg-primary w-full py-6 shrink-0 relative z-20 flex justify-center">
                <div className="mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-14 w-full">
                    <span className="text-gray-400 font-medium text-[13px] whitespace-nowrap text-center">
                        Used by our partnered companies:
                    </span>
                    <div className="flex items-center gap-8 md:gap-14 opacity-90 flex-wrap justify-center w-full max-w-4xl">
                        <Image src={logo1} alt="Partner Logo" className="h-8 max-h-[32px] w-auto object-contain grayscale brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" />
                        <Image src={logo2} alt="Partner Logo" className="h-8 max-h-[32px] w-auto object-contain grayscale brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" />
                        <Image src={logo3} alt="Partner Logo" className="h-8 max-h-[32px] w-auto object-contain grayscale brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" />
                        <Image src={logo4} alt="Partner Logo" className="h-8 max-h-[32px] w-auto object-contain grayscale brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" />
                        <Image src={logo5} alt="Partner Logo" className="h-8 max-h-[32px] w-auto object-contain grayscale brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" />
                    </div>
                </div>
            </div>

        </section>
    );
}
