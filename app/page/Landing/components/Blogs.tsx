'use client';

import { ArrowRightOutlined } from '@ant-design/icons';
import Image from 'next/image';

// Placeholder blog images
import imgBlog1 from '../assets/image 25.png';
import imgBlog2 from '../assets/image 26.png';
import imgBlog3 from '../assets/image 25.png'; // Reusing for variety

const BLOG_POSTS = [
    {
        title: "The Future of AI in Education",
        date: "Feb 10, 2026",
        category: "EdTech",
        excerpt: "How Artificial Intelligence is reshaping the way students learn and educators teach.",
        image: imgBlog1
    },
    {
        title: "Optimizing Business Flows with ERP",
        date: "Feb 5, 2026",
        category: "Enterprise",
        excerpt: "Streamline operations and reduce costs with a modern ERP implementation strategy.",
        image: imgBlog2
    },
    {
        title: "Cybersecurity Best Practices for 2026",
        date: "Jan 28, 2026",
        category: "Security",
        excerpt: "Essential steps to protect your digital assets in an increasingly connected world.",
        image: imgBlog3
    }
];

export default function Blogs() {
    return (
        <section className="py-24 w-full bg-surface-2">
            <div className="max-w-5xl mx-auto px-6">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block">Our Insights</span>
                        <h2 className="text-3xl md:text-5xl font-black text-primary leading-tight">
                            Latest From Our Blog.
                        </h2>
                    </div>
                    <button className="hidden md:flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors group">
                        View All Articles
                        <ArrowRightOutlined className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {BLOG_POSTS.map((post, index) => (
                        <div key={index} className="group cursor-pointer">
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 shadow-md group-hover:shadow-xl transition-all duration-300">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    placeholder="blur"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                                    {post.category}
                                </div>
                            </div>

                            <div className="space-y-3">
                                <p className="text-sm text-gray-500 font-medium">{post.date}</p>
                                <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors leading-snug">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 line-clamp-2 leading-relaxed">
                                    {post.excerpt}
                                </p>
                                <div className="text-accent font-bold text-sm pt-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                                    Read More <ArrowRightOutlined className="text-xs" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="md:hidden mt-12 w-full py-4 rounded-xl border border-gray-200 font-bold text-primary hover:bg-white transition-colors">
                    View All Articles
                </button>
            </div>
        </section>
    );
}
