'use client';

import { useState } from 'react';
import {
    PlusOutlined,
    MinusOutlined,
    SmileOutlined,
    AppstoreOutlined,
    CreditCardOutlined,
    UserAddOutlined,
    DollarOutlined,
    MailOutlined,
    MessageOutlined,
    PlayCircleOutlined
} from '@ant-design/icons';
import Link from 'next/link';

const CATEGORIES = ['General', 'Pricing', 'Dashboard', 'API'];

const FAQS = {
    General: [
        {
            icon: <SmileOutlined />,
            question: "Is there a free trial available?",
            answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free 30-minute onboarding call to get you up and running. Book a call here."
        },
        {
            icon: <AppstoreOutlined />,
            question: "Can I change my plan later?",
            answer: "Absolutely. You can upgrade or downgrade your plan at any time from your settings page. Changes take effect at the start of the next billing cycle."
        },
        {
            icon: <CreditCardOutlined />,
            question: "What is your cancellation policy?",
            answer: "You can cancel your subscription at any time. We do not offer refunds for partial months, but you will retain access until the end of your billing period."
        },
        {
            icon: <UserAddOutlined />,
            question: "Can other info be added to an invoice?",
            answer: "Yes, you can add your company name, VAT number, and address to your invoices from the billing settings."
        },
        {
            icon: <DollarOutlined />,
            question: "How does billing work?",
            answer: "We bill monthly or annually, depending on your preference. All payments are processed securely via Stripe."
        },
        {
            icon: <MailOutlined />,
            question: "How do I change my account email?",
            answer: "Go to your account settings and verify the new email address to update your login credentials."
        },
        {
            icon: <MessageOutlined />,
            question: "How does support work?",
            answer: "Our support team is available 24/7 via chat and email. Priority support involves a dedicated account manager."
        },
        {
            icon: <PlayCircleOutlined />,
            question: "Do you provide tutorials?",
            answer: "Yes, check out our YouTube channel and documentation for comprehensive guides and video tutorials."
        }
    ],
    Pricing: [
        {
            icon: <DollarOutlined />,
            question: "Do you offer discounts for non-profits?",
            answer: "Yes, providing a valid 501(c)(3) documentation entitles you to a 50% discount on all plans."
        }
    ],
    Dashboard: [],
    API: []
};

export default function FAQSection() {
    const [activeCategory, setActiveCategory] = useState('General');
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

                {/* Categories */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => { setActiveCategory(cat); setOpenIndex(null); }}
                            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeCategory === cat
                                    ? 'bg-primary text-white shadow-md'
                                    : 'bg-transparent text-gray-500 hover:bg-gray-50'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Accordion List */}
                <div className="flex flex-col gap-4">
                    {(FAQS[activeCategory as keyof typeof FAQS] || []).map((faq, idx) => (
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
                    {(FAQS[activeCategory as keyof typeof FAQS] || []).length === 0 && (
                        <p className="text-center text-gray-400 py-8">No FAQs available for this category yet.</p>
                    )}
                </div>

            </div>
        </section>
    );
}
