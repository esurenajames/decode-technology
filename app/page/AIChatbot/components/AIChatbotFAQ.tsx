'use client';

import { useState } from 'react';
import {
    AppstoreOutlined,
    ApiOutlined,
    MessageOutlined,
    UserOutlined,
    GlobalOutlined,
    TeamOutlined,
    BarChartOutlined,
} from '@ant-design/icons';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

const FAQS = [
    {
        icon: <AppstoreOutlined />,
        question: 'Which industries can the AI Chatbot be used in?',
        answer: 'Our AI chatbot is versatile and can be customised for virtually any industry — including e-commerce, healthcare, finance, education, and customer support. It is built to enhance engagement, automate responses, and streamline operations for any business that needs efficient, always-on customer interactions.',
    },
    {
        icon: <ApiOutlined />,
        question: 'Which platforms and systems does it integrate with?',
        answer: 'The chatbot integrates seamlessly with websites, CRM systems, and messaging apps like WhatsApp and Facebook Messenger, as well as social media channels. We provide a straightforward API so you can plug it into your existing stack without disruption.',
    },
    {
        icon: <MessageOutlined />,
        question: 'Can it handle complex, multi-step conversations?',
        answer: 'Yes. Powered by advanced Natural Language Processing (NLP), the chatbot understands context and intent — not just keywords. It can guide customers through multi-step flows such as booking appointments, troubleshooting issues, or making product recommendations.',
    },
    {
        icon: <UserOutlined />,
        question: 'Does the chatbot personalise conversations for each customer?',
        answer: 'Absolutely. The chatbot uses customer data — including past interactions, preferences, and purchase history — to tailor every response. No two conversations feel the same, giving each customer a uniquely relevant experience.',
    },
    {
        icon: <GlobalOutlined />,
        question: 'Does it support multiple languages?',
        answer: 'Yes. Our chatbot supports multiple languages, making it ideal for businesses with a global customer base. NLP ensures accurate, context-appropriate responses in each supported language — so your customers always feel understood.',
    },
    {
        icon: <TeamOutlined />,
        question: 'How does the chatbot help with lead generation?',
        answer: 'The chatbot proactively engages visitors, captures contact details, and qualifies leads against your preset criteria. It then nurtures those relationships with personalised recommendations and timely follow-ups, helping convert prospects into loyal customers.',
    },
    {
        icon: <BarChartOutlined />,
        question: 'What analytics and reporting does it provide?',
        answer: 'You get a full analytics dashboard tracking user behaviour, engagement metrics, and the most common queries. These insights let you continuously improve your service, spot emerging trends, and make data-driven decisions to boost customer satisfaction.',
    },
];

export default function AIChatbotFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

    return (
        <section className="bg-white py-24 px-12">
            <div className="max-w-3xl mx-auto">

                {/* ── Top ── */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
                    <div>
                        <span className="text-primary text-xs font-mono tracking-widest block mb-3">
                            [ FAQ ]
                        </span>
                        <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                            AI Chatbot FAQs
                        </h2>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-xs md:text-right">
                        Still have questions?{' '}
                        <a href="#" className="text-primary font-semibold hover:underline">
                            Chat with us
                        </a>
                    </p>
                </div>


                {/* ── Bottom: FAQSection.tsx accordion style ── */}
                <div className="flex flex-col gap-4">
                    {FAQS.map((faq, idx) => (
                        <div key={idx} className="border-b border-gray-100 last:border-0 pb-6 mb-2">
                            <button
                                onClick={() => toggle(idx)}
                                className="w-full flex items-start gap-6 text-left group"
                            >
                                {/* Icon badge */}
                                <div
                                    className={`w-12 h-12 shrink-0 rounded-xl border flex items-center justify-center text-xl transition-colors duration-300 ${openIndex === idx
                                        ? 'bg-accent/10 border-accent/20 text-accent'
                                        : 'bg-white border-gray-200 text-gray-700 group-hover:border-accent/30'
                                        }`}
                                >
                                    {faq.icon}
                                </div>

                                <div className="flex-grow pt-2">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-lg font-bold text-primary">{faq.question}</h3>
                                        <div className="text-gray-400 group-hover:text-accent transition-colors ml-4">
                                            {openIndex === idx
                                                ? <MinusOutlined className="text-sm" />
                                                : <PlusOutlined className="text-sm" />
                                            }
                                        </div>
                                    </div>

                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'
                                            }`}
                                    >
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
