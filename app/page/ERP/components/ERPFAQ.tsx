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
        question: "What modules are included in the core ERP package?",
        answer: "Our core ERP package includes HR & Payroll, Inventory Management, Purchasing, and Sales & CRM modules. Additional industry-specific modules can be added as needed."
    },
    {
        icon: <TeamOutlined />,
        question: "Is there a limit to how many users we can have?",
        answer: "No, our enterprise plans offer unlimited user seats with granular role-based access control, so you can onboard your entire organization seamlessly."
    },
    {
        icon: <DollarOutlined />,
        question: "How is the pricing structured?",
        answer: "We offer tier-based pricing depending on your company's data volume and required modules. We also provide custom enterprise agreements for large-scale deployments."
    },
    {
        icon: <SettingOutlined />,
        question: "How long does a typical implementation take?",
        answer: "Implementation timelines vary by organization size and complexity, but our structured onboarding typically ranges from 4 to 12 weeks, including data migration and team training."
    },
    {
        icon: <CloudSyncOutlined />,
        question: "Do you assist with data migration from legacy systems?",
        answer: "Absolutely. Our dedicated deployment team handles the end-to-end data migration process to ensure a smooth transition from your old systems with zero data loss."
    },
    {
        icon: <CloudSyncOutlined />,
        question: "Can this ERP integrate with our existing software?",
        answer: "Yes, we provide REST APIs, webhooks, and over 100+ native integrations (including Salesforce, Stripe, and AWS) to easily sync with your existing tech stack."
    },
    {
        icon: <LockOutlined />,
        question: "Where is our data stored and how is it secured?",
        answer: "Data is hosted on enterprise-grade cloud infrastructure (AWS/GCP) with SOC2 compliance, end-to-end encryption, and continuous automated backups."
    }
];

export default function ERPFAQ() {
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
                        These are the most commonly asked questions about our services.<br className="hidden md:block" />
                        Can't find what you're looking for? <Link href="#contact" className="text-accent font-semibold underline decoration-accent/30 hover:decoration-accent transition-all">Chat to our friendly team!</Link>
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
