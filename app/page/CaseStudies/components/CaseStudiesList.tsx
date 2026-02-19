'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeftOutlined, ClockCircleOutlined, UserOutlined } from '@ant-design/icons';

// Import assets from Landing page - Reuse for now
import imgBlog1 from '../../Landing/assets/blog1.png';
import imgBlog2 from '../../Landing/assets/blog2.png';
import imgBlog3 from '../../Landing/assets/blog3.png';

const CASE_STUDIES = [
    {
        id: 1,
        title: "Modernizing Legacy Systems for Healthcare Giant",
        excerpt: "A complete overhaul of a 20-year-old patient management system, resulting in 99.99% uptime and 40% cost reduction.",
        category: "Healthcare",
        date: "Feb 10, 2025",
        author: "James Wilson",
        readTime: "12 min read",
        image: imgBlog1
    },
    {
        id: 2,
        title: "Automating Logistics with IoT",
        excerpt: "Implementing real-time tracking reduced delivery delays by 40% for Logistics Pro.",
        category: "Logistics",
        date: "Jan 25, 2025",
        author: "Mike Ross",
        readTime: "10 min read",
        image: imgBlog2
    },
    {
        id: 3,
        title: "Enhancing E-commerce Security",
        excerpt: "Deploying AI-driven fraud detection for a major online retailer, stopping 95% of fraudulent transactions.",
        category: "E-commerce",
        date: "Jan 12, 2025",
        author: "Sarah Jenks",
        readTime: "8 min read",
        image: imgBlog3
    },
    {
        id: 4,
        title: "Data Warehouse Migration Success",
        excerpt: "Moving 50TB of data to the cloud with zero downtime for FinTech Corp.",
        category: "FinTech",
        date: "Jan 05, 2025",
        author: "David Chen",
        readTime: "15 min read",
        image: imgBlog1
    },
    {
        id: 5,
        title: "Scaling SaaS Infrastructure Globally",
        excerpt: "Discover the architectural changes that allowed SaaS Co to expand to 50 countries seamlessly.",
        category: "Cloud",
        date: "Dec 10, 2024",
        author: "Emma Scott",
        readTime: "12 min read",
        image: imgBlog2
    },
    {
        id: 6,
        title: "AI-Driven Customer Insights",
        excerpt: "How Retail Giant used our AI platform to predict consumer trends with 90% accuracy.",
        category: "Retail",
        date: "Nov 22, 2024",
        author: "David Chen",
        readTime: "8 min read",
        image: imgBlog3
    }
];

export default function CaseStudiesList() {
    return (
        <section className="py-8 pb-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Filters / Categories */}
                <div className="flex flex-wrap gap-4 mb-16 justify-center">
                    {['All', 'Healthcare', 'FinTech', 'Logistics', 'Cloud', 'Retail'].map((cat, idx) => (
                        <button
                            key={idx}
                            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${idx === 0 ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {CASE_STUDIES.map((post) => (
                        <Link href={`/case-studies/${post.id}`} key={post.id} className="group flex flex-col h-full bg-white transition-all duration-300">
                            {/* Image Card - Matching BlogList design */}
                            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-6 border border-gray-100 shadow-sm group-hover:shadow-xl transition-all duration-300">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                                    placeholder="blur"
                                />
                            </div>
                            <div className="flex flex-col flex-1">
                                <div className="flex items-center gap-3 text-sm text-gray-400 font-medium mb-3">
                                    <span className="bg-primary/5 text-primary px-2 py-0.5 rounded font-semibold">{post.category}</span>
                                    <span className="flex items-center gap-1"><ClockCircleOutlined /> {post.date}</span>
                                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                    <span>{post.readTime}</span>
                                </div>

                                <h3 className="text-xl font-bold text-primary mb-3 leading-snug group-hover:text-accent transition-colors line-clamp-2">
                                    {post.title}
                                </h3>

                                <p className="text-gray-500 leading-relaxed mb-6 line-clamp-3 text-sm flex-grow">
                                    {post.excerpt}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Pagination */}
                <div className="mt-20 flex justify-center gap-2">
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold shadow-lg shadow-primary/20">1</button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-500 font-bold transition-colors">2</button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-500 font-bold transition-colors">3</button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-500 font-bold transition-colors">...</button>
                </div>
            </div>
        </section>
    );
}
