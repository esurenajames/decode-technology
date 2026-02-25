'use client';

import React from 'react';
import { StarFilled } from '@ant-design/icons';

const TESTIMONIALS = [
    {
        name: 'Sarah Jenkins',
        role: 'Director of HR, Global Tech',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
        quote: 'EES Workforce Elevate has completely transformed how we onboard and train our team. The integrated web conferencing is a game-changer for our distributed workforce.',
        rating: 5
    },
    {
        name: 'David Chen',
        role: 'Training Manager, Retail Solutions',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
        quote: "The seamless integration with our payroll system saved us hours of administrative work. Our trainees love the mobile access and the simple UI.",
        rating: 5
    },
    {
        name: 'Elena Rodriguez',
        role: 'COO, Innovate Lab',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
        quote: "Finally, a training solution that isn't clunky. Elevate is intuitive, fast, and provides powerful analytics that help us track compliance accurately.",
        rating: 5
    }
];

export default function ElevateTestimonials() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-5xl mx-auto px-6">

                <div className="text-center mb-16">
                    <span className="text-accent font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
                        Testimonials
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 tracking-tight">
                        What People Are Saying
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
                        Hear from business leaders and HR professionals who have streamlined their workforce
                        development with EES Workforce Elevate.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((testimonial, idx) => (
                        <div
                            key={idx}
                            className="p-8 rounded-lg bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-accent/10 transition-all duration-500 relative flex flex-col justify-between"
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
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    className="w-10 h-10 rounded-full object-cover shadow-sm"
                                />
                                <div>
                                    <h4 className="font-bold text-primary text-xs uppercase tracking-wider">{testimonial.name}</h4>
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
