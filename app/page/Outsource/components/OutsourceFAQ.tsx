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
    TeamOutlined
} from '@ant-design/icons';
import Link from 'next/link';

const FAQS = [
    {
        icon: <ThunderboltOutlined />,
        question: "How do you source and vet top talent?",
        answer: "We leverage a rigorous screening process that includes technical assessments, behavioral interviews, and reference checks to ensure we provide highly skilled and culturally aligned professionals."
    },
    {
        icon: <TeamOutlined />,
        question: "How do outsourced teams integrate with our internal staff?",
        answer: "Our professionals are trained to seamlessly blend into your existing workflows, using your preferred communication and project management tools."
    },
    {
        icon: <DollarOutlined />,
        question: "What is your pricing model for outsourcing?",
        answer: "We offer flexible, competitive pricing tailored to your specific needs, whether you require dedicated teams, project-based support, or staff augmentation."
    },
    {
        icon: <SettingOutlined />,
        question: "How quickly can you scale our team up or down?",
        answer: "Our extensive talent network allows us to rapidly ramp up resources within weeks, giving you the agility to respond to changing market demands."
    },
    {
        icon: <CloudSyncOutlined />,
        question: "Do you handle all administrative and HR tasks?",
        answer: "Yes, we handle payroll, benefits, compliance, and other HR responsibilities, allowing you to focus purely on managing the team's output."
    },
    {
        icon: <LockOutlined />,
        question: "How do you ensure data security and confidentiality?",
        answer: "We enforce strict security protocols, including NDA agreements, secure network access, and continuous monitoring to protect your sensitive intellectual property."
    }
];

export default function OutsourceFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-white py-24">
            <div className="max-w-3xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#014471] mb-4">Common Questions about Outsourcing</h2>
                    <p className="text-gray-500 text-lg">
                        Everything you need to know about our Outsourcing services.<br className="hidden md:block" />
                        Need more help? <Link href="#contact" className="text-[#2F7FF5] font-semibold underline decoration-[#2F7FF5]/30 hover:decoration-[#2F7FF5] transition-all">Connect with our support team!</Link>
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
                    {FAQS.length === 0 && (
                        <p className="text-center text-gray-400 py-8">No FAQs available yet.</p>
                    )}
                </div>

            </div>
        </section>
    );
}
