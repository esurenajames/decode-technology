'use client';

import Link from 'next/link';
import { ReadOutlined, MailOutlined, ApiOutlined, SafetyCertificateOutlined } from '@ant-design/icons';

const RESOURCES = [
    {
        icon: <ReadOutlined className="text-3xl text-accent" />,
        title: "Getting Started Guide",
        description: "A step-by-step guide to getting set up with Postmark.",
        href: "#getting-started"
    },
    {
        icon: <MailOutlined className="text-3xl text-accent" />,
        title: "Transactional Email Guides",
        description: "Learn how to create great transactional emails.",
        href: "#email-guides"
    },
    {
        icon: <ApiOutlined className="text-3xl text-accent" />,
        title: "API Documentation",
        description: "Everything you need to know about the Postmark API.",
        href: "#api-docs"
    },
    {
        icon: <SafetyCertificateOutlined className="text-3xl text-accent" />,
        title: "DMARC Tool",
        description: "Our free tool to implement and monitor DMARC.",
        href: "#dmarc"
    },
    {
        icon: <ReadOutlined className="text-3xl text-accent" />,
        title: "Postmark Rebound",
        description: "Notify customers about delivery issues from within your web app.",
        href: "#rebound"
    },
    {
        icon: <ReadOutlined className="text-3xl text-accent" />,
        title: "Switching to Postmark?",
        description: "Check out our comprehensive migration guides.",
        href: "#migration"
    }

];

export default function HelpResources() {
    return (
        <section className="bg-white py-24 pb-32">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-primary mb-16 font-serif">Handy Resources</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {RESOURCES.map((resource, idx) => (
                        <Link
                            key={idx}
                            href={resource.href}
                            className="bg-white border text-center border-gray-100 rounded-xl p-8 flex flex-col md:flex-row gap-6 shadow-sm hover:shadow-lg transition-all duration-300 group hover:border-accent/20"
                        >
                            <div className="shrink-0 group-hover:scale-110 transition-transform duration-300">
                                {resource.icon}
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                                    {resource.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {resource.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
