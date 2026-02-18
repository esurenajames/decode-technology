import Image from 'next/image';
import imgLeft from '../assets/image 25.png';
import imgRight from '../assets/image 26.png';

const TRUSTED_LOGOS = [
    { name: 'Edgard & Cooper', src: 'https://logo.clearbit.com/edgardcooper.com' },
    { name: 'AMS', src: 'https://logo.clearbit.com/ams-osram.com' },
    { name: 'Raleigh', src: 'https://logo.clearbit.com/raleigh.co.uk' },
    { name: 'Huel', src: 'https://logo.clearbit.com/huel.com' },
    { name: 'Wethenew', src: 'https://logo.clearbit.com/wethenew.com' },
];

export default function Hero() {
    return (
        <section
            id="home"
            className="relative bg-white overflow-hidden flex flex-col items-center w-full"
        >
            {/* ── Background Texture ── */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-accent/5 blur-[120px] rounded-full mix-blend-multiply" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>
            {/* ── Text Content ── */}
            <div className="w-full max-w-5xl mx-auto text-center pt-16 md:pt-24 px-6">
                <p className="text-sm md:text-base text-muted mb-5">
                    Powering growth for over{' '}
                    <span className="font-bold text-primary">1,000 businesses</span>
                    {' '}– from startups to enterprises.
                </p>

                <h1 className="text-2xl md:text-5xl font-black tracking-tight text-primary leading-[1.15] mb-8">
                    Transforming businesses of every size with
                    <br className="hidden md:block" />
                    {' '}IT solutions that actually works
                </h1>

                <div className="flex items-center justify-center gap-4">
                    <a href="#contact" className="glow-btn">
                        <span>Book a demo</span>
                    </a>
                    <a href="#contact" className="outline-btn">
                        Contact Us
                    </a>
                </div>
            </div>

            {/* ── Dashboard Screenshots ── */}
            <div className="w-full mx-auto mt-16 mb-8 px-4 flex items-stretch justify-center gap-6 md:gap-10">
                <div className="w-[65%] rounded-xl overflow-hidden shadow-2xl shadow-primary/10">
                    <Image
                        src={imgLeft}
                        alt="Decode Technologies - Applications Dashboard"
                        className="w-full h-full object-cover"
                        priority
                        placeholder="blur"
                    />
                </div>
                <div className="w-[65%] rounded-xl overflow-hidden shadow-2xl shadow-primary/10">
                    <Image
                        src={imgRight}
                        alt="Decode Technologies - Quick Overview Dashboard"
                        className="w-full h-full object-cover"
                        priority
                        placeholder="blur"
                    />
                </div>
            </div>

            {/* ── Trusted By Section ── */}
            <div className="w-full border-t border-primary/[0.06] py-10 px-6 flex flex-col items-center">
                <p className="text-sm font-semibold mb-8">
                    Trusted by leading organizations worldwide
                </p>
                <div className="flex items-center justify-center flex-wrap gap-8 md:gap-14">
                    {TRUSTED_LOGOS.map(logo => (
                        <div key={logo.name} className="relative group">
                            <img
                                src={logo.src}
                                alt={`${logo.name} logo`}
                                className="h-8 md:h-10 w-auto object-contain grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
