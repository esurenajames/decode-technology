'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Tabs, ConfigProvider } from 'antd';
import { ArrowLeftOutlined, ArrowRightOutlined, BulbOutlined } from '@ant-design/icons';

// Using the same placeholder image from Hero for now
import imgDashboard from '../assets/image 26.png';
import imgDashboardDef from '../assets/image 25.png';
import FeaturesGrid from './FeaturesGrid';

const FEATURES_DATA = [
    {
        key: 'product-analytics',
        label: 'Product Analytics',
        slides: [
            {
                heading: 'Understand product usage patterns to optimize user engagement and retention',
                tags: ['PRODUCT MANAGEMENT', 'ENGINEERING', 'GROWTH'],
                featureTitle: 'Behavioral Analytics Templates',
                featureDesc: [
                    'Rich library of reporting templates for event segmentation, retention, funnel, path, cohort etc.',
                    'Quantify and visualize user behavior without SQL or dependence on data teams.'
                ],
                image: imgDashboard
            },
            {
                heading: 'Deep dive into user cohorts',
                tags: ['DATA SCIENCE', 'GROWTH'],
                featureTitle: 'Cohort Analysis',
                featureDesc: [
                    'Group users by behavior or attributes to track retention over time.',
                    'Identify high-value user segments immediately.'
                ],
                image: imgDashboard
            }
        ]
    },
    {
        key: 'customer-journey',
        label: 'Customer Journey Analytics',
        slides: [
            {
                heading: 'Map and optimize every step of your customer’s experience',
                tags: ['MARKETING', 'SALES', 'SUPPORT'],
                featureTitle: 'Full Journey Visualization',
                featureDesc: [
                    'Track user paths across devices and platforms seamlessly.',
                    'Identify drop-off points and optimize conversion funnels in real-time.'
                ],
                image: imgDashboard
            }
        ]
    },
    {
        key: 'business-intel',
        label: 'Business Intelligence',
        slides: [
            {
                heading: 'Data-driven decisions made simple for every department',
                tags: ['EXECUTIVE', 'FINANCE', 'OPERATIONS'],
                featureTitle: 'Unified Data Dashboard',
                featureDesc: [
                    'Consolidate metrics from all your tools into one single source of truth.',
                    'Automated reporting tailored for stakeholders.'
                ],
                image: imgDashboard
            }
        ]
    },
    {
        key: 'warehouse-native',
        label: 'Warehouse-Native',
        slides: [
            {
                heading: 'Direct integration with your existing data infrastructure',
                tags: ['DATA ENGINEERING', 'IT'],
                featureTitle: 'Zero-Copy Architecture',
                featureDesc: [
                    'Analyze data directly where it lives without complex ETL pipelines.',
                    'Enterprise-grade security and compliance built-in.'
                ],
                image: imgDashboard
            }
        ]
    }
];

