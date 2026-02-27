'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
    BankOutlined, AccountBookOutlined, MoneyCollectOutlined, FileDoneOutlined, CreditCardOutlined, PieChartOutlined,
    TeamOutlined, UserAddOutlined, RiseOutlined, ClockCircleOutlined, CalendarOutlined, ReadOutlined,
    InboxOutlined, AppstoreOutlined, NodeIndexOutlined, ShoppingCartOutlined, ShopOutlined, CarOutlined,
    ContactsOutlined, LineChartOutlined, NotificationOutlined, CustomerServiceOutlined, ToolOutlined, TagOutlined,
    CheckSquareOutlined, FieldTimeOutlined, FlagOutlined, BarChartOutlined, FundProjectionScreenOutlined,
    DashboardOutlined, ExportOutlined, LockOutlined, FileTextFilled, RobotFilled, MessageFilled,
    CloseOutlined
} from '@ant-design/icons';

const smallFeatures = [
    { name: 'Finance', icon: BankOutlined, description: 'Manage your company\'s financial health with real-time cash flow tracking, multi-currency support, and automated financial reporting across all departments.' },
    { name: 'Accounting', icon: AccountBookOutlined, description: 'Streamline your bookkeeping with automated journal entries, bank reconciliation, and compliance-ready financial statements for hassle-free audits.' },
    { name: 'Payroll', icon: MoneyCollectOutlined, description: 'Process employee salaries, deductions, bonuses, and tax filings accurately and on time with automated payroll calculations and direct deposits.' },
    { name: 'Invoicing', icon: FileDoneOutlined, description: 'Create professional invoices, track payments, and send automated reminders to ensure timely collections and improved cash flow.' },
    { name: 'Expenses', icon: CreditCardOutlined, description: 'Track and manage employee expenses with receipt scanning, approval workflows, and policy enforcement to control company spending.' },
    { name: 'Budgeting', icon: PieChartOutlined, description: 'Plan and monitor budgets across departments with forecasting tools, variance analysis, and real-time spending alerts.' },
    { name: 'HR', icon: TeamOutlined, description: 'Centralize all human resource operations including employee records, organizational charts, and compliance documentation in one unified platform.' },
    { name: 'Recruitment', icon: UserAddOutlined, description: 'Attract and hire top talent with job posting management, applicant tracking, interview scheduling, and onboarding automation.' },
    { name: 'Performance', icon: RiseOutlined, description: 'Drive employee growth with goal setting, performance reviews, 360-degree feedback, and development planning tools.' },
    { name: 'Attendance', icon: ClockCircleOutlined, description: 'Monitor employee attendance with biometric integration, geo-fencing, shift management, and overtime tracking in real time.' },
    { name: 'Leave Mgmt', icon: CalendarOutlined, description: 'Simplify leave requests and approvals with configurable leave policies, holiday calendars, and automatic balance calculations.' },
    { name: 'Training', icon: ReadOutlined, description: 'Develop your workforce with learning management, course assignments, certification tracking, and skill gap analysis tools.' },
    { name: 'Inventory', icon: InboxOutlined, description: 'Maintain optimal stock levels with real-time inventory tracking, automated reorder points, batch management, and multi-warehouse support.' },
    { name: 'Warehousing', icon: AppstoreOutlined, description: 'Optimize warehouse operations with bin management, pick-pack-ship workflows, barcode scanning, and space utilization analytics.' },
    { name: 'Supply Chain', icon: NodeIndexOutlined, description: 'Gain end-to-end visibility into your supply chain with demand forecasting, supplier collaboration, and logistics optimization.' },
    { name: 'Purchasing', icon: ShoppingCartOutlined, description: 'Streamline procurement with purchase requisitions, vendor comparisons, approval workflows, and automated purchase order generation.' },
    { name: 'Vendors', icon: ShopOutlined, description: 'Manage supplier relationships with vendor scorecards, contract management, payment tracking, and performance evaluation tools.' },
    { name: 'Logistics', icon: CarOutlined, description: 'Coordinate shipping and delivery operations with route optimization, carrier management, shipment tracking, and delivery scheduling.' },
    { name: 'CRM', icon: ContactsOutlined, description: 'Build stronger customer relationships with contact management, interaction history, pipeline tracking, and customer segmentation.' },
    { name: 'Sales', icon: LineChartOutlined, description: 'Accelerate revenue growth with lead management, opportunity tracking, quotation builder, and sales forecasting dashboards.' },
    { name: 'Marketing', icon: NotificationOutlined, description: 'Launch and manage marketing campaigns across channels with audience targeting, content scheduling, and ROI measurement tools.' },
    { name: 'Support', icon: CustomerServiceOutlined, description: 'Deliver exceptional customer service with multi-channel support, knowledge base, SLA management, and customer satisfaction tracking.' },
    { name: 'Helpdesk', icon: ToolOutlined, description: 'Resolve issues efficiently with ticket routing, priority management, escalation rules, and self-service portal for common queries.' },
    { name: 'Ticketing', icon: TagOutlined, description: 'Track and manage service requests with customizable ticket workflows, automated assignments, and resolution time analytics.' },
    { name: 'Security', icon: LockOutlined, description: 'Protect your business data with role-based access control, audit trails, encryption, and compliance monitoring across all modules.' },
    { name: 'Tasks', icon: CheckSquareOutlined, description: 'Organize and track work with task assignments, priority levels, due dates, dependencies, and progress monitoring for teams.' },
    { name: 'Timesheets', icon: FieldTimeOutlined, description: 'Log and track billable hours with project-based timesheets, approval workflows, and integration with payroll and invoicing.' },
    { name: 'Milestones', icon: FlagOutlined, description: 'Set and track project milestones with deadline monitoring, progress indicators, and automated notifications for stakeholders.' },
    { name: 'Reporting', icon: BarChartOutlined, description: 'Generate comprehensive reports with drag-and-drop report builder, scheduled delivery, and cross-module data consolidation.' },
    { name: 'Analytics', icon: FundProjectionScreenOutlined, description: 'Unlock business insights with advanced analytics, trend analysis, predictive modeling, and interactive data visualizations.' },
    { name: 'Dashboards', icon: DashboardOutlined, description: 'Monitor KPIs at a glance with customizable dashboards, real-time widgets, and role-specific views for every team member.' },
    { name: 'Export', icon: ExportOutlined, description: 'Export your data in multiple formats including PDF, Excel, and CSV with customizable templates and scheduled exports.' },
];

