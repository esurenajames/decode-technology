'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftOutlined, UserOutlined } from '@ant-design/icons';
import blogHeader from '../../Blog/assets/blog-header.jpg';

export default function BlogPostHero() {
    return (
        <section className="relative w-full h-[45vh] bg-primary relative overflow-hidden">
            {/* Background Image - Matching BlogHero style */}
            <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
                <Image
                    src={blogHeader}
                    alt="Blog Cover"
                    fill
                    className="object-cover mix-blend-overlay opacity-50"
                    priority
                />
                <div className="absolute inset-0 bg-primary/90" />
            </div>

            <div className="absolute inset-0 z-10 flex flex-col justify-center items-center px-6 ">
                <div className="max-w-7xl w-full mx-auto relative h-full flex flex-col justify-center ">

                    {/* Back Button - Absolute Top Left */}
                    <div className="absolute top-0 left-0 text-white/80 hover:text-white transition-colors pt-8">
                        <Link href="/blog" className="inline-flex items-center gap-2 font-medium">
                            <ArrowLeftOutlined /> Back to Blogs
                        </Link>
                    </div>

                    {/* Centered Content */}
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto mt-12">
                        {/* Metadata Pills */}

                        {/* Title - Using large font as requested, similar to BlogHero */}
                        <h1 className="text-4xl md:text-5xl md:leading-tight font-bold text-white mb-8">
                            The Future of AI in Customer Support: Transforming Engagement
                        </h1>

                        <div className="flex flex-wrap items-center justify-center gap-6 mb-8 mt-2">
                            <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-bold">
                                Healthcare
                            </span>

                            <span className="text-white/80 text-sm font-medium">
                                Feb 10, 2025
                            </span>

                            <div className="hidden md:block w-px h-8 bg-white/20 mx-2"></div>

                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                                    <UserOutlined />
                                </div>
                                <div className="text-left leading-tight">
                                    <p className="font-bold text-sm text-white">James Wilson</p>
                                    <p className="text-xs text-white/60">Senior Solutions Architect</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
