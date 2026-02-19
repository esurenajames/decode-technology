'use client';

import { ArrowRightOutlined } from '@ant-design/icons';
import Image from 'next/image';

// Placeholder blog images
import imgBlog1 from '../assets/blog1.png';
import imgBlog2 from '../assets/blog2.png';
import imgBlog3 from '../assets/blog3.png';

const BLOG_POSTS = [
    {
        title: "UMID Card Application Made Simple: 2025 Requirements and Step-by-Step Process",
        date: "Jan 08, 2025",
        category: "Customer Feedback",
        excerpt: "Everything you need to know about the UMID card application process, updated for 2025 with the latest requirements.",
        image: imgBlog1, // Featured image using blog1 asset
        isFeatured: true
    },
    {
        title: "25 Best Product Management Books for 2024 for Product Managers",
        date: "Jan 06, 2024",
        category: "Product Management",
        excerpt: "Discover the top 25 best product management books for 2024 and gain essential insights for your career.",
        image: imgBlog2
    },
    {
        title: "10 Best Beamer Alternatives for Publishing Changelogs",
        date: "Jan 04, 2024",
        category: "Customer Feedback",
        excerpt: "Discover the top 10 best alternatives to Beamer for managing customer feedback and changelogs effectively.",
        image: imgBlog3
    },
    {
        title: "How to Write Release Notes: Best Practices, Template, Tools",
        date: "Jan 02, 2024",
        category: "Product Management",
        excerpt: "Learn how to write release notes for product releases. Follow best practices and find tools to streamline the process.",
        image: imgBlog1
    }
];

export default function Blogs() {
    const featuredPost = BLOG_POSTS[0];
    const recentPosts = BLOG_POSTS.slice(1);

    return (
        <section className="py-24 w-full bg-white">
            <div className="max-w-6xl mx-auto px-6">

                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-4xl font-black text-primary">Blogs</h2>
                    {/* Optional: View All Link */}
                </div>

                {/* Featured Post */}
                <div className="group w-full mb-16">
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row min-h-[400px] border border-gray-100 group-hover:shadow-2xl transition-all duration-300">

                        {/* Image Side */}
                        <div className="relative w-full lg:w-1/2 min-h-[300px] lg:min-h-full">
                            <Image
                                src={featuredPost.image}
                                alt={featuredPost.title}
                                fill
                                className="object-contain transition-transform duration-700 group-hover:scale-105"
                                placeholder="blur"
                            />
                        </div>

                        {/* Content Side */}
                        <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center items-start space-y-6">
                            <div className="flex items-center gap-4 text-sm font-semibold tracking-wide">
                                <span className="bg-surface-2 text-primary px-3 py-1 rounded-full">{featuredPost.category}</span>
                                <span className="text-gray-400">—</span>
                                <span className="text-gray-500">{featuredPost.date}</span>
                            </div>

                            <h3 className="text-3xl font-black text-primary leading-tight group-hover:text-accent transition-colors">
                                {featuredPost.title}
                            </h3>

                            <p className="text-lg text-gray-500 leading-relaxed">
                                {featuredPost.excerpt}
                            </p>

                            <div className="text-accent font-bold text-base flex items-center gap-2 mt-2">
                                Read Article <ArrowRightOutlined />
                            </div>
                        </div>

                    </div>
                </div>

                {/* Recent Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {recentPosts.map((post, index) => (
                        <div key={index} className="group cursor-pointer flex flex-col h-full">
                            {/* Image Card */}
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 border border-gray-100 shadow-sm group-hover:shadow-xl transition-all duration-300">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                                    placeholder="blur"
                                />

                            </div>

                            {/* Content */}
                            <div className="flex flex-col flex-grow space-y-3">
                                <div className="flex items-center gap-3 text-xs md:text-sm text-gray-400 font-medium">
                                    <span className="bg-surface px-2 py-0.5 rounded text-gray-600">{post.category}</span>
                                    <span>—</span>
                                    <span>{post.date}</span>
                                </div>

                                <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors leading-snug line-clamp-3">
                                    {post.title}
                                </h3>

                                <p className="text-gray-600 line-clamp-3 leading-relaxed text-sm flex-grow">
                                    {post.excerpt}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
