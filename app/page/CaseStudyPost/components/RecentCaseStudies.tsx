'use client';

import Link from 'next/link';

// Mock Data (Text Only)
const RECENT_CASE_STUDIES = [
    { id: 2, title: "Automating Logistics with IoT Solutions", date: "Jan 25, 2025" },
    { id: 3, title: "Enhancing E-commerce Security", date: "Jan 12, 2025" },
    { id: 4, title: "Data Warehouse Migration Success", date: "Jan 05, 2025" },
];

export default function RecentCaseStudies() {
    return (
        <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-6">Recent Case Studies</h4>
            <div className="flex flex-col gap-6">
                {RECENT_CASE_STUDIES.map(post => (
                    <Link href={`/case-studies/${post.id}`} key={post.id} className="group flex gap-4 items-start">
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
