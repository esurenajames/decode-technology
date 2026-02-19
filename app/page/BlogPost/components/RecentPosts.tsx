'use client';

import Link from 'next/link';

// Mock Data (Text Only)
const RECENT_POSTS = [
    { id: 2, title: "Scaling Your Business with Smart Analytics", date: "Oct 08, 2025" },
    { id: 3, title: "Why Multi-Channel Support Matters", date: "Sep 28, 2025" },
    { id: 4, title: "5 Tools to Automate Your Workflow", date: "Sep 15, 2025" },
];

export default function RecentPosts() {
    return (
        <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-6">Recent Posts</h4>
            <div className="flex flex-col gap-6">
                {RECENT_POSTS.map(post => (
                    <Link href={`/blog/${post.id}`} key={post.id} className="group flex gap-4 items-start">
                        {/* No Image */}
                        <div className="flex flex-col">
                            <h5 className="text-sm font-bold text-primary leading-snug group-hover:text-accent transition-colors line-clamp-2 mb-1">
                                {post.title}
                            </h5>
                            <span className="text-xs text-gray-400">{post.date}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
