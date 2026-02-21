import Image from 'next/image';
import { CalendarOutlined } from '@ant-design/icons';
import imgLeft from '../assets/image 25.png';
import imgRight from '../assets/image 26.png';
import logoImg from '../assets/logo.jpg';

const TRUSTED_LOGOS = [
    { name: 'Edgard & Cooper', src: logoImg },
    { name: 'AMS', src: logoImg },
    { name: 'Raleigh', src: logoImg },
    { name: 'Huel', src: logoImg },
    { name: 'Wethenew', src: logoImg },
];

export default function Hero() {
    return (
        <section
            id="home"
            className="relative bg-white overflow-hidden flex flex-col items-center w-full h-screen min-h-[700px] max-h-[1000px]"
        >
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-accent/5 blur-[120px] rounded-full mix-blend-multiply" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>
            <div className="w-full max-w-5xl mx-auto text-center pt-20 px-6 relative z-10 flex flex-col items-center">
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
                    <a href="#contact" className="glow-btn flex items-center gap-2">
                        <CalendarOutlined />
                        <span>Book a demo</span>
                    </a>
                    <a href="#contact" className="outline-btn">
                        Contact Us
                    </a>
                </div>
            </div>

            <div className="w-full mt-auto mb-12 flex flex-col overflow-hidden bg-white/50 py-8">

                {/* Header */}
                <div className="w-full max-w-5xl mx-auto px-6 mb-8 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-1 h-5 bg-primary rounded-full shadow-[0_0_12px_rgba(47,127,245,0.5)]" />
                        <span className="text-sm font-bold text-primary tracking-wide uppercase opacity-90">Made by Decode</span>
                    </div>
                    <span className="text-sm font-medium text-primary opacity-60">Let's make it happen</span>
                </div>

                <div className="relative flex flex-col gap-4 mb-10">
                    <div
                        className="absolute inset-0 z-20 pointer-events-none"
                        style={{
                            background: 'radial-gradient(ellipse 60% 100% at 50% 50%, transparent 50%, #ffffff 100%)'
                        }}
                    />

                    <div className="flex gap-4 min-w-max px-4 -ml-[120px]">
                        {[...Array(8)].map((_, idx) => (
                            <div key={`r1-${idx}`} className="relative w-[220px] aspect-[16/10] rounded-lg overflow-hidden shrink-0 shadow-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-primary/20 hover:z-10 cursor-pointer">
                                <Image
                                    src={idx % 2 === 0 ? imgLeft : imgRight}
                                    alt="Showcase"
                                    fill
                                    className="object-cover"
                                    sizes="220px"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Row 2 - Offset Right/Center */}
                    <div className="flex gap-4 min-w-max px-4 ml-0">
                        {[...Array(8)].map((_, idx) => (
                            <div key={`r2-${idx}`} className="relative w-[220px] aspect-[16/10] rounded-lg overflow-hidden shrink-0 shadow-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-primary/20 hover:z-10 cursor-pointer">
                                <Image
                                    src={idx % 2 !== 0 ? imgLeft : imgRight}
                                    alt="Showcase"
                                    fill
                                    className="object-cover"
                                    sizes="220px"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center gap-4 animate-fadein">
                    {/* Avatars */}
                    <div className="flex -space-x-2 shrink-0">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-surface-2 overflow-hidden relative shadow-sm hover:scale-110 transition-transform z-10">
                                <Image
                                    src={`https://i.pravatar.cc/150?img=${i + 5}`}
                                    alt="avatar"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>

                    <p className="text-sm font-medium text-primary/80 leading-snug">
                        “The Canvas completely changed how I plan and organize animations.”
                        <span className="text-muted ml-2 font-normal">– 0xFramer, AI Artist</span>
                    </p>
                </div>

            </div>
        </section>
    );
}
