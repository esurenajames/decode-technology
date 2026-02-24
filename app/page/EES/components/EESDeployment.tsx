'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function EESDeployment() {
    const containerRef = useRef<HTMLElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);

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
            color: 'from-primary to-primary/80'
        }
    ];

    useGSAP(() => {
        gsap.from('.step-item', {
            opacity: 0,
            y: 40,
            stagger: 0.2,
            duration: 1,
            ease: 'power4.out',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 75%',
            }
        });

        gsap.from(lineRef.current, {
            scaleX: 0,
            transformOrigin: 'left',
            duration: 1.5,
            ease: 'power2.inOut',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 75%',
            }
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="w-full py-24 md:py-32 bg-primary overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <div className="text-center mb-24">
                    <span className="text-accent font-bold mb-4 block text-sm tracking-[0.3em] uppercase">D3 Deployment Plan</span>
                    <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-6">
                        Manage Your Workforce with <br />
                        <span className="text-accent underline underline-offset-8">Less Work</span> In Just 30 Days.
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        A systematic approach to digitalizing your HR operations without the stress.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div ref={lineRef} className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-white/10 z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
                        {steps.map((step, idx) => (
                            <div key={idx} className="step-item flex flex-col items-center text-center group">
                                <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white text-4xl font-bold shadow-2xl mb-10 transition-transform duration-500 group-hover:scale-110 relative`}>
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
