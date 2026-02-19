'use client';

import { useState, useEffect } from 'react';
import { FacebookFilled, TwitterSquareFilled, LinkedinFilled, LinkOutlined } from '@ant-design/icons';
import RecentPosts from './RecentPosts';

export default function BlogPostContent() {
    const [activeSection, setActiveSection] = useState('intro');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['intro', 'proactive', 'intent', 'benefits'];
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
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-6">On this page</h4>
                    <nav className="flex flex-col space-y-4 border-l-2 border-gray-100">
                        <a
                            href="#intro"
                            className={`pl-4 text-sm transition-colors border-l-2 -ml-[2px] ${activeSection === 'intro' ? 'border-accent text-accent font-bold' : 'border-transparent text-gray-500 hover:text-primary'}`}
                        >
                            Introduction
                        </a>
                        <a
                            href="#proactive"
                            className={`pl-4 text-sm transition-colors border-l-2 -ml-[2px] ${activeSection === 'proactive' ? 'border-accent text-accent font-bold' : 'border-transparent text-gray-500 hover:text-primary'}`}
                        >
                            Proactive Support
                        </a>
                        <a
                            href="#intent"
                            className={`pl-4 text-sm transition-colors border-l-2 -ml-[2px] ${activeSection === 'intent' ? 'border-accent text-accent font-bold' : 'border-transparent text-gray-500 hover:text-primary'}`}
                        >
                            User Intent
                        </a>
                        <a
                            href="#benefits"
                            className={`pl-4 text-sm transition-colors border-l-2 -ml-[2px] ${activeSection === 'benefits' ? 'border-accent text-accent font-bold' : 'border-transparent text-gray-500 hover:text-primary'}`}
                        >
                            Key Benefits
                        </a>
                    </nav>
                </div>
            </aside>

            {/* Main Content */}
            <div className="prose prose-lg prose-headings:font-bold prose-headings:text-primary prose-p:text-gray-600 prose-a:text-accent max-w-none">
                <div id="intro" className="scroll-mt-32">
                    <p className="lead text-xl text-gray-500 font-medium mb-8">
                        Artificial Intelligence is no longer just a buzzword—it's a fundamental shift in how businesses interact with their customers. From chatbots to predictive analytics, the landscape of customer support is evolving rapidly.
                    </p>
                </div>

                <div id="proactive" className="scroll-mt-32">
                    <h2>The Shift to Proactive Support</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                </div>

                <blockquote className="border-l-4 border-accent pl-6 italic text-gray-700 my-8 bg-gray-50 py-4 rounded-r-lg">
                    "The goal of AI isn't to replace humans, but to empower them to focus on what really matters: building relationships."
                </blockquote>

                <div id="intent" className="scroll-mt-32">
                    <h2>Understanding User Intent</h2>
                    <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                    </p>
                    <p>
                        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                    </p>
                </div>

                <div id="benefits" className="scroll-mt-32">
                    <h3>Key Benefits of AI Integration</h3>
                    <ul className="list-disc pl-6 space-y-2 mt-4 marker:text-accent">
                        <li><strong>24/7 Availability:</strong> Never miss a customer query, regardless of time zone.</li>
                        <li><strong>Instant Responses:</strong> Reduce wait times from minutes to milliseconds.</li>
                        <li><strong>Personalization:</strong> Use data to tailor every interaction to the specific user.</li>
                        <li><strong>Scalability:</strong> Handle thousands of concurrent conversations without adding headcount.</li>
                    </ul>
                </div>

                <p className="mt-8">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                </p>
            </div>

            {/* Right Sidebar */}
            <aside className="hidden lg:block relative">
                <div className="sticky top-32 space-y-12">

                    {/* Share */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-6">Share this article</h4>
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

                    {/* Recent Posts - Text Only */}
                    <RecentPosts />

                    {/* Tags */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Tags</h4>
                        <div className="flex flex-wrap gap-2">
                            {['AI', 'Support', 'Automation', 'Tech'].map(tag => (
                                <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-semibold hover:bg-gray-200 cursor-pointer transition-colors">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </aside>

        </div>
    );
}
