'use client';

import React from 'react';
import {
    BankOutlined, AccountBookOutlined, MoneyCollectOutlined, FileDoneOutlined, CreditCardOutlined, PieChartOutlined,
    TeamOutlined, UserAddOutlined, RiseOutlined, ClockCircleOutlined, CalendarOutlined, ReadOutlined,
    InboxOutlined, AppstoreOutlined, NodeIndexOutlined, ShoppingCartOutlined, ShopOutlined, CarOutlined,
    ContactsOutlined, LineChartOutlined, NotificationOutlined, CustomerServiceOutlined, ToolOutlined, TagOutlined,
    CheckSquareOutlined, FieldTimeOutlined, FlagOutlined, BarChartOutlined, FundProjectionScreenOutlined,
    DashboardOutlined, ExportOutlined, LockOutlined, FileTextFilled, RobotFilled, MessageFilled
} from '@ant-design/icons';

const smallFeatures = [
    { name: 'Finance', icon: BankOutlined },
    { name: 'Accounting', icon: AccountBookOutlined },
    { name: 'Payroll', icon: MoneyCollectOutlined },
    { name: 'Invoicing', icon: FileDoneOutlined },
    { name: 'Expenses', icon: CreditCardOutlined },
    { name: 'Budgeting', icon: PieChartOutlined },
    { name: 'HR', icon: TeamOutlined },
    { name: 'Recruitment', icon: UserAddOutlined },
    { name: 'Performance', icon: RiseOutlined },
    { name: 'Attendance', icon: ClockCircleOutlined },
    { name: 'Leave Mgmt', icon: CalendarOutlined },
    { name: 'Training', icon: ReadOutlined },
    { name: 'Inventory', icon: InboxOutlined },
    { name: 'Warehousing', icon: AppstoreOutlined },
    { name: 'Supply Chain', icon: NodeIndexOutlined },
    { name: 'Purchasing', icon: ShoppingCartOutlined },
    { name: 'Vendors', icon: ShopOutlined },
    { name: 'Logistics', icon: CarOutlined },
    { name: 'CRM', icon: ContactsOutlined },
    { name: 'Sales', icon: LineChartOutlined },
    { name: 'Marketing', icon: NotificationOutlined },
    { name: 'Support', icon: CustomerServiceOutlined },
    { name: 'Helpdesk', icon: ToolOutlined },
    { name: 'Ticketing', icon: TagOutlined },
    { name: 'Security', icon: LockOutlined }, // Replaced Projects to avoid duplication
    { name: 'Tasks', icon: CheckSquareOutlined },
    { name: 'Timesheets', icon: FieldTimeOutlined },
    { name: 'Milestones', icon: FlagOutlined },
    { name: 'Reporting', icon: BarChartOutlined },
    { name: 'Analytics', icon: FundProjectionScreenOutlined },
    { name: 'Dashboards', icon: DashboardOutlined },
    { name: 'Export', icon: ExportOutlined },
];

export default function FeaturesGrid() {
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
        <section className="w-full py-24 bg-white overflow-hidden relative">
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

                                let wrapperClass = "col-span-2 row-span-2 hidden md:flex flex-col relative overflow-hidden bg-white hover:shadow-lg transition-all duration-300";

                                return (
                                    <div key={index} className={wrapperClass}>

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
                            const Icon = item.feature?.icon as React.ElementType;
                            return (
                                <div
                                    key={index}
                                    className="bg-white p-6 md:p-8 flex flex-col items-center justify-center gap-3 hover:bg-gray-50 transition-colors cursor-pointer group aspect-[1/1]"
                                >
                                    <Icon className="text-2xl text-gray-400 group-hover:text-primary transition-colors duration-300" />
                                    <span className="text-xs font-semibold text-gray-400 group-hover:text-primary transition-colors duration-300 text-center">
                                        {item.feature?.name}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
