'use client';

import { useState } from 'react';
import {
    PlusOutlined,
    MinusOutlined,
    CodeOutlined,
    CloudServerOutlined,
    SyncOutlined,
    SafetyCertificateOutlined,
    TeamOutlined,
    RocketOutlined
} from '@ant-design/icons';
import Link from 'next/link';

const FAQS = [
    {
        icon: <CodeOutlined />,
        question: "What types of custom software do you build?",
        answer: "We build a wide variety of software, ranging from enterprise-level web applications and SaaS platforms to complex integrations, workflow automation systems, and scalable e-commerce solutions tailored specifically to your business needs."
    },
    {
        icon: <SyncOutlined />,
        question: "How long does it take to develop a custom solution?",
        answer: "The timeline depends on the complexity of the project. A straightforward MVP or web portal can take 2-4 months, while large-scale enterprise systems can take 6 months to over a year. We provide detailed timeline estimates after our initial discovery phase."
    },
    {
        icon: <CloudServerOutlined />,
        question: "Do you provide hosting and ongoing maintenance?",
        answer: "Yes, we offer comprehensive post-launch support including cloud hosting management, routine maintenance, security patching, and scaling services to ensure your software remains performant as your user base grows."
    },
    {
        icon: <SafetyCertificateOutlined />,
        question: "Who owns the code and intellectual property?",
        answer: "Upon full payment, the intellectual property (IP) and source code are transferred to you. You maintain full ownership of the custom software we build for your business."
    },
    {
        icon: <TeamOutlined />,
        question: "Will I be involved during the development process?",
        answer: "Absolutely. We employ an agile methodology, which means you will be involved in regular sprint reviews. We value your feedback and ensure there is complete transparency throughout the development lifecycle."
    },
    {
        icon: <RocketOutlined />,
        question: "How do you ensure the software scales with my business?",
        answer: "We design software architectures with future growth in mind. By utilizing scalable cloud infrastructure and writing clean, modular code, we ensure your software can easily handle increased traffic, data, and user demands as your business expands."
    }
];

export default function SDFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-white py-24">
            <div className="max-w-3xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#014471] mb-4">Common Questions about Custom Software</h2>
                    <p className="text-gray-500 text-lg">
                        Everything you need to know about our custom software development process.<br className="hidden md:block" />
                        Need more help? <Link href="#contact" className="text-[#2F7FF5] font-semibold underline decoration-[#2F7FF5]/30 hover:decoration-[#2F7FF5] transition-all">Connect with our team!</Link>
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
