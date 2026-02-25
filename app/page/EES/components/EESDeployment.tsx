'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import deploymentBg from '../assets/mobile-app.png';

gsap.registerPlugin(ScrollTrigger);

export default function EESDeployment() {
    const containerRef = useRef<HTMLElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    const steps = [
        {
            number: '1',
            title: 'Discover',
            description: 'Tell Us Your HR and Payroll Process.',
            color: 'from-blue-400 to-blue-600'
        },
        {
            number: '2',
            title: 'Determine',
            description: "We'll Setup EES Workforce Base On Your Workflow",
            color: 'from-accent to-accent/80'
        },
        {
            number: '3',
            title: 'Deploy',
            description: 'Our Team will Guide You In Your HR and Payroll Digital Transformation',
            color: 'from-blue-400 to-blue-600'
        }
    ];

    useGSAP(() => {
        gsap.set('.step-item', { opacity: 0.1, y: 50 });
        gsap.set(lineRef.current, { scaleX: 0, transformOrigin: 'left' });
        gsap.set(textRef.current, { opacity: 0.5, y: 30 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: '+=150%',
                pin: true,
                scrub: 1,
                anticipatePin: 1,
            }
        });

        // Fade in header text slightly earlier
        tl.to(textRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'none',
        }, 0);

        // Animate line stretching across
        tl.to(lineRef.current, {
            scaleX: 1,
            duration: 3,
            ease: 'none',
        }, 0.5);

        // Sequence the revealing of the steps
        tl.to('.step-item', {
            opacity: 1,
            y: 0,
            stagger: 1,
            duration: 1,
            ease: 'none',
        }, 0.5);

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="w-full min-h-screen py-24 flex items-center justify-center bg-primary overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <Image
                    src={deploymentBg}
                    alt="Deployment Background"
                    fill
                    className="object-cover opacity-[0.03] mix-blend-luminosity"
                />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 opacity-10" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2 opacity-10" />
            </div>

            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <div ref={textRef} className="text-center mb-24">
                    <span className="text-accent font-bold mb-4 block text-sm tracking-[0.3em] uppercase">Deployment Plan</span>
                    <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-6">
                        Manage Your Workforce In Just 30 Days.
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        A systematic approach to digitalizing your HR operations without the stress.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div ref={lineRef} className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-white/20 z-0 origin-left" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
                        {steps.map((step, idx) => (
                            <div key={idx} className="step-item flex flex-col items-center text-center group">
                                <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white text-4xl font-bold shadow-2xl mb-10 transition-transform duration-500 relative`}>
                                    {step.number}
                                    <div className="absolute inset-0 rounded-full bg-inherit blur-xl opacity-0 group-hover:opacity-50 transition-opacity" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                    {step.title}
                                </h3>
                                <p className="text-white/70 text-lg leading-relaxed max-w-[250px]">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
