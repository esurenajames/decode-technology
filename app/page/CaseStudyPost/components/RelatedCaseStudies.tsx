'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ClockCircleOutlined } from '@ant-design/icons';

// Assets
import imgBlog1 from '../../Landing/assets/blog1.png';
import imgBlog2 from '../../Landing/assets/blog2.png';
import imgBlog3 from '../../Landing/assets/blog3.png';

const RELATED_CASE_STUDIES = [
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
    }
];

export default function RelatedCaseStudies() {
    return (
        <div className="border-t border-gray-100 mt-24">
            <div className="max-w-7xl mx-auto px-6 py-24">
                <h3 className="text-3xl font-bold text-primary mb-12 text-center">More Case Studies</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {RELATED_CASE_STUDIES.map((post) => (
                        <Link href={`/case-studies/${post.id}`} key={post.id} className="group flex flex-col h-full bg-white transition-all duration-300">
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
            </div>
        </div>
    );
}
