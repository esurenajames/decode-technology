'use client';

import { useState, useEffect } from 'react';
import { FacebookFilled, TwitterSquareFilled, LinkedinFilled, LinkOutlined } from '@ant-design/icons';
import RecentCaseStudies from './RecentCaseStudies';

export default function CaseStudyContent() {
    const [activeSection, setActiveSection] = useState('challenge');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['challenge', 'solution', 'implementation', 'results'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top >= 0 && rect.top <= 300) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-1 lg:grid-cols-[250px_1fr_300px] gap-16 relative">

            {/* Left Sidebar - Table of Contents */}
            <aside className="hidden lg:block relative">
                <div className="sticky top-32">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-6">Case Study Content</h4>
                    <nav className="flex flex-col space-y-4 border-l-2 border-gray-100">
                        <a
                            href="#challenge"
                            className={`pl-4 text-sm transition-colors border-l-2 -ml-[2px] ${activeSection === 'challenge' ? 'border-accent text-accent font-bold' : 'border-transparent text-gray-500 hover:text-primary'}`}
                        >
                            The Challenge
                        </a>
                        <a
                            href="#solution"
                            className={`pl-4 text-sm transition-colors border-l-2 -ml-[2px] ${activeSection === 'solution' ? 'border-accent text-accent font-bold' : 'border-transparent text-gray-500 hover:text-primary'}`}
                        >
                            Our Solution
                        </a>
                        <a
                            href="#implementation"
                            className={`pl-4 text-sm transition-colors border-l-2 -ml-[2px] ${activeSection === 'implementation' ? 'border-accent text-accent font-bold' : 'border-transparent text-gray-500 hover:text-primary'}`}
                        >
                            Implementation
                        </a>
                        <a
                            href="#results"
                            className={`pl-4 text-sm transition-colors border-l-2 -ml-[2px] ${activeSection === 'results' ? 'border-accent text-accent font-bold' : 'border-transparent text-gray-500 hover:text-primary'}`}
                        >
                            Business Results
                        </a>
                    </nav>
                </div>
            </aside>

            {/* Main Content */}
            <div className="prose prose-lg prose-headings:font-bold prose-headings:text-primary prose-p:text-gray-600 prose-a:text-accent max-w-none">
                <div id="challenge" className="scroll-mt-32">
                    <p className="lead text-xl text-gray-500 font-medium mb-8">
                        Healthcare Giant faced a critical bottleneck: their 20-year-old legacy patient management system was slow, insecure, and incompatible with modern telehealth APIs. They needed a complete overhaul without disrupting 24/7 hospital operations.
                    </p>
                </div>

                <div id="solution" className="scroll-mt-32">
                    <h2>Our Solution: A Hybrid cloud Approach</h2>
                    <p>
                        We proposed a phased migration to a hybrid cloud architecture. This allowed us to keep sensitive patient data on-premise for compliance while offloading heavy computation and telehealth services to a scalable cloud environment.
                    </p>
                    <p>
                        Our team utilized containerization with Docker and Kubernetes to ensure consistent environments across development and production, minimizing deployment risks.
                    </p>
                </div>

                <blockquote className="border-l-4 border-accent pl-6 italic text-gray-700 my-8 bg-gray-50 py-4 rounded-r-lg">
                    "The transition was seamless. We saw a 50% reduction in system downtime within the first month of deployment."
                    <footer className="text-sm font-bold text-primary mt-2">— CTO, Healthcare Giant</footer>
                </blockquote>

                <div id="implementation" className="scroll-mt-32">
                    <h2>Implementation Strategy</h2>
                    <p>
                        The project was executed in three 4-week sprints.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4 marker:text-accent">
                        <li><strong>Phase 1: Audit & Planning.</strong> Mapping all dependencies and data flows.</li>
                        <li><strong>Phase 2: Microservices Development.</strong> Breaking down the monolith into 12 distinct services.</li>
                        <li><strong>Phase 3: Data Migration & Testing.</strong> Moving 50TB of patient records with zero data loss.</li>
                    </ul>
                </div>

                <div id="results" className="scroll-mt-32">
                    <h3>Business Results</h3>
                    <p>
                        Post-launch, the impact was immediate and measurable:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4 marker:text-accent">
                        <li><strong>99.99% Uptime:</strong> Achieved through redundant cloud failovers.</li>
                        <li><strong>40% Cost Reduction:</strong> Optimized server usage and reduced maintenance overhead.</li>
                        <li><strong>Faster Check-ins:</strong> Patient intake time dropped from 15 minutes to 3 minutes.</li>
                    </ul>
                </div>
            </div>

            {/* Right Sidebar */}
            <aside className="hidden lg:block relative">
                <div className="sticky top-32 space-y-12">

                    {/* Share */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-6">Share this Case Study</h4>
                        <div className="flex flex-col gap-3">
                            <button className="flex items-center gap-3 text-gray-500 hover:text-[#1877F2] transition-colors font-medium text-sm group">
                                <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#1877F2] group-hover:text-white transition-all"><FacebookFilled /></span> Facebook
                            </button>
                            <button className="flex items-center gap-3 text-gray-500 hover:text-[#1DA1F2] transition-colors font-medium text-sm group">
                                <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#1DA1F2] group-hover:text-white transition-all"><TwitterSquareFilled /></span> Twitter
                            </button>
                            <button className="flex items-center gap-3 text-gray-500 hover:text-[#0A66C2] transition-colors font-medium text-sm group">
                                <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#0A66C2] group-hover:text-white transition-all"><LinkedinFilled /></span> LinkedIn
                            </button>
                            <button className="flex items-center gap-3 text-gray-500 hover:text-primary transition-colors font-medium text-sm group">
                                <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all"><LinkOutlined /></span> Copy Link
                            </button>
                        </div>
                    </div>

                    {/* Recent Case Studies - Text Only */}
                    <RecentCaseStudies />

                    {/* Tags */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                            {['Cloud', 'Migration', 'Healthcare', 'Security'].map(tag => (
                                <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-semibold hover:bg-gray-200 cursor-pointer transition-colors">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </aside>

        </div>
    );
}
