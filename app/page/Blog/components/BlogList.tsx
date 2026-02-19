'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightOutlined, ClockCircleOutlined, UserOutlined } from '@ant-design/icons';

// Import assets from Landing page
import imgBlog1 from '../../Landing/assets/blog1.png';
import imgBlog2 from '../../Landing/assets/blog2.png';
import imgBlog3 from '../../Landing/assets/blog3.png';
import imgBlog4 from '../../Landing/assets/blog4.png';

const BLOG_POSTS = [
    {
        id: 1,
        title: "The Future of AI in Customer Support",
        excerpt: "How artificial intelligence is transforming the way businesses handle customer inquiries, reducing wait times and improving satisfaction.",
        category: "Automation",
        date: "Oct 12, 2025",
        author: "Sarah Jenks",
        readTime: "5 min read",
        image: imgBlog1
    },
    {
        id: 2,
        title: "Scaling Your Business with Smart Analytics",
        excerpt: "Leveraging data to make informed decisions is no longer optional. Here's how to build a data-driven culture from the ground up.",
        category: "Analytics",
        date: "Oct 08, 2025",
        author: "Mike Ross",
        readTime: "8 min read",
        image: imgBlog2
    },
    {
        id: 3,
        title: "Why Multi-Channel Support Matters",
        excerpt: "Customers expect to reach you where they are. Learn why integrating WhatsApp, Messenger, and Slack is crucial for modern support.",
        category: "Strategy",
        date: "Sep 28, 2025",
        author: "Jessica Pearson",
        readTime: "6 min read",
        image: imgBlog3
    },
    {
        id: 4,
        title: "5 Tools to Automate Your Workflow",
        excerpt: "Stop wasting time on repetitive tasks. We review the top 5 tools that can save your team hours every single week.",
        category: "Tools",
        date: "Sep 15, 2025",
        author: "Harvey Specter",
        readTime: "4 min read",
        image: imgBlog4
    },
    {
        id: 5,
        title: "Understanding Natural Language Processing",
        excerpt: "A beginner's guide to the technology behind chatbots and how it actually understands human intent.",
        category: "Technology",
        date: "Sep 10, 2025",
        author: "Louis Litt",
        readTime: "10 min read",
        image: imgBlog1
    },
    {
        id: 6,
        title: "Building Trust with AI",
        excerpt: "AI can seem impersonal. Here are strategies to maintain a human connection even when using automated tools.",
        category: "Ethics",
        date: "Sep 05, 2025",
        author: "Donna Paulsen",
        readTime: "7 min read",
        image: imgBlog2
    }
];

export default function BlogList() {
    return (
        <section className="py-8 pb-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Filters / Categories */}
                <div className="flex flex-wrap gap-4 mb-16 justify-center">
                    {['All', 'Automation', 'Analytics', 'Startups', 'Technology', 'Strategy'].map((cat, idx) => (
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
                    {BLOG_POSTS.map((post) => (
                        <Link href={`/blog/${post.id}`} key={post.id} className="group flex flex-col h-full bg-white transition-all duration-300">
                            {/* Image Card - Matching Blogs.tsx design but emphasizing full visibility */}
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
