'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Tabs, ConfigProvider } from 'antd';
import { ArrowLeftOutlined, ArrowRightOutlined, TeamOutlined, InboxOutlined, ShoppingCartOutlined, LineChartOutlined } from '@ant-design/icons';

// Reusing existing assets
import imgDashboard from '../../Landing/assets/image 26.png';
import imgDashboardDef from '../../Landing/assets/image 25.png';

const FEATURES_DATA = [
    {
        key: 'hr-payroll',
        label: 'HR & Payroll',
        tabIcon: <TeamOutlined />,
        slides: [
            {
                heading: 'Automate workforce management from hire to retire',
                tags: ['HUMAN RESOURCES', 'PAYROLL', 'COMPLIANCE'],
                featureTitle: 'Comprehensive Employee Profiles',
                featureDesc: [
                    'Centralize employee data, track attendance, and manage performance reviews.',
                    'Automate payroll processing with built-in tax and compliance checks.'
                ],
                icon: <TeamOutlined style={{ fontSize: '24px' }} />,
                image: imgDashboard
            },
            {
                heading: 'Empower teams with Self-Service Portals',
                tags: ['EMPLOYEE ENGAGEMENT', 'OPERATIONS'],
                featureTitle: 'Self-Service Made Simple',
                featureDesc: [
                    'Allow employees to access paystubs, request leave, and update details independently.',
                    'Reduce HR overhead and streamline approval workflows.'
                ],
                icon: <TeamOutlined style={{ fontSize: '24px' }} />,
                image: imgDashboardDef
            }
        ]
    },
    {
        key: 'inventory',
        label: 'Inventory',
        tabIcon: <InboxOutlined />,
        slides: [
            {
                heading: 'Real-time visibility into your entire supply chain',
                tags: ['WAREHOUSING', 'LOGISTICS'],
                featureTitle: 'Smart Stock Management',
                featureDesc: [
                    'Track stock movements across multiple warehouses instantly.',
                    'Set automated reorder points to prevent stockouts and reduce excess inventory.'
                ],
                icon: <InboxOutlined style={{ fontSize: '24px' }} />,
                image: imgDashboardDef
            }
        ]
    },
    {
        key: 'purchasing',
        label: 'Purchasing',
        tabIcon: <ShoppingCartOutlined />,
        slides: [
            {
                heading: 'Simplify procurement and vendor relationship management',
                tags: ['PROCUREMENT', 'FINANCE'],
                featureTitle: 'Automated Purchase Orders',
                featureDesc: [
                    'Streamline approval workflows for purchase requests to ensure policy compliance.',
                    'Track vendor performance and manage supplier contracts seamlessly.'
                ],
                icon: <ShoppingCartOutlined style={{ fontSize: '24px' }} />,
                image: imgDashboard
            }
        ]
    },
    {
        key: 'sales-crm',
        label: 'Sales & CRM',
        tabIcon: <LineChartOutlined />,
        slides: [
            {
                heading: 'Accelerate growth with integrated customer views',
                tags: ['SALES', 'CUSTOMER SUCCESS'],
                featureTitle: 'Unified Sales Pipeline',
                featureDesc: [
                    'Manage leads, track opportunities, and forecast revenue accurately.',
                    'Access complete customer histories to drive better engagement and retention.'
                ],
                icon: <LineChartOutlined style={{ fontSize: '24px' }} />,
                image: imgDashboardDef
            }
        ]
    }
];

