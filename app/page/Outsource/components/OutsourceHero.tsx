'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { StarFilled } from '@ant-design/icons';
import StackIcon from "tech-stack-icons";
import bgImg from '../assets/bg.png';

const TECH_LIST = [
    { name: "js", label: "JavaScript" },
    { name: "nodejs", label: "Node.js" },
    { name: "aws", label: "AWS" },
    { name: "mongodb", label: "MongoDB" },
    { name: "react", label: "React" },
    { name: "python", label: "Python" },
    { name: "nextjs", label: "Next.js" },
    { name: "typescript", label: "TypeScript" },
];

export default function OutsourceHero() {
    const containerRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const imageAreaRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        gsap.set(contentRef.current, { opacity: 0, x: -30 });
        gsap.set(imageAreaRef.current, { opacity: 0, x: 30 });
        gsap.set('.floating-element', { opacity: 0, scale: 0.9, y: 20 });

        tl.to(contentRef.current, { opacity: 1, x: 0, duration: 1, delay: 0.2 })
            .to(imageAreaRef.current, { opacity: 1, x: 0, duration: 1 }, '-=0.7')
            .to('.floating-element', {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2
            }, '-=0.5');

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative w-full min-h-[90vh] bg-white overflow-hidden flex flex-col justify-center">

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center flex-1 w-full pb-10">

                {/* Left Content */}
                <div ref={contentRef} className="z-10 flex flex-col items-start max-w-xl">

                    {/* Top Pill badge */}
                    <div className="inline-flex items-center gap-3 bg-white rounded-full p-1.5 pr-5 border border-gray-200/80 w-fit mb-8 shadow-sm">
                        <span className="bg-primary text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                            IT Outsourcing
                        </span>
                        <span className="text-gray-500 text-xs font-semibold">
                            Expert support for your growing business
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-[1.1] tracking-tight">
                        IT Outsourcing, Done Right.
                    </h1>

                    <p className="text-gray-500 text-base md:text-lg font-medium mb-10 leading-relaxed max-w-lg">
                        Delegate your IT to experts who optimize operations, reduce costs, and keep your systems secure. Focus on growing your business—let us handle the technology.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 mb-12 w-full sm:w-auto">
                        <button className="w-full sm:w-auto px-8 py-4 bg-accent text-white font-bold rounded-lg hover:bg-accent/90 transition-all shadow-md">
                            Get started for free
                        </button>
                        <button className="w-full sm:w-auto px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-50 transition-all border border-gray-200 shadow-sm">
                            Book a demo
                        </button>
                    </div>

                    {/* Social Proof Row */}
                    <div className="flex flex-col sm:flex-row ">
                        <div className="flex items-center gap-4">
                            {/* Avatars */}
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <div key={i} className="w-9 h-9 border-2 border-white bg-gray-200 shrink-0 overflow-hidden rounded-full shadow-sm relative" style={{ zIndex: 10 - i }}>
                                        <img src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="avatar" className="w-full h-full object-cover" />
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

                {/* Right Image Area */}
                <div ref={imageAreaRef} className="relative h-[600px] lg:h-[750px] flex items-center justify-center pt-10">

                    {/* The Circle Background with Brand Accents */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] aspect-square rounded-full bg-primary overflow-hidden border border-primary/10 shadow-[inset_0_0_50px_rgba(0,0,0,0.02)]">
                        {/* Subtle pattern */}
                        <div className="absolute inset-0 opacity-10"
                            style={{ backgroundImage: 'radial-gradient(circle at center, var(--color-accent) 0%, transparent 70%)' }} />
                    </div>

                    {/* Person Image */}
                    <div className="relative w-full h-full z-10 flex items-end">
                        <Image
                            src={bgImg}
                            alt="Outsourcing Professional"
                            fill
                            className="object-contain object-bottom scale-110"
                            priority
                            unoptimized
                        />
                    </div>

                    {/* Floating Card 1 */}
                    <div className="floating-element absolute top-[15%] lg:left-[5%] z-20 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.08)] border border-gray-100 max-w-[220px]">
                        <div className="text-primary text-sm font-bold mb-4">Efficiency Boost</div>
                        <div className="text-gray-400 text-[10px] font-bold uppercase tracking-wider mb-2">Systems Output</div>
                        <div className="text-3xl font-bold text-accent mb-4 tracking-tight">98.2%</div>
                        <div className="flex gap-2">
                            <div className="flex-1 px-3 py-2 bg-primary text-white text-[9px] font-bold rounded text-center tracking-widest uppercase">Active</div>
                        </div>
                    </div>


                    {/* Decorative dots */}
                    <div className="absolute top-[20%] right-0 w-32 h-32 opacity-5 pointer-events-none"
                        style={{ backgroundImage: 'radial-gradient(var(--color-primary) 2px, transparent 2px)', backgroundSize: '20px 20px' }} />

                </div>

            </div>

            {/* Bottom Tech Stack Banner */}
            <div className="w-full border-t border-gray-100 py-10 bg-gray-50/50">
                <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-14">
                    <span className="text-gray-400 font-bold text-[11px] tracking-widest uppercase text-center lg:text-left whitespace-nowrap">
                        Technologies We Work With
                    </span>

                    <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-60">
                        {TECH_LIST.map((tech, idx) => (
                            <div key={idx} className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-default">
                                <div className="w-6 h-6">
                                    <StackIcon name={tech.name as any} />
                                </div>
                                <span className="text-primary font-bold text-sm tracking-tight">{tech.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
}
