'use client';

import { useState } from 'react';
import {
    PlusOutlined,
    MinusOutlined,
    SettingOutlined,
    LockOutlined,
    CloudSyncOutlined,
    DollarOutlined,
    ThunderboltOutlined,
    ReadOutlined
} from '@ant-design/icons';
import Link from 'next/link';

const FAQS = [
    {
        icon: <ThunderboltOutlined />,
        question: "Can we migrate our existing SCORM/xAPI content?",
        answer: "Yes, Elevate is fully compatible with industry standards like SCORM 1.2/2004 and xAPI. You can import your existing library in minutes."
    },
    {
        icon: <ReadOutlined />,
        question: "Does Elevate support mobile learning?",
        answer: "Absolutely. Our platform is fully responsive and offers a dedicated mobile app experiences, allowing your team to learn anytime, anywhere—even offline."
    },
    {
        icon: <DollarOutlined />,
        question: "How is the pricing for Elevate structured?",
        answer: "Our pricing is transparent and based on the number of active learners per month. We offer tiers for small teams up to global enterprises."
    },
    {
        icon: <SettingOutlined />,
        question: "Can we customize the platform with our own branding?",
        answer: "Yes, you can white-label the platform with your company logo, colors, and custom domain to create a seamless brand experience for your learners."
    },
    {
        icon: <CloudSyncOutlined />,
        question: "What kind of analytics and reporting are available?",
        answer: "We provide deep insights into learner progress, course effectiveness, and skill development through customizable dashboards and automated exports."
    },
    {
        icon: <LockOutlined />,
        question: "Is the platform secure for proprietary company data?",
        answer: "Data security is our top priority. We use enterprise-grade encryption and comply with global privacy standards to ensure your content stays protected."
    }
];

export default function ElevateFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-white py-24">
            <div className="max-w-3xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Frequently asked questions</h2>
                    <p className="text-gray-500 text-lg">
                        Common questions about the Elevate platform.<br className="hidden md:block" />
                        Need more help? <Link href="#contact" className="text-accent font-semibold underline decoration-accent/30 hover:decoration-accent transition-all">Chat to our friendly team!</Link>
                    </p>
                </div>

                {/* Accordion List */}
                <div className="flex flex-col gap-4">
                    {FAQS.map((faq, idx) => (
                        <div key={idx} className="border-b border-gray-100 last:border-0 pb-6 mb-2">
                            <button
                                onClick={() => toggleAccordion(idx)}
                                className="w-full flex items-start gap-6 text-left group"
                            >
                                {/* Icon */}
                                <div className={`w-12 h-12 shrink-0 rounded-xl border flex items-center justify-center text-xl transition-colors duration-300 ${openIndex === idx ? 'bg-accent/10 border-accent/20 text-accent' : 'bg-white border-gray-200 text-gray-700 group-hover:border-accent/30'
                                    }`}>
                                    {faq.icon}
                                </div>

                                <div className="flex-grow pt-2">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-lg font-bold text-primary">{faq.question}</h3>
                                        <div className="text-gray-400 group-hover:text-accent transition-colors ml-4">
                                            {openIndex === idx ? <MinusOutlined className="text-sm" /> : <PlusOutlined className="text-sm" />}
                                        </div>
                                    </div>

                                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                                        <p className="text-gray-500 leading-relaxed pr-8">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </button>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
