'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRightOutlined } from '@ant-design/icons';

export default function EMPACLearningPossibilities() {
    return (
        <section className="py-24 bg-gray-100 relative">
            <div className="max-w-5xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] mb-6 tracking-tight">
                        Seamlessly <span className="text-[#014471]">Connected</span> Learning
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        Empower your teachers and students with premium tools for live collaboration,
                        organized calendars, and instant announcements—all in one place.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {/* Card 1 */}
                    <div className="relative h-[380px] bg-primary group overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500">
                        <Image
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
                            alt="100% Cloud Based"
                            fill
                            className="object-cover opacity-60 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 pointer-events-none origin-bottom"
                            unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none" />

                        <div className="relative z-10 w-full h-full p-8 flex flex-col justify-between">
                            <div>
                                <div className="mb-5">
                                    <h3 className="text-2xl lg:text-3xl font-black text-white leading-[1.1] pt-1">
                                        See you <br /> at EMPAC!
                                    </h3>
                                </div>
                                <p className="text-white text-sm leading-relaxed max-w-[95%]">
                                    Premium built-in web conferencing for online classes. Includes digital whiteboards, polling, automated attendance, and session recording for total control.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="relative h-[380px] bg-primary group overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500">
                        <Image
                            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop"
                            alt="50% Less Admin Work"
                            fill
                            className="object-cover opacity-60 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 pointer-events-none origin-bottom"
                            unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none" />

                        <div className="relative z-10 w-full h-full p-8 flex flex-col justify-between">
                            <div>
                                <div className="mb-5">
                                    <h3 className="text-3xl lg:text-4xl font-black text-white leading-none pt-1">
                                        Calendar
                                    </h3>
                                </div>
                                <p className="text-white text-sm leading-relaxed max-w-[95%]">
                                    Students will be notified of upcoming due dates of all activities within EMPAC
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="relative h-[380px] bg-primary group overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500">
                        <Image
                            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop"
                            alt="Newsfeed"
                            fill
                            className="object-cover opacity-60 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 pointer-events-none origin-bottom"
                            unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none" />

                        <div className="relative z-10 w-full h-full p-8 flex flex-col justify-between">
                            <div>
                                <div className="mb-5">
                                    <h3 className="text-3xl lg:text-4xl font-black text-white leading-none pt-1">
                                        Newsfeed
                                    </h3>
                                </div>
                                <p className="text-white text-sm leading-relaxed max-w-[95%]">
                                    See what's the latest announcements from your teachers or instructors. Never miss anything out.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
