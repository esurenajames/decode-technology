'use client';

import React, { useState } from 'react';
import { StarFilled, ArrowLeftOutlined, ArrowRightOutlined, UserOutlined } from '@ant-design/icons';

const TESTIMONIALS = [
    {
        role: 'Director of HR, Global Tech',
        quote: 'EES Workforce Elevate has completely transformed how we onboard and train our team. The integrated web conferencing is a game-changer for our distributed workforce.',
        rating: 5
    },
    {
        role: 'Training Manager, Retail Solutions',
        quote: "The seamless integration with our payroll system saved us hours of administrative work. Our trainees love the mobile access and the simple UI.",
        rating: 5
    },
    {
        role: 'COO, Innovate Lab',
        quote: "Finally, a training solution that isn't clunky. Elevate is intuitive, fast, and provides powerful analytics that help us track compliance accurately.",
        rating: 5
    },
    {
        role: 'Head of Learning, Enterprise Cloud',
        quote: "Creating courses and managing certifications is incredibly straightforward now. This platform scales perfectly as our organization grows globally.",
        rating: 5
    },
    {
        role: 'Vice President of People, Fintech Pro',
        quote: "We've seen a 40% increase in course completion rates since switching to Elevate. The self-paced modules and mobile accessibility fit our team's busy schedules perfectly.",
        rating: 5
    },
    {
        role: 'Operations Director, NextGen Corp',
        quote: "Elevate's automated reporting and HRIS integration have removed so much manual entry. It's an indispensable tool for maintaining our compliance standards.",
        rating: 5
    }
];

export default function ElevateTestimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState<'left' | 'right'>('right');

    const nextSlide = () => {
        setDirection('right');
        setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    };

    const prevSlide = () => {
        setDirection('left');
        setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
    };

    const visibleTestimonials = [
        TESTIMONIALS[currentIndex % TESTIMONIALS.length],
        TESTIMONIALS[(currentIndex + 1) % TESTIMONIALS.length],
        TESTIMONIALS[(currentIndex + 2) % TESTIMONIALS.length],
    ];

    return (
        <section className="py-24 bg-gray-100 relative">
            <style jsx>{`
                @keyframes slideFromRight {
                    from { transform: translateX(60px); }
                    to { transform: translateX(0); }
                }
                @keyframes slideFromLeft {
                    from { transform: translateX(-60px); }
                    to { transform: translateX(0); }
                }
                .animate-slide-right {
                    animation: slideFromRight 0.45s ease forwards;
                }
                .animate-slide-left {
                    animation: slideFromLeft 0.45s ease forwards;
                }
            `}</style>
            <div className="max-w-5xl mx-auto px-6">

                {/* Header Text */}
                <div className="mb-8">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 tracking-tight">
                            What People Are Saying
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed font-medium">
                            Hear from business leaders and HR professionals who have streamlined their workforce
                            development with EES Workforce Elevate.
                        </p>
                    </div>
                </div>

                {/* Navigation Arrows */}
                <div className="flex justify-end items-center gap-4 mb-8">
                    <button
                        onClick={prevSlide}
                        className="w-14 h-14 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:bg-accent hover:border-accent hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1"
                    >
                        <ArrowLeftOutlined className="text-xl" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="w-14 h-14 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:bg-accent hover:border-accent hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1"
                    >
                        <ArrowRightOutlined className="text-xl" />
                    </button>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {visibleTestimonials.map((testimonial, idx) => (
                        <div
                            key={`${currentIndex}-${idx}`}
                            className={`${direction === 'right' ? 'animate-slide-right' : 'animate-slide-left'} p-8 rounded-lg bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-accent/10 transition-all duration-500 relative flex flex-col justify-between`}
                            style={{ animationDelay: `${idx * 0.08}s` }}
                        >
                            <div>
                                <div className="flex gap-1 mb-6">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <StarFilled key={i} className="text-[#ffb800] text-xs" />
                                    ))}
                                </div>
                                <p className="text-gray-600 text-base italic leading-relaxed font-medium mb-8">
                                    "{testimonial.quote}"
                                </p>
                            </div>

                            <div className="flex items-center gap-4 border-t border-gray-50 pt-6">
                                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 border border-gray-200">
                                    <UserOutlined />
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary text-xs uppercase tracking-wider">Anonymous User</h4>
                                    <p className="text-gray-400 text-[10px] font-medium">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
