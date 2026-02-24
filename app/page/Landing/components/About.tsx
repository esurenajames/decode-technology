'use client';

import { useState } from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import workLifeBalanceImg from '@/app/assets/work-life-balance.jpg';
import continuousLearningImg from '@/app/assets/continuous-learning.jpg';
import collaborativeImg from '@/app/assets/collaborative.jpg';

const SLIDES = [
    {
        id: 'about',
        type: 'about', // Custom type to render About specific layout
        image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0',
        subtitle: 'Who We Are',
        title: <>IT Solutions That <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-accent-light">Actually Work.</span></>,
        description: [
            "Decode Technologies (Decode Tech.) is a premier IT Solutions and IT Services Company based in the Philippines, delivering cutting-edge ERP Systems, School Management Systems, IT Outsourcing, and Managed IT Services tailored for businesses, educational institutions, and start-ups across various industries.",
            "We design our IT solutions with meticulous precision, integrating advanced technologies, robust architectures, and strategic insights to empower our clients in the digital economy.",
            "Our commitment goes beyond meeting today’s needs; we’re here to deliver lasting value and help our clients grow well into the future."
        ]
    },
    {
        id: 'culture-1',
        type: 'culture',
        image: collaborativeImg.src,
        subtitle: 'People & Culture',
        title: 'Collaborative Spirit',
        description: 'We believe that great ideas come from everywhere. Our open culture encourages every team member to share their voice and innovation.'
    },
    {
        id: 'culture-2',
        type: 'culture',
        image: continuousLearningImg.src,
        subtitle: 'People & Culture',
        title: 'Continuous Learning',
        description: 'Technology never stops evolving, and neither do we. We invest in the growth of our people through workshops, mentorship, and challenges.'
    },
    {
        id: 'culture-3',
        type: 'culture',
        image: workLifeBalanceImg.src,
        subtitle: 'People & Culture',
        title: 'Work-Life Balance',
        description: 'We work hard to deliver excellence, but we also value the well-being of our team. A healthy mind drives the best results.'
    }
];

export default function About() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    };

    const currentSlide = SLIDES[currentIndex];

    // Determine if we need the large layout (About) or the simpler one (Culture)
    const isAbout = currentSlide.type === 'about';

    return (
        <section className="relative w-full h-auto min-h-[90vh] overflow-hidden bg-primary flex flex-col justify-center">

            {/* Background Image Slider */}
            {SLIDES.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                >
                    <img
                        src={slide.image}
                        alt={typeof slide.title === 'string' ? slide.title : 'Background'}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
                    {/* Extra gradient for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80" />
                </div>
            ))}

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/20 blur-[120px] rounded-full pointer-events-none z-0 mix-blend-screen" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-light/10 blur-[100px] rounded-full pointer-events-none z-0" />

            {/* Content Overlay */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-24 flex flex-col justify-center h-full">

                {/* Content Area - Switches based on type */}
                <div className="animate-fadeIn w-full">
                    {isAbout ? (
                        /* ABOUT LAYOUT: Two Columns */
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start text-white">
                            <div className="flex flex-col items-start h-full pt-4">
                                <span className="text-accent-light font-bold tracking-wider uppercase text-sm mb-4 block">
                                    {currentSlide.subtitle}
                                </span>
                                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight mb-8 drop-shadow-lg">
                                    {currentSlide.title}
                                </h2>
                                <div className="mt-8">
                                    <a href="#contact" className="glow-btn bg-white text-primary hover:text-white border-2 border-transparent hover:border-white/20">
                                        <span className="relative z-10">Learn More About Us</span>
                                        <ArrowRightOutlined className="relative z-10" />
                                    </a>
                                </div>
                            </div>
                            <div className="space-y-6 text-lg text-white/90 leading-relaxed font-light">
                                {Array.isArray(currentSlide.description) && currentSlide.description.map((p, i) => (
                                    <p key={i}>{p}</p>
                                ))}
                            </div>
                        </div>
                    ) : (
                        /* CULTURE LAYOUT: Bottom Heavy / Simple */
                        <div className="max-w-3xl text-white mt-12 md:mt-0">
                            <span className="text-accent-light font-bold tracking-wider uppercase text-sm mb-4 block">
                                {currentSlide.subtitle}
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
                                {currentSlide.title}
                            </h2>
                            <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light max-w-2xl">
                                {currentSlide.description}
                            </p>
                        </div>
                    )}
                </div>

                {/* Navigation Controls (Simple Arrows) */}
                <div className="absolute bottom-12 right-6 md:right-12 flex items-center gap-4">
                    <button
                        onClick={prevSlide}
                        className="w-12 h-12 rounded-full border border-white/20 hover:bg-white hover:text-primary hover:border-white text-white flex items-center justify-center transition-all duration-300 active:scale-95 bg-black/20 backdrop-blur-sm"
                    >
                        <ArrowLeftOutlined />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="w-12 h-12 rounded-full border border-white/20 hover:bg-white hover:text-primary hover:border-white text-white flex items-center justify-center transition-all duration-300 active:scale-95 bg-black/20 backdrop-blur-sm"
                    >
                        <ArrowRightOutlined />
                    </button>
                </div>

            </div>
        </section>
    );
}