export default function ERPFeatures() {
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
            <div className={`flex items-center justify-center gap-2 py-4 text-sm font-semibold tracking-wide transition-colors ${activeTabKey === feature.key ? 'text-[#19253b]' : 'text-gray-600'}`}>
                <span className="text-lg flex items-center">{feature.tabIcon}</span>
                <span>{feature.label}</span>
            </div>
        ),
        children: (
            <div className="bg-white rounded-b-3xl pb-8 border-t-0 border border-gray-100">
                <div className="flex flex-col items-center text-center max-w-2xl py-8 mx-auto animate-fadeIn px-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#19253b] leading-tight mb-4">
                        {currentSlide.heading}
                    </h3>

                    <div className="flex flex-wrap justify-center gap-2 text-[0.7rem] font-bold tracking-wider text-gray-500 uppercase">
                        {currentSlide.tags.map((tag, i) => (
                            <span key={i}>
                                {tag} {i < currentSlide.tags.length - 1 && <span className="text-gray-300 mx-1">|</span>}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[300px] animate-fadeIn px-8 pb-4">
                    {/* Left Content - Feature Details & Nav */}
                    <div className="flex flex-col justify-center space-y-6">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-gray-200 text-gray-700 shadow-sm">
                                    {currentSlide.icon}
                                </div>
                                <h4 className="text-xl font-bold text-gray-800">
                                    {currentSlide.featureTitle}
                                </h4>
                            </div>
                            <div className="space-y-4 text-gray-600 pl-1">
                                {currentSlide.featureDesc.map((desc, i) => (
                                    <p key={i} className="leading-relaxed text-base font-medium">
                                        {desc}
                                    </p>
                                ))}
                            </div>
                        </div>

                        {/* Pagination Controls */}
                        <div className="flex items-center gap-6 pt-6">
                            <button
                                onClick={prevSlide}
                                className="w-10 h-10 rounded-full border border-gray-300 bg-white text-gray-600 shadow-sm flex items-center justify-center hover:shadow-md hover:border-gray-500 hover:text-gray-800 transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={totalSlides <= 1}
                            >
                                <ArrowLeftOutlined style={{ fontSize: '16px' }} />
                            </button>

                            <div className="flex gap-2">
                                {activeFeature.slides.map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`h-2 rounded-full transition-all duration-300 ${slideIndex === idx ? 'w-8 bg-gray-600' : 'w-2 bg-gray-300 hover:bg-gray-400'}`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={nextSlide}
                                className="w-10 h-10 rounded-full border border-gray-300 bg-white text-gray-600 shadow-sm flex items-center justify-center hover:shadow-md hover:border-gray-500 hover:text-gray-800 transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={totalSlides <= 1}
                            >
                                <ArrowRightOutlined style={{ fontSize: '16px' }} />
                            </button>
                        </div>
                    </div>

                    {/* Right Content - Image */}
                    <div className="relative w-full h-full min-h-[300px] flex items-center justify-center overflow-hidden p-2">
                        <div className="relative w-full shadow-lg rounded-xl overflow-hidden bg-white border border-gray-200">
                            <Image
                                src={currentSlide.image}
                                alt={currentSlide.featureTitle}
                                className="object-cover object-top w-full h-auto max-h-[400px]"
                                placeholder="blur"
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }));

    return (
        <section id="features" className="py-24 bg-white w-full">
            <div className="max-w-5xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#19253b] leading-tight">
                        One System. Endless Possibilities.
                    </h2>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
                        Empowered Enterprise Suite (EES) provides a unified digital ecosystem to streamline every aspect of your business operations.
                    </p>
                </div>

                <ConfigProvider
                    theme={{
                        components: {
                            Tabs: {
                                inkBarColor: '#4B5563', // gray-600 instead of blue
                                itemActiveColor: '#4B5563',
                                itemSelectedColor: '#19253b',
                                itemHoverColor: '#4B5563',
                                titleFontSize: 16,
                            }
                        }
                    }}
                >
                    <div className="rounded-3xl shadow-xl shadow-gray-200/50 bg-white">
                        <Tabs
                            activeKey={activeTabKey}
                            onChange={handleTabChange}
                            items={tabItems}
                            centered={false}
                            className="custom-tabs w-full [&_.ant-tabs-nav]:w-full [&_.ant-tabs-nav]:mb-0 [&_.ant-tabs-nav]:bg-gray-50 [&_.ant-tabs-nav]:rounded-t-3xl [&_.ant-tabs-nav::before]:hidden [&_.ant-tabs-nav-list]:w-full [&_.ant-tabs-nav-list]:justify-between [&_.ant-tabs-tab]:flex-1 [&_.ant-tabs-tab]:justify-center [&_.ant-tabs-tab]:m-0 [&_.ant-tabs-tab]:p-0 [&_.ant-tabs-tab]:border-r [&_.ant-tabs-tab]:border-gray-200 [&_.ant-tabs-tab]:border-b [&_.ant-tabs-tab:last-child]:border-r-0 [&_.ant-tabs-tab.ant-tabs-tab-active]:!bg-white [&_.ant-tabs-tab.ant-tabs-tab-active]:!border-b-white [&_.ant-tabs-ink-bar]:hidden hover:[&_.ant-tabs-tab:not(.ant-tabs-tab-active)]:bg-gray-100/50 [&_.ant-tabs-tab-btn]:w-full"
                        />
                    </div>
                </ConfigProvider>
            </div>
        </section>
    );
}
