'use client';

import { QuestionOutlined, CustomerServiceOutlined, MessageOutlined } from '@ant-design/icons';
import Link from 'next/link';

const SUPPORT_OPTIONS = [
    {
        icon: <QuestionOutlined className="text-5xl text-accent" />,
        title: "Frequently Asked Questions",
        action: "Browse FAQs",
        href: "#faqs"
    },
    {
        icon: <CustomerServiceOutlined className="text-5xl text-accent" />,
        title: "Contact our Support Team",
        action: "Get Help",
        href: "#contact"
    },
    {
        icon: <MessageOutlined className="text-5xl text-accent" />,
        title: "Community Forums",
        action: "Join Discussion",
        href: "#community"
    }
];

export default function SupportOptions() {
    return (
        <section className="relative -mt-24 pb-24 z-20">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-primary">
                {SUPPORT_OPTIONS.map((option, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-center"
                    >
                        <div className="bg-primary/5 w-24 h-24 rounded-full flex items-center justify-center mb-6">
                            {option.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-3">{option.title}</h3>
                        <p className="text-gray-500 mb-6">Need Support?</p>

                        <Link
                            href={option.href}
                            className="text-accent font-bold hover:text-accent-light hover:underline transition-colors"
                        >
                            {option.action}
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}
