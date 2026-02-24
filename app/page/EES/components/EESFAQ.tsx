'use client';

import { useState } from 'react';
import {
    PlusOutlined,
    MinusOutlined,
    SyncOutlined,
    LockOutlined,
    CloudSyncOutlined,
    DollarOutlined,
    ThunderboltOutlined,
    TeamOutlined,
    SafetyCertificateOutlined,
    FileDoneOutlined
} from '@ant-design/icons';
import Link from 'next/link';

const FAQS = [
    {
        icon: <SyncOutlined />,
        question: "How does the Biometric Integration work?",
        answer: "We seamlessly connect with most existing biometric devices. Clock-in data is synced in real-time to the dashboard, automatically calculating work hours, late arrivals, and overtime for payroll processing."
    },
    {
        icon: <FileDoneOutlined />,
        question: "Does the system generate government-mandated reports?",
        answer: "Yes, EES Workforce automatically generates reports for SSS, PhilHealth, Pag-IBIG, and BIR (including 2316 forms and alpha-lists) ensuring total compliance with Philippine labor laws."
    },
    {
        icon: <DollarOutlined />,
        question: "How accurate is the automated payroll?",
        answer: "Our system eliminates 99% of manual entry errors by pulling data directly from attendance logs and pre-configured loan/deduction tables, ensuring 100% precision in every pay cycle."
    },
    {
        icon: <TeamOutlined />,
        question: "What features are available in the Employee Self-Service (ESS)?",
        answer: "Employees can view pay-slips, file leave requests, clock-in via mobile (optional), update personal info, and track their loan balances—all without needing to visit the HR office."
    },
    {
        icon: <ThunderboltOutlined />,
        question: "How long does the 30-day deployment take?",
        answer: "Our 'D3 Deployment Plan' is designed to go live in exactly 30 days. This includes discovery, system configuration based on your workflow, and full team training."
    },
    {
        icon: <LockOutlined />,
        question: "Is our employee data secure?",
        answer: "Absolutely. We use enterprise-grade encryption (AES-256) and host our data on secure, SOC2-compliant cloud servers with daily automated backups."
    },
    {
        icon: <SafetyCertificateOutlined />,
        question: "Can we customize company-specific policies?",
        answer: "Yes, our system is highly flexible. You can configure custom leave types, specific overtime rules, shift schedules, and approval hierarchies to match your unique HR processes."
    }
];

export default function EESFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-white py-24">
            <div className="max-w-3xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Common Questions about EES</h2>
                    <p className="text-gray-500 text-lg">
                        Everything you need to know about our HRIS and Payroll solution.<br className="hidden md:block" />
                        Need more help? <Link href="#contact" className="text-accent font-semibold underline decoration-accent/30 hover:decoration-accent transition-all">Connect with our support team!</Link>
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

                                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-60 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
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
