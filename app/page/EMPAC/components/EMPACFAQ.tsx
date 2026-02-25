'use client';

import { useState } from 'react';
import {
    PlusOutlined,
    MinusOutlined,
    MobileOutlined,
    WalletOutlined,
    BookOutlined,
    FileTextOutlined,
    LockOutlined,
    UserOutlined
} from '@ant-design/icons';
import Link from 'next/link';

const FAQS = [
    {
        icon: <MobileOutlined />,
        question: "Is EMPAC mobile-friendly?",
        answer: "EMPAC is designed to be mobile-friendly, allowing teachers, students, and parents to access the platform from smartphones and tablets, ensuring flexible access anytime, anywhere."
    },
    {
        icon: <WalletOutlined />,
        question: "Does EMPAC support online payments?",
        answer: "Yes, EMPAC includes a secure online payment module that allows parents to pay tuition, fees, and other expenses conveniently. The system supports multiple payment methods and provides real-time transaction updates."
    },
    {
        icon: <BookOutlined />,
        question: "What are the online learning features?",
        answer: "EMPAC provides a robust online learning platform where teachers can upload lessons, assignments, and quizzes, while students can submit work, access resources, and track their progress, making remote learning straightforward and accessible."
    },
    {
        icon: <FileTextOutlined />,
        question: "What administrative tools are included?",
        answer: "EMPAC includes tools for attendance tracking, grading, scheduling, parent-teacher communication, report generation, and access to real-time data, streamlining school management and daily administrative tasks."
    },
    {
        icon: <LockOutlined />,
        question: "Is student and financial data secure?",
        answer: "EMPAC uses robust security measures such as data encryption, user authentication, and secure payment gateways to protect both student data and financial transactions, ensuring privacy and safety."
    },
    {
        icon: <UserOutlined />,
        question: "How can parents stay involved?",
        answer: "Parents can use EMPAC to monitor their child’s attendance, grades, assignments, and progress. They also receive notifications on school events and updates, keeping them actively engaged in their child’s education journey."
    }
];

export default function EMPACFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-white py-24">
            <div className="max-w-3xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#014471] mb-4">Common Questions about EMPAC</h2>
                    <p className="text-gray-500 text-lg">
                        Everything you need to know about our School & Learning Management System.<br className="hidden md:block" />
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
                                <div className={`w-12 h-12 shrink-0 rounded-xl border flex items-center justify-center text-xl transition-colors duration-300 ${openIndex === idx ? 'bg-[#2F7FF5]/10 border-[#2F7FF5]/20 text-[#2F7FF5]' : 'bg-white border-gray-200 text-gray-700 group-hover:border-[#2F7FF5]/30'
                                    }`}>
                                    {faq.icon}
                                </div>

                                <div className="flex-grow pt-2">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-lg font-bold text-[#014471]">{faq.question}</h3>
                                        <div className="text-gray-400 group-hover:text-[#2F7FF5] transition-colors ml-4">
                                            {openIndex === idx ? <MinusOutlined className="text-sm" /> : <PlusOutlined className="text-sm" />}
                                        </div>
                                    </div>

                                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-60 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
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
