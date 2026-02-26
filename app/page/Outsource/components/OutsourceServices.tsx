'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import StackIcon from 'tech-stack-icons';

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
    {
        stackIcon: 'vuejs',
        title: 'Web Development',
        techs: ['ReactJS', 'VueJS', 'AngularJS', 'Python', 'PHP', 'Perl', 'C', 'C#'],
    },
    {
        stackIcon: 'flutter',
        title: 'Mobile Development',
        techs: ['Swift', 'Xamarin', 'React Native', 'Flutter', 'Objective C'],
    },
    {
        stackIcon: 'docker',
        title: 'DevOps Engineer',
        techs: ['Bash', 'PHP', 'Powershell', 'Perl', 'Ruby on Rails', 'SQL'],
    },
    {
        stackIcon: 'stripe',
        title: 'E-Commerce Developer',
        techs: ['Stripe', 'Paypal', 'Magento', 'Woocommerce'],
    },
    {
        stackIcon: 'cypress',
        title: 'Quality Assurance Engineer',
        techs: ['Selenium', 'Jest', 'Cypress', 'Manual Testing', 'Automation'],
    },
    {
        stackIcon: 'wordpress',
        title: 'WordPress Developer',
        techs: ['Elementor', 'WooCommerce', 'ACF', 'Custom Themes', 'Plugins'],
    },
    {
        stackIcon: 'python',
        title: 'AI Chatbot Developer',
        techs: ['OpenAI', 'Dialogflow', 'Rasa', 'NLP', 'LangChain'],
    },
    {
        stackIcon: 'powershell',
        title: 'Robotic Process Automation',
        techs: ['UiPath', 'Blue Prism', 'Automation Anywhere', 'Power Automate'],
    },
];

export default function OutsourceServices() {
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const cards = gsap.utils.toArray<HTMLElement>('.service-card');

        gsap.set(cards, { opacity: 0, y: 40 });

        ScrollTrigger.batch(cards, {
            onEnter: (batch) => {
                gsap.to(batch, {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    ease: 'power3.out',
                    stagger: 0.1,
                });
            },
            start: 'top 88%',
            once: true,
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="bg-white py-24">
            <div className="max-w-5xl mx-auto px-6">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block text-accent font-bold text-xs tracking-widest uppercase mb-4">
                        Our Expertise
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 tracking-tight">
                        Pick from Our Wide Range of
                        <br className="hidden md:block" />
                        Expert IT Services
                    </h2>
                    <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                        We provide dedicated professionals across multiple technology domains. Select the skills you need and we&apos;ll match you with the right talent.
                    </p>
                </div>

                {/* Service Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {SERVICES.map((service, idx) => (
                        <div
                            key={idx}
                            className="service-card group relative bg-white border border-gray-100 rounded-xl p-6 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1 cursor-default"
                        >
                            {/* Tech Stack Icon */}
                            <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
                                <div className="w-7 h-7">
                                    <StackIcon name={service.stackIcon as any} />
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-base font-bold text-primary mb-3 tracking-tight">
                                {service.title}
                            </h3>

                            {/* Tech Tags */}
                            <div className="flex flex-wrap gap-1.5">
                                {service.techs.map((tech, tIdx) => (
                                    <span
                                        key={tIdx}
                                        className="text-[11px] font-semibold text-gray-400 bg-gray-50 px-2.5 py-1 rounded-md transition-colors duration-300 group-hover:bg-gray-100 group-hover:text-gray-500"
                                    >
                                        {tech}
                                    </span>
                                ))}
                                <span className="text-[11px] font-semibold text-accent/60 bg-accent/5 px-2.5 py-1 rounded-md">
                                    (...)
                                </span>
                            </div>

                            {/* Hover accent line */}
                            <div className="absolute bottom-0 left-4 right-4 h-[2px] bg-accent/0 group-hover:bg-accent/40 rounded-full transition-all duration-500" />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
