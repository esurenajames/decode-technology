'use client';

import { useState } from 'react';
import {
    PlusOutlined,
    MinusOutlined,
    SettingOutlined,
    CloudSyncOutlined,
    ThunderboltOutlined,
    ReadOutlined,
    MobileOutlined,
    SafetyCertificateOutlined,
    TeamOutlined,
    PieChartOutlined,
    NodeIndexOutlined
} from '@ant-design/icons';
import Link from 'next/link';

const FAQS = [
    {
        icon: <ReadOutlined />,
        question: "How does EES Workforce Elevate centralize learning?",
        answer: "It provides a unified platform to store, manage, and deliver learning materials. This ensures easy access to all resources, maintains consistency across the organization, and eliminates redundancy in training efforts."
    },
    {
        icon: <MobileOutlined />,
        question: "Is the platform accessible on mobile devices?",
        answer: "Yes, Elevate is designed for today's mobile workforce. Employees can access training materials and complete courses from any mobile device, ensuring that learning is convenient and accessible anytime, anywhere."
    },
    {
        icon: <PieChartOutlined />,
        question: "What kind of analytics and tracking are provided?",
        answer: "Trainers can monitor progress through detailed dashboards displaying completion rates, exam scores, and engagement metrics. This data-driven approach helps identify skill gaps and refine training strategies."
    },
    {
        icon: <TeamOutlined />,
        question: "Does it support live sessions and web conferencing?",
        answer: "Absolutely. Elevate includes built-in web conferencing for live interactive sessions. This allows real-time engagement between trainers and trainees without needing external tools."
    },
    {
        icon: <SafetyCertificateOutlined />,
        question: "How are assessments and certifications handled?",
        answer: "The platform includes tools for quizzes, assessments, and automated certification. This confirms employees meet essential skill requirements and provides them with verifiable proof of completion."
    },
    {
        icon: <NodeIndexOutlined />,
        question: "Can it integrate with HRIS and Payroll systems?",
        answer: "Yes, it integrates seamlessly with EES Workforce HRIS and Payroll. This connectivity centralizes employee data and updates training records automatically, streamlining administrative tasks."
    },
    {
        icon: <ThunderboltOutlined />,
        question: "Is the training solution cost-effective and scalable?",
        answer: "Yes, it reduces costs associated with traditional training like travel and printing. It scales easily to accommodate a growing workforce across various locations without a proportional increase in costs."
    }
];

export default function ElevateFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-gray-50 py-24">
            <div className="max-w-5xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#014471] mb-4">Common Questions about Elevate</h2>
                    <p className="text-gray-500 text-lg">
                        Everything you need to know about our School & Learning Management System.<br className="hidden md:block" />
                        Need more help? <Link href="#contact" className="text-[#2F7FF5] font-semibold underline decoration-[#2F7FF5]/30 hover:decoration-[#2F7FF5] transition-all">Connect with our support team!</Link>
                    </p>
                </div>
                
                {/* Accordion List */}
                <div className="flex flex-col gap-4 max-w-3xl mx-auto">
                    {FAQS.map((faq, idx) => (
                        <div key={idx} className="border-b border-gray-100 last:border-0 pb-6 mb-2">
                            <button
                                onClick={() => toggleAccordion(idx)}
                                className="w-full flex items-start gap-6 text-left group"
                            >
                                {/* Icon */}
                                <div className={`w-12 h-12 shrink-0 rounded-lg border flex items-center justify-center text-xl transition-colors duration-300 ${openIndex === idx ? 'bg-accent/10 border-accent/20 text-accent' : 'bg-white border-gray-200 text-gray-700 group-hover:border-accent/30'
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

                                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
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