const coreFeatures = [
    { key: 'projects', name: 'HR and Payroll System', icon: TeamOutlined, color: 'text-orange-500', description: 'A comprehensive human resources and payroll management system that handles employee lifecycle, salary processing, tax compliance, benefits administration, and workforce analytics—all in one integrated platform.' },
    { key: 'docs', name: 'Inventory System', icon: InboxOutlined, color: 'text-blue-500', description: 'End-to-end inventory management with real-time stock tracking, automated reorder points, multi-warehouse support, batch and serial number tracking, and demand forecasting to optimize your supply chain.' },
    { key: 'brain', name: 'Purchasing System', icon: ShoppingCartOutlined, color: 'text-pink-500', description: 'Streamline your entire procurement process from requisition to payment with vendor management, purchase order automation, approval workflows, and spend analytics for smarter purchasing decisions.' },
    { key: 'chat', name: 'Sales System', icon: LineChartOutlined, color: 'text-purple-600', description: 'Drive revenue growth with a powerful sales management system featuring lead tracking, pipeline management, quotation builder, sales forecasting, and performance dashboards for your entire sales team.' },
];

interface SelectedFeature {
    name: string;
    icon: React.ElementType;
    description: string;
    color?: string;
}

export default function FeaturesGrid() {
    const [selectedFeature, setSelectedFeature] = useState<SelectedFeature | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    const closeDialog = useCallback(() => {
        setIsVisible(false);
        setTimeout(() => setSelectedFeature(null), 300);
    }, []);

    // Close on scroll
    useEffect(() => {
        if (!selectedFeature) return;

        const handleScroll = () => {
            closeDialog();
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [selectedFeature, closeDialog]);

    const handleFeatureClick = (feature: SelectedFeature) => {
        if (selectedFeature?.name === feature.name && isVisible) {
            closeDialog();
            return;
        }
        setSelectedFeature(feature);
        // Small delay to trigger animation
        requestAnimationFrame(() => {
            setIsVisible(true);
        });
    };

    const handleCoreClick = (coreType: string) => {
        const core = coreFeatures.find(c => c.key === coreType);
        if (core) {
            handleFeatureClick({
                name: core.name,
                icon: core.icon,
                description: core.description,
                color: core.color,
            });
        }
    };

    // We construct a flat array of 36 items for our 8-col grid CSS mapping:
    // This allows exact placement in the DOM.
    const gridItems = [];
    let smallIndex = 0;
    for (let i = 0; i < 36; i++) {
        if (i === 10) gridItems.push({ type: 'core', coreType: 'projects' });
        else if (i === 11) gridItems.push({ type: 'core', coreType: 'docs' });
        else if (i === 20) gridItems.push({ type: 'core', coreType: 'brain' });
        else if (i === 21) gridItems.push({ type: 'core', coreType: 'chat' });
        else gridItems.push({ type: 'small', feature: smallFeatures[smallIndex++] });
    }

    return (
        <section ref={sectionRef} className="w-full py-24 bg-white overflow-hidden relative">
            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                        Built to Support Every Stage of Your Business
                    </h2>
                    <p className="text-[#6b7f9e] text-lg leading-relaxed">
                        From startup to expansion, our complete suite of ready-to-use apps keeps your operations running smoothly—covering HR, finance, payroll, inventory, and more. Designed to grow with you, without the need for costly customization.
                    </p>
                </div>

                {/* Grid Wrapper with blured edges (mask-image fade out left and right) */}
                <div className="relative w-full mx-auto pb-10">

                    {/* Left Blur Overlay */}
                    <div className="absolute inset-y-0 left-0 w-24 md:w-32 bg-white/20 backdrop-blur-[1px] z-20 pointer-events-none" style={{ WebkitMaskImage: 'linear-gradient(to right, black 20%, transparent)', maskImage: 'linear-gradient(to right, black 20%, transparent)' }} />

                    {/* Right Blur Overlay */}
                    <div className="absolute inset-y-0 right-0 w-24 md:w-32 bg-white/20 backdrop-blur-[1px] z-20 pointer-events-none" style={{ WebkitMaskImage: 'linear-gradient(to left, black 20%, transparent)', maskImage: 'linear-gradient(to left, black 20%, transparent)' }} />

                    <div
                        className="relative bg-[#f5f7fa] grid grid-cols-4 md:grid-cols-8 gap-[1px] shadow-sm overflow-hidden border border-[#f5f7fa]"
                        style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
                    >
                        {gridItems.map((item, index) => {
                            if (item.type === 'core') {
                                const isProjects = item.coreType === 'projects';
                                const isDocs = item.coreType === 'docs';
                                const isBrain = item.coreType === 'brain';
                                const isChat = item.coreType === 'chat';

                                let wrapperClass = "col-span-2 row-span-2 hidden md:flex flex-col relative overflow-hidden bg-white hover:shadow-lg transition-all duration-300 cursor-pointer";

                                return (
                                    <div key={index} className={wrapperClass} onClick={() => handleCoreClick(item.coreType!)}>

                                        {isProjects && (
                                            <>
                                                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-white to-white pointer-events-none" />
                                                {/* UI Mockup for HR & Payroll */}
                                                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-48 space-y-3 opacity-90 transition-transform duration-500 hover:-translate-y-2">
                                                    <div className="w-full bg-white rounded-lg shadow-sm border border-orange-100 p-3 flex justify-between items-center">
                                                        <div className="flex flex-col gap-1.5">
                                                            <div className="w-16 h-2 bg-gray-200 rounded"></div>
                                                            <div className="w-24 h-4 bg-orange-200 rounded"></div>
                                                        </div>
                                                        <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center">
                                                            <div className="w-4 h-4 rounded-full bg-orange-200"></div>
                                                        </div>
                                                    </div>
                                                    <div className="w-full bg-white rounded-lg shadow-sm border border-gray-100 p-2 space-y-2">
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-5 h-5 rounded-full bg-gray-200"></div>
                                                            <div className="w-20 h-1.5 bg-gray-200 rounded"></div>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-5 h-5 rounded-full bg-gray-200"></div>
                                                            <div className="w-16 h-1.5 bg-gray-200 rounded"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-center gap-2 mt-auto pb-10 relative z-10 px-4">
                                                    <TeamOutlined className="text-2xl text-orange-500 shrink-0" />
                                                    <span className="text-lg font-bold text-[#19253b] leading-tight">HR and Payroll System</span>
                                                </div>
                                            </>
                                        )}

                                        {isDocs && (
                                            <>
                                                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-white pointer-events-none" />
                                                {/* UI Mockup for Inventory */}
                                                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-48 grid grid-cols-2 gap-2 opacity-95 transition-transform duration-500 hover:-translate-y-2">
                                                    {[1, 2, 3, 4].map(i => (
                                                        <div key={i} className="bg-white rounded-lg shadow-sm border border-blue-50 p-2 flex flex-col items-center gap-2">
                                                            <div className="w-8 h-8 rounded bg-blue-100/50"></div>
                                                            <div className="w-full h-1.5 bg-gray-200 rounded"></div>
                                                            <div className="w-1/2 h-1.5 bg-blue-200 rounded"></div>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="flex items-center justify-center gap-2 mt-auto pb-10 relative z-10 px-4">
                                                    <InboxOutlined className="text-2xl text-blue-500 shrink-0" />
                                                    <span className="text-lg font-bold text-[#19253b] leading-tight">Inventory System</span>
                                                </div>
                                            </>
                                        )}

                                        {isBrain && (
                                            <>
                                                <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 via-white to-white pointer-events-none" />
                                                {/* UI Mockup for Purchasing */}
                                                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-48 space-y-3 opacity-90 transition-transform duration-500 hover:-translate-y-2">
                                                    <div className="w-full bg-white rounded-lg shadow-sm border border-pink-100 p-3">
                                                        <div className="flex justify-between items-center mb-2">
                                                            <div className="w-16 h-2 bg-pink-200 rounded"></div>
                                                            <div className="w-8 h-3 bg-green-100 rounded-full"></div>
                                                        </div>
                                                        <div className="space-y-1.5">
                                                            <div className="w-full h-1.5 bg-gray-100 rounded"></div>
                                                            <div className="w-3/4 h-1.5 bg-gray-100 rounded"></div>
                                                        </div>
                                                    </div>
                                                    <div className="w-full bg-white rounded-lg shadow-sm border border-gray-100 p-2 flex justify-between items-center">
                                                        <div className="w-20 h-1.5 bg-gray-200 rounded"></div>
                                                        <div className="w-5 h-5 bg-pink-50 rounded flex items-center justify-center">
                                                            <div className="w-2 h-2 rounded-full bg-pink-300"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-center gap-2 mt-auto pb-10 relative z-10 px-4">
                                                    <ShoppingCartOutlined className="text-2xl text-pink-500 shrink-0" />
                                                    <span className="text-lg font-bold text-[#19253b] leading-tight">Purchasing System</span>
                                                </div>
                                            </>
                                        )}

                                        {isChat && (
                                            <>
                                                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-white to-white pointer-events-none" />
                                                {/* UI Mockup for Sales */}
                                                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-48 bg-white rounded-lg shadow-sm border border-purple-100 p-3 opacity-90 transition-transform duration-500 hover:-translate-y-2">
                                                    <div className="flex justify-between items-end mb-4 h-16 gap-1">
                                                        <div className="w-full bg-purple-100 rounded-t h-[40%]"></div>
                                                        <div className="w-full bg-purple-200 rounded-t h-[70%]"></div>
                                                        <div className="w-full bg-purple-300 rounded-t h-[50%]"></div>
                                                        <div className="w-full bg-purple-400 rounded-t h-[90%]"></div>
                                                        <div className="w-full bg-purple-500 rounded-t h-[100%]"></div>
                                                    </div>
                                                    <div className="w-24 h-2 bg-gray-200 rounded mb-2"></div>
                                                    <div className="w-16 h-3 bg-purple-600 rounded"></div>
                                                </div>
                                                <div className="flex items-center justify-center gap-2 mt-auto pb-10 relative z-10 px-4">
                                                    <LineChartOutlined className="text-2xl text-purple-600 shrink-0" />
                                                    <span className="text-lg font-bold text-[#19253b] leading-tight">Sales System</span>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                );
                            }

                            // Render small feature items
                            const feature = item.feature!;
                            const Icon = feature.icon as React.ElementType;
                            return (
                                <div
                                    key={index}
                                    className="bg-white p-6 md:p-8 flex flex-col items-center justify-center gap-3 hover:bg-gray-50 transition-colors cursor-pointer group aspect-[1/1]"
                                    onClick={() => handleFeatureClick({
                                        name: feature.name,
                                        icon: feature.icon,
                                        description: feature.description,
                                        color: 'text-primary',
                                    })}
                                >
                                    <Icon className="text-2xl text-gray-400 group-hover:text-primary transition-colors duration-300" />
                                    <span className="text-xs font-semibold text-gray-400 group-hover:text-primary transition-colors duration-300 text-center">
                                        {feature.name}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Bottom Dialog / Sheet */}
            {selectedFeature && (() => {
                const DialogIcon = selectedFeature.icon;
                return (
                    <div
                        className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pointer-events-none"
                        style={{ perspective: '800px' }}
                    >
                        <div
                            className="pointer-events-auto w-full max-w-2xl mx-4 mb-6 rounded-2xl bg-white border border-gray-200 shadow-[0_-8px_40px_rgba(0,0,0,0.12)] overflow-hidden"
                            style={{
                                transform: isVisible
                                    ? 'translateY(0) scale(1)'
                                    : 'translateY(100%) scale(0.95)',
                                opacity: isVisible ? 1 : 0,
                                transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease',
                            }}
                        >
                            {/* Accent bar */}
                            <div className="h-1 w-full bg-gradient-to-r from-primary via-blue-400 to-primary" />

                            <div className="p-5 md:p-6">
                                <div className="flex items-start gap-4">
                                    {/* Icon */}
                                    <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center">
                                        <DialogIcon className={`text-2xl ${selectedFeature.color || 'text-primary'}`} />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-lg font-bold text-[#19253b] mb-1.5 leading-tight">
                                            {selectedFeature.name}
                                        </h3>
                                        <p className="text-sm text-[#6b7f9e] leading-relaxed">
                                            {selectedFeature.description}
                                        </p>
                                    </div>

                                    {/* Close button */}
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            closeDialog();
                                        }}
                                        className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all duration-200"
                                        aria-label="Close"
                                    >
                                        <CloseOutlined className="text-sm" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })()}
        </section>
    );
}