export default function Features() {
    const [activeTabKey, setActiveTabKey] = useState(FEATURES_DATA[0].key);
    const [slideIndex, setSlideIndex] = useState(0);

    const handleTabChange = (key: string) => {
        setActiveTabKey(key);
        setSlideIndex(0); // Reset slide on tab change
    };

    const activeFeature = FEATURES_DATA.find(f => f.key === activeTabKey) || FEATURES_DATA[0];
    const totalSlides = activeFeature.slides.length;
    const currentSlide = activeFeature.slides[slideIndex];

    const nextSlide = () => setSlideIndex((prev) => (prev + 1) % totalSlides);
    const prevSlide = () => setSlideIndex((prev) => (prev - 1 + totalSlides) % totalSlides);

    const tabItems = FEATURES_DATA.map(feature => ({
        key: feature.key,
        label: (
            <span className="px-4 py-3 text-sm font-semibold tracking-wide">
                {feature.label}
            </span>
        ),
        children: (

            <>
                <div className="flex flex-col items-center text-center max-w-2xl py-6 mx-auto animate-fadeIn px-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-primary leading-tight mb-4">
                        {currentSlide.heading}
                    </h3>

                    <div className="flex flex-wrap justify-center gap-2 text-[0.7rem] font-bold tracking-wider text-accent uppercase">
                        {currentSlide.tags.map((tag, i) => (
                            <span key={i}>
                                {tag} {i < currentSlide.tags.length - 1 && <span className="text-border mx-1">|</span>}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[300px] animate-fadeIn px-8 py-4 pb-12">
                    {/* Left Content - Feature Details & Nav */}
                    <div className="flex flex-col justify-center space-y-6">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-accent/10 text-accent">
                                    <BulbOutlined style={{ fontSize: '24px' }} />
                                </div>
                                <h4 className="text-xl font-bold text-accent">
                                    {currentSlide.featureTitle}
                                </h4>
                            </div>
                            <div className="space-y-4 text-muted pl-1">
                                {currentSlide.featureDesc.map((desc, i) => (
                                    <p key={i} className="leading-relaxed text-lg">
                                        {desc}
                                    </p>
                                ))}
                            </div>
                        </div>

                        {/* Pagination Controls */}
                        <div className="flex items-center gap-6 pt-8">
                            <button
                                onClick={prevSlide}
                                className="w-12 h-12 rounded-full border border-gray-200 bg-white text-primary shadow-sm flex items-center justify-center hover:shadow-md hover:border-accent hover:text-accent transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={totalSlides <= 1}
                            >
                                <ArrowLeftOutlined style={{ fontSize: '18px' }} />
                            </button>

                            <div className="flex gap-3">
                                {activeFeature.slides.map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`h-2.5 rounded-full transition-all duration-300 ${slideIndex === idx ? 'w-8 bg-accent' : 'w-2.5 bg-gray-300 hover:bg-gray-400'}`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={nextSlide}
                                className="w-12 h-12 rounded-full border border-gray-200 bg-white text-primary shadow-sm flex items-center justify-center hover:shadow-md hover:border-accent hover:text-accent transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={totalSlides <= 1}
                            >
                                <ArrowRightOutlined style={{ fontSize: '18px' }} />
                            </button>
                        </div>
                    </div>

                    {/* Right Content - Image */}
                    <div className="relative w-full h-full min-h-[300px] flex items-center justify-center bg-surface rounded-xl overflow-hidden shadow-inner p-4">
                        <div className="relative w-full h-full shadow-2xl rounded-lg overflow-hidden bg-white">
                            <Image
                                src={currentSlide.image}
                                alt={currentSlide.featureTitle}
                                className="object-cover object-top w-full h-full"
                                placeholder="blur"
                            />
                        </div>
                    </div>
                </div>
            </>
        )
    }));

    return (
        <section className="py-20 bg-white w-full">
            <div className="max-w-5xl mx-auto px-6">
                {/* Cannot nest ConfigProvider if already provided globally, but safe here for styling overrides if needed */}
                <ConfigProvider
                    theme={{
                        components: {
                            Tabs: {
                                inkBarColor: '#2F7FF5',
                                itemActiveColor: '#2F7FF5',
                                itemSelectedColor: '#2F7FF5',
                                itemHoverColor: '#2F7FF5',
                                titleFontSize: 16,
                            }
                        }
                    }}
                >
                    {/* <FeaturesGrid /> */}

                    <div className="rounded-3xl overflow-hidden shadow-xl shadow-primary/5 bg-white border-2 border-gray-200">
                        <Tabs
                            activeKey={activeTabKey}
                            onChange={handleTabChange}
                            items={tabItems}
                            centered={false}
                            className="custom-tabs w-full [&_.ant-tabs-nav]:w-full [&_.ant-tabs-nav-list]:w-full [&_.ant-tabs-nav-list]:justify-between [&_.ant-tabs-tab]:flex-1 [&_.ant-tabs-tab]:justify-center"
                        />
                    </div>
                </ConfigProvider>
            </div>
        </section>
    );

}
